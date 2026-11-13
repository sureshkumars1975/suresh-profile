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

## Deploy

`vercel.json` already rewrites client-side routes to `index.html` for Vercel.
# suresh-profile
