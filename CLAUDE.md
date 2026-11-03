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
images/         hero/, kitchens/, bathrooms/, interiors/, exteriors/
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

- **Look:** sophisticated and upscale. The starting palette is charcoal, warm wood and cream (tokens on `:root`), with a text logo. M2 refines it.
- **Home page:** one large hero image of a home exterior, with four thumbnails under it (Kitchens, Bathrooms, Interiors, Exteriors). Each thumbnail links to its gallery page.
- **Galleries:** a photo grid. Clicking a photo opens a full-screen lightbox with arrows, keyboard and swipe navigation, written in plain JavaScript with no library.
- **Other pages:** About, Services and Contact.
- **Contact:** contact details plus a form. The form isn't connected yet; it'll go through a service such as Formspree once Jeff's real email is known (M10).
- **Placeholders:** images, phone (555), email (example.com) and service area are clearly marked placeholders until the user supplies real ones.
- **Hosting:** GitHub + Vercel. A custom domain may come later.

## Milestones

Each milestone ends with a commit whose message starts with its ID.

- [x] **M1 Setup:** folders, page skeleton, dev server, README, `git init`
- [ ] **M2 Design direction:** fonts, palette, text logo, placeholder images
- [ ] **M3 Home page:** header, hero, four category thumbnails, footer (desktop)
- [ ] **M4 Gallery template:** Kitchens grid with a lightbox
- [ ] **M5 Other galleries:** Bathrooms, Interiors, Exteriors
- [ ] **M6 About, Services, Contact:** placeholder text, contact details, form (not connected)
- [ ] **M7 Responsive:** tablet and phone layouts, phone menu
- [ ] **M8 Testing:** Chrome, Safari, a real phone
- [ ] **M9 Deploy:** GitHub and Vercel
- [ ] **M10 Real content:** photos, real contact details, form service, domain

## Working agreements

- Build one milestone at a time. Ask clarifying questions **one at a time**.
- Verify changes in the browser preview at 1200x800 (desktop) and 375px (phone) before committing, and at 768px (tablet) when the layout changes.
- Asset paths stay relative and must match the filenames' case exactly, because Vercel's filesystem is case-sensitive and macOS isn't.
