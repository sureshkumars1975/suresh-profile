# Dr. Suresh Kumar S — Portfolio (React + Vite)

Rebuilt from https://suresh-rec.vercel.app/ with React 19, Vite, Tailwind CSS v4, React Router and lucide-react.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Edit content

All text lives in `src/data/profile.js` (profile, education, experience, skills,
publications, certificates, gallery, events). Images and the CV are in `public/`.

## Images

Cards load 800px thumbnails from `public/gallery/thumbs/` and `public/certificates/thumbs/`;
the lightbox loads the full image (max 1600px). When adding an image, also add its thumbnail:

```bash
sips -s format jpeg -s formatOptions 72 --resampleWidth 800 public/gallery/NEW.jpg --out public/gallery/thumbs/NEW.jpg
```

## Routes

`/` (home: hero, about, research, certificates, gallery, contact) · `/publications` · `/certificates` · `/gallery`

## Contact form

Uses FormSubmit (`https://formsubmit.co/ajax/<email>`). The first submission sends an
activation email to the address in `profile.js`, which must be confirmed once.

## CV download

The "Download CV" button is hidden while `profile.cv` is `null`. The old CV contained personal ID
data (Aadhaar, PAN, DOB, address) and is git-ignored. To re-enable, add a cleaned PDF to `public/`
and set `cv: "/your-file.pdf"` in `src/data/profile.js`.

## Deploy (GitHub Pages)

Live site: https://sureshkumars1975.github.io/suresh-profile/

- **Automatic:** every push to `main` runs `.github/workflows/deploy.yml`, which builds with
  `npm run build:gh` and publishes `dist/` to the `gh-pages` branch (live in ~1 minute).
- **Manual:** `npm run deploy` does the same from your machine.

`build:gh` builds with base path `/suresh-profile/`, copies `index.html` into each route folder
(`publications/`, `certificates/`, `gallery/`) so deep links return HTTP 200, and adds a `404.html`
fallback. Local `npm run dev` / `npm run build` still use base `/`.

Never put personal documents in `public/` — everything there is published. Use the git-ignored
`private/` folder instead.
