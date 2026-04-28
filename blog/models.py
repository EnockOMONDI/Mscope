from django.db import models


class BlogPost(models.Model):
    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    excerpt = models.TextField(blank=True)
    published_at = models.DateField(null=True, blank=True)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ["-published_at", "title"]

    def __str__(self):
        return self.title

# Create your models here.
