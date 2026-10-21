# Silent Lens static site

This is a zero-cost, dependency-free first version of the Silent Lens website. It is plain HTML, CSS, JavaScript, and lightweight original SVG artwork. No API keys, paid integrations, database, automatic email delivery, or online checkout are used.

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Update portfolio projects

Edit the `projectData` array at the top of `script.js` when adding or maintaining portfolio entries. The current entries are **EMBER — Autumn Magic** and **VAYORA — Own the Ground**, both clearly labelled **Independent Concept Project** throughout the site. Keep `id`, `title`, `category`, `description`, `image`, `videoUrl`, `embedUrl`, and `platform` together for each entry. Update the matching card in `index.html` and detailed embed in `work.html`, and keep the `alt` text accurate for each image.

If a video is on YouTube, add its URL and a visible link or embed only after the correct link is supplied. Do not add invented client names, performance metrics, reviews, or results.

The homepage currently uses locally stored official YouTube thumbnails at `assets/ember-thumbnail.jpg` and `assets/vayora-thumbnail.jpg`, downloaded from YouTube's thumbnail endpoint for the supplied video IDs. Replace them only with an accurate still or official thumbnail for the matching video; do not describe a representative image as a video frame unless it was actually extracted from that video.

## Update packages and services

Package copy appears in the structured `packages` array in `script.js` and in the visible package sections of `index.html` and `services.html`. Keep those values synchronized when editing prices or deliverables. Add future services as a new service item and a matching detailed section.

## Contact behavior

The form in `contact.html` validates required fields, composes a prefilled `mailto:` draft to `silentlens01@gmail.com`, and tells the visitor that they must review and send it manually. It does not claim the inquiry was received, stored, or emailed automatically. A native backend or email automation can be added later only after a suitable free option is verified.

## Language and SEO

The initial language is US English. The content is kept in separate page files so Arabic and French versions can be introduced later without a complex translation system. Each page has its own title, description, canonical path, and social metadata. `robots.txt`, `sitemap.xml`, and `manus-routes.json` are included for hosting that supports them. Replace relative canonical and sitemap URLs with a verified public origin when one exists.
