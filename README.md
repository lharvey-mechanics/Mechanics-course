# MEC Digital Word Wall (GitHub Pages) — Full Bundle

## What this contains
- `index.html`: landing page linking to every credit (grouped by 1000/2000/3000)
- `MEC####.html`: one page per credit (auto-populates from `data.json`)
- `data.json`: all terms (level, credit, chapter, term, definition, example)
- `styles.css`, `credit.js`: shared assets

## Publish
1. Create a GitHub repo (e.g., `mec-word-wall`)
2. Upload all files in this folder to the repo root (replace existing files)
3. GitHub → Settings → Pages → Deploy from branch → `main` / root
4. Visit: `https://<username>.github.io/<repo>/`

## If new terms/credits do not show
- Hard refresh the page (Ctrl+F5 / Cmd+Shift+R).
- GitHub Pages may cache files briefly; try again after a minute.

## Add checklist “Make a copy” links
On any credit page, replace:
- `href="#"`
with your sheet copy link:
- `https://docs.google.com/spreadsheets/d/<FILE_ID>/copy`
