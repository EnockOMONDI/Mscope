from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import parse_qs, unquote, urljoin, urlparse
from xml.etree import ElementTree

import requests
from bs4 import BeautifulSoup


BASE_URL = "https://cometravelkenya.com"
ROOT = Path(__file__).resolve().parent.parent
PAGES_DIR = ROOT / "mirrored_site" / "pages"
ASSETS_DIR = ROOT / "static" / "site_mirror"
SESSION = requests.Session()
SESSION.headers.update(
    {
        "User-Agent": "ComeTravelKenya-Django-Rebuild/1.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    }
)


ASSET_ATTRS = {
    "a": ["href"],
    "link": ["href"],
    "script": ["src"],
    "img": ["src", "srcset"],
    "source": ["src", "srcset"],
    "video": ["src", "poster"],
    "meta": ["content"],
}


def request(url: str) -> requests.Response:
    response = SESSION.get(url, timeout=30)
    response.raise_for_status()
    return response


def public_urls() -> list[str]:
    xml = request(urljoin(BASE_URL, "/sitemap.xml")).text
    root = ElementTree.fromstring(xml)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [node.text.strip() for node in root.findall(".//sm:loc", ns) if node.text]


def page_filename(url: str) -> str:
    path = urlparse(url).path.strip("/")
    return "index.html" if not path else f"{path.replace('/', '__')}.html"


def asset_filename(url: str) -> str:
    parsed = urlparse(url)
    path = parsed.path.lstrip("/")
    if parsed.path == "/_next/image":
        image_url = parse_qs(parsed.query).get("url", ["image"])[0]
        path = f"_next/image/{unquote(image_url).lstrip('/')}"
    if not path or path.endswith("/"):
        path += "index"
    query_suffix = ""
    if parsed.query and parsed.path != "/_next/image":
        query_suffix = "-" + re.sub(r"[^A-Za-z0-9]+", "-", parsed.query).strip("-")
    candidate = Path(path)
    name = candidate.name
    if query_suffix:
        name = f"{candidate.stem}{query_suffix}{candidate.suffix}"
    return str(candidate.with_name(name))


def is_local_asset(url: str) -> bool:
    parsed = urlparse(url)
    if parsed.scheme in {"mailto", "tel", "javascript", "data"}:
        return False
    if parsed.netloc and parsed.netloc != urlparse(BASE_URL).netloc:
        return False
    return bool(parsed.path) and not parsed.path.startswith("/cdn-cgi/")


def local_url(original: str, page_url: str) -> str:
    absolute = urljoin(page_url, original)
    if not is_local_asset(absolute):
        return original
    parsed = urlparse(absolute)
    if parsed.path in {"", "/"} or not Path(parsed.path).suffix and not parsed.path.startswith("/_next/"):
        return parsed.path or "/"
    return f"/static/site_mirror/{asset_filename(absolute)}"


def download_asset(url: str, page_url: str, seen: set[str]) -> None:
    absolute = urljoin(page_url, url)
    if not is_local_asset(absolute):
        return
    parsed = urlparse(absolute)
    if parsed.path in {"", "/"} or not Path(parsed.path).suffix and not parsed.path.startswith("/_next/"):
        return
    if absolute in seen:
        return
    seen.add(absolute)
    target = ASSETS_DIR / asset_filename(absolute)
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists():
        return
    try:
        response = request(absolute)
    except requests.RequestException as exc:
        print(f"asset failed: {absolute} ({exc})")
        return
    target.write_bytes(response.content)
    if "text/css" in response.headers.get("content-type", ""):
        rewrite_css_assets(target, absolute, seen)


def rewrite_css_assets(css_path: Path, css_url: str, seen: set[str]) -> None:
    text = css_path.read_text(errors="ignore")

    def repl(match: re.Match[str]) -> str:
        raw = match.group(1).strip("'\"")
        if raw.startswith(("data:", "http://", "https://")) and urlparse(raw).netloc != urlparse(BASE_URL).netloc:
            return f"url({raw})"
        download_asset(raw, css_url, seen)
        return f"url({local_url(raw, css_url)})"

    css_path.write_text(re.sub(r"url\(([^)]+)\)", repl, text))


def rewrite_srcset(value: str, page_url: str, seen: set[str]) -> str:
    parts = []
    for item in value.split(","):
        bits = item.strip().split()
        if not bits:
            continue
        download_asset(bits[0], page_url, seen)
        bits[0] = local_url(bits[0], page_url)
        parts.append(" ".join(bits))
    return ", ".join(parts)


def mirror_page(url: str, seen_assets: set[str]) -> None:
    html = request(url).text
    soup = BeautifulSoup(html, "html.parser")

    for tag in soup.find_all(True):
        for attr in ASSET_ATTRS.get(tag.name, []):
            value = tag.get(attr)
            if not value:
                continue
            if attr == "srcset":
                tag[attr] = rewrite_srcset(value, url, seen_assets)
            elif attr == "content" and not str(value).startswith((BASE_URL, "/")):
                continue
            else:
                download_asset(value, url, seen_assets)
                tag[attr] = local_url(value, url)

    # Make local navigation stay in the Django mirror.
    for anchor in soup.find_all("a", href=True):
        href = anchor["href"]
        parsed = urlparse(href)
        if parsed.netloc == urlparse(BASE_URL).netloc:
            anchor["href"] = parsed.path or "/"

    target = PAGES_DIR / page_filename(url)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(str(soup), encoding="utf-8")
    print(f"mirrored page: {url}")


def main() -> None:
    PAGES_DIR.mkdir(parents=True, exist_ok=True)
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    seen_assets: set[str] = set()
    urls = public_urls()
    for url in urls:
        try:
            mirror_page(url, seen_assets)
        except requests.RequestException as exc:
            print(f"page failed: {url} ({exc})")
    (ROOT / "mirrored_site" / "urls.txt").write_text("\n".join(urls), encoding="utf-8")
    print(f"done: {len(urls)} urls, {len(seen_assets)} assets")


if __name__ == "__main__":
    main()
