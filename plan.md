# Implementation Plan - EDVAN AGENCY Website

Create a professional, modern website for EDVAN AGENCY, specializing in car, medical, and life insurance. The site will feature an interactive home page, service overviews, and a functional quote request system.

## Scope Summary
- **Brand Identity:** EDVAN AGENCY (Professional, Trustworthy, Modern)
- **Pages:** Home, Services (Car, Medical, Life), About, Contact, Quote Request
- **Features:** 
    - Hero section with clear CTA
    - Interactive service cards
    - Multi-step or categorized Quote Request form
    - Mobile-responsive navigation
- **Tech Stack:** React, Tailwind CSS (v4), Lucide Icons, UI components (Radix/Shadcn)

## Non-Goals
- Real-time insurance backend integration (will simulate quote generation or send to email/localStorage)
- User accounts/Login
- Payment processing

## Assumptions & Open Questions
- **Assumption:** Client-side form handling is sufficient for the quote request (e.g., using `sonner` for success notifications).
- **Question:** Are there specific color schemes preferred? (Defaulting to professional Blues/Teals/Grays common in insurance).

## Affected Areas
- `src/App.tsx`: Main routing and layout structure
- `src/components/`: Header, Footer, Hero, ServiceCards, QuoteForm
- `src/pages/`: Home, Services, QuotePage
- `src/index.css`: Theme configuration and base styles

## Ordered Phases

### Phase 1: Foundation & Navigation
- Set up site-wide layout (Navbar, Footer).
- Implement routing for Home, Services, and Quote pages.
- Deliverables: Functional shell with working links.
- **Owner:** `frontend_engineer`

### Phase 2: Interactive Home Page
- Build Hero section with "Get a Quote" primary CTA.
- Create "Why Choose Us" and "Service Highlights" sections.
- Add Lucide icons for Car, Medical, and Life insurance categories.
- **Owner:** `frontend_engineer`

### Phase 3: Service Detail Pages
- Create detailed content for Car, Medical, and Life insurance sections.
- Use consistent card or list layouts to describe coverage options.
- **Owner:** `frontend_engineer`

### Phase 4: Quote Request System
- Build an interactive form where users can select their insurance type and provide details.
- Add form validation and success feedback using `sonner`.
- Log form data to console or localStorage for demonstration.
- **Owner:** `frontend_engineer`

### Phase 5: Polishing & Responsive Audit
- Refine animations (hover states, transitions).
- Ensure mobile navigation is seamless.
- Accessibility check (alt text, contrast).
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build core layout, navigation, and page content (Phases 1-4)
2. quick_fix_engineer — Final styling tweaks and responsive verification (Phase 5)

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** 
    - Setup React Router for navigation.
    - Create `Navbar` and `Footer` in `src/components/`.
    - Build `Home.tsx` with Hero, Service categories, and Testimonials.
    - Build `Services.tsx` or individual service pages.
    - Build `QuoteRequest.tsx` with a clean, validated form.
- **Files:** `src/App.tsx`, `src/components/*`, `src/pages/*`
- **Depends on:** none
- **Acceptance criteria:** All links work; "Get a Quote" leads to a functional form; mobile menu works; design reflects a professional insurance agency.

### 2. quick_fix_engineer
- **Phases:** 5
- **Scope:** 
    - Adjust CSS for perfect spacing/alignment.
    - Ensure logo text "EDVAN AGENCY" is prominent.
    - Fix any small UI bugs found during testing.
- **Files:** `src/index.css`, `src/components/*`
- **Depends on:** frontend_engineer
- **Acceptance criteria:** Site looks polished on mobile and desktop; colors are consistent.
