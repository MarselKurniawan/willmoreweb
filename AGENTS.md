<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Willmore marketing site as separate SEO-friendly TanStack routes sharing one site shell; each page needs unique metadata because every offering must be independently discoverable.
- Keep business facts in `src/lib/site-content.ts`; this prevents unsupported contact, pricing, and testimonial claims from entering page copy.
- Keep sitewide analytics scripts and their noscript fallbacks in the root document shell so all content routes share one installation.
- Keep SEO article groups in typed content modules consumed by the existing article routes; reuse category specifications from site-content to avoid divergent product facts.
- Store article posting times as explicit ISO timestamps and sort dated articles newest-first; undated legacy articles remain labeled unknown to avoid fabricating publishing history.
- Import the user-selected homepage JPG and transparent logo PNG directly; preserve alpha and symbol pixels when recoloring logo lettering.
