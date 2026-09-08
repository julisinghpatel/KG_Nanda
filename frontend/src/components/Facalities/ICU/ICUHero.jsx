import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ICUHero.css";

const images = [
  "/Department/ICUH.jpg",
  "/Department/ICUhh.jpg",
];

export default function ICUHero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // Cinema Background Slideshow â€” crossfade with no dark gap
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((p) => (p + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  // Content Entrance Trigger
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="llh-icu__hero-wrapper relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#07111f]">
      
      {/* â”€â”€ CINEMA BACKGROUND SLIDESHOW (Crossfade: prev stays visible underneath) â”€â”€ */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center select-none transition-opacity duration-[1500ms] ease-in-out
            ${i === current ? "opacity-100 z-10" : i === prev ? "opacity-100 z-[5]" : "opacity-0 z-0"}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* â”€â”€ MULTI-LAYER PREMIUM OVERLAYS â”€â”€ */}
      {/* Balanced Cinematic Vignette Overlay (No harsh shapes/colors) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-black/40 backdrop-brightness-[0.85]" />
      
      {/* Subtle Radial Glow from Center */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(2,172,240,0.2)_0%,transparent_75%)]" />

      {/* Digital Film Grain Overlay */}
      <div className="llh-icu__grain absolute inset-0 z-20 pointer-events-none opacity-[0.03]" />

      {/* â”€â”€ CORE CONTENT AREA (GLASSMORPHISM) â”€â”€ */}
      <div 
        className={`relative z-30 flex flex-col items-center text-center px-6 max-w-5xl mx-auto gap-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
      
        {/* Premium Typography Headline */}
        <h1 className="text-white font-extrabold tracking-tight leading-[1.15] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Advanced <span className="text-[#02acf0] relative inline-block drop-shadow-[0_0_35px_rgba(2,172,240,0.4)]">Critical Care</span>
          <br />
          When Every Second <span className="llh-icu__underline relative inline-block text-[#9ce1f1]">Counts</span>
        </h1>

        {/* Subtitle / Descriptive Text */}
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl drop-shadow-sm balance">
          KG Nanda's premier ICU unites world-class therapeutic tech, empathetic specialist panels, and real-time monitoring matricesâ€”safeguarding lives at their most fragile threshold.
        </p>

      </div>

      {/* â”€â”€ PREMIUM MANUAL INDICATORS â”€â”€ */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex gap-4 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer border-none
              ${idx === current ? "w-10 bg-[#02acf0] shadow-[0_0_12px_#02acf0]" : "w-3 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Switch to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}