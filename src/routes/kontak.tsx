import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";
import { PageIntro } from "@/components/page-sections";
import { SocialLinks } from "@/components/social-links";
import { whatsappNumber } from "@/lib/site-content";
export const Route = createFileRoute("/kontak")({ head: () => ({ meta: [
  { title: "Kontak Willmore | Konsultasi Kebutuhan Pintu" }, { name: "description", content: "Ceritakan kebutuhan pintu rumah atau proyek Anda kepada Willmore untuk memulai konsultasi." },
  { property: "og:title", content: "Konsultasi Pintu dengan Willmore" }, { property: "og:description", content: "Mulai pembicaraan tentang material, ukuran, desain, dan pemasangan pintu." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ContactPage });
function ContactPage(){
  const sendToWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const contact = String(formData.get("contact") ?? "").trim();
    const need = String(formData.get("need") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const text = [
      "Halo Willmore, saya ingin berkonsultasi mengenai pintu.",
      "",
      `Nama: ${name}`,
      `Kontak: ${contact}`,
      `Kebutuhan: ${need}`,
      `Detail proyek: ${message}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return <PageShell><PageIntro eyebrow="Mulai Percakapan" title="Ceritakan pintu yang Anda butuhkan." text="Sampaikan jenis ruang, material yang diminati, perkiraan ukuran, dan kebutuhan pemasangan. Tim Willmore akan membantu mengarahkan langkah berikutnya."/><section className="contact-layout"><form onSubmit={sendToWhatsApp}><label>Nama<input name="name" placeholder="Nama Anda" required /></label><label>Kontak<input name="contact" placeholder="Nomor WhatsApp atau email" required /></label><label>Kebutuhan<select name="need" defaultValue="" required><option value="" disabled>Pilih kebutuhan</option><option>Pintu Baja</option><option>Pintu Kayu</option><option>Pintu Aluminium</option><option>Pintu PVC / UPVC</option><option>Konsultasi Umum</option></select></label><label>Ceritakan proyek Anda<textarea name="message" placeholder="Jenis ruang, ukuran perkiraan, lokasi proyek, dan kebutuhan lainnya" rows={5} required/></label><button type="submit" className="primary-button">Kirim ke WhatsApp</button><small>Setelah dikirim, WhatsApp akan terbuka dengan detail konsultasi Anda.</small></form><aside><span>/01</span><h2>Agar konsultasi lebih terarah</h2><ul><li>Siapkan perkiraan ukuran bukaan</li><li>Sebutkan lokasi penggunaan pintu</li><li>Pilih material yang diminati</li><li>Ceritakan kebutuhan pemasangan</li></ul><span className="social-heading">/02 Ikuti Willmore</span><SocialLinks /></aside></section></PageShell>}
