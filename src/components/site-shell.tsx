import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { SocialLinks } from "@/components/social-links";
import logoUrl from "@/assets/logo-willmore.jpg";

const navigation = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang" },
  { to: "/produk", label: "Produk" },
  { to: "/layanan", label: "Layanan" },
  { to: "/artikel", label: "Artikel" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={overlay ? "site-header site-header-overlay" : "site-header"}>
      <Link to="/" aria-label="Willmore, kembali ke beranda" className="brand-link">
        <img src={logoUrl} alt="Willmore High Quality Door Specialist" className="brand-logo" width={420} height={82} />
      </Link>
      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navigation.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "nav-active" }}>{item.label}</Link>)}
      </nav>
      <Link to="/kontak" className="header-cta">Mulai Konsultasi <ArrowUpRight size={15} /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-nav">
          {navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-kicker">Pintu berkualitas sejak 2002</div>
      <div className="footer-main">
        <h2>Temukan pintu yang tepat untuk ruang Anda.</h2>
        <Link to="/kontak" className="text-link">Mulai konsultasi <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-bottom">
        <img src={logoUrl} alt="Willmore" width={360} height={70} />
        <div><Link to="/produk">Produk</Link><Link to="/layanan">Layanan</Link><Link to="/tentang">Tentang</Link><Link to="/artikel">Artikel</Link></div>
        <SocialLinks variant="dark" />
        <p>© 2026 Willmore<br />High Quality Door Specialist</p>
      </div>
    </footer>
  );
}

export function PageShell({ children, overlayHeader = false }: { children: React.ReactNode; overlayHeader?: boolean }) {
  return <><Header overlay={overlayHeader} /><main>{children}</main><Footer /></>;
}

export function ArrowLink({ to, children }: { to: "/tentang" | "/produk" | "/layanan" | "/kontak"; children: React.ReactNode }) {
  return <Link to={to} className="text-link">{children}<ArrowUpRight size={18} /></Link>;
}
