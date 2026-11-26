# DFW Roadside Assistance Startup — AI Build Specification

## 1. Project Overview & Scope

Build a fast, mobile-first web application for a **DFW (Dallas–Fort Worth) roadside assistance startup** using **Next.js**.

### Core Services (Launch Scope — 4 Services Only)
1. **Key Lockouts** — Unlocking vehicles safely when keys are locked inside.
2. **Flat Tires** — Changing a flat tire with the vehicle's spare or roadside tire service.
3. **Dead Battery** — Jump-starting or testing/replacing a dead 12V battery.
4. **Gas Refueling** — Delivering emergency fuel to stranded drivers.

### Service Area
- **Dallas–Fort Worth (DFW) metroplex** (e.g., Dallas, Fort Worth, Arlington, Plano, Irving, Frisco, Garland, Richardson, McKinney, Grand Prairie). Keep coverage clear and honest without overpromising nationwide or heavy-duty towing/winching/mechanical repair unless explicitly added in a future phase.

### Pages (Strict 3-Page Scope)
1. **Home (`/`)**
2. **About Us (`/about`)**
3. **Contact Us (`/contact`)**

> **Scope Guardrail:** Do not add extra top-level pages (such as `/services`, `/pricing`, `/blog`, `/careers`, or `/login`) or extra roadside services beyond the four listed above unless explicitly requested.

---

## 2. Tech Stack & Architecture

- **Framework:** Next.js (App Router recommended; TypeScript preferred)
- **Styling:** Tailwind CSS (or clean CSS modules/tokens) with high-contrast, legible typography and large tap targets for stressed/stranded mobile users
- **Forms & Contact Handling:** Server Actions or Route Handlers (`/api/contact`) with validation, honeypot/anti-spam protection, and clear success/error states
- **SEO & Metadata:** Per-page Next.js `Metadata` exports (title, description, Open Graph) tailored to DFW roadside assistance

---

## 3. Page-by-Page Requirements

### A. Home Page (`/`)
Designed for fast scanning by stranded drivers on mobile and desktop:
- **Hero Section:**
  - Clear value proposition: fast, reliable roadside help across the DFW metroplex.
  - Primary CTA: Call Now (`tel:` link) and/or jump to / open Contact Us (`/contact`) for dispatch/callback.
  - Service area badge/line highlighting DFW coverage.
- **Four Core Services Section:**
  - Dedicated cards/blocks for **Key Lockouts**, **Flat Tires**, **Dead Battery**, and **Gas Refueling**.
  - Each card explains what help is provided and includes a quick action or link to request help.
- **How It Works / What to Expect:**
  - Short, step-by-step reassurance (e.g., 1. Share location & issue, 2. Technician dispatched in DFW, 3. Get back on the road).
- **DFW Coverage Highlight:**
  - Concise summary of DFW cities/corridors served and dispatch/contact availability.
- **Secondary CTA Band:**
  - Direct prompt to contact the team via `/contact` or phone.

### B. About Us Page (`/about`)
Builds trust, local credibility, and clarity on who the startup is:
- **Company Story & Mission:** Why the startup was founded and its focus on fast, transparent, stress-free roadside help in DFW.
- **Focused Launch Approach:** Why starting with **Key Lockouts, Flat Tires, Dead Battery, and Gas Refueling** allows faster response and reliable execution.
- **Local DFW Commitment:** Familiarity with DFW highways, suburbs, and everyday driver needs.
- **Safety & Service Standards:** Clear expectations around driver safety (pulling safely off traffic lanes, hazard lights, verifying vehicle access/ownership on lockouts).
- **CTA to Contact Us:** Link to `/contact` or phone line.

### C. Contact Us Page (`/contact`)
Makes getting help or reaching the team straightforward:
- **Direct Contact Methods:** Clickable phone number (`tel:`), email, and stated service hours/availability in DFW (use clear placeholder values until real business details are supplied).
- **Service / Callback Request Form:**
  - Full Name
  - Phone Number (required for urgent roadside callbacks)
  - Email (optional or required depending on preference)
  - Service Needed (dropdown/selector with exact options: `Key Lockout`, `Flat Tire`, `Dead Battery`, `Gas Refueling`, or `General Inquiry`)
  - Location / City or Nearby Cross-Streets in DFW (e.g., city/ZIP/highway landmark — avoid requiring complex live map SDKs unless requested)
  - Notes / Vehicle Info (make, model, color, situation details)
  - Submit button with loading state, confirmation message, and error fallback.
- **Safety Tip Box:** Brief reminder for stranded drivers to stay in a safe spot away from moving traffic with hazards on while waiting.

---

## 4. Navigation, Header & Footer

- **Header:**
  - Brand name / logo linking to `/`
  - Navigation links strictly to: `Home`, `About Us`, `Contact Us`
  - Prominent `Call Now` / `Get Help` button on mobile and desktop
  - Responsive mobile menu (hamburger/drawer)
- **Footer:**
  - Brand summary + DFW coverage note
  - Links to `Home`, `About Us`, `Contact Us`
  - List of the 4 services (`Key Lockouts`, `Flat Tires`, `Dead Battery`, `Gas Refueling`)
  - Placeholder/configurable phone, email, and copyright notice

---

## 5. Content & Placeholder Conventions

Use clean, obvious placeholders where business-specific details are not yet final, and centralize them in a single config file (e.g., `src/config/site.ts`):
- Company Name (e.g., `DFW QuickAssist Roadside` — easily replaceable)
- Primary Phone Number (`(214) 555-0199` placeholder)
- Support Email (`dispatch@example-dfw-roadside.com` placeholder)
- Operating Hours (e.g., `24/7 Dispatch` or stated launch hours — do not invent guarantees like "15-minute arrival" unless instructed)

---

## 6. Suggested Project Structure (Next.js App Router)

```text
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, Header & Footer
│   ├── page.tsx            # Home page (/)
│   ├── about/
│   │   └── page.tsx        # About Us page (/about)
│   ├── contact/
│   │   └── page.tsx        # Contact Us page (/contact)
│   └── api/
│       └── contact/
│           └── route.ts    # Form validation & submission handler
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCards.tsx
│   └── ContactForm.tsx
├── config/
│   └── site.ts             # Business name, contact placeholders, services, DFW areas
└── styles/
    └── globals.css