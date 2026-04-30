"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from core.views import (
    about_view,
    home_view,
    mirrored_page,
    services_mice_conferences_view,
    services_mice_events_exhibitions_view,
    services_mice_incentive_travel_view,
    services_mice_meetings_view,
    services_mice_view,
    services_support_services_view,
    services_tours_safaris_view,
    services_view,
)
from leads.views import submit_inquiry

urlpatterns = [
    path('admin/', admin.site.urls),
    path('lead/submit/', submit_inquiry, name='submit_inquiry'),
    path('', home_view, name='home'),
    path('about/', about_view, name='about'),
    path('services/', services_view, name='services'),
    path('services/mice/', services_mice_view, name='services_mice'),
    path('services/mice/meetings/', services_mice_meetings_view, name='services_mice_meetings'),
    path('services/mice/incentive-travel/', services_mice_incentive_travel_view, name='services_mice_incentive_travel'),
    path('services/mice/conferences/', services_mice_conferences_view, name='services_mice_conferences'),
    path('services/mice/events-exhibitions/', services_mice_events_exhibitions_view, name='services_mice_events_exhibitions'),
    path('services/tours-safaris/', services_tours_safaris_view, name='services_tours_safaris'),
    path('services/support-services/', services_support_services_view, name='services_support_services'),
    path('<path:slug>/', mirrored_page, name='mirrored_page'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
