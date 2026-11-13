# WAMY Center Bangladesh — Modern React Website
### Concept: *"Faith, Humanity & Lasting Impact"*

An institutional, world-class React web application modernizing the official website of **WAMY Center Bangladesh** — an international Islamic charitable, educational, youth-development, and humanitarian institution established in 1981.

---

## 1. Key Highlights & Achievements

* **100% Content Preservation**: Zero loss of original text, historical records, milestones, dates, statistics, photos, or project details.
* **Modern React + Vite Architecture**: Fast HMR development and optimized production bundling with React 18, React Router v6, and Tailwind CSS.
* **Eliminated Legacy Image Stretching**: Replaced CSS transform stretches (`scaleX/scaleY`) with responsive, aspect-ratio-locked containers and smooth crossfade transitions.
* **Full Multi-Page Migration**: Redesigned and migrated all 9 distinct project & contact pages into cohesive, modular React components.
* **Refined Islamic Architectural Design System**: Built with Deep Emerald (`#063F32`), Islamic Green (`#087454`), Antique Gold (`#C5A365`), Warm Ivory (`#FAF8F3`), Soft Sage (`#ECF3ED`), and editorial Playfair Display typography.
* **Interactive Lightbox Galleries**: Dedicated fullscreen image inspection for Master Plan renders, project galleries, and campus activities with keyboard controls (`Esc`, `ArrowLeft`, `ArrowRight`).
* **Backwards-Compatible Routing**: Fully supports both clean URL paths (e.g. `/projects/mosque`) and legacy HTML routes (e.g. `/projects/mosque.html`) to prevent any broken links.

---

## 2. Institutional Color Palette

| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Deep Emerald Green** | `#063F32` | Primary institutional headers, footer, hero, and prominent cards |
| **Islamic Green** | `#087454` | Accent badges, icons, active nav states, and primary actions |
| **Muted Antique Gold** | `#C5A365` | Decorative arches, borders, dividers, milestones, and star highlights |
| **Warm Ivory** | `#FAF8F3` | Primary body background for a calm, editorial feel |
| **Pure White** | `#FFFFFF` | Cards, content blocks, and clean surfaces |
| **Dark Charcoal** | `#1C2926` | High-contrast readable typography |
| **Soft Sage** | `#ECF3ED` | Alternating section backgrounds and spec badge pills |

---

## 3. Project & Page Inventory

| Route | Legacy URL | Page Title | Institutional Focus |
| :--- | :--- | :--- | :--- |
| `/` | `index.html` | **Homepage** | Institutional Hero, Vision & Mission, Milestones Timeline, Master Plan, Projects Gallery, Daily Activities, Contact Preview |
| `/projects/mosque` | `projects/mosque.html` | **Wamy Mosque Complex** | Spiritual & Social Center, 1000+ capacity, Islamic library, sustainable architecture |
| `/projects/madrasa` | `projects/madrasa.html` | **Wamy Model Madrasa** | Integrated moral & general education, Hifz, modern laboratories, 500+ students |
| `/projects/school` | `projects/school.html` | **Wamy Collegiate School** | Contemporary academics, character-building, residential campus, 500+ students |
| `/projects/homes` | `projects/homes.html` | **Wamy Dream Homes** | Safe residential shelter, education, and comprehensive care for 100 orphan children |
| `/projects/it-center` | `projects/it-center.html` | **Wamy IT Center** | Youth technology empowerment, digital marketing, freelancing, and modern computing labs |
| `/projects/library` | `projects/library.html` | **Wamy General Library** | 4,000+ books treasury, daily reading hall, Islamic research & general literature |
| `/projects/construction` | `projects/construction.html` | **Construction & Development** | 10-story hospital building, 10-story school/madrasa building, site infrastructure |
| `/projects/agro` | `projects/agro.html` | **Nadawa Agro Project** | Sustainable agro initiative, organic farming, environmental greenery & food security |
| `/contact` | `projects/contact.html` | **Contact Us** | Interactive message form, office hours, verified location, Google Maps embed |

---

## 4. Project Directory Structure

```text
wamycenter/
├── dist/                          # Production-ready build artifacts
├── public/
│   └── assets/                    # Preserved original images, logos, and favicons
│       ├── f icon/                # Favicon set
│       ├── images/                # Master plan, project galleries, and visit photos
│       └── logo.png               # Official WAMY Center Bangladesh logo
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── HeroSlider.jsx     # Responsive distortion-free image slider
│   │   │   ├── Lightbox.jsx       # Fullscreen accessible image lightbox
│   │   │   ├── ProjectCard.jsx    # Dual-image preview cards for project gallery
│   │   │   ├── ProjectDetailView.jsx # Comprehensive project page layout component
│   │   │   ├── SectionHeading.jsx # Institutional editorial section headings
│   │   │   └── Timeline.jsx       # Historical milestone timeline
│   │   └── layout/
│   │       ├── Footer.jsx         # Deep emerald footer with links & verified contacts
│   │       ├── Header.jsx         # Sticky glassmorphic header with mega-menu
│   │       └── PageLayout.jsx     # Global layout with scroll-to-top handler
│   ├── data/
│   │   └── organizationData.js    # Verified central content store (100% preservation)
│   ├── pages/
│   │   ├── AgroPage.jsx
│   │   ├── ConstructionPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DreamHomesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ITCenterPage.jsx
│   │   ├── LibraryPage.jsx
│   │   ├── MadrasaPage.jsx
│   │   ├── MosquePage.jsx
│   │   └── SchoolPage.jsx
│   ├── styles/
│   │   └── index.css              # Tailwind base + custom architectural patterns
│   ├── App.jsx                    # React Router configuration
│   └── main.jsx                   # Vite entry point
├── index.html                     # Vite HTML entry with Playfair Display & Hind Siliguri fonts
├── index.legacy.html              # Preserved original HTML file backup
├── package.json                   # Project scripts and dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Extended Tailwind tokens & Islamic color system
└── vite.config.js                 # Vite bundler configuration
```

---

## 5. Getting Started

### Prerequisites
* **Node.js** v18.0 or higher (v24 tested)
* **npm** v9.0 or higher (v11 tested)

### Installation
```bash
npm install
```

### Running Locally (Development)
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or the next available port).

### Building for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle in `dist/`.

### Previewing Production Build
```bash
npm run preview
```
Previews the built static site on `http://localhost:4173`.
