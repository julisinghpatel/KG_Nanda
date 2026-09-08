import React, { useEffect, useRef } from "react";
import "./SurgeryHero.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
// Lucide react verified icons layer
import { ShieldAlert, ChevronRight, Activity } from "lucide-react";

const SurgeryHero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP memory clean states deployment
    gsap.set(".animate-fade-up", { y: 40, opacity: 0 });
    gsap.set(".animate-scale-in", { scale: 0.9, opacity: 0 });
    gsap.set(".animate-stat-item", { y: 20, opacity: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Orchestrated premium staggered sequence pipelines
      tl.to(".animate-fade-up", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15
      })
      .to(".animate-scale-in", {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.5)"
      }, "-=0.6")
      .to(".animate-stat-item", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.4");
    }, heroRef);

    return () => ctx.revert(); // Context safety cleanup trace
  }, []);

  return (
    <section className="surgery-hero" ref={heroRef}>
      {/* Structural Ambient Mesh Gradients */}
      <div className="surgery-hero-overlay"></div>

      <div className="surgery-hero-content">
        
       

        {/* Scaled Premium Title Headings */}
        <h1 className="surgery-hero-title animate-fade-up">
          Precision Systems.<br />
          <span className="text-gradient-clinical">Advanced Surgical Care.</span>
        </h1>

        {/* Balanced Descriptive Paragraph */}
        <p className="surgery-hero-subtitle animate-fade-up">
          Expert senior surgeons mapped with next-generation operating infrastructure. Delivering safe, precise minimally invasive outcomes centered heavily on accelerated biological healing.
        </p>

        

       

      </div>

      {/* Advanced Premium Curve Separation Vector */}
      <div className="surgery-hero-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V1200H1200V195.83C1124.4,200.83,1051.45,110,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default SurgeryHero;