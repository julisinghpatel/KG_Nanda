import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaBone,
  FaUserInjured,
  FaChild,
  FaRunning,
  FaArrowsAlt,
  FaXRay,
  FaHeartbeat,
  FaWalking,
  FaBandAid,
  FaDumbbell,
  FaProcedures
} from "react-icons/fa";

import "./OrthopaedicConditions.css";

gsap.registerPlugin(ScrollTrigger);

const conditions = [
  { icon: <FaBone />, title: "Joint Disorders", desc: "Treatment for arthritis and joint degeneration." },
  { icon: <FaArrowsAlt />, title: "Spinal Disorders", desc: "Care for disc problems and spine pain." },
  { icon: <FaUserInjured />, title: "Fractures and Trauma", desc: "Advanced treatment for bone injuries." },
  { icon: <FaChild />, title: "Pediatric Orthopaedics", desc: "Bone and joint care for children." },
  { icon: <FaRunning />, title: "Joint Pain & Stiffness", desc: "Relief for mobility and stiffness problems." },
  { icon: <FaHeartbeat />, title: "Major Joint Disorders", desc: "Treatment for Back, Hip, Knee & Shoulder problems." },
  { icon: <FaXRay />, title: "Spinal Deformities", desc: "Scoliosis and spine curvature diagnosis and care." },
  { icon: <FaWalking />, title: "Bone Fractures", desc: "Fast recovery systems for broken bones." },
  { icon: <FaBandAid />, title: "Limb Length Issues", desc: "Advanced solutions for limb length discrepancies." },
  { icon: <FaBone />, title: "Cartilage Damage", desc: "Advanced cartilage repair clinical treatments." },
  { icon: <FaDumbbell />, title: "Overuse Injuries", desc: "Sports injury management and stress treatment." },
  { icon: <FaProcedures />, title: "Hip & Knee Replacement", desc: "Modern premium joint replacement surgeries." }
];

const OrthopaedicConditions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const headingElements = sectionEl.querySelectorAll(".cond-premium-reveal");
    const cards = sectionEl.querySelectorAll(".cond-card-wrapper");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top 78%",
        toggleActions: "play none none none"
      }
    });

    // Heading sequence reveal
    tl.fromTo(headingElements,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Grid cards elegant staggered rise
    tl.fromTo(cards,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" },
      "-=0.6"
    );

  }, []);

  return (
    <section className="cond-premium-section-scope" ref={sectionRef}>
      {/* Structural Subtle Abstract Gradients to uplift premium aesthetic */}
      <div className="cond-ambient-glow-left"></div>
      <div className="cond-ambient-glow-right"></div>

      <div className="cond-max-viewport-container">
        
        {/* Header Block */}
        <div className="cond-header-block text-center">
         
          <h2 className="cond-main-heading cond-premium-reveal">
            Conditions We <span className="cond-gradient-highlight">Treat With Precision</span>
          </h2>
          <p className="cond-sub-heading-desc cond-premium-reveal">
            Experience world-class therapeutic and surgical interventions for an active, pain-free life.
          </p>
        </div>

        {/* Dynamic Cards Grid Matrix */}
        <div className="cond-cards-grid-matrix">
          {conditions.map((item, index) => (
            <div className="cond-card-wrapper" key={index}>
              {/* Internal Decorative Glass Accent Borders */}
              <div className="cond-card-border-glow-layer"></div>
              
              <div className="cond-card-inner-body">
                <div className="cond-icon-sphere-housing">
                  <div className="cond-icon-pulse-wave"></div>
                  <span className="cond-actual-icon">{item.icon}</span>
                </div>
                
                <h3 className="cond-card-title">{item.title}</h3>
                <p className="cond-card-description">{item.desc}</p>
                
                {/* Premium Interactive Subtle Arrow Indicator */}
                <div className="cond-card-action-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OrthopaedicConditions;