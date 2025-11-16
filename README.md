<div align="center">

<img src="assets/favicon.svg" alt="Aether Labs" width="48" />

# Aether Labs Launchpad
An animated "coming soon" surface powered by [Shoelace](https://shoelace.style/) that keeps visitors informed while our platform ships.

</div>

## What’s Inside
- ⚡ Shoelace web components for accessible buttons, badges, and icons via CDN.
- 🌇 Radial orange gradient backdrop with glassmorphism styling and subtle motion.
- ⏱️ Countdown logic that automatically targets six months from the current visit.
- ✉️ Streamlined contact entry point wired to `contact@aetherlabs.dev`.
- 🖼️ Local launch artwork at `assets/preview.png` plus the existing Shoelace-friendly favicon.

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in any modern browser — Shoelace is loaded from CDN, so no build step is required.
3. Tweak the content or styling described below to match your launch messaging.

## Customise It
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

## Tech Stack
- [Shoelace 2.18 CDN build](https://shoelace.style/) for UI primitives.
- Plain HTML, CSS, and vanilla JavaScript — no build tooling required.

## Assets
- `assets/preview.png` – local hero image used in the card and Open Graph preview.
- `assets/favicon.svg` – current favicon that remains unchanged from the original template.

## License
MIT — see [LICENSE](LICENSE) for details.
