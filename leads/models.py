from django.db import models


class Inquiry(models.Model):
    INQUIRY_TYPES = [
        ("quote", "Quote request"),
        ("contact", "General contact"),
        ("partner", "Partner inquiry"),
        ("newsletter", "Newsletter signup"),
    ]

    inquiry_type = models.CharField(max_length=32, choices=INQUIRY_TYPES, default="contact")
    name = models.CharField(max_length=160, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=64, blank=True)
    company = models.CharField(max_length=160, blank=True)
    service = models.CharField(max_length=160, blank=True)
    message = models.TextField(blank=True)
    source_path = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        label = self.name or self.email or self.phone or "Inquiry"
        return f"{label} - {self.get_inquiry_type_display()}"

# Create your models here.
