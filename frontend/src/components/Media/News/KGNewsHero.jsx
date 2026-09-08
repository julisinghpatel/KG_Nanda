import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./KGNewsHero.css";

const KGNewsHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background fade & subtle scale up (Cinematic effect)
      gsap.fromTo(
        ".kgn-hero__bg-image",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
      );

      // Dark Premium Overlay Fade
      gsap.from(".kgn-hero__overlay", {
        opacity: 0,
        duration: 1.5,
        ease: "power1.out"
      });

      // Left Content Entry (Smooth Stagger from left)
      tl.from(".kgn-hero__badge", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(".kgn-hero__title", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      }, "-=0.4")
      .from(".kgn-hero__desc", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.5")
      .from(".kgn-hero__btn", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.5)",
      }, "-=0.3");

      // Right Side Floating Media Card entry
      gsap.from(".kgn-hero__media-card", {
        scale: 0.8,
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4
      });

      // Continuous Fluid Floating Motion for the Right Card
      gsap.to(".kgn-hero__media-card", {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="kgn-hero" ref={heroRef}>
      {/* FULL HD BACKGROUND IMAGE LAYER */}
      <div className="kgn-hero__bg-image" />
      
      {/* PREMIUM GRADIENT OVERLAY (For clear text readability) */}
      <div className="kgn-hero__overlay" />

      <div className="kgn-hero__container">
        {/* LEFT COLUMN: CRISP EDITORIAL CONTENT */}
        <div className="kgn-hero__content">
          <div className="kgn-hero__badge">
            <span className="kgn-badge__dot"></span>
            <span className="kgn-badge__text">KG NANDA HOSPITAL MEDIA</span>
          </div>

          <h1 className="kgn-hero__title">
            Caring for Life, <br />
            <span className="text-highlight--orange">Every Single Day</span>
          </h1>

          <p className="kgn-hero__desc">
            KG Nanda Hospital brings the latest medical updates, expert health awareness 
            programs, and cutting-edge innovations to keep you informed and healthy.
          </p>

          <div className="kgn-hero__actions">
            <button className="kgn-hero__btn btn-kgn--primary">
              Read Latest News
              <span className="kgn-btn-arrow">→</span>
            </button>
            <button className="kgn-hero__btn btn-kgn--outline">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: ULTRA-PREMIUM FLOATING MEDICAL CARD */}
       
      </div>
    </section>
  );
};

export default KGNewsHero;