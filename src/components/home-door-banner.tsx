import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import entrance from "@/assets/home-room-1.jpg";
import bathroom from "@/assets/home-room-2.jpg";
import landing from "@/assets/home-room-3.jpg";
import living from "@/assets/home-room-4.jpg";
import garden from "@/assets/home-room-5.jpg";
import glassLeaf from "@/assets/home-leaf-glass.jpg";
import emily from "@/assets/EMILY_DOUBLE_DOOR.webp";
import emilyLeaf from "@/assets/EMILY_DOUBLE_DOOR-leaf-fixed.webp";
import venetta from "@/assets/VENETTA.webp";
import venettaLeaf from "@/assets/VENETTA-leaf.webp";
import vassa from "@/assets/VASSA.webp";
import vassaLeaf from "@/assets/VASSA-leaf.webp";
import up207 from "@/assets/UP_207.webp";
import up207Leaf from "@/assets/UP_207-leaf.webp";

const rooms = [
  { image: entrance, name: "Pintu Utama", alt: "Fasad rumah modern dengan taman dan pintu utama", scene: 1, frame: emily, leaf: emilyLeaf, double: true },
  { image: living, name: "Ruang Keluarga", alt: "Ruang keluarga dengan sofa dan tanaman interior", scene: 4, frame: venetta, leaf: venettaLeaf, double: false },
  { image: landing, name: "Ruang Atas", alt: "Ruang atas dengan pagar kaca dan detail kayu", scene: 3, frame: vassa, leaf: vassaLeaf, double: false },
  { image: bathroom, name: "Kamar Mandi", alt: "Kamar mandi dengan shower kaca dan pencahayaan hangat", scene: 2, frame: up207, leaf: up207Leaf, double: false },
  { image: garden, name: "Teras & Taman", alt: "Pintu kaca hitam di teras dengan taman hijau", scene: 5, frame: glassLeaf, leaf: glassLeaf, double: false },
] as const;

function RoomScene({ index, opening = false }: { index: number; opening?: boolean }) {
  const room = rooms[index];
  if (!room) return null;
  return <div className={`door-scene room-${room.scene}${opening ? " door-scene-opening" : ""}`}>
    <img className="room-photo" src={room.image} alt={opening ? "" : room.alt} width={1366} height={768} fetchPriority={index === 0 ? "high" : undefined} />
    {(index < 4 || opening) && <div className={`room-doorway${room.double ? " double-door" : ""}`} aria-hidden="true">
      <img className="door-product-frame" src={room.frame} alt="" />
      <div className="door-opening">
        <div className="door-leaf"><img src={room.leaf} alt="" /><span className="door-edge" /></div>
        {room.double && <div className="door-leaf door-leaf-right"><img src={room.leaf} alt="" /><span className="door-edge" /></div>}
      </div>
    </div>}
  </div>;
}

export function HomeDoorBanner() {
  const [current, setCurrent] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const busy = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const outgoingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outgoing === null) return;
    const element = outgoingRef.current;
    const doorway = element?.querySelector(".door-opening");
    if (!element || !doorway) { busy.current = false; setOutgoing(null); return; }
    const bounds = element.getBoundingClientRect();
    const door = doorway.getBoundingClientRect();
    const scale = Math.max(bounds.width / door.width, bounds.height / door.height) * 1.08;
    const x = (bounds.left + bounds.width / 2 - door.left - door.width / 2) * scale;
    const y = (bounds.top + bounds.height / 2 - door.top - door.height / 2) * scale;
    const easing = "cubic-bezier(.45,.05,.18,1)";
    const zoom = element.animate([
      { transform: "translate(0, 0) scale(1)" },
      { transform: `translate(${x}px, ${y}px) scale(${scale})` },
    ], { duration: 2800, easing, fill: "forwards" });
    const fade = element.animate([
      { opacity: 1, offset: 0 },
      { opacity: 1, offset: 0.55 },
      { opacity: 0, offset: 1 },
    ], { duration: 2800, easing: "ease-in", fill: "forwards" });
    zoom.onfinish = () => { busy.current = false; setOutgoing(null); };
    return () => { zoom.cancel(); fade.cancel(); };
  }, [outgoing]);

  useEffect(() => {
    let active = true;
    Promise.all([...new Set(rooms.flatMap(({ image, frame, leaf }) => [image, frame, leaf]))].map((image) => new Promise<void>((resolve, reject) => {
      const photo = new Image();
      photo.onload = () => resolve();
      photo.onerror = () => reject(new Error("Room photo unavailable"));
      photo.src = image;
    }))).then(() => { if (active) setReady(true); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, []);

  const changeRoom = (direction: number) => {
    if (busy.current || !ready) return;
    const next = current + direction;
    if (next < 0 || next >= rooms.length) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      busy.current = true;
      setOutgoing(current);
    }
    setCurrent(next);
  };

  return <section className={`hero door-banner${outgoing !== null ? " is-entering" : ""}`} aria-roledescription="carousel" aria-label="Ruangan Willmore" onTouchStart={(event) => {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  }} onTouchEnd={(event) => {
    const start = touchStart.current;
    const end = event.changedTouches[0];
    touchStart.current = null;
    if (start && end && Math.abs(end.clientX - start.x) > 60 && Math.abs(end.clientX - start.x) > Math.abs(end.clientY - start.y)) changeRoom(end.clientX < start.x ? 1 : -1);
  }}>
    <div className="room-background" key={current}><RoomScene index={current} /></div>
    {outgoing !== null && <div className="outgoing-room" ref={outgoingRef}><RoomScene index={outgoing} opening /></div>}
    <div className="hero-shade" />
    <div className="door-banner-copy"><p className="eyebrow">Pintu berkualitas sejak 2002</p><Link to="/kontak" className="hero-link">Mulai konsultasi <ArrowUpRight size={17} /></Link></div>
    <h1>Willmore<sup>®</sup></h1>
    <div className="door-navigation">
      <div className="room-caption" aria-live="polite" aria-atomic="true"><span>{String(current + 1).padStart(2, "0")} / 05</span><p>{rooms[current]?.name}</p></div>
      <div className="door-arrows">
        <Button variant="ghost" size="icon" className="door-nav-button" title="Ruangan sebelumnya" aria-label="Ruangan sebelumnya" disabled={current === 0 || outgoing !== null || !ready} onClick={() => changeRoom(-1)}><ArrowLeft /></Button>
        <Button variant="ghost" size="icon" className="door-nav-button" title="Ruangan berikutnya" aria-label="Ruangan berikutnya" disabled={current === rooms.length - 1 || outgoing !== null || !ready} onClick={() => changeRoom(1)}><ArrowRight /></Button>
      </div>
      {failed && <span className="room-load-error" role="alert">Foto belum termuat. Muat ulang halaman.</span>}
    </div>
  </section>;
}