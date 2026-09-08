import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "./OHero.css";

const OrthopedicsHero = () => {
  const navigate = useNavigate();
  
  // GSAP Animation Refs
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const bgImageOverlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Background image zoom-in premium entrance
    tl.fromTo(bgImageOverlayRef.current, 
      { opacity: 0, scale: 1.08 }, 
      { opacity: 1, scale: 1, duration: 2.5 }
    );

    // 2. Left content elements cascading micro-interaction
    tl.fromTo(
      leftContentRef.current.querySelectorAll(".ortho-anim-item"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.3, stagger: 0.12 },
      "-=1.8"
    );
  }, []);

  return (
    <section className="ortho-premium-hero-scope" ref={sectionRef}>
      
      {/* Dynamic Background Image Canvas (No Pure Black Overlay) */}
      <div 
        className="ortho-premium-bg-image" 
        ref={bgImageOverlayRef}
        style={{ backgroundImage: `url('/Department/orthoHero.jpg')` }}
      ></div>
      
      {/* Architectural Multi-Color Glow Engine */}
      <div className="ortho-mesh-gradient-canvas"></div>
      <div className="ortho-vignette-overlay"></div>

      <div className="ortho-hero-max-viewport">
        <div className="ortho-hero-dual-grid">
          
          {/* Left Block: Premium Typography & CTAs */}
          <div className="ortho-hero-typography-block" ref={leftContentRef}>
            
            <h1 className="ortho-hero-giant-title ortho-anim-item">
              Advanced Joint & <br />
              <span className="ortho-luxury-gradient-text">Spine Reconstruction</span>
            </h1>
            
            <p className="ortho-hero-sub-paragraph ortho-anim-item">
              Redefining clinical excellence through computer-assisted robotic navigation, 
              minimally invasive joint replacements, and high-precision trauma care.
            </p>


           
          </div>

         

        </div>
      </div>

      {/* Modern Wave Architectural Section Transition */}
      <div className="ortho-architectural-curve-base">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="ortho-svg-fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default OrthopedicsHero;