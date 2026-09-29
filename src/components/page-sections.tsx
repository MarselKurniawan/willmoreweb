import { ArrowDownRight, ArrowUpRight, ShoppingBag } from "lucide-react";
import { faqs, marketplaces } from "@/lib/site-content";

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><div className="page-intro-grid"><h1>{title}</h1><p>{text}</p></div><ArrowDownRight className="intro-arrow" /></section>;
}

export function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="section-heading"><div><span>{number}</span><span>{label}</span></div><h2>{title}</h2></div>;
}

export function MarketplaceBanner() {
  return <section className="marketplace-banner">
    <div className="marketplace-copy"><p className="eyebrow">Belanja Online</p><h2>Temukan produk Willmore di marketplace resmi.</h2></div>
    <div className="marketplace-links">
      {marketplaces.map((marketplace) => <a key={marketplace.name} href={marketplace.url} target="_blank" rel="noreferrer" className={`marketplace-link ${marketplace.className}`} aria-label={`Belanja Willmore di ${marketplace.name}`}><ShoppingBag size={20} /><span>{marketplace.name}</span><ArrowUpRight size={20} /></a>)}
    </div>
  </section>;
}

export function FaqSection({ number = "03" }: { number?: string }) {
  return <section className="section-pad faq-section">
    <SectionHeading number={number} label="Pertanyaan Umum" title="Hal penting sebelum memilih pintu." />
    <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
  </section>;
}
