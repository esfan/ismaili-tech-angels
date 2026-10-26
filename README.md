# Ismaili Tech Angels — marketing site

A single-page, static marketing site for founders. No build step, no dependencies —
just HTML, CSS, and a small JS file. Content is final and taken from the founder deck.

## Files
- `index.html` — all page content and structure
- `styles.css` — design system (colors, type, layout, motion)
- `main.js` — sticky nav + sparse scroll-reveal animation
- `assets/` — headshots: `kabir-barday.png`, `asif-ramji.png`,
  `alykhan-rehmatullah.jpg`, `esfan-daya.png`, `arman-ramji.jpg` (team),
  and `danish-pradhan.png` (case study)

## Preview locally
```
cd Ismaili-Tech-Angels
python3 -m http.server 8787
```
Then open http://localhost:8787

## Deploy (when you have a domain)
Because it's fully static, you can drop these three files on any static host:
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, or connect a repo
- **GitHub Pages** — push the folder to a repo, enable Pages
- **S3 / any web server** — upload the three files to the web root

Point your domain's DNS at whichever host you choose.

## Design notes
- **One continuous canvas**: the whole page sits on a warm ivory (`--paper`), with only
  subtle tonal steps (`--tint`) between sections — so it reads as a single editorial
  surface rather than a stack of colored slides.
- **Color is contained**: green and red live in panels, cards, type and accents that sit
  *on* the canvas (the green mission card, the red "Our edge" card, Kabir's feature card,
  the green case-study panel, red eyebrows/numbers/rules/CTAs) — not in full-bleed bands.
- **One earned dark moment**: the only full-color section is the green "Send us your pitch
  deck" finale, which flows straight into the footer.
- **Layout**: asymmetric hero with a floating mission card, sticky side-column sections, a
  numbered criteria list, team cards with circular photos (three larger mentors, two
  smaller operators), a photo-led case-study panel, and a connected process timeline.
- **Type**: Fraunces (editorial serif, display) + DM Sans (body), loaded from Google Fonts
- **Motion**: used sparingly — a gentle fade-up on scroll and a solidifying nav;
  fully disabled for visitors with "reduce motion" enabled

## Application form
The "Apply" buttons and footer link all point to the live Tally form:
`https://tally.so/r/XxKYLj`
Search the project for that URL to update it in one place if it ever changes.

## To customize later
- **Colors**: edit the `:root` variables at the top of `styles.css`
  (`--green`, `--red`, `--paper`, etc.)
- **Case study photo**: lives at `assets/danish-pradhan.png`; swap the file (or the
  `src` on `.case__photo`) to change it.
