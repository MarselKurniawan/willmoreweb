import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import entrance from "@/assets/home-room-1.jpg";
import bathroom from "@/assets/home-room-2.jpg";
import landing from "@/assets/home-room-3.jpg";
import living from "@/assets/home-room-4.jpg";
import garden from "@/assets/home-room-5.jpg";
import steelLeaf from "@/assets/home-leaf-steel.jpg";
import woodLeaf from "@/assets/home-leaf-wood.jpg";
import glassLeaf from "@/assets/home-leaf-glass.jpg";

const rooms = [
  { image: entrance, name: "Pintu utama", alt: "Fasad rumah modern dengan taman dan pintu utama", leaf: woodLeaf },
  { image: bathroom, name: "Kamar mandi", alt: "Kamar mandi dengan shower kaca dan pencahayaan hangat", leaf: steelLeaf },
  { image: landing, name: "Ruang atas", alt: "Ruang atas dengan pagar kaca dan detail kayu", leaf: woodLeaf },
  { image: living, name: "Ruang keluarga", alt: "Ruang keluarga dengan sofa dan tanaman interior", leaf: woodLeaf },
  { image: garden, name: "Teras & taman", alt: "Pintu kaca hitam di teras dengan taman hijau", leaf: glassLeaf },
] as const;

function RoomScene({ index, opening = false }: { index: number; opening?: boolean }) {
  const room = rooms[index];
  if (!room) return null;
  return <div className={`door-scene room-${index + 1}${opening ? " door-scene-opening" : ""}`}>
    <img className="room-photo" src={room.image} alt={opening ? "" : room.alt} width={1366} height={768} fetchPriority={index === 0 ? "high" : undefined} />
    {(index < 4 || opening) && <div className="room-doorway" aria-hidden="true">
      <div className="door-aperture" />
      <div className="door-leaf"><img src={room.leaf} alt="" /><span className="door-edge" /></div>
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

  useEffect(() => {
    let active = true;
    Promise.all(rooms.map(({ image }) => new Promise<void>((resolve, reject) => {
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

  const complete = () => { busy.current = false; setOutgoing(null); };

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
    {outgoing !== null && <div className="outgoing-room" onAnimationEnd={(event) => { if (event.animationName === "enter-room") complete(); }}><RoomScene index={outgoing} opening /></div>}
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