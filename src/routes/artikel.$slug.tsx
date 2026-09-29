import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";
import { SocialLinks } from "@/components/social-links";
import { articles, getArticle } from "@/lib/articles";
import { marketplaces, socials } from "@/lib/site-content";

export const Route = createFileRoute("/artikel/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { slug: article.slug };
  },
  head: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) return { meta: [{ title: "Artikel tidak ditemukan | Willmore" }] };
    const url = `/artikel/${a.slug}`;
    return {
      meta: [
        { title: a.metaTitle },
        { name: "description", content: a.description },
        { name: "keywords", content: `${a.keyword}, Willmore, pintu berkualitas` },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.description,
            inLanguage: "id",
            author: { "@type": "Organization", name: "Willmore" },
            publisher: { "@type": "Organization", name: "Willmore", sameAs: socials.map((s) => s.url) },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Beranda", item: "/" },
              { "@type": "ListItem", position: 2, name: "Artikel", item: "/artikel" },
              { "@type": "ListItem", position: 3, name: a.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => <PageShell><section className="article-hero"><h1>Artikel tidak ditemukan</h1><Link to="/artikel">Kembali ke daftar artikel</Link></section></PageShell>,
});

function ArticlePage() {
  const { slug } = Route.useLoaderData();
  const a = getArticle(slug)!;
  const related = articles.filter((x) => x.slug !== a.slug);
  return (
    <PageShell>
      <header className="article-hero">
        <nav aria-label="Breadcrumb"><Link to="/">Beranda</Link>/<Link to="/artikel">Artikel</Link>/<span>{a.category}</span></nav>
        <h1>{a.title}</h1>
        <p>{a.description}</p>
      </header>
      <figure className="article-cover">
        <img src={a.image} alt={a.imageAlt} width={1536} height={1024} />
        <figcaption>{a.imageAlt}</figcaption>
      </figure>
      <div className="article-layout">
        <aside className="article-toc">
          <h2>Daftar Isi</h2>
          <ol>{a.sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>)}</ol>
        </aside>
        <article className="article-body">
          {a.intro.map((p, i) => <p key={i}>{p}</p>)}
          {a.sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </section>
          ))}
          <p>
            Lihat pilihan lengkap di <Link to="/produk">halaman produk Willmore</Link>, pelajari <Link to="/layanan">layanan konsultasi hingga after sales</Link>, atau <Link to="/kontak">hubungi tim kami</Link>. Belanja online juga tersedia di{" "}
            {marketplaces.map((m, i) => <span key={m.name}>{i > 0 && " dan "}<a href={m.url} target="_blank" rel="noopener">{m.name}</a></span>)}.
          </p>
          <div className="article-follow">
            <h2>Ikuti Willmore</h2>
            <p>Dapatkan inspirasi pintu, info produk, dan tips perawatan di media sosial resmi kami.</p>
            <SocialLinks />
          </div>
          <div className="article-related">
            <h2>Artikel Terkait</h2>
            <ul>{related.map((r) => <li key={r.slug}><Link to="/artikel/$slug" params={{ slug: r.slug }}>{r.title}</Link></li>)}</ul>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
