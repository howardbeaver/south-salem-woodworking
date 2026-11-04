# South Salem Woodworking

A multi-page website for South Salem Woodworking, the home remodeling business of general contractor Jeff Cernak. His clients are upscale, so the site should look sophisticated. It's plain HTML, CSS and JavaScript, with no framework, no build step and no npm. It's hosted on Vercel from GitHub.

- **Live (hidden preview):** https://south-salem-woodworking.vercel.app
- **Repo:** https://github.com/howardbeaver/south-salem-woodworking. It's public, and every push to `main` redeploys on Vercel (Framework Preset: Other, no build command).
- **Until launch (M10)** the live site is a **hidden preview**: a `noindex, nofollow` meta tag on every page, a `robots.txt` that disallows everything, a plain 13px brass band (`.preview-note`, no text) across the top of every page, and the words "Preview site · Sample photos" in brass at the lower right of every footer (`.footer-preview`, beside the ©; it drops below the © on phones and stays right-aligned). All of them are marked `PREVIEW: remove at launch (M10)`. Remove them only when the stock photos and placeholder details are replaced.
- **`.vercelignore`** keeps `CLAUDE.md`, `README.md`, `dev-server.py`, `tools/` and `images/PLACEHOLDERS.md` off the live site (they return 404); they're still in the repo.

This is a fresh project. Don't reuse code, assets or decisions from the user's other projects.

## Names

- Business: **South Salem Woodworking** (one word, "Woodworking").
- Contractor: **Jeff Cernak**. The user gave this spelling on 2026-11-03; earlier commit messages use a guessed spelling. To change it again, search the project for `Cernak`.

## Files

```
index.html      home: header, hero, four category thumbnails, footer
kitchens.html   gallery template: intro, lead photo + grid, More Work links, lightbox <dialog>
bathrooms.html  \
interiors.html   > copies of kitchens.html with their own title, description, intro,
exteriors.html  /  photos, alt text and More Work links (M5)
about.html      photo + bio (placeholder), How We Work values, call to action (M6)
services.html   four service cards linking to the galleries, 4-step process, call to action (M6)
contact.html    form (not connected) + slate details panel (M6)
css/style.css   all styles; colour and size tokens on :root
js/gallery.js   lightbox shared by every gallery page
js/contact.js   stops the contact form submitting while it isn't connected
js/nav.js       phone menu, shared by every page
dev-server.py   local server on port 8080 with no-cache (development only)
tools/make-thumbs.sh   makes the 720px grid copies in images/<category>/thumbs/ (uses macOS sips)
images/         hero/hero-exterior.jpg (2400x1000, wide crop; shown with object-position center 70%)
                <category>/cover.jpg (1200x900) and <singular>-01..09.jpg (1600x1200)
                <category>/thumbs/<singular>-01..09.jpg (720x540 grid copies)
                for kitchens, bathrooms, interiors, exteriors
images/PLACEHOLDERS.md   source of every placeholder photo
README.md       overview, how to run, milestones
```

**Every page is a hand-kept copy of the shared header and footer** (8 pages). A change to either has to be made in all of them. The About, Services and Contact links carry `aria-current="page"` on their own page, which draws them in brass with a thin rule underneath. The same applies to the four gallery pages' lightbox markup and gallery structure. The gallery intro lines are draft copy:
- Kitchens: "Custom cabinetry, stone and millwork, planned around the way each family cooks and gathers."
- Bathrooms: "Stone, tile and custom vanities, finished with the care of fine furniture."
- Interiors: "Millwork, built-ins and fireplaces: the details that make a room feel finished."
- Exteriors: "Porches, siding, trim and additions, built to suit the house and made to last."

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
- **Palette (M2):** "Slate & Brass", with the brass shifted toward **gold** at the user's request (2026-11-04: hue about 35° to 42°, richer). Use the tokens on `:root` rather than new hex values:
  - `--slate` `#1f2a36`: header, footer, headings.
  - `--ink` `#26303a`: body text.
  - `--ivory` `#f7f4ee`: page background.
  - `--brass` `#b08a35`: rules, borders and large display only (2.9:1 on ivory, too faint for small text). Its tints are written as `rgba(176, 138, 53, …)`.
  - `--brass-text` `#86661a`: small brass text on ivory (4.9:1), and the top preview band.
  - `--brass-light` `#d6b15e`: brass text on slate (7.2:1). Its tints are written as `rgba(214, 177, 94, …)`.
- **Gold sheen (2026-11-04, user request):** the top band and the horizontal rules use a metallic gradient instead of flat brass. `--gold-sheen` runs `--gold-deep` (#8f6c22) → `--brass` → `--gold-highlight` (#f1dc9c, at 42%) → `--brass` → `--gold-deep`; `--gold-sheen-faint` is the same at low alpha for thin dividers on slate.
  - **Where it's used:** the top band (`.preview-note`, plus a soft top-to-bottom white/black sheen), the logo rule in the header and footer (`border-image`), the footer divider above the ©, and the phone menu's top edge and row dividers (faint).
  - **Not used on:** the short rules under the home thumbnail labels (tried, and the user found the sheen didn't read at that size) or the link underlines (hero link, More Work, "See kitchens" and so on). Both stay flat `--brass`.
- **Logo (M2):** "B2, tightened". "South Salem Woodworking" in Montserrat 600 18px uppercase at 0.12em letter-spacing, over a 1px brass rule, with "Fine Home Remodeling" below in Montserrat 500 10px at 0.42em. It sits in an 84px slate header, with the nav at 12px and 0.18em. Only the name was tightened; leave the tagline and nav spacing as they are.
- **Placeholder photos (M2):** free Unsplash photos (Unsplash licence) picked to look editorial: classic Northeast houses for exteriors, and warm stone, wood and brass interiors. They're **not** Jeff's work. Every one must be replaced before launch (M10); `images/PLACEHOLDERS.md` lists each file's source. Keep the same filenames when swapping in real photos.
- **Home fold (M3):** the thumbnails must be **above the fold on every major viewport**. `.home-fold` wraps the header and `<main>` at exactly `100svh` (min 560px). The hero flexes into whatever height is left (min 220px). Each thumbnail's height is capped at `--thumb-max-h`, which caps the row's width; it's 24svh on desktop and tablet and 15svh on phones, where the thumbnails sit two by two. The Our Work padding and the hero text spacing scale with `vh` via `clamp()`.
  - **Checked (inner window sizes):** 1920x960, 1536x730, 1440x789, 1366x657, 1280x689, 1200x800, 1024x768, 820x1180 and 768x1024, plus phones 390x844, 375x812, 375x667 and 360x780 (with the real M7 header).
  - **If you add anything to the fold,** re-check 1366x657 and 375x667; those are the tightest.
- **Home hero (M3):** a full-bleed photo with a slate gradient rising from the bottom. The current placeholder is a white Georgian colonial (Unsplash), cropped tight to 2400x1000 with little sky and no road, and anchored with `object-position: center 70%`. A replacement hero should be a similar wide crop, centred on the house, with the foreground in the bottom third. The headline "Crafted Homes / in Northern Westchester" (draft copy) is in ivory Montserrat at 0.14em. At the user's request it's **half its original size** on every screen, `clamp(10px, min(2.1vh, 3.2vw), 17px)` (about 17px on desktop, 12px on phones), with `line-height: 1` (the visible gap between the capital lines halved from 1.3), so it sits on two lines. The headline and the "View our work →" link (12px; 10px on phones), which jumps to `#our-work`, both have a soft `text-shadow`.
  - **Phones (720px and below):** the hero is taller for its width and the text sits over the facade, so the gradient is darker and taller (slate 92% at the bottom, 75% at 30%, 45% at 55%, 15% at 75%, clear by 90%). A horizontal `mask-image` keeps that gradient at full strength across the left 45% (behind the text) and eases it to 55% at the right edge, so the right side of the photo stays lighter. The whole phone gradient also has `opacity: 0.9` (10% lighter, at the user's request). Desktop keeps the lighter gradient (85% to clear at 62%).
- **Home thumbnails (M3):** a small "Our Work" heading (16px), then four 3:2 cover photos in one row (two by two at 600px and below). Each photo has a 1px black frame (`border: 1px solid #000` on `.category-photo`, user request; inside the box, so the size and fold don't change). On hover or focus the frame turns `--brass` gold and thickens to 2px (0.3s fade). Each has a spaced-capitals label and a 28px brass rule underneath. On hover or focus the photo scales to 1.04 and the rule grows to 64px; the motion is turned off for reduced-motion users. The italic intro line was removed to save height.
- **Footer (M3):** slate background in three columns: brand (logo plus "Jeff Cernak, General Contractor"), Contact (placeholder phone (914) 555-0100, info@example.com, service area) and Explore (page links). A thin brass line sits above the © line.
- **Phone menu (M7, `js/nav.js`):** a drop-down, and the user asked that it **not be too small**.
  - **The button:** at **720px and below**, a 48x48 `.menu-toggle` (three lines that turn into an X) replaces the nav links. The button sits before `<nav id="site-nav">` in every header.
  - **The panel:** the nav becomes a full-width slate panel under the header, with links in 16px spaced capitals in ~56px-tall rows divided by faint brass lines. The current page is marked with a brass dash. A `.nav-phone` link (Lora 20px, brass, placeholder number) is shown only in this panel.
  - **State:** it's driven only by `aria-expanded` on the button (its label switches between "Menu" and "Close menu"). It closes on a link tap, a tap outside the header, Escape (focus returns to the button) or widening past 720px.
  - **Without JavaScript:** the header never gets `.has-menu`, so the nav simply stays visible.
- **Phone sizes (M7):**
  - **600px and below:** the header is 72px, `--pad-x` is 20px, and the logo is 15px/0.1em with a 9px tagline.
  - **400px and below:** `--pad-x` is 16px and the logo is 14px/0.08em. These rules are kept last in the stylesheet so they win.
  - **Checked:** all 8 pages at 360, 375, 390, 414, 600, 601, 720, 721, 768 and 1200, with no sideways scroll and the logo clear of the button or nav (30px or more).
- **Home page:** one large hero image of a home exterior, with four thumbnails under it (Kitchens, Bathrooms, Interiors, Exteriors). Each thumbnail links to its gallery page.
- **Gallery page (M4, `kitchens.html` is the template):**
  - **Layout:** an "← All work" link back to `index.html#our-work`, a centred h1 (30px, 0.26em, with padding-left to balance the spacing) and an italic brass intro (draft copy). Then the photos: the **first one spans the full width at 2:1** and the rest sit in an even 4:3 grid, **4 across, 2 at 900px and below, 1 at 600px and below** (the lead turns 4:3 on phones). 9 photos give even rows everywhere; a different count can leave a short last row. A "More Work" row links to the other three galleries.
  - **Markup:** each photo is `<li><a href="full.jpg"><img …></a></li>`, so without JavaScript the link just opens the image. Only the first photo isn't lazy-loaded. Alt text is "Kitchen, photo N" until there are real descriptions.
  - **Grid copies (M8):** photos 02–09 show `images/<category>/thumbs/…` (720x540, quality 55, about 50–100 KB each) in the grid, while their link and the lightbox use the full-size file. The full-width lead photo 01 shows the full file. That cut each gallery's grid download by about 70% (Exteriors: 4.97 MB to 1.45 MB). **Whenever gallery photos are added or replaced, run `bash tools/make-thumbs.sh`.** A missing thumbnail shows as a broken image in the grid.
  - **Framed photos (site-wide, user request):** every gallery photo link, every Services card photo and the home thumbnails have a 1px black frame that turns `--brass` gold and 2px on hover or focus (inside the box, 0.3s fade, off for reduced motion). The About photo isn't a link, so it gets the 1px black frame only. The hero and the lightbox view are unframed.
  - **The lightbox `<img>` has no `src` in the markup** (an empty `src` is invalid and can re-request the page); `gallery.js` sets it on open.
- **Lightbox (M4, `js/gallery.js`):** a native `<dialog class="lightbox">` opened with `showModal()`. It shows the link's full image, uncropped, with an "N / 9" counter, round prev/next buttons (at the sides on desktop, bottom centre on phones) and a close button that gets focus on open (`autofocus`).
  - **Controls:** ←/→ keys, swiping (50px or more, mostly horizontal) and the buttons all wrap around. Escape, the close button or a click outside the photo closes it.
  - **While open:** page scrolling is locked (`.lightbox-open` on `<html>`) and both neighbouring photos are preloaded.
  - **On close:** focus returns to the last photo viewed.
  - **Any gallery page needs:** the same `<dialog>` markup and `<script src="js/gallery.js" defer>`.
- **Content pages (M6):** they share the gallery `.page-intro`, then reuse existing photos (no new downloads). They end in a tinted band (`.values` or `.process`, brass at 8%) and a `.cta-band` linking to Contact.
  - **Placeholders:** every fact about Jeff that we don't know is written in **[brackets]**: years in business, towns served, background, licence numbers, hours. Never invent these; replace them with what the user supplies (M10). The service descriptions and process steps are draft copy for Jeff to confirm.
  - **About:** a `.split` with the photo (interiors/interior-01) beside the bio, then How We Work (three values).
  - **Services:** four `.service` cards (category cover, short description, "See kitchens →" link), 2 by 2, then How a Project Works (four numbered steps).
- **Contact (M6):** a form (name*, email*, phone, town, project type, message*) beside a slate panel with phone, email, service area and hours (placeholders). The browser checks the required fields.
  - **Not connected yet:** the form has `data-not-connected` and an empty `action`. `js/contact.js` stops the submit and shows "This form isn't connected yet, so your message was not sent…" in a `role="status"` box.
  - **To connect it (M10):** set `action` to the form service URL (e.g. Formspree) and remove `data-not-connected`.
  - **Inputs use 16px text** so iOS doesn't zoom into them.
- **Placeholders:** images, phone (555), email (example.com) and service area are clearly marked placeholders until the user supplies real ones.
- **Hosting:** GitHub + Vercel. A custom domain may come later.

## Milestones

Each milestone ends with a commit whose message starts with its ID, but **only after the user says ok** (from M3 on). Finish and verify the milestone, show it, then wait for approval before committing.

- [x] **M1 Setup:** folders, page skeleton, dev server, README, `git init`
- [x] **M2 Design direction:** fonts, palette, text logo, placeholder images
- [x] **M3 Home page:** header, hero, four category thumbnails, footer; thumbnails above the fold on all major viewports (further tweaks expected later)
- [x] **M4 Gallery template:** Kitchens grid with a lightbox (further tweaks expected later)
- [x] **M5 Other galleries:** Bathrooms, Interiors, Exteriors
- [x] **M6 About, Services, Contact:** placeholder text, contact details, form (not connected)
- [x] **M7 Responsive:** tablet and phone layouts, phone menu
- [x] **M8 Testing:** Chrome, Safari, a real phone (Safari check with the user; real phone after M9)
  - **Chrome (built-in browser), all 8 pages:** no console errors or failed files, and all images and fonts load. Accessibility basics pass (lang, title, description, one h1, heading order, alt text, labels, named links and buttons, unique ids, valid ARIA references). The keyboard works: logical tab order, a visible 2px outline everywhere, and the lightbox traps focus and returns it.
  - **Fixed:** the empty lightbox `src`. On Services, the duplicate photo links now carry `tabindex="-1" aria-hidden="true"`; the text link in each card is the accessible one.
  - **Safari:** the user is checking it themselves, using a checklist.
  - **Real phone:** deferred to right after M9, on the live URL.
  - **Not tested:** Firefox (not installed) and the reduced-motion path (the preview can't emulate it).
- [x] **M9 Deploy:** GitHub and Vercel (hidden preview; real-phone test pending)
- [ ] **M10 Real content:** photos, real contact details, form service, domain

## Working agreements

- Build one milestone at a time. Ask clarifying questions **one at a time**.
- **Don't commit a milestone until the user says ok.**
- Verify changes in the browser preview at 1200x800 (desktop) and 375px (phone) before committing, and at 768px (tablet) when the layout changes.
- Asset paths stay relative and must match the filenames' case exactly, because Vercel's filesystem is case-sensitive and macOS isn't.
