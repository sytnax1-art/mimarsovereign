# MimarSovereign v8.0 — Demo Landing

A focused, static demo that showcases the "space-age" MimarSovereign visual concept without revealing proprietary source. Designed to attract attention on GitHub and act as a demo gateway to private, high-value projects.

Highlights
- Small, fast static landing: index.html + styles + JS (no backend required).
- Interactive states (Awaken / Calibrate / Manifest) and animated orbital visuals.
- Suitable for GitHub Pages so the demo is visible immediately to visitors.

Run locally

Open `index.html` in a browser or serve locally:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` to preview.

Publish as a public demo (recommended)

This repository includes a GitHub Actions workflow (.github/workflows/pages.yml) that deploys the site to GitHub Pages when this branch is pushed. Steps to publish:

1. Push this branch to GitHub:

```bash
git add -A && git commit -m "Publish demo and pages workflow\n\nCo-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>" && git push -u origin sytnax1-art-repository-repair
```

2. Wait a minute for the Pages deployment action to complete.
3. The demo will be available at `https://<your-github-username>.github.io/<repo-name>/` once Pages finishes.

What to include publicly (suggestions)

- Keep proprietary code private. Publish only demo assets: built static site, GIF/video walkthroughs, artwork, and a polished README that teases the underlying tech.
- Add a short demo GIF (assets/demo.gif) and a 20–30s MP4 (assets/demo.mp4) showing interaction; these attract attention in the repo listing.

Promotion tips

- Write an evocative repo description and pin the repo on your GitHub profile.
- Create a short, shareable GIF (1600×900 or 1280×720) and put it near the top of the README.
- Add topics (e.g., webgl, interactive, demo, art, ui) and a concise tagline.
- Post a short announcement (Twitter/X, Mastodon, LinkedIn) linking to the GitHub Pages demo.

If you want, I can:
- Add a `assets/` folder and placeholder GIF/MP4 files.
- Commit & push everything and monitor the Pages deployment action.
- Create a polished README hero section with a GIF embedded.

Hangi adımı istersin? (örn. "Push ve deploy et", "GIF/MP4 placeholder ekle", "README hero GIF ekle")
