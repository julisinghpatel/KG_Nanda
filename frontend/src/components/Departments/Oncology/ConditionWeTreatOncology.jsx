
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaLungs, 
  FaRibbon, 
  FaProstate, 
  FaStethoscope, 
  FaShieldVirus, 
  FaUserAide 
} from "react-icons/fa";
import "./ConditionWeTreatOncology.css";

gsap.registerPlugin(ScrollTrigger);

// Highly structured clinical data architecture for easy scalability
const cancerConditions = [
  {
    id: "01",
    title: "Breast Cancer",
    description: "Advanced dynamic screening, genetic mapping, personalized breast-conserving surgeries aur micro-targeted radiation therapies.",
    icon: <FaRibbon />,
    tagColor: "cond-icon-indigo"
  },
  {
    id: "02",
    title: "Lung Cancer",
    description: "Next-gen robotic-assisted lobectomy, specialized molecular profiling, targeted immunotherapy aur precise stereotactic radiation protocols.",
    icon: <FaLungs />,
    tagColor: "cond-icon-cyan"
  },
  {
    id: "03",
    title: "Prostate Cancer",
    description: "High-definition dynamic pelvic mapping, minimally invasive laparoscopic prostatectomy aur custom intensity-modulated radiotherapy.",
    icon: <FaProstate />,
    tagColor: "cond-icon-orange"
  },
  {
    id: "04",
    title: "Gastrointestinal Oncology",
    description: "Comprehensive treatments for stomach, colorectal, aur esophageal cancers protocols ke sath advanced surgical resections.",
    icon: <FaStethoscope />,
    tagColor: "cond-icon-blue"
  },
  {
    id: "05",
    title: "Hematologic Malignancies",
    description: "Expert level leukemia, lymphoma, aur myeloma evaluation models ke sath state-of-the-art biological aur targeted drug treatments.",
    icon: <FaShieldVirus />,
    tagColor: "cond-icon-cyan"
  },
  {
    id: "06",
    title: "Head & Neck Cancer",
    description: "Multidisciplinary reconstruction surgeries, highly targeted chemo-radiation setups, aur dynamic post-recovery speech rehab.",
    icon: <FaUserAide />,
    tagColor: "cond-icon-indigo"
  }
];

const ConditionWeTreatOncology = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 76%",
          toggleActions: "play none none none"
        }
      });

      // 1. Structural Header Panel elements elegant reveal
      tl.fromTo(".cond-onco-reveal-head", 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      // 2. High-End 3D stagger entry for all medical condition cards grid
      tl.fromTo(".cond-onco-grid-card", 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.1, stagger: 0.12, ease: "power4.out" },
        "-=0.5"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cond-onco-premium-scope" ref={containerRef}>
      {/* Decorative Luxury Backlit Atmosphere Elements */}
      <div className="cond-onco-ambient-glow-top"></div>
      <div className="cond-onco-ambient-glow-bottom"></div>

      <div className="cond-onco-viewport">
        
        {/* Core Header System Block */}
        <div className="cond-onco-header-panel">
          <div className="cond-onco-badge-capsule cond-onco-reveal-head">
            <span className="cond-onco-pulse-node"></span>
            <span className="cond-onco-badge-label">Clinical Specialities</span>
          </div>
          <h2 className="cond-onco-main-title cond-onco-reveal-head">
            Oncology Conditions <span>We Treat</span>
          </h2>
          <p className="cond-onco-subtitle cond-onco-reveal-head">
            Hum provide karte hain evidence-based therapeutic workflows aur advanced clinical protocols har stage ke complex cancerous conditions ke treatment ke liye.
          </p>
          <div className="cond-onco-decorative-line cond-onco-reveal-head"></div>
        </div>

        {/* 3-Column Premium Interactive Card Grid Matrix */}
        <div className="cond-onco-cards-matrix">
          {cancerConditions.map((condition) => (
            <div className="cond-onco-grid-card" key={condition.id}>
              
              {/* Card micro-glow overlay rail */}
              <div className="cond-onco-card-rail-highlight"></div>
              
              {/* Top Row: Absolute Numbering & Icon Box Setup */}
              <div className="cond-onco-card-top-bar">
                <div className={`cond-onco-icon-wrapper ${condition.tagColor}`}>
                  {condition.icon}
                </div>
                <span className="cond-onco-index-number">{condition.id}</span>
              </div>

              {/* Middle Row: Content Typography Panel */}
              <div className="cond-onco-card-body">
                <h3 className="cond-onco-card-title">{condition.title}</h3>
                <p className="cond-onco-card-desc">{condition.description}</p>
              </div>

              {/* Bottom Row: Micro-Link Interactive Anchor System */}
              <div className="cond-onco-card-footer">
                <span className="cond-onco-interactive-link">
                  <span>Learn Treatment Protocol</span>
                  <svg className="cond-onco-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConditionWeTreatOncology;