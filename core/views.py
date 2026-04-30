from pathlib import Path

from django.conf import settings
from django.http import Http404, HttpResponse
from django.middleware.csrf import get_token
from django.shortcuts import render
from bs4 import BeautifulSoup


COMMON_MICE_VENUES = [
    {
        "location": "Coastal Kenya",
        "title": "Beachside Setting",
        "description": "Experience business by the ocean with open horizons and fresh energy.",
        "image": "site_mirror/_next/image/images/venues/beachside-setting.png",
    },
    {
        "location": "Garden Estate",
        "title": "Garden View",
        "description": "Natural lighting, greenery, and calm atmosphere for fresh ideas.",
        "image": "site_mirror/_next/image/images/venues/garden-view.png",
    },
    {
        "location": "Kenya Coast",
        "title": "Luxury Boat",
        "description": "Private coastal sessions with privacy, comfort, and scenic views.",
        "image": "site_mirror/_next/image/images/venues/luxury-boat.png",
    },
    {
        "location": "Nairobi CBD",
        "title": "Rooftop Scenic View",
        "description": "Panoramic city landscapes and modern design.",
        "image": "site_mirror/_next/image/images/venues/rooftop-scenic.png",
    },
    {
        "location": "Wildlife Sanctuary",
        "title": "One with Wildlife",
        "description": "Open-air venue alongside Kenya’s majestic wildlife.",
        "image": "site_mirror/_next/image/images/venues/wildlife.png",
    },
    {
        "location": "Multiple Locations",
        "title": "Office Rentals",
        "description": "Modern, flexible, fully-equipped workspaces.",
        "image": "site_mirror/_next/image/images/venues/office-rentals.png",
    },
]


MICE_DETAIL_PAGES = {
    "meetings": {
        "title": "Corporate Meetings",
        "page_title": "Corporate Meeting Planning Kenya | Professional Meeting Services",
        "meta_description": "Professional corporate meeting planning in Kenya with venue sourcing, AV setup, catering, and on-site coordination.",
        "canonical": "/services/mice/meetings",
        "eyebrow": "Professional meeting planning",
        "description": "Expertly managed corporate meetings with complete logistical support across Kenya.",
        "image": "site_mirror/images/meetings-hero.png",
        "learn_title": "Learn More About Corporate Meetings",
        "learn_intro": "We handle every detail of your corporate meetings — from venue selection to technical support. Your team focuses on productive discussions while we manage logistics, catering, and on-site coordination.",
        "features": [
            {"title": "Venue Selection", "description": "Access to boardrooms, conference facilities, and private meeting spaces aligned to your agenda."},
            {"title": "AV Setup", "description": "Professional screens, sound, hybrid meeting tools, and technical support for smooth sessions."},
            {"title": "Catering Services", "description": "Refreshments, meals, dietary coordination, and timed service that supports the meeting flow."},
            {"title": "On-Site Coordination", "description": "A dedicated coordinator manages suppliers, room setup, guest flow, and real-time changes."},
        ],
        "process_title": "Our Corporate Meetings Process",
        "process_intro": "A clear workflow that keeps your meeting organized from brief to final wrap-up.",
        "process": [
            {"title": "Needs Assessment", "description": "We define objectives, participant count, room needs, and decision-maker expectations."},
            {"title": "Venue Sourcing", "description": "We shortlist practical venues and compare access, capacity, cost, and technical fit."},
            {"title": "Logistics Setup", "description": "We coordinate catering, AV, seating, accommodation support, and supplier timing."},
            {"title": "Meeting Execution", "description": "We manage the day on-site so sessions run on schedule and issues are handled quickly."},
        ],
        "faqs": [
            {"question": "What size meetings can you handle?", "answer": "We support small executive sessions, board meetings, workshops, trainings, and larger multi-day corporate meetings."},
            {"question": "Do you provide same-day meeting services?", "answer": "Subject to availability, we can coordinate urgent meeting logistics once the venue, numbers, and technical needs are clear."},
            {"question": "Can you arrange meetings outside Nairobi?", "answer": "Yes. We coordinate meetings across Kenya with trusted local venue and supplier support."},
            {"question": "Can you support hybrid meetings?", "answer": "Yes. We can coordinate AV partners, streaming support, screens, microphones, and technical backup."},
        ],
        "cta_title": "Ready to Plan Your Corporate Meeting?",
    },
    "incentive_travel": {
        "title": "Incentive Travel",
        "page_title": "Corporate Incentive Travel Kenya | Team Reward Programs",
        "meta_description": "Corporate incentive travel programs in Kenya with wildlife adventures, cultural immersion, luxury stays, and seamless logistics.",
        "canonical": "/services/mice/incentive-travel",
        "eyebrow": "Reward excellence with experiences",
        "description": "Corporate reward programs combining Kenya’s natural beauty with unforgettable experiences.",
        "image": "site_mirror/images/incentives-hero.png",
        "learn_title": "Learn More About Incentive Travel",
        "learn_intro": "Transform top performance into unforgettable experiences. We design incentive programs blending wildlife adventures, cultural immersion, and luxury retreats to motivate and inspire your team.",
        "features": [
            {"title": "Custom Itineraries", "description": "Tailored experiences that match your company culture, budget, timeline, and reward objectives."},
            {"title": "Luxury Accommodations", "description": "Premium lodges, resorts, boutique hotels, and distinctive stays selected for comfort and impact."},
            {"title": "Unique Activities", "description": "Safari adventures, cultural encounters, coastal escapes, and team challenges that feel earned."},
            {"title": "Seamless Logistics", "description": "Complete coordination from arrivals to departures, including transport, hosting, and supplier control."},
        ],
        "process_title": "Our Incentive Travel Process",
        "process_intro": "A structured approach for building reward trips that feel inspiring and stay operationally controlled.",
        "process": [
            {"title": "Program Design", "description": "We define the reward goal, audience profile, travel style, and ideal destination mix."},
            {"title": "Experience Curation", "description": "We build the accommodation, activities, dining, safari, and cultural experience plan."},
            {"title": "Logistics Coordination", "description": "We align suppliers, transport, rooming lists, special requests, and contingency planning."},
            {"title": "Hosted Delivery", "description": "We manage the trip on the ground so delegates feel supported from start to finish."},
        ],
        "faqs": [
            {"question": "What group sizes can you support?", "answer": "We can support intimate executive reward groups through larger corporate incentive movements depending on destination and accommodation availability."},
            {"question": "Can incentive trips include safari?", "answer": "Yes. Safari, coast, city, culture, conservation, and wellness experiences can be combined into one program."},
            {"question": "Do you handle international arrivals?", "answer": "Yes. We can coordinate airport arrivals, domestic flights, transfers, accommodation, and hosted experiences."},
            {"question": "Can you work with our internal rewards team?", "answer": "Yes. We can support HR, sales leadership, procurement, or global travel teams with proposals and execution."},
        ],
        "cta_title": "Ready to Reward Your Top Performers?",
    },
    "conferences": {
        "title": "Conference with a Difference",
        "page_title": "Conference Venues Kenya | Unique Conference Experiences",
        "meta_description": "Unique conference experiences in Kenya with beachside, rooftop, wildlife, forest, and destination venues plus full logistics support.",
        "canonical": "/services/mice/conferences",
        "eyebrow": "Unique venues across Kenya",
        "description": "Transform conferences with unforgettable experiences in spectacular locations.",
        "image": "site_mirror/images/conferences-hero.png",
        "learn_title": "Learn More About Conference with a Difference",
        "learn_intro": "Move beyond standard boardrooms. We design conferences around memorable Kenyan venues, strong technical planning, delegate comfort, and destination experiences that keep people engaged.",
        "features": [
            {"title": "Destination Venues", "description": "Beachside, rooftop, wildlife, garden, lake, forest, and private spaces selected for impact."},
            {"title": "Technical Readiness", "description": "AV, power, connectivity, seating, staging, and contingency needs mapped before event day."},
            {"title": "Delegate Experience", "description": "Transport, accommodation, meals, registration, and hosted experiences designed around comfort."},
            {"title": "Memorable Add-ons", "description": "Safari, culture, wellness, conservation, and team-building elements that elevate the program."},
        ],
        "process_title": "Our Conference Process",
        "process_intro": "From concept to delivery, we balance creativity with the operational discipline conferences require.",
        "process": [
            {"title": "Vision & Concept", "description": "We define conference goals, delegate profile, theme, budget, and experience priorities."},
            {"title": "Venue Selection", "description": "We compare destination options for capacity, access, atmosphere, technical fit, and cost."},
            {"title": "Technical Planning", "description": "We coordinate AV, room flow, supplier timing, branding, safety, and backup requirements."},
            {"title": "Experience Delivery", "description": "We execute the program with on-ground support, supplier control, and live issue resolution."},
        ],
        "faqs": [
            {"question": "What makes your conference venues different?", "answer": "We use memorable locations beyond conventional conference rooms while still planning for comfort, access, technical needs, and supplier reliability."},
            {"question": "How do you handle technical needs in remote venues?", "answer": "We assess power, AV, connectivity, access, weather risk, and backup support before confirming the venue."},
            {"question": "What safety measures do you provide?", "answer": "Safety planning depends on location and can include security, medical support, transport controls, venue checks, and emergency procedures."},
            {"question": "Can you combine conferences with excursions?", "answer": "Yes. Safari, cultural experiences, coast extensions, wellness, and team programs can be integrated."},
        ],
        "cta_title": "Ready to Design a Conference with a Difference?",
    },
    "events_exhibitions": {
        "title": "Events & Exhibitions",
        "page_title": "Event & Exhibition Management Kenya | Trade Shows & Product Launches",
        "meta_description": "Event and exhibition management in Kenya for product launches, trade shows, brand activations, booths, permits, and production.",
        "canonical": "/services/mice/events-exhibitions",
        "eyebrow": "Bring your brand to life",
        "description": "Creative event production and exhibition management for product launches and trade shows.",
        "image": "site_mirror/images/events-exhibitions-hero.png",
        "learn_title": "Learn More About Events & Exhibitions",
        "learn_intro": "Make a lasting impression with expertly managed events. From product launches and trade shows to brand activations, we handle concept development, booth design, permits, and on-site execution.",
        "features": [
            {"title": "Creative Concepts", "description": "Themes, audience journeys, event formats, and brand moments designed around your campaign."},
            {"title": "Custom Booth Design", "description": "Exhibition stands, staging, displays, furniture, signage, and build coordination."},
            {"title": "Permit Handling", "description": "Supplier documentation, venue requirements, permissions, and operational compliance support."},
            {"title": "Full Production", "description": "Lighting, sound, visuals, staffing, setup, supplier timing, and live-event management."},
        ],
        "process_title": "Our Events & Exhibitions Process",
        "process_intro": "A production-led workflow that keeps creative ambition tied to practical delivery.",
        "process": [
            {"title": "Brief & Concept", "description": "We understand brand objectives, audience, budget, venue needs, and creative direction."},
            {"title": "Design & Planning", "description": "We create the production plan, supplier list, layout, booth/stage concept, and timeline."},
            {"title": "Permits & Setup", "description": "We coordinate approvals, build, rehearsals, supplier arrivals, and technical setup."},
            {"title": "Event Execution", "description": "We manage operations, guest flow, brand delivery, supplier performance, and close-out."},
        ],
        "faqs": [
            {"question": "What types of events do you manage?", "answer": "We manage launches, exhibitions, activations, trade shows, corporate events, roadshows, and special projects."},
            {"question": "Can you design custom exhibition booths?", "answer": "Yes. We coordinate booth concept, design, build, installation, branding, and dismantling."},
            {"question": "Do you provide event staff?", "answer": "Yes. Staffing can be included based on scope, including hosts, registration support, brand ambassadors, and coordinators."},
            {"question": "Can you manage outdoor events?", "answer": "Yes. We handle outdoor logistics, permits, safety, weather planning, power, staging, and production requirements."},
        ],
        "cta_title": "Ready to Bring Your Event to Life?",
    },
}


def _mice_detail_context(page_key: str) -> dict:
    return {
        "mice_page": MICE_DETAIL_PAGES[page_key],
        "venues": COMMON_MICE_VENUES,
    }


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


def services_view(request):
    return render(request, "pages/services.html")


def services_mice_view(request):
    return render(request, "pages/services_mice.html")


def services_mice_meetings_view(request):
    return render(request, "pages/services_mice_meetings.html", _mice_detail_context("meetings"))


def services_mice_incentive_travel_view(request):
    return render(
        request,
        "pages/services_mice_incentive_travel.html",
        _mice_detail_context("incentive_travel"),
    )


def services_mice_conferences_view(request):
    return render(request, "pages/services_mice_conferences.html", _mice_detail_context("conferences"))


def services_mice_events_exhibitions_view(request):
    return render(
        request,
        "pages/services_mice_events_exhibitions.html",
        _mice_detail_context("events_exhibitions"),
    )


def services_tours_safaris_view(request):
    return render(request, "pages/services_tours_safaris.html")


def services_support_services_view(request):
    return render(request, "pages/services_support_services.html")

# Create your views here.
