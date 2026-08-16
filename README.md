# Serenity / Sukoon Spa — Next.js Landing Page V2.1

Arabic RTL premium landing page for a spa / massage & relaxation center.

## Stack

- Next.js 16.3 / App Router
- React 19
- TypeScript
- GSAP + ScrollTrigger + Observer
- Lenis smooth scroll (GSAP ticker integration)
- Font Awesome
- Next/Image
- Unsplash image URLs

## Run

```bash
npm install
npm run dev
```

Open either:

- `http://localhost:3000`
- `http://172.30.128.1:3000` when using the shown local network/WSL address

`next.config.ts` already includes `allowedDevOrigins: ["172.30.128.1"]` so the client chunks and HMR are not blocked when using that development origin.

If Next was already running before changing `next.config.ts`, stop the terminal with `Ctrl + C` and run `npm run dev` again.

## Important edits before launch

Search for and replace:

- `xxxxxxxxxxxxxx`
- `xxxxxxxxxxxxxxxxxxx0`
- `example@gggg`
- `الرياض، المملكة العربية السعودية`
- `سكون SPA`

Review the legal pages and replace the generic booking/payment rules with the spa's actual business rules before publishing or running paid ads.

## Interaction notes

- `#services`, `#experience`, `#faq`, `#contact`, etc. are handled by Lenis with a fixed-header offset.
- Lenis RAF is synchronized with GSAP's ticker.
- ScrollTrigger controls reveals/parallax/header direction behavior.
- GSAP Observer powers swipe/wheel changes in the Experience gallery.
- Hover/focus over Privacy / Cleanliness / Calm / Quick Booking changes the gallery image immediately.

## V2.2 fixes
- Lenis now uses `autoRaf: true` so native page scrolling cannot stall because of GSAP mount timing.
- ScrollTrigger is synchronized through `useLenis`.
- Global GSAP Observer was removed; the experience image Observer now reacts only to horizontal touch/pointer swipes, never mouse-wheel or vertical scrolling.
- Same-page hash links are handled by Lenis anchors with header offset.
- Footer contact layout was rebuilt and phone/email use bidi isolation for correct RTL/LTR rendering.
