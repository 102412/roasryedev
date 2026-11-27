# Roas Rye Development frontend

Mobile-first marketing site for Roas Rye Development, built as a dependency-free static frontend.

## Run locally

```bash
npm run dev
```

Run `npm run lint` and `npm run build` before release. The deployment files are created in `dist/`, with a ready-to-share copy in `outputs/roas-rye-development/`. No dependency install is required.

## Update content

- Update package details, demo labels, and demo URLs (when available) in `index.html`.
- Demo links are intentionally omitted until working URLs are supplied; add an anchor only when the URL is live.
- Page structure and wording are in `index.html`; integration settings are in `site.js`; visual design is in `src/styles.css`.
- The **Make it yours** tab is a live presentation control. It intentionally affects only the visit and does not persist settings.

## Lead capture

No contact email or form endpoint has been supplied, so the public form does not claim to submit successfully.

1. For email handoff, put the supplied address in `contactEmail` in `site.js`; the completed fields open the visitor’s email app with a drafted message.
2. For a provider, put its public form endpoint in `formEndpoint` in `site.js`. The form sends `multipart/form-data`, shows a loading state, and displays success only for an accepted HTTP response.
3. If using a protected provider, keep its secret/API key on a serverless function—not in this frontend. Point `formEndpoint` at that function.

## Future AI and website previews

`enhancements.js` contains empty `designEndpoint` and `websiteAnalysisEndpoint` settings. The design endpoint accepts a JSON `prompt` and returns approved color variables. The website analysis endpoint accepts a JSON `url` and returns an HTTPS `thumbnail` and/or `description`; the visitor must opt in to include the description. These features are inactive until secure server endpoints are supplied. The website fetcher must validate URLs and block private/internal network addresses, redirects to them, and oversized responses. Keep credentials server-side.

## Deploy

This is Vercel-compatible: import the repository, use `npm run build` and output folder `dist`. No environment variables are needed for the frontend as delivered.
