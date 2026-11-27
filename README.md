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
- Page structure and wording are in `index.html`; integration settings are in `site.js`; visual design is in `src/styles.css` and `combined.css`. The build generates separate Home, Work, Services, and Contact pages; edit their titles, descriptions, canonical domain, sitemap and robots settings in `scripts/build.mjs`. Update the canonical domain there when a custom domain is connected.
- The **Make it yours** tab is a live presentation control. It intentionally affects only the visit and does not persist settings.

## Lead capture

The project inquiry form uses Web3Forms. Its notification recipient and spam settings are managed in the Web3Forms dashboard; the current form is configured for the owner's Google inbox. The form reports success only when the provider confirms acceptance.

1. For email handoff, put the supplied address in `contactEmail` in `site.js`; the completed fields open the visitor’s email app with a drafted message.
2. For Web3Forms, add the form's public access key to `web3FormsAccessKey` in `site.js`. The form sends `multipart/form-data`, shows a loading state, and displays success only after Web3Forms confirms acceptance. Web3Forms describes this key as a public form identifier, not a secret API key.
3. Never put secret provider API keys in frontend code.

## AI styling and website descriptions

`api/ai.js` is a Vercel function using OpenRouter free model routing. Set `OPENROUTER_API_KEY` as a **server-side** Vercel environment variable and redeploy. Do not put it in client code. The frontend sends a visitor's style prompt, or readable text from a visitor-supplied public website, to OpenRouter and its model providers. Depending on the selected model and account settings, prompts may be retained or used for training. Free models can be unavailable and typically have a shared 50 requests/day limit; review provider privacy settings. The suggested description is included in the inquiry only when the visitor opts in. Website screenshots are not implemented.

The website reader accepts HTTPS on port 443 only, rejects IP literals and non-public DNS answers, pins the checked IPv4 address, rejects redirects, and limits time and response size. IPv6-only sites and sites requiring redirects or JavaScript rendering won't be analyzed. The function has a best-effort per-instance burst limit. Vercel also has a shared firewall rule limiting /api/ai to 10 requests per minute per IP; this does not cap total distributed traffic. The OpenRouter key has a $10 lifetime credit limit, and the code uses free routing. Monitor usage and provider limits before enabling paid models. Vercel's separate function usage may also be billed depending on the plan.

## Deploy

This is Vercel-compatible: import the repository, use `npm run build` and output folder `dist`. AI requires `OPENROUTER_API_KEY` in Vercel. The dependency-free `npm run dev` static preview cannot run Vercel functions; use Vercel's local function tooling or deploy a preview to exercise the API.

## Search and local marketing

The build creates canonical URLs, page-specific titles and descriptions, `sitemap.xml`, `robots.txt`, and a share image. The service area is Lawrenceburg, Lexington, and surrounding communities. Verify the site in Google Search Console and submit the sitemap when account access permits. Add real demo URLs and client-approved work when available; the current examples are concepts. A Google Business Profile requires eligibility and verification.

