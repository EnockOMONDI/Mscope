from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parent.parent
PAGES_DIR = ROOT / "mirrored_site" / "pages"


def image_endpoint_to_static(match: re.Match[str]) -> str:
    raw = match.group(0).replace("&amp;", "&")
    parsed = urlparse(raw)
    query = parse_qs(parsed.query)
    original = query.get("url", [""])[0]
    if not original:
        return match.group(0)
    return f"/static/site_mirror/_next/image/{unquote(original).lstrip('/')}"


def process_page(path: Path) -> None:
    html = path.read_text(encoding="utf-8")
    html = re.sub(r"/_next/image\?url=[^\"'\s,<>]+", image_endpoint_to_static, html)
    soup = BeautifulSoup(html, "html.parser")

    for form in soup.find_all("form"):
        form["method"] = "post"
        form["action"] = "/lead/submit/"
        if not form.find("input", attrs={"name": "source_path"}):
            source = soup.new_tag("input", attrs={"type": "hidden", "name": "source_path", "value": "/" + path.stem.replace("__", "/")})
            form.insert(0, source)
        if not form.find("input", attrs={"name": "inquiry_type"}):
            inquiry_type = "newsletter" if "max-w-md" in form.get("class", []) else "quote"
            hidden = soup.new_tag("input", attrs={"type": "hidden", "name": "inquiry_type", "value": inquiry_type})
            form.insert(0, hidden)

    path.write_text(str(soup), encoding="utf-8")


def main() -> None:
    pages = list(PAGES_DIR.glob("*.html"))
    for page in pages:
        process_page(page)
    print(f"post-processed {len(pages)} pages")


if __name__ == "__main__":
    main()
