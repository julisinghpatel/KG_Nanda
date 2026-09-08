import { useEffect, useRef } from "react";
import "./AboutCardiology.css";

export default function AboutCardiology() {
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);
  const badgeRef   = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const paraRef    = useRef(null);
  const statsRef   = useRef([]);
  const decorRef   = useRef(null);
  const pulseRef   = useRef(null);

  useEffect(() => {
    // Inject GSAP Library smoothly at execution context
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    const stScript   = document.createElement("script");
    stScript.src     = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";

    gsapScript.onload = () => document.head.appendChild(stScript);
    document.head.appendChild(gsapScript);

    stScript.onload = () => {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      // â”€â”€ INITIAL STATES (Clash-Free Isolation Layer) â”€â”€
      gsap.set(imgRef.current,     { opacity: 0, scale: 1.05, x: -50 });
      gsap.set(badgeRef.current,   { opacity: 0, y: -20, scale: 0.95 });
      gsap.set(headingRef.current, { opacity: 0, y: 50, skewY: 2 });
      gsap.set(dividerRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
      gsap.set(paraRef.current,    { opacity: 0, y: 30 });
      gsap.set(statsRef.current,   { opacity: 0, y: 40, scale: 0.95 });
      gsap.set(decorRef.current,   { opacity: 0, scale: 0.7, rotation: -20 });
      gsap.set(pulseRef.current,   { opacity: 0, scale: 0.6 });

      // â”€â”€ INTERACTIVE SCROLL TRIGGER ENGINE â”€â”€
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

          tl.to(imgRef.current, { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power3.out" })
            .to(decorRef.current, { opacity: 1, scale: 1, rotation: 0, duration: 1.1, ease: "back.out(1.2)" }, "-=0.9")
            .to(pulseRef.current, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.8")
            .to(badgeRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.6")
            .to(headingRef.current, { opacity: 1, y: 0, skewY: 0, duration: 0.85 }, "-=0.45")
            .to(dividerRef.current, { opacity: 1, scaleX: 1, duration: 0.6 }, "-=0.5")
            .to(paraRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
            .to(statsRef.current, { 
              opacity: 1, y: 0, scale: 1, duration: 0.65,
              stagger: { each: 0.12 }, ease: "back.out(1.3)" 
            }, "-=0.45");
        },
        onLeaveBack: () => {
          gsap.to(imgRef.current, { opacity: 0, scale: 1.05, x: -50, duration: 0.4 });
          gsap.to([badgeRef.current, headingRef.current, dividerRef.current, paraRef.current], { 
            opacity: 0, y: -15, duration: 0.3, stagger: 0.04 
          });
          gsap.to(statsRef.current, { 
            opacity: 0, y: 25, scale: 0.95, duration: 0.3, stagger: 0.05 
          });
          gsap.to([decorRef.current, pulseRef.current], { opacity: 0, duration: 0.3 });
        }
      });

      // â”€â”€ INFINITE MICRO-INTERACTIONS RUNTIME â”€â”€
      const heartTimeline = gsap.timeline({ repeat: -1 });
      heartTimeline.to(".cc-heart-icon-node", { scale: 1.25, duration: 0.15, ease: "power2.out" })
                   .to(".cc-heart-icon-node", { scale: 1.0, duration: 0.15, ease: "power2.in" })
                   .to(".cc-heart-icon-node", { scale: 1.18, duration: 0.12, ease: "power2.out" })
                   .to(".cc-heart-icon-node", { scale: 1.0, duration: 0.4, ease: "power2.inOut" })
                   .delay(0.8);

      gsap.to(pulseRef.current, {
        scale: 1.15, opacity: 0.4,
        duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
      
      gsap.to(decorRef.current, {
        rotation: 360, duration: 80, repeat: -1, ease: "none"
      });
    };

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
      if (document.head.contains(gsapScript)) document.head.removeChild(gsapScript);
    };
  }, []);

  

  return (
    <section className="cc-about-section" ref={sectionRef}>

      {/* â”€â”€ LEFT DIAGONAL BACKGROUND CONTROL â”€â”€ */}
      <div className="cc-bg-left-panel" ref={imgRef}>
        <img
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
          alt="Cardiology Department Care Frame"
          className="cc-panel-img"
        />
        <div className="cc-panel-overlay" />
      </div>

      {/* Right ambient blur ring */}
      <div className="cc-glow-sphere" />

      {/* Top Deco Abstract Ring Layout */}
      <div className="cc-deco-matrix" ref={decorRef}>
        <div className="cc-matrix-ring cc-mr-1" />
        <div className="cc-matrix-ring cc-mr-2" />
        <div className="cc-matrix-ring cc-mr-3" />
      </div>

      {/* Deep Bottom Ambient Soft Pulse */}
      <div className="cc-pulse-emitter" ref={pulseRef} />

      {/* â”€â”€ RIGHT RENDER DATA FRAME â”€â”€ */}
      <div className="cc-inner-layout">
        <h2 className="cc-main-heading" ref={headingRef}>
          Pioneering <span className="cc-span-accent">Advanced Cardiac</span> Care
        </h2>

        <div className="cc-flex-divider" ref={dividerRef}>
          <span className="cc-heart-icon-node">â™¥</span>
        </div>

        <p className="cc-glass-para-card" ref={paraRef}>
          At KG Nanda Hospital, we understand the profound importance of a healthy heart. 
          Our comprehensive, premium cardiac ecosystem integrates cutting-edge interventional technologies 
          with compassionate specialist monitoring to ensure your peace of mind and complete cardiovascular well-being.
        </p>

       

      </div>
    </section>
  );
}