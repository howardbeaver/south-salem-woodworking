# South Salem Woodworking

A multi-page website for South Salem Woodworking, the home remodeling business of general contractor Jeff Cyrnic. His clients are upscale, so the site should look sophisticated. It's plain HTML, CSS and JavaScript, with no framework, no build step and no npm. It will be hosted on Vercel from a GitHub repo (M9).

This is a fresh project. Don't reuse code, assets or decisions from the user's other projects.

## Names

- Business: **South Salem Woodworking** (one word, "Woodworking").
- Contractor: **Jeff Cyrnic**. The spelling isn't confirmed and may change. To update it, search the project for `Cyrnic`.

## Files

```
index.html      home: header, hero, four category thumbnails, footer
css/style.css   all styles; colour and size tokens on :root
dev-server.py   local server on port 8080 with no-cache (development only)
images/         hero/hero-exterior.jpg (2400x1350)
                <category>/cover.jpg (1200x900) and <singular>-01..09.jpg (1600x1200)
                for kitchens, bathrooms, interiors, exteriors
images/PLACEHOLDERS.md   source of every placeholder photo
README.md       overview, how to run, milestones
```

Planned: `kitchens.html`, `bathrooms.html`, `interiors.html`, `exteriors.html`, `about.html`, `services.html`, `contact.html`, and `js/` when scripts are needed (M4). Each page shares the same header and footer.

`.gitignore` keeps `.DS_Store`, `.claude/` and `__pycache__/` out of git.

## Run locally

```bash
python3 dev-server.py
```

This serves http://localhost:8080.

- **Start the server in a Terminal-panel tab, not with `preview_start`.** macOS privacy blocks the app's preview runner from reading `~/Desktop`. `.claude/launch.json` only attaches the preview to the server already running on port 8080.
- **Editing `index.html` can open a `file://` preview tab.** Use the `localhost:8080` tab instead.

## Decisions

- **Look:** sophisticated and upscale, in the spirit of Architectural Digest.
- **Type (M2):** "Architectural". Montserrat 500/600 for display (logo, nav, headings in spaced uppercase) and Lora 400 (plus italic) for body text, loaded from Google Fonts. Use `--font-display` and `--font-body`.
- **Palette (M2):** "Slate & Brass". Use the tokens on `:root` rather than new hex values:
  - `--slate` `#1f2a36`: header, footer, headings.
  - `--ink` `#26303a`: body text.
  - `--ivory` `#f7f4ee`: page background.
  - `--brass` `#a07a45`: rules, borders and large display only (3.6:1 on ivory, too faint for small text).
  - `--brass-text` `#866536`: small brass text on ivory (4.9:1).
  - `--brass-light` `#c9a56b`: brass text on slate (6.3:1).
- **Logo (M2):** "B2, tightened". "South Salem Woodworking" in Montserrat 600 18px uppercase at 0.12em letter-spacing, over a 1px brass rule, with "Fine Home Remodeling" below in Montserrat 500 10px at 0.42em. It sits in an 84px slate header, with the nav at 12px and 0.18em. Only the name was tightened; leave the tagline and nav spacing as they are.
- **Placeholder photos (M2):** free Unsplash photos (Unsplash licence) picked to look editorial: classic Northeast houses for exteriors, and warm stone, wood and brass interiors. They're **not** Jeff's work. Every one must be replaced before launch (M10); `images/PLACEHOLDERS.md` lists each file's source. Keep the same filenames when swapping in real photos.
- **Home fold (M3):** the thumbnails must be **above the fold on every major viewport**. `.home-fold` wraps the header and `<main>` at exactly `100svh` (min 560px). The hero flexes into whatever height is left (min 220px). Each thumbnail's height is capped at `--thumb-max-h`, which caps the row's width; it's 24svh on desktop and tablet and 15svh on phones, where the thumbnails sit two by two. The Our Work padding and the hero text spacing scale with `vh` via `clamp()`.
  - **Checked (inner window sizes):** 1920x960, 1536x730, 1440x789, 1366x657, 1280x689, 1200x800, 1024x768, 820x1180 and 768x1024. 390x844 and 375x667 were checked with the M7 header simulated.
  - **If you add anything to the fold,** re-check 1366x657 and 375x667; those are the tightest.
- **Home hero (M3):** a full-bleed photo with a slate gradient rising from the bottom. The headline "Crafted Homes / in Northern Westchester" (draft copy) is in ivory Montserrat at 0.14em, `clamp(20px, min(4.2vh, 6.4vw), 34px)`, over a "View our work →" link that jumps to `#our-work`.
- **Home thumbnails (M3):** a small "Our Work" heading (16px), then four 3:2 cover photos in one row (two by two at 600px and below). Each has a spaced-capitals label and a 28px brass rule underneath. On hover or focus the photo scales to 1.04 and the rule grows to 64px; the motion is turned off for reduced-motion users. The italic intro line was removed to save height.
- **Footer (M3):** slate background in three columns: brand (logo plus "Jeff Cyrnic, General Contractor"), Contact (placeholder phone (914) 555-0100, info@example.com, service area) and Explore (page links). A thin brass line sits above the © line.
- **Known until M7:** the header doesn't fit at phone width (it forces the page to about 645px). The M7 phone menu fixes this.
- **Home page:** one large hero image of a home exterior, with four thumbnails under it (Kitchens, Bathrooms, Interiors, Exteriors). Each thumbnail links to its gallery page.
- **Galleries:** a photo grid. Clicking a photo opens a full-screen lightbox with arrows, keyboard and swipe navigation, written in plain JavaScript with no library.
- **Other pages:** About, Services and Contact.
- **Contact:** contact details plus a form. The form isn't connected yet; it'll go through a service such as Formspree once Jeff's real email is known (M10).
- **Placeholders:** images, phone (555), email (example.com) and service area are clearly marked placeholders until the user supplies real ones.
- **Hosting:** GitHub + Vercel. A custom domain may come later.

## Milestones

Each milestone ends with a commit whose message starts with its ID, but **only after the user says ok** (from M3 on). Finish and verify the milestone, show it, then wait for approval before committing.

- [x] **M1 Setup:** folders, page skeleton, dev server, README, `git init`
- [x] **M2 Design direction:** fonts, palette, text logo, placeholder images
- [x] **M3 Home page:** header, hero, four category thumbnails, footer; thumbnails above the fold on all major viewports (further tweaks expected later)
- [ ] **M4 Gallery template:** Kitchens grid with a lightbox
- [ ] **M5 Other galleries:** Bathrooms, Interiors, Exteriors
- [ ] **M6 About, Services, Contact:** placeholder text, contact details, form (not connected)
- [ ] **M7 Responsive:** tablet and phone layouts, phone menu
- [ ] **M8 Testing:** Chrome, Safari, a real phone
- [ ] **M9 Deploy:** GitHub and Vercel
- [ ] **M10 Real content:** photos, real contact details, form service, domain

## Working agreements

- Build one milestone at a time. Ask clarifying questions **one at a time**.
- **Don't commit a milestone until the user says ok.**
- Verify changes in the browser preview at 1200x800 (desktop) and 375px (phone) before committing, and at 768px (tablet) when the layout changes.
- Asset paths stay relative and must match the filenames' case exactly, because Vercel's filesystem is case-sensitive and macOS isn't.
