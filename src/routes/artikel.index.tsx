import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";
import { PageIntro } from "@/components/page-sections";
import { articles, wordCount } from "@/lib/articles";

export const Route = createFileRoute("/artikel/")({
  head: () => ({
    meta: [
      { title: "Artikel & Panduan Pintu | Willmore" },
      { name: "description", content: "Panduan lengkap memilih pintu baja, kayu, aluminium, PVC, dan UPVC dari Willmore, spesialis pintu berkualitas sejak 2002." },
      { property: "og:title", content: "Artikel & Panduan Pintu Willmore" },
      { property: "og:description", content: "Tips memilih, membandingkan, dan merawat pintu untuk rumah dan proyek Anda." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/artikel" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/artikel" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Artikel" title="Panduan memilih pintu yang tepat." text="Pelajari karakter setiap material, cara memilih, dan tips perawatan dari Willmore." />
      <section className="article-grid">
        {articles.map((a) => (
          <Link key={a.slug} to="/artikel/$slug" params={{ slug: a.slug }} className="article-card">
            <div className="img-wrap"><img src={a.image} alt={a.imageAlt} loading="lazy" width={1200} height={900} /></div>
            <span>{a.category} · {Math.ceil(wordCount(a) / 200)} menit baca</span>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
