# South Salem Woodworking

A website for South Salem Woodworking, the home remodeling business of Jeff Cyrnic. It's aimed at upscale clients and shows his work in four photo galleries: Kitchens, Bathrooms, Interiors and Exteriors.

The site is plain HTML, CSS and JavaScript, with no framework and no build step. It will be hosted on Vercel from GitHub.

## Run locally

```bash
python3 dev-server.py
```

Then open http://localhost:8080. The server sends `Cache-Control: no-cache`, so a plain reload shows your edits.

## Pages

| Page | File | Milestone |
| --- | --- | --- |
| Home | `index.html` | M3 |
| Kitchens | `kitchens.html` | M4 |
| Bathrooms, Interiors, Exteriors | `bathrooms.html`, `interiors.html`, `exteriors.html` | M5 |
| About, Services, Contact | `about.html`, `services.html`, `contact.html` | M6 |

## Images

Photos go in `images/`, one folder per category (`hero/`, `kitchens/`, `bathrooms/`, `interiors/`, `exteriors/`).

- Hero: `hero/hero-exterior.jpg`, 2400x1000 (a wide crop, centred on the front door, with the lawn at the bottom; CSS anchors it at 70% down so the foreground stays in view).
- Each category: `cover.jpg` at 1200x900 for the home page thumbnail, plus `kitchen-01.jpg` to `kitchen-09.jpg` (and so on) at 1600x1200 for the gallery.
- Each category also has a `thumbs/` folder of smaller 720px copies that the gallery grid shows. **After adding or replacing gallery photos, run `bash tools/make-thumbs.sh`** to rebuild them.

The current photos are **placeholders**: free Unsplash stock photos, not Jeff's work. `images/PLACEHOLDERS.md` lists where each one came from. Replace them all with real project photos, keeping the same filenames, before the site launches (M10).

## Design

- **Type:** Montserrat (display) and Lora (body), from Google Fonts.
- **Colours:** slate `#1f2a36`, ink `#26303a`, ivory `#f7f4ee`, and brass `#a07a45` (with `#866536` for small text on ivory and `#c9a56b` on slate).
- **Logo:** "South Salem Woodworking" in spaced capitals over a thin brass rule, with "Fine Home Remodeling" beneath.

## Milestones

- [x] **M1 Setup:** folders, page skeleton, dev server, README, `git init`
- [x] **M2 Design direction:** fonts, palette, text logo, placeholder images
- [x] **M3 Home page:** header, hero, four category thumbnails, footer; thumbnails above the fold on all major viewports
- [x] **M4 Gallery template:** Kitchens grid with a lightbox
- [x] **M5 Other galleries:** Bathrooms, Interiors, Exteriors
- [x] **M6 About, Services, Contact:** placeholder text, contact details, form (not connected)
- [x] **M7 Responsive:** tablet and phone layouts, phone menu
- [x] **M8 Testing:** Chrome, Safari, a real phone (Safari check with the user; real phone after M9)
- [ ] **M9 Deploy:** GitHub and Vercel
- [ ] **M10 Real content:** photos, real contact details, form service, domain
