import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, ArrowLink } from "@/components/site-shell";
import { MarketplaceBanner } from "@/components/page-sections";
import { categories, completeSetNote, getCategory } from "@/lib/site-content";
import { getArticle } from "@/lib/articles";

const BASE = "https://willmoreweb.lovable.app";

export const Route = createFileRoute("/pintu/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => { if (!getCategory(params.slug)) throw notFound(); return null; },
  head: ({ params }) => {
    const c = getCategory(params.slug);
    if (!c) return { meta: [{ title: "Kategori tidak ditemukan | Willmore" }] };
    const url = `${BASE}/pintu/${c.slug}`;
    return {
      meta: [
        { title: c.metaTitle }, { name: "description", content: c.description },
        { property: "og:title", content: c.metaTitle }, { property: "og:description", content: c.description },
        { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Produk", item: `${BASE}/produk` },
        { "@type": "ListItem", position: 3, name: c.name, item: url },
      ] }) }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const c = getCategory(slug);
  if (!c) throw notFound();
  const others = categories.filter((o) => o.slug !== slug);
  return <PageShell>
    <section className="section-pad category-page">
      <nav aria-label="Breadcrumb" className="category-crumb"><Link to="/">Beranda</Link> / <Link to="/produk">Produk</Link> / <span>{c.name}</span></nav>
      <div className="category-hero">
        <div><p className="eyebrow">Kategori Willmore</p><h1>{c.name} Willmore</h1><p className="category-lead">{c.intro}</p>
          {c.slug === "aluminium" && <span className="tested-badge">Sudah Teruji</span>}
          <p className="complete-set-inline"><strong>Lengkap &amp; Siap Pasang.</strong> {completeSetNote}</p>
          <ArrowLink to="/kontak">Konsultasi via WhatsApp</ArrowLink></div>
        <img src={c.image} alt={`${c.name} Willmore`} width={1200} height={1504} />
      </div>
      <h2>Spesifikasi</h2>
      <table className="category-specs"><tbody>{c.specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
      <h2>Cocok untuk</h2>
      <ul className="category-list">{c.uses.map((u) => <li key={u}>{u}</li>)}</ul>
      <h2>Pertanyaan umum</h2>
      <div className="category-faq">{c.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <h2>Baca panduan terkait</h2>
      <ul className="category-list">{c.articles.map((s) => { const a = getArticle(s); return a ? <li key={s}><Link to="/artikel/$slug" params={{ slug: s }}>{a.title}</Link></li> : null; })}</ul>
      <h2>Kategori lainnya</h2>
      <ul className="category-list">{others.map((o) => <li key={o.slug}><Link to="/pintu/$slug" params={{ slug: o.slug }}>{o.name}</Link></li>)}</ul>
    </section>
    <MarketplaceBanner />
  </PageShell>;
}
