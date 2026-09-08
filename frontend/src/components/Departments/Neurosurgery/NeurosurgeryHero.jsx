import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBrain, FaRegCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import "./NeurosurgeryHero.css";

export default function NeurosurgeryHero() {
  const stageRef   = useRef(null);
  const titleRef   = useRef(null);
  const descRef    = useRef(null);
  const ctaRef     = useRef(null);
  const imageFrame = useRef(null);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Setup Complete Hidden State for Flash Prevention
      gsap.set([titleRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: 40
      });
      if (imageFrame.current) {
        gsap.set(imageFrame.current, { opacity: 0, scale: 0.94, x: 40 });
      }

      // Core Mastering Orchestrated Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (imageFrame.current) {
        tl.to(imageFrame.current, { opacity: 1, scale: 1, x: 0, duration: 1.3 });
      }

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.85 }, "-=0.95")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.7")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.75 }, "-=0.65");

    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={stageRef} className="nsh-hero-stage">
      {/* Background Radial Light Layers */}
      <div className="nsh-neural-blur-left" />
      <div className="nsh-neural-blur-right" />

      <div className="container mx-auto">
        <div className="nsh-hero-grid">
          
          {/* Left Text Configurations Block Container */}
          <div className="nsh-text-panel">
           
            
            <h1 ref={titleRef} className="nsh-main-title">
              Precision Medicine for <span className="nsh-title-gradient">Complex Neural</span> Disorders
            </h1>
            
            <p ref={descRef} className="nsh-hero-desc">
              KG Nanda Hospital brings together world-class neurosurgeons, ultra-advanced 
              3D intraoperative imaging, and minimally invasive microsurgery systems 
              to provide elite care for brain, spine, and nerve disorders.
            </p>

            <div ref={ctaRef} className="nsh-cta-cluster">
              <button 
                className="nsh-btn-primary" 
                onClick={() => navigate("/book-appointment")}
              >
                Book Priority Consultation
              </button>
              <button 
                className="nsh-btn-secondary"
                onClick={() => navigate("/team")}
              >
                Meet Our Experts
              </button>
            </div>
          </div>

          {/* Right Core Interactive Visual Framework */}
          <div className="nsh-visual-container">
            
            {/* Mask Mask Image Box Node */}
            <div ref={imageFrame} className="nsh-image-mask-frame">
              <img 
                src="/Department/Neurosurgery/neurosurgeryH.jpg" 
                alt="KG Nanda Neurosurgery Operation Theatre Suite" 
                className="nsh-surgery-image"
              />
              <div className="nsh-image-overlay-lens" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}