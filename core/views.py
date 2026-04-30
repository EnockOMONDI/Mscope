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


STATIC_BLOG_POSTS = [
    {
        "category": "MICE",
        "date": "February 22, 2026",
        "read_time": "8 min read",
        "title": "Why MICE Is Kenya’s Strategic Business Travel Advantage",
        "excerpt": "Kenya’s conference infrastructure, destination appeal, and regional access make it a strong base for meetings, incentives, conferences, and exhibitions.",
        "author": "Multiscope Travel Team",
        "image": "site_mirror/itineraries/mice/conference-experience.jpg",
    },
    {
        "category": "Safaris",
        "date": "January 26, 2026",
        "read_time": "6 min read",
        "title": "How to Pair Corporate Travel With Safari Experiences",
        "excerpt": "A practical guide to adding safari, culture, coast, and conservation experiences to business travel programs without compromising logistics.",
        "author": "Travel Design Desk",
        "image": "site_mirror/images/safari-hero.png",
    },
    {
        "category": "Travel Support",
        "date": "November 18, 2025",
        "read_time": "7 min read",
        "title": "Ground Transport Planning for Delegations in Kenya",
        "excerpt": "What corporate buyers should consider when arranging airport transfers, executive cars, group coaches, safari vehicles, and event shuttles.",
        "author": "Operations Team",
        "image": "site_mirror/images/transport-hero.png",
    },
]


STATIC_EXPERIENCES = [
    {
        "title": "Executive Safari & Board Retreat",
        "tagline": "MICE + wilderness",
        "description": "A focused corporate retreat combining productive strategy sessions with guided safari experiences and premium lodge stays.",
        "image": "site_mirror/itineraries/mice/leadership-in-the-wild.png",
    },
    {
        "title": "Kenya Discovery Safari & Beach",
        "tagline": "Safari + coast",
        "description": "A balanced itinerary across wildlife conservancies, cultural encounters, and coastal rest designed for private groups.",
        "image": "site_mirror/itineraries/safaris/kenya-discovery-safari-beach-13-days.png",
    },
    {
        "title": "Tembea Kenya Weekend Escape",
        "tagline": "Local travel",
        "description": "Short, fully managed getaways for residents, expats, and teams seeking accessible Kenya experiences.",
        "image": "site_mirror/itineraries/tours/family-camping-sagana-rapids.png",
    },
]


SERVICE_DETAIL_PAGES = {
    "inbound_safaris": {
        "page_title": "Inbound Safaris Kenya | Multiscope Travel",
        "meta_description": "Inbound Kenya safari planning for international visitors with wildlife circuits, lodges, guides, transfers, and beach extensions.",
        "canonical": "/services/tours-safaris/inbound-safaris",
        "breadcrumb_parent": "Experiential Safaris",
        "breadcrumb_parent_url": "/services/tours-safaris/",
        "title": "Inbound Safaris",
        "eyebrow": "Iconic African wildlife adventures",
        "description": "World-class safari experiences for international visitors, planned end to end across Kenya’s parks, conservancies, and coast.",
        "image": "site_mirror/images/inbound-safari-hero.png",
        "learn_title": "Learn More About Inbound Safaris",
        "learn_intro": "We help international guests experience Kenya with confidence: carefully selected routes, lodges, guides, transfers, park logistics, and optional beach extensions.",
        "features": [
            {"title": "Wildlife Circuits", "description": "Masai Mara, Amboseli, Samburu, Laikipia, Tsavo, Lake Nakuru, and custom safari combinations."},
            {"title": "Lodge Selection", "description": "Comfortable camps, luxury lodges, boutique properties, and family-friendly options."},
            {"title": "Guided Experiences", "description": "Experienced guides and driver-guides who understand wildlife, culture, and guest care."},
            {"title": "Beach Extensions", "description": "Safari-to-coast planning for Diani, Watamu, Malindi, Lamu, and Mombasa."},
        ],
        "process_title": "Our Inbound Safari Process",
        "process": [
            {"title": "Travel Brief", "description": "We define travel dates, budget, group profile, pace, and must-see experiences."},
            {"title": "Route Design", "description": "We build a practical safari circuit with accommodation and transport options."},
            {"title": "Supplier Coordination", "description": "We align lodges, guides, flights, transfers, park fees, and special requests."},
            {"title": "Hosted Delivery", "description": "We monitor the trip locally and support guests through every movement."},
        ],
        "faqs": [
            {"question": "When is best for Kenya safari?", "answer": "Kenya is a year-round safari destination, with peak wildlife seasons depending on parks, migration timing, and travel style."},
            {"question": "Can I combine safari with beach?", "answer": "Yes. Safari and coast combinations are common and can include domestic flights or road transfers."},
            {"question": "Can you support families?", "answer": "Yes. We select family-friendly routes, vehicles, lodges, and activity pacing."},
        ],
        "cta_title": "Ready to Plan Your Kenya Safari?",
        "stats": [("20+", "Safari Destinations"), ("3000+", "Happy Travelers"), ("25+", "Expert Guides")],
    },
    "tembea_kenya": {
        "page_title": "Tembea Kenya Tours | Multiscope Travel",
        "meta_description": "Tembea Kenya tours for residents, expats, and local travelers including coast escapes, Rift Valley trips, hikes, and safari getaways.",
        "canonical": "/services/tours-safaris/tembea-kenya",
        "breadcrumb_parent": "Experiential Safaris",
        "breadcrumb_parent_url": "/services/tours-safaris/",
        "title": "Tembea Kenya Tours",
        "eyebrow": "Coast, highlands, Rift Valley, and safari escapes",
        "description": "Local Kenya trips for residents, expats, teams, and visitors seeking managed weekend escapes, staycations, and short safaris.",
        "image": "site_mirror/images/tembea-kenya-hero.png",
        "learn_title": "Learn More About Tembea Kenya Tours",
        "learn_intro": "Rediscover Kenya through fresh eyes with fully managed transport, accommodation, guides, activities, and destination coordination.",
        "features": [
            {"title": "Curated Itineraries", "description": "Carefully planned routes across the coast, Rift Valley, highlands, parks, and cultural destinations."},
            {"title": "Comfortable Transport", "description": "Modern vehicles and experienced drivers matched to the route and group size."},
            {"title": "Quality Accommodation", "description": "Handpicked hotels, lodges, camps, and resorts based on budget and travel style."},
            {"title": "Local Guides", "description": "Guides and hosts who bring destination stories, culture, and logistics together."},
        ],
        "process_title": "Our Tembea Kenya Process",
        "process": [
            {"title": "Choose Destination", "description": "Select from curated packages or request a custom local escape."},
            {"title": "Pick Your Dates", "description": "Choose dates, group size, accommodation level, and preferred activities."},
            {"title": "Book & Confirm", "description": "We secure suppliers, transport, rooms, and activity slots."},
            {"title": "Experience Kenya", "description": "Travel with local support and a clear plan from start to finish."},
        ],
        "faqs": [
            {"question": "Are Tembea Kenya tours only for Kenyan residents?", "answer": "No. They are ideal for residents, expats, visiting friends and family, and local corporate teams."},
            {"question": "Can I join a group or book privately?", "answer": "Both are possible depending on the destination, dates, and available departures."},
            {"question": "Do you offer corporate packages?", "answer": "Yes. We can design team retreats, reward trips, and short staff getaways."},
        ],
        "cta_title": "Ready to Experience Kenya Locally?",
        "stats": [("40+", "Local Routes"), ("1000+", "Happy Clients"), ("24/7", "Support")],
    },
    "ground_transport": {
        "page_title": "Ground Transport & Logistics Kenya | Multiscope Travel",
        "meta_description": "Professional ground transport and logistics in Kenya for safaris, corporate travel, events, airport transfers, and group movement.",
        "canonical": "/services/support-services/ground-transport-logistics",
        "breadcrumb_parent": "Travel Support",
        "breadcrumb_parent_url": "/services/support-services/",
        "title": "Ground Transport & Logistics",
        "eyebrow": "Reliable ground mobility across Kenya",
        "description": "Professional ground transport for safaris, corporate travel, events, airport transfers, and group travel logistics.",
        "image": "site_mirror/images/transport-hero.png",
        "learn_title": "Learn More About Ground Transport & Logistics",
        "learn_intro": "From Nairobi movements to remote destination access, we coordinate safari vehicles, executive cars, coaches, transfers, and event transport.",
        "features": [
            {"title": "Safari Land Cruisers", "description": "Custom 4x4s for wildlife safaris, conservancies, and rugged field routes."},
            {"title": "Luxury Chauffeur Service", "description": "Premium vehicles for executives, VIPs, hosted buyers, and delegation leaders."},
            {"title": "Group Transport", "description": "Coaches, shuttles, and convoy planning for conferences and group programs."},
            {"title": "Professional Drivers", "description": "Experienced, licensed drivers and driver-guides with local route knowledge."},
        ],
        "process_title": "Our Ground Transport Process",
        "process": [
            {"title": "Assessment", "description": "We confirm group size, route, luggage, timing, destination access, and vehicle needs."},
            {"title": "Fleet Selection", "description": "We match appropriate vehicles and drivers to your movement plan."},
            {"title": "Route Planning", "description": "We optimize timing, pickup points, transfers, and contingency routes."},
            {"title": "Execution", "description": "We manage safe, reliable movement with live operational support."},
        ],
        "faqs": [
            {"question": "Do you provide airport transfers?", "answer": "Yes. Airport transfers can be arranged for individuals, executives, families, and groups."},
            {"question": "Can you handle large conference groups?", "answer": "Yes. We can coordinate shuttles, coaches, VIP cars, and staged movement plans."},
            {"question": "Are drivers licensed?", "answer": "We work with experienced, licensed drivers and driver-guides appropriate for the service."},
        ],
        "cta_title": "Ready to Coordinate Your Ground Transport?",
        "stats": [("50+", "Fleet Options"), ("200+", "Corporate Clients"), ("24/7", "Support")],
    },
    "air_charter": {
        "page_title": "Air Charter & Flight Logistics Kenya | Multiscope Travel",
        "meta_description": "Domestic flight coordination and air charter logistics across Kenya for safaris, executives, groups, and multi-destination programs.",
        "canonical": "/services/support-services/air-charter-flight-logistics",
        "breadcrumb_parent": "Travel Support",
        "breadcrumb_parent_url": "/services/support-services/",
        "title": "Air & Charter Coordination",
        "eyebrow": "Domestic flight and charter support",
        "description": "Flight logistics support for safari circuits, executive movement, remote destinations, and time-sensitive travel programs.",
        "image": "site_mirror/images/charter-flights-hero.jpg",
        "learn_title": "Learn More About Air & Charter Coordination",
        "learn_intro": "We coordinate domestic flight options, charter requests, luggage planning, schedules, transfers, and route sequencing across Kenya.",
        "features": [
            {"title": "Scheduled Flights", "description": "Domestic flight coordination for safari airstrips, coast routes, and business cities."},
            {"title": "Private Charters", "description": "Charter planning for executives, groups, remote projects, and premium safari programs."},
            {"title": "Transfer Alignment", "description": "Ground transfers matched to flight timing, airstrips, hotels, and lodge check-ins."},
            {"title": "Luggage Planning", "description": "Guidance on baggage restrictions, aircraft suitability, and practical route design."},
        ],
        "process_title": "Our Air Logistics Process",
        "process": [
            {"title": "Route Review", "description": "We assess destination, timing, group size, luggage, and access constraints."},
            {"title": "Flight Options", "description": "We compare scheduled and charter options against the program needs."},
            {"title": "Coordination", "description": "We align ground transfers, check-in times, airstrip access, and supplier schedules."},
            {"title": "Travel Support", "description": "We monitor movements and adjust where practical if timing changes."},
        ],
        "faqs": [
            {"question": "What is the difference between scheduled and charter flights?", "answer": "Scheduled flights follow fixed routes and times; charters are private options designed around your itinerary."},
            {"question": "Can you coordinate multi-destination safari circuits?", "answer": "Yes. We can connect safari airstrips, lodges, and ground transfers."},
            {"question": "How far ahead should I book?", "answer": "Earlier is better for availability, especially for peak season, groups, and charter requests."},
        ],
        "cta_title": "Ready to Plan Your Flight Logistics?",
        "stats": [("15+", "Flight Partners"), ("30+", "Airstrips"), ("24/7", "Support")],
    },
    "travel_documents": {
        "page_title": "Travel Documents & Visas Kenya | Multiscope Travel",
        "meta_description": "Kenya travel document support including ETA guidance, visa extension support, permits, insurance coordination, and group applications.",
        "canonical": "/services/support-services/travel-documents-and-visas",
        "breadcrumb_parent": "Travel Support",
        "breadcrumb_parent_url": "/services/support-services/",
        "title": "Travel Documents & Visas",
        "eyebrow": "Entry facilitation and documentation support",
        "description": "Professional assistance with Kenya ETA guidance, visa extensions, permits, travel insurance coordination, and group documentation.",
        "image": "site_mirror/images/immigration-hero.png",
        "learn_title": "Learn More About Travel Documents & Visas",
        "learn_intro": "We help travelers, groups, and corporate teams understand requirements, prepare documents, track timelines, and coordinate entry-related support.",
        "features": [
            {"title": "Kenya eTA Guidance", "description": "Practical support on requirements, timing, and documentation for travel authorization."},
            {"title": "Visa Extensions", "description": "Guidance and coordination support for travelers extending their stay in Kenya."},
            {"title": "Permit Support", "description": "Coordination for work, resident, or special documentation needs through the right channels."},
            {"title": "Group Applications", "description": "Organized checklists and tracking for delegations, groups, and event attendees."},
        ],
        "process_title": "Our Documentation Process",
        "process": [
            {"title": "Requirement Review", "description": "We confirm traveler nationality, itinerary, timelines, and document needs."},
            {"title": "Checklist Prep", "description": "We prepare a practical list of required documents and next steps."},
            {"title": "Application Support", "description": "We coordinate submissions, status tracking, and related travel logistics."},
            {"title": "Travel Ready", "description": "We help align documentation timing with flights, accommodation, and program dates."},
        ],
        "faqs": [
            {"question": "Who needs an eTA for Kenya?", "answer": "Requirements depend on nationality and travel purpose. We help you confirm current practical requirements before travel."},
            {"question": "Can you help with group applications?", "answer": "Yes. We can organize documentation support for groups and delegations."},
            {"question": "Do you provide travel insurance?", "answer": "We can coordinate guidance and options through relevant providers where required."},
        ],
        "cta_title": "Ready to Prepare Your Travel Documents?",
        "stats": [("100+", "Applications Supported"), ("24/7", "Travel Support"), ("1", "Clear Checklist")],
    },
    "immigration": {
        "page_title": "Immigration Services Kenya | Multiscope Travel",
        "meta_description": "Immigration and entry documentation support for Kenya including ETA guidance, visa extensions, permits, and group travel documentation.",
        "canonical": "/services/immigration-services",
        "breadcrumb_parent": "Services",
        "breadcrumb_parent_url": "/services/",
        "title": "Immigration Services",
        "eyebrow": "Documentation support for Kenya travel",
        "description": "Entry facilitation, visa guidance, permits, and travel document coordination for individuals, groups, and corporate teams.",
        "image": "site_mirror/images/visa-extension-hero.png",
        "learn_title": "Learn More About Immigration Services",
        "learn_intro": "We provide practical coordination support for Kenya travel documentation, helping visitors and teams prepare correctly before and during travel.",
        "features": [
            {"title": "ETA Guidance", "description": "Support with understanding Kenya entry authorization requirements and timelines."},
            {"title": "Visa Extension Support", "description": "Guidance for travelers who need to extend their stay in Kenya."},
            {"title": "Permit Coordination", "description": "Practical support for work, resident, and special permit documentation needs."},
            {"title": "Group Tracking", "description": "Centralized documentation tracking for delegations, events, and group travel."},
        ],
        "process_title": "Our Immigration Support Process",
        "process": [
            {"title": "Assess", "description": "We review traveler profiles, purpose of travel, and documentation needs."},
            {"title": "Prepare", "description": "We help organize requirements, forms, and supporting documents."},
            {"title": "Coordinate", "description": "We support submission coordination, tracking, and practical travel alignment."},
            {"title": "Confirm", "description": "We help ensure the travel plan matches documentation timelines."},
        ],
        "faqs": [
            {"question": "Do you replace official immigration authorities?", "answer": "No. We provide coordination and guidance; final decisions remain with the relevant authorities."},
            {"question": "Can you help corporate groups?", "answer": "Yes. We can organize documentation checklists and tracking for groups and delegations."},
            {"question": "Can you assist with extensions?", "answer": "Yes. We can guide travelers through practical extension requirements and timing."},
        ],
        "cta_title": "Ready to Organize Your Travel Documents?",
        "stats": [("100+", "Travelers Supported"), ("24/7", "Guidance"), ("1", "Organized Process")],
    },
}


def _service_detail_context(page_key: str) -> dict:
    return {"service_page": SERVICE_DETAIL_PAGES[page_key]}


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


def contact_view(request):
    return render(request, "pages/contact.html")


def blog_view(request):
    return render(request, "pages/blog.html", {"posts": STATIC_BLOG_POSTS})


def experiences_view(request):
    return render(request, "pages/experiences.html", {"experiences": STATIC_EXPERIENCES})


def travel_agents_view(request):
    return render(request, "pages/travel_agents.html")


def faq_view(request):
    return render(request, "pages/faq.html")


def terms_view(request):
    return render(request, "pages/legal.html", {"legal_page": "terms"})


def privacy_view(request):
    return render(request, "pages/legal.html", {"legal_page": "privacy"})


def unsubscribe_view(request):
    return render(request, "pages/unsubscribe.html")


def services_tours_safaris_inbound_view(request):
    return render(request, "pages/service_detail.html", _service_detail_context("inbound_safaris"))


def services_tours_safaris_tembea_view(request):
    return render(request, "pages/service_detail.html", _service_detail_context("tembea_kenya"))


def services_support_ground_transport_view(request):
    return render(request, "pages/service_detail.html", _service_detail_context("ground_transport"))


def services_support_air_charter_view(request):
    return render(request, "pages/service_detail.html", _service_detail_context("air_charter"))


def services_support_travel_documents_view(request):
    return render(request, "pages/service_detail.html", _service_detail_context("travel_documents"))


def services_immigration_view(request):
    return render(request, "pages/service_detail.html", _service_detail_context("immigration"))
