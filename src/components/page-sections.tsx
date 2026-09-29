import { ArrowDownRight } from "lucide-react";

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><div className="page-intro-grid"><h1>{title}</h1><p>{text}</p></div><ArrowDownRight className="intro-arrow" /></section>;
}

export function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="section-heading"><div><span>{number}</span><span>{label}</span></div><h2>{title}</h2></div>;
}
