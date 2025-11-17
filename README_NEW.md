<div align="center">

<img src="assets/favicon.svg" alt="Aether Labs" width="48" />

# Aether Labs Construction

A modern, animated "coming soon" landing page for Aether Labs, featuring an intelligent automation platform preview with countdown timer, theme switching, and smooth animations.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

## ✨ Features

- 🎨 **Dark/Light Theme Toggle** – Persistent theme switching with localStorage, respects system preferences
- ⏱️ **Smart Countdown Timer** – Dynamically targets 6 months from first visit with localStorage persistence
- 🎬 **Smooth Animations** – GSAP-powered transitions with ScrollTrigger integration
- 🚀 **Lottie Animations** – Animated rocket graphic from Lottie Files
- 🎯 **Fully Responsive** – Mobile-first design with fluid typography and adaptive layouts
- ♿ **Accessible** – Shoelace web components, semantic HTML, and reduced motion support
- 🌐 **Zero Build Required** – All dependencies loaded via CDN, just open and run

## 🛠️ Tech Stack

- **UI Framework**: [Shoelace 2.18](https://shoelace.style/) – Web components for buttons, icons, and badges
- **Animation**: [GSAP 3.12.5](https://greensock.com/gsap/) with ScrollTrigger plugin
- **Lottie**: [Bodymovin 5.12.2](https://airbnb.io/lottie/) for JSON-based animations
- **Fonts**: [Google Fonts](https://fonts.google.com/) – Inter & Space Grotesk
- **Styling**: Custom CSS with CSS variables for theming
- **JavaScript**: Vanilla ES6+ (no framework required)

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

### Theme Colors

Edit CSS custom properties in the `<style>` block of `index.html`:

```css
:root {
    --accent-primary: #ff7a3d;     /* Primary orange */
    --accent-hover: #ff8f56;       /* Hover state */
    --text-primary: #1a1328;       /* Main text */
    /* ... more variables */
}
```

### Countdown Target Date

The countdown automatically calculates 6 months from the first visit and persists in localStorage. To set a fixed launch date:

```javascript
// Replace the launchTimestamp calculation in index.html
const launchTimestamp = new Date('2025-06-01T00:00:00Z').getTime();
```

### Hero Image

Replace `assets/preview.webp` with your own image (recommended: 1920x1080px, WebP format for best performance).

```html
<!-- Update the src in index.html -->
<img src="assets/preview.webp" alt="Your custom description">
```

### Branding

- **Logo/Favicon**: Replace `assets/favicon.svg`
- **Brand Name**: Update the `<h1 class="brand-name">` text
- **Tagline**: Modify the `<p class="brand-tagline">` content
- **Email**: Change the `mailto:` link in the contact button

### Social Links

Add or modify social links in the footer section:

```html
<div class="social-links">
    <a href="https://github.com/wari-sul" class="social-btn">
        <sl-icon name="github"></sl-icon>
    </a>
    <!-- Add more social links -->
</div>
```

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
