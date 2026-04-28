from django.http import HttpResponseRedirect

from .models import Inquiry


def submit_inquiry(request):
    if request.method == "POST":
        data = request.POST
        Inquiry.objects.create(
            inquiry_type=data.get("inquiry_type") or "contact",
            name=data.get("name") or data.get("fullName") or data.get("full_name") or "",
            email=data.get("email") or "",
            phone=data.get("phone") or data.get("telephone") or "",
            company=data.get("company") or data.get("organization") or "",
            service=data.get("service") or data.get("interest") or "",
            message=data.get("message") or data.get("details") or "",
            source_path=data.get("source_path") or request.META.get("HTTP_REFERER", ""),
        )
    return HttpResponseRedirect(request.META.get("HTTP_REFERER", "/contact"))

# Create your views here.
