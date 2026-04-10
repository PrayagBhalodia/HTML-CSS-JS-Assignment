# IIT Roorkee Official Website Clone

A static front-end clone of the [Indian Institute of Technology Roorkee](https://www.iitr.ac.in/) homepage, built with plain HTML, CSS, and vanilla JavaScript.

---

## 📁 Project Structure

```
project/
├── index.html          # Main HTML page
├── style.css           # All styles (responsive, theming, layout)
├── Patent_box.js       # Patent carousel logic (Circular Doubly Linked List)
└── images/             # All static assets (icons, photos, grid images, logos)
    ├── IITR Logo.svg
    ├── grid/           # Research section grid images
    └── ...
```

---

## ✨ Features

### General Layout
- **Top Bar** — Quick links (Sharangpur Campus, Noida Campus, Webmail, iConnect, Directory, Contact Us), font-size controls (A−/A/A+), dark/light theme toggle, and Hindi/English language switcher.
- **Header / Intro** — IIT Roorkee logo with institute name in both Hindi and English, hamburger menu for mobile.
- **Navigation Bar** — Links to Institute, Admission, Academics, Department, Research, Campus Life, Careers, Placements, and Resources.
- **Hero Section** — Autoplay muted looping aerial video of the campus with the institute motto (*"RESEARCH · EDUCATE · INNOVATE · TOMORROW"*) and social media icon links.
- **Stats Bar** — At-a-glance statistics: 13,000+ Students, 500+ Faculty, 600+ Staff, 450+ Patents.
- **Recent Research Grid** — Responsive image grid (different layouts for desktop and mobile viewports).
- **Patent Carousel** — Interactive slideshow of featured patents (see below).
- **Milestones Section** — Highlights notable achievements (e.g., Architecture Department ranked #1 in NIRF 2023).
- **Notice Board** — Latest administrative notices with department tags and dates.
- **Upcoming Events** — List of upcoming institute events with date badges.
- **Footer / Info Box** — Contact info, social links, and grouped quick-access links (Explore, Rankings, Quick Access, Quick Links).

---

### 🔁 Patent Carousel (`Patent_box.js`)

The patent section is powered by a **Circular Doubly Linked List** implemented in vanilla JavaScript.

#### Data Structure

```js
class PatentNode {
    constructor(image, title, description)
    // prev → previous patent node
    // next → next patent node
}

class CircularDoublyLinkedList {
    append(image, title, description)  // Add a patent to the list
    goNext()                           // Advance to the next patent
    goPrev()                           // Go back to the previous patent
}
```

- The list is **circular** — navigating past the last patent wraps back to the first, and vice versa.
- `patents.current` always holds the currently displayed patent node.
- Left/right arrow buttons on the page call `goPrev()` / `goNext()` and re-render the display via `renderPatent()`.

#### Adding a New Patent

Open `Patent_box.js` and call `patents.append(...)`:

```js
patents.append(
    "images/your-patent-image.png",
    "YOUR PATENT TITLE",
    "Description of the patent..."
);
```

#### Currently Listed Patents

| # | Title |
|---|-------|
| 1 | Real-Time Fog Removal System and Its Method Thereof |
| 2 | A System and Method to Improve Post LVRT/MVRT Performance of Wind Turbines with Coupling Slippages |
| 3 | A System and Method for Detecting Catalase Negative Lactobacillus Using DNAzyme |

---


## 📱 Responsive Design

The page is fully responsive across the entire spectrum — from a **320px small phone** all the way up to a **~3000px large monitor** — with no horizontal scrolling or broken layouts at any size.

Key responsive behaviours include:

- **Top Bar** — collapses from a full multi-link row on desktop to a minimal single-item view (`TopBarListPhone`) on small screens.
- **Header** — hamburger menu button (`.HamburgerBtn`) replaces the full navigation bar on mobile; the IIT Roorkee logo and institute name scale gracefully at all widths.
- **Navigation Bar** — hidden on small screens and replaced by the hamburger-triggered menu.
- **Hero Section** — the campus video and overlay text reflow and scale to fill the viewport at every breakpoint.
- **Stats Bar** — switches from a single horizontal row on wide screens to a wrapped/stacked layout on smaller devices.
- **Research Grid** — uses two entirely separate markup structures: `computerGrid` (multi-column asymmetric layout for desktop) and `phoneGrid` (single/double column layout for mobile), toggled via CSS.
- **Patent Carousel** — the image, title, and description reflow vertically on narrow screens and expand to a side-by-side layout on wider ones.
- **Notice Board & Events** — stack vertically on mobile and sit side-by-side on larger viewports.
- **Footer / Info Box** — columns collapse into a scrollable stacked layout on small screens and spread across the full width on large monitors.

---
