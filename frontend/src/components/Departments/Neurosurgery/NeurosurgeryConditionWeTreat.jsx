import { useLayoutEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./NeurosurgeryConditionWeTreat.css";

gsap.registerPlugin(ScrollTrigger);

export default function NeurosurgeryConditionWeTreat() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const conditionsData = [
    {
      title: "Brain & Cranial Tumors",
      desc: "Comprehensive micro-resection and neuro-endoscopic treatments for complex gliomas, meningiomas, skull-base pathologies, and acoustic neuromas.",
      caption: "Advanced 3D Image-Guided Cranial Mapping Suite",
      image: "/Department/Neurosurgery/Brain & Cranial Tumors.jpg"
    },
    {
      title: "Spinal Degenerative Disorders",
      desc: "Specialized corrections for herniated discs, spinal stenosis, spondylolisthesis, and complex spinal fractures via targeted keyhole entry systems.",
      caption: "High-Definition Robotic Spinal Cord Tracking Systems",
      image: "/Department/Neurosurgery/Spinal Degenerative Disorders.jpg"
    },
    {
      title: "Cerebrovascular Pathologies",
      desc: "Emergency micro-clipping and advanced endovascular embolization routines for treating brain aneurysms and arteriovenous malformations (AVMs).",
      caption: "Intraoperative Contrast Digital Angiography Array",
      image: "/Department/Neurosurgery/Cerebrovascular Pathologies.jpg"
    },
    {
      title: "Trigeminal Neuralgia & Epilepsy",
      desc: "Minimally invasive microvascular decompression (MVD) and specialized vagus nerve stimulator implants to break chronic neuro-pain triggers.",
      caption: "Real-Time Neural Mapping Sensory Feedback Node",
      image: "/Department/Neurosurgery/Trigeminal Neuralgia & Epilepsy.jpg"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Strict Initialization to Block Flash Shifts
      gsap.set([".nct-section-header", ".nct-condition-strip", ".nct-visual-preview-rack"], {
        opacity: 0,
        y: 40
      });

      // Header Entry Animation Trigger
      gsap.to(".nct-section-header", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        }
      });

      // Left Column Items Reveal Stagger
      gsap.to(".nct-condition-strip", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".nct-interactive-list",
          start: "top 80%",
          once: true,
        }
      });

      // Right Column Master Visual Image Container Box Reveal
      gsap.to(".nct-visual-preview-rack", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".nct-split-matrix",
          start: "top 75%",
          once: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Soft Interactive Click/Hover Transition Wrapper
  const handleItemActive = (idx) => {
    if (idx === activeIndex) return;
    
    // Smooth Image crossfade fade-out-in micro action
    gsap.fromTo(".nct-preview-image", 
      { opacity: 0.4, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );
    
    setActiveIndex(idx);
  };

  return (
    <section ref={containerRef} className="nct-treat-section">
      {/* Background Radial Light Rays */}
      <div className="nct-ambient-glow-left" />
      <div className="nct-ambient-glow-right" />

      <div className="container mx-auto">
        
        {/* Core Main Branding Section Headings */}
        <div className="nct-section-header">
          <h2>
            Neurological Conditions <span>We Expertise In</span>
          </h2>
          <p className="mt-4">
            Providing comprehensive diagnostic maps and elite surgical solutions for structural 
            disorders of the brain, complex cranial pathways, and peripheral spinal channels.
          </p>
        </div>

        {/* Matrix Grid Columns Split System */}
        <div className="nct-split-matrix">
          
          {/* Left Column Layout: Interactive Strips Cluster */}
          <div className="nct-interactive-list">
            {conditionsData.map((item, idx) => (
              <div 
                key={idx}
                className={`nct-condition-strip ${idx === activeIndex ? "nct-active-row" : ""}`}
                onMouseEnter={() => handleItemActive(idx)}
                onClick={() => handleItemActive(idx)}
              >
                
                {/* Accordion Summary Row Frame */}
                <div className="nct-strip-trigger-row">
                  <div className="nct-title-cluster">
                    <span className="nct-index-bubble">0{idx + 1}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="nct-action-arrow">
                    <FaChevronRight size={14} />
                  </div>
                </div>

                {/* Accordion Expandable Detailed Segment */}
                <div className="nct-expandable-body">
                  <p className="nct-body-inner-desc">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column Layout: Sticky Contextual Preview Visual Panel */}
          <div className="nct-visual-preview-rack">
            <div className="nct-glass-media-card">
              <img 
                src={conditionsData[activeIndex].image} 
                alt={conditionsData[activeIndex].title} 
                className="nct-preview-image"
              />
              
              {/* Internal Bottom Floating Caption Card */}
              <div className="nct-media-caption-pod">
                <h4>{conditionsData[activeIndex].title}</h4>
                <p>{conditionsData[activeIndex].caption}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}