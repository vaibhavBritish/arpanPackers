# Chennai Movers Website PRD

## Original Problem Statement
Build a responsive Chennai Movers packers and movers website based on Figma designs with MongoDB storage for form submissions and interactive map.

## What's Been Implemented (Jan 2026)
- Top bar with phone/email
- Header with navigation and Get Quote CTA
- Hero section with CTAs, feature icons, and "15+ Years" badge
- Services section (6 services: Home/Office Relocation, Packing, Vehicle Transport, Storage, Insurance)
- Why Choose Us stats section (15+ Years, 10,000+ Moves, 24/7 Support, Best Rates)
- Trust section with checklist
- Service Areas grid (30 Chennai localities)
- Testimonials section
- Quote request form (stored in MongoDB)
- Contact section with 4 info cards
- Interactive Leaflet map with Chennai marker
- Footer with "Let's Move" banner

## Tech Stack
- Frontend: React, Tailwind CSS, shadcn/UI, Phosphor Icons, Leaflet
- Backend: FastAPI, MongoDB
- Fonts: Clash Display, IBM Plex Sans

## API Endpoints
- POST /api/quotes - Submit quote request
- GET /api/quotes - Retrieve all quotes
- POST /api/contact - Submit contact message

## User Personas
- Homeowners relocating within Chennai/Tamil Nadu
- Businesses needing office relocation
- Individuals needing vehicle transportation or storage

## Prioritized Backlog
### P0 (Done)
- All website sections implemented
- Quote form with MongoDB storage
- Interactive map

### P1 (Next)
- Email notifications for new quotes
- Admin dashboard for viewing submissions

### P2 (Future)
- WhatsApp integration
- Live chat support
- Customer portal for tracking moves
