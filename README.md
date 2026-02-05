# MEC Digital Word Wall (GitHub Pages)

## What this contains
- `index.html`: landing page linking to each credit
- `MEC####.html`: one page per credit
- `data.json`: all terms (level, credit, chapter, term, definition, example)
- `styles.css`, `credit.js`: shared assets

## Publish
1. Create a GitHub repo (e.g., `mec-word-wall`)
2. Upload all files in this folder to the repo root
3. GitHub → Settings → Pages → Deploy from branch → `main` / root
4. Visit: `https://<username>.github.io/<repo>/`

## Add checklist “Make a copy” links
For each credit page, replace the checklist link:
- From: href="#"
- To: `https://docs.google.com/spreadsheets/d/<FILE_ID>/copy`

(You can also keep a separate checklist index page if you prefer.)
