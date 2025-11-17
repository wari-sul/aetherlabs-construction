<div align="center">

<img src="assets/favicon.svg" alt="Aether Labs" width="48" />

# Aether Labs Construction

A modern, animated "coming soon" landing page for Aether Labs, featuring an intelligent automation platform preview with countdown timer, theme switching, and smooth animations.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

## What’s Inside
- ⚡ **Shoelace Components** – Accessible web components for buttons, icons, and badges
- 🎨 **Dark/Light Theme Toggle** – Persistent theme switching with localStorage, respects system preferences
- 🎬 **Smooth Animations** – GSAP-powered transitions with ScrollTrigger plugin
- 🚀 **Lottie Animations** – Animated rocket graphic loaded from Lottie Files CDN
- ⏱️ **Smart Countdown Timer** – Dynamically targets 6 months from first visit, persists in localStorage
- 🎯 **Fully Responsive** – Mobile-first design with fluid typography and adaptive layouts
- ♿ **Accessible** – ARIA labels, keyboard navigation, semantic HTML, reduced motion support
- 🌐 **Zero Build Required** – All dependencies loaded via CDN, just open and run

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wari-sul/aetherlabs-construction.git
   cd aetherlabs-construction
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in any modern browser
   open index.html
   # or on Linux
   xdg-open index.html
   # or on Windows
   start index.html
   ```

3. **Optional: Use a local server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   
   # PHP
   php -S localhost:8000
   ```

   Then navigate to `http://localhost:8000`

## 🎨 Customization
### Branding
- Update the hero image by replacing `assets/preview.png` with another 350 px (or wider) asset and keep the same filename for instant swaps.
- Adjust the hero copy inside the `<sl-card>` body to reflect your brand voice.
- `assets/favicon.svg` is the current tab icon; swap it with a new SVG if you receive another mark.

### Countdown Window
- The script computes a target date six months ahead every time the page loads and gracefully rolls to the last day of the month when needed (e.g. 31st → end of next month).
- To pin the countdown to a specific release date, replace the `launchTimestamp` calculation with a static `new Date('YYYY-MM-DDTHH:mm:ssZ')` value.

### Contact Button
- The footer contains a single Shoelace button that opens the default mail client. Change the `href` attribute if you prefer a different address or swap in another CTA.

### Styling
- Global gradients and animations live in the `<style>` block at the top of `index.html`.
- Respect reduced motion users by keeping the `@media (prefers-reduced-motion: reduce)` override when adding new effects.

## 🛠️ Tech Stack

- **UI Framework**: [Shoelace 2.18](https://shoelace.style/) – Web components for buttons, icons, and badges
- **Animation**: [GSAP 3.12.5](https://greensock.com/gsap/) with ScrollTrigger plugin
- **Lottie**: [Bodymovin 5.12.2](https://airbnb.io/lottie/) for JSON-based animations
- **Fonts**: [Google Fonts](https://fonts.google.com/) – Inter & Space Grotesk
- **Styling**: Custom CSS with CSS variables for theming
- **JavaScript**: Vanilla ES6+ (no framework required)

## 📁 Project Structure

```
aetherlabs-construction/
├── index.html           # Main HTML file with embedded CSS and JS
├── assets/
│   ├── favicon.svg      # Site favicon
│   └── preview.webp     # Hero image
├── LICENSE              # MIT License
└── README.md            # This file
```

## 🎯 Key Features Explained

### Theme System

The theme toggle uses `localStorage` to persist user preference across sessions:

- Automatically detects system preference via `prefers-color-scheme`
- Toggles `html.sl-theme-dark` class for Shoelace components
- Updates CSS custom properties for smooth transitions

### Countdown Timer

The countdown implementation:

- Calculates a target date 6 months from first visit
- Handles month overflow (e.g., Jan 31 + 6 months = Jul 31 or last day of July)
- Persists the launch date in `localStorage` for consistency
- Updates every second with real-time values
- Gracefully handles expired countdowns

### Animations

GSAP animations provide:

- **Hero Scale**: Entrance animation on page load
- **Fade Up**: Scroll-triggered CTA section reveal
- **Lottie**: Continuous rocket animation overlay
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## 🔧 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14.1+
- Opera 76+

Requires support for:
- CSS Custom Properties
- ES6+ JavaScript (const, arrow functions, template literals)
- Web Components (Custom Elements v1)

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support via Shoelace components
- Focus-visible styles
- `prefers-reduced-motion` support
- Sufficient color contrast ratios

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2024 Digital Malayali Studio

## 🤝 Contributing

This is a static landing page for Aether Labs. For issues or suggestions, please open an issue in the GitHub repository.

## 📧 Contact

Questions or collaboration ideas? Reach out at [contact@aetherlabs.dev](mailto:contact@aetherlabs.dev)

---

<div align="center">
Made with ❤️ for the Aether Labs platform launch
</div>
