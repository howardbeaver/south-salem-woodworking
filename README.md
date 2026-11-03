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

Photos go in `images/`, one folder per category (`hero/`, `kitchens/`, `bathrooms/`, `interiors/`, `exteriors/`). Placeholders are used until the real photos arrive (M10).

## Milestones

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
