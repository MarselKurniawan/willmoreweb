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
