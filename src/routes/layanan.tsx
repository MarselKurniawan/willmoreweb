import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ArrowLink } from "@/components/site-shell";
import { PageIntro } from "@/components/page-sections";
import { services } from "@/lib/site-content";
export const Route = createFileRoute("/layanan")({ head: () => ({ meta: [
  { title: "Layanan Willmore | Konsultasi, Instalasi & After Sales" }, { name: "description", content: "Layanan pintu Willmore mencakup konsultasi, pemilihan produk, instalasi, dan after sales." },
  { property: "og:title", content: "Layanan Pintu Willmore" }, { property: "og:description", content: "Pendampingan menyeluruh dari konsultasi hingga after sales." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ServicesPage });
function ServicesPage(){return <PageShell><PageIntro eyebrow="Layanan" title="Tidak berhenti setelah pintu terjual." text="Kami mendampingi proses secara menyeluruh agar pilihan pintu tidak hanya terlihat tepat, tetapi juga bekerja sesuai kebutuhan."/><section className="service-detail-list">{services.map((s)=><article key={s.no}><span>/{s.no}</span><div><h2>{s.title}</h2><p>{s.text}</p></div></article>)}</section><section className="process-note"><p className="eyebrow">Satu alur yang jelas</p><h2>Konsultasi <i>→</i> Pilih Produk <i>→</i> Instalasi <i>→</i> After Sales</h2><ArrowLink to="/kontak">Mulai dari konsultasi</ArrowLink></section></PageShell>}
