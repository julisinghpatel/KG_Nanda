import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRibbon, FaUserShield, FaNotesMedical, FaPhoneAlt } from "react-icons/fa";
import "./OncologyHero.css";

const OncologyHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Initial soft layout setup and fluid entry
      tl.fromTo(".onco-hero-reveal", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
      );

      // 2. Right side image canvas mesh dynamic scale-in
      tl.fromTo(".onco-hero-image-canvas", 
        { scale: 0.9, opacity: 0, x: 50 }, 
        { scale: 1, opacity: 1, x: 0, duration: 1.4, ease: "power3.out" },
        "-=1.0"
      );

      // 3. Staggered float entry for lower analytical trust metrics
      tl.fromTo(".onco-hero-stat-pill", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.12, ease: "back.out(1.5)" },
        "-=0.6"
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="onco-hero-premium-scope" ref={heroRef}>
      {/* Visual background ambient lightning structures */}
      <div className="onco-hero-blob-1"></div>
      <div className="onco-hero-blob-2"></div>

      <div className="onco-hero-container">
        <div className="onco-hero-grid-matrix">
          
          {/* Left Column: Clinical Title and Information Systems */}
          <div className="onco-hero-content-block">
            
           

            <h1 className="onco-hero-main-title onco-hero-reveal">
              Compassionate Care, <br />
              <span className="onco-hero-gradient-text">Advanced Cancer Cure</span>
            </h1>

            <p className="onco-hero-description onco-hero-reveal">
              KG Nanda Hospital me hum incorporate karte hain advanced robotic surgery, precision immunotherapy, aur personalized chemotherapy protocols taaki har patient ko mile ek naya hope aur edge-cutting cancer treatment.
            </p>

            {/* Premium Interactive Action CTA Suite */}
            <div className="onco-hero-cta-cluster onco-hero-reveal">
              <button className="onco-hero-btn-primary">
                <span className="onco-hero-btn-shimmer"></span>
                Book Cancer Screening
              </button>
            
            </div>

           </div>

          {/* Right Column: Premium Asymmetric Image Canvas Section */}
          <div className="onco-hero-image-block">
            <div className="onco-hero-image-canvas">
              
              {/* Layered decorative outline panels for high-end look */}
              <div className="onco-hero-canvas-border-accent"></div>
              
              <div className="onco-hero-portrait-frame">
                <img 
                  src="/Department/Oncology/OncoH.jpg" // Replace with your oncology department image or banner path
                  alt="Oncology Specialist Department" 
                  className="onco-hero-doctor-img"
                />
                <div className="onco-hero-image-vignette"></div>
              </div>

             

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OncologyHero;