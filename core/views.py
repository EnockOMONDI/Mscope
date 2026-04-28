from pathlib import Path

from django.conf import settings
from django.http import Http404, HttpResponse
from django.middleware.csrf import get_token
from django.shortcuts import render
from bs4 import BeautifulSoup


def _page_path(slug: str) -> Path:
    clean_slug = slug.strip("/")
    filename = "index.html" if not clean_slug else f"{clean_slug.replace('/', '__')}.html"
    return settings.BASE_DIR / "mirrored_site" / "pages" / filename


def mirrored_page(request, slug: str = ""):
    page = _page_path(slug)
    if not page.exists():
        raise Http404("Mirrored page not found")
    html = page.read_text(encoding="utf-8")
    if "<form" in html and "csrfmiddlewaretoken" not in html:
        token = get_token(request)
        soup = BeautifulSoup(html, "html.parser")
        for form in soup.find_all("form"):
            csrf_input = soup.new_tag(
                "input",
                attrs={"type": "hidden", "name": "csrfmiddlewaretoken", "value": token},
            )
            form.insert(0, csrf_input)
        html = str(soup)
    return HttpResponse(html, content_type="text/html")


def home_view(request):
    return render(request, "pages/indexmain.html")


def about_view(request):
    return render(request, "pages/about.html")

# Create your views here.
