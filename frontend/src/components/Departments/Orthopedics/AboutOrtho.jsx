import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutOrtho.css";

// GSAP Plugins register karna zaroori hai scroll animations ke liye
gsap.registerPlugin(ScrollTrigger);

const AboutOrtho = () => {
  const sectionRef = useRef(null);
  const leftMediaRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    // Premium reveal timeline jab user scroll karke is section par aaye
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Jab section viewport ke 75% par aaye tab animate ho
        toggleActions: "play none none none"
      }
    });

    // 1. Right side content staggered animation
    tl.fromTo(
      rightTextRef.current.querySelectorAll(".about-ortho-anim"),
      { y: 45, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.15, ease: "power4.out" }
    );

    // 2. Left side multi-image grid block animation
    tl.fromTo(
      leftMediaRef.current,
      { x: -60, opacity: 0, scale: 0.96 },
      { x: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" },
      "-=1.2"
    );

    // 3. Floating Micro-features staggered slide in
    tl.fromTo(
      rightTextRef.current.querySelectorAll(".ortho-feature-pill"),
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "back.out(1.2)" },
      "-=0.6"
    );

    // Infinite float effect for the secondary image overlapping box
    gsap.to(".about-ortho-floating-box", {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <section className="about-ortho-premium-section" ref={sectionRef}>
      {/* Subtle brand background elements for premium feel */}
      <div className="about-ortho-bg-glow"></div>

      <div className="about-ortho-container">
        <div className="about-ortho-grid-system">
          
          {/* Left Column: Premium Layered Image Composites */}
          <div className="about-ortho-visual-side" ref={leftMediaRef}>
            <div className="about-ortho-image-composition">
              
              {/* Primary High-End Doctor Patient Consultation Image */}
              <div className="about-ortho-main-img-holder">
                <img 
                  src="/Department/orthoA.jpg" 
                  alt="Advanced Orthopedic Consultation" 
                  className="about-ortho-hero-img"
                />
              </div>


              {/* Decorative Geometric accent line */}
              <div className="about-ortho-geometric-line"></div>
            </div>
          </div>

          {/* Right Column: Dynamic Informational Copywriting */}
          <div className="about-ortho-content-side" ref={rightTextRef}>
            
           

            <h2 className="about-ortho-section-title about-ortho-anim">
              Pioneering the Future of <br />
              <span className="about-ortho-gradient-highlight">Bone & Joint Healthcare</span>
            </h2>

            <p className="about-ortho-main-desc about-ortho-anim">
              Hamara Orthopedics Department comprehensive care pradan karta hai jo medical expertise ko modern technology ke sath jodta hai. Hum arthritis, sports injuries, spine problems aur complex fractures ke ilaaj ke liye cutting-edge treatment options aur personalized rehabilitation provide karte hain.
            </p>

            <p className="about-ortho-sub-desc about-ortho-anim">
              Robotic-assisted surgeries aur minimally invasive techniques ka upyog karke, hamara lakshya aapki mobility ko tezi se restore karna aur aapko ek dard-mukt (pain-free) active jivan vapis dena hai.
            </p>

            {/* Micro Pillars Feature Checklist */}
            <div className="about-ortho-features-list">
              
              <div className="ortho-feature-pill">
                <div className="ortho-pill-bullet"></div>
                <div className="ortho-pill-details">
                  <h4>Robotic Joint Replacement</h4>
                  <p>Maximum precision, faster recovery times & minimal tissue damage.</p>
                </div>
              </div>

              <div className="ortho-feature-pill">
                <div className="ortho-pill-bullet ortho-bullet-orange"></div>
                <div className="ortho-pill-details">
                  <h4>Sports Medicine & Arthroscopy</h4>
                  <p>Advanced keyhole procedures for ligament reconstructions.</p>
                </div>
              </div>

              <div className="ortho-feature-pill">
                <div className="ortho-pill-bullet ortho-bullet-blue"></div>
                <div className="ortho-pill-details">
                  <h4>Complex Trauma Management</h4>
                  <p>24/7 emergency response system for critical bone fractures.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOrtho;