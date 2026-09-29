import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PageShell, ArrowLink } from "@/components/site-shell";
import { SectionHeading } from "@/components/page-sections";
import { heroImage, products, services, faqs } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Willmore | Pintu Berkualitas Sejak 2002" },
    { name: "description", content: "Temukan pintu baja, kayu, aluminium, PVC dan UPVC Willmore dengan layanan konsultasi, instalasi hingga after sales sejak 2002." },
    { property: "og:title", content: "Willmore | Pintu Berkualitas Sejak 2002" },
    { property: "og:description", content: "Pintu berkualitas untuk setiap kebutuhan rumah, dari konsultasi hingga after sales." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return <PageShell overlayHeader>
    <section className="hero">
      <img src={heroImage} alt="Pintu kayu pivot pada rumah modern tropis" width={1920} height={1088} />
      <div className="hero-shade" />
      <div className="hero-copy"><p>Pintu berkualitas sejak 2002</p><Link to="/kontak" className="hero-link">Mulai konsultasi <ArrowUpRight size={17} /></Link></div>
      <h1>Willmore<sup>®</sup></h1><ArrowDownRight className="hero-arrow" />
    </section>

    <section className="statement section-pad">
      <p className="eyebrow">Tentang Willmore</p>
      <div><h2>Pintu bukan sekadar pembatas ruang. Ia adalah bagian pertama yang menyambut, melindungi, dan memberi karakter pada rumah.</h2><ArrowLink to="/tentang">Cerita kami</ArrowLink></div>
    </section>

    <section className="section-pad products-band">
      <SectionHeading number="01" label="Pilihan Material" title="Pintu untuk setiap kebutuhan ruang." />
      <div className="product-grid">
        {products.slice(0,3).map((product) => <article className="product-card" key={product.slug}>
          <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" width={1200} height={1504} /></div>
          <div className="product-meta"><span>{product.no}</span><h3>{product.name}</h3><ArrowUpRight size={20} /></div>
        </article>)}
      </div>
      <ArrowLink to="/produk">Lihat semua produk</ArrowLink>
    </section>

    <section className="heritage">
      <div className="heritage-year">2002</div>
      <div className="heritage-copy"><p className="eyebrow">Pengalaman yang bertumbuh</p><h2>Lebih dari dua dekade membantu pelanggan menemukan pintu yang sesuai.</h2><p>Willmore mendampingi setiap langkah—dari memahami kebutuhan, memilih produk, instalasi, hingga after sales.</p></div>
    </section>

    <section className="section-pad">
      <SectionHeading number="02" label="Cara Kami Bekerja" title="Satu rangkaian layanan, dari awal hingga setelah pintu terpasang." />
      <div className="service-list">{services.map((service) => <div key={service.no} className="service-row"><span>/{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></div>)}</div>
      <ArrowLink to="/layanan">Pelajari layanan</ArrowLink>
    </section>

    <section className="section-pad faq-section">
      <SectionHeading number="03" label="Pertanyaan Umum" title="Hal penting sebelum memilih pintu." />
      <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index+1).padStart(2,"0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
    </section>
  </PageShell>;
}
