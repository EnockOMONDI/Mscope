from django.db import models


class ServicePage(models.Model):
    title = models.CharField(max_length=180)
    slug = models.SlugField(max_length=220, unique=True)
    category = models.CharField(max_length=120, blank=True)
    summary = models.TextField(blank=True)
    is_published = models.BooleanField(default=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "title"]

    def __str__(self):
        return self.title

# Create your models here.
