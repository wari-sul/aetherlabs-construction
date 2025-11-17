<div align="center">

<img src="assets/favicon.svg" alt="Aether Labs" width="48" />

# Aether Labs Launchpad
An animated "coming soon" surface powered by [Shoelace](https://shoelace.style/) with a server-authoritative countdown system.

</div>

## What’s Inside
- ⚡ Shoelace web components for accessible buttons, badges, and icons via CDN.
- 🌇 Radial orange gradient backdrop with glassmorphism styling and subtle motion.
- ⏱️ **Server-authoritative countdown** to a fixed global target: **February 2, 2026 — 14:30 UTC**
- ✉️ Streamlined contact entry point wired to `contact@aetherlabs.dev`.
- 🖼️ Local launch artwork at `assets/preview.webp` plus the existing Shoelace-friendly favicon.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation & Running

1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`

The server provides:
- Static file serving for the landing page
- `/api/countdown` endpoint returning the global target timestamp and current server time

### How It Works

The countdown system is **server-authoritative**, meaning:
- All users see the **same countdown** to **February 2, 2026 at 14:30 UTC**
- The countdown **does NOT reset** on page refresh
- Users with incorrect system clocks still see the correct time
- Client calculates time offset from server to ensure accuracy

The client:
1. Fetches `/api/countdown` on load
2. Calculates the offset between server and client time
3. Updates the countdown every second using the corrected time
4. Auto-refreshes the server time every 60 seconds for accuracy
5. Displays "Event Started!" when the countdown reaches zero

## Customise It
### Branding
- Update the hero image by replacing `assets/preview.png` with another 350 px (or wider) asset and keep the same filename for instant swaps.
- Adjust the hero copy inside the `<sl-card>` body to reflect your brand voice.
- `assets/favicon.svg` is the current tab icon; swap it with a new SVG if you receive another mark.

### Countdown Target
- The target date is set in `server.js` as `TARGET_TIMESTAMP`
- Current target: **2026-02-02T14:30:00Z** (February 2, 2026 at 2:30 PM UTC)
- To change it, modify the date string in `server.js`:
  ```javascript
  const TARGET_TIMESTAMP = new Date('2026-02-02T14:30:00Z').getTime();
  ```

### Contact Button
- The footer contains a single Shoelace button that opens the default mail client. Change the `href` attribute if you prefer a different address or swap in another CTA.

### Styling
- Global gradients and animations live in the `<style>` block at the top of `index.html`.
- Respect reduced motion users by keeping the `@media (prefers-reduced-motion: reduce)` override when adding new effects.

## Tech Stack
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) for the server
- [countdown.js](http://countdownjs.org/) for countdown calculations
- [Shoelace 2.18 CDN build](https://shoelace.style/) for UI primitives
- [GSAP](https://greensock.com/gsap/) with ScrollTrigger for animations
- [Lottie](https://airbnb.io/lottie/) for animated graphics
- Plain HTML, CSS, and vanilla JavaScript on the frontend

## Assets
- `assets/preview.webp` – local hero image used in the card and Open Graph preview.
- `assets/favicon.svg` – current favicon that remains unchanged from the original template.

## Deployment

For production deployment:
1. Set the `PORT` environment variable if needed (defaults to 3000)
2. Ensure Node.js is installed on your server
3. Run `npm install` to install dependencies
4. Use a process manager like [PM2](https://pm2.keymetrics.io/) for production:
   ```bash
   pm2 start server.js --name aetherlabs-countdown
   ```

## License
MIT — see [LICENSE](LICENSE) for details.
