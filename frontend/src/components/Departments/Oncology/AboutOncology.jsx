import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserMd, FaLaptopMedical, FaMicroscope, FaHeartbeat } from "react-icons/fa";
import "./AboutOncology.css";

gsap.registerPlugin(ScrollTrigger);

const AboutOncology = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP Scoped Context to safely animate elements without global class conflicts
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none"
        }
      });

      // 1. Title Block and Badges reveal
      tl.fromTo(".ab-onco-reveal-el", 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out" }
      );

      // 2. Left Structural Photo Composites smooth scale-up slide
      tl.fromTo(".ab-onco-visual-canvas", 
        { x: -60, opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, duration: 1.3, ease: "power4.out" },
        "-=0.7"
      );

      // 3. Right side copy text content entry
      tl.fromTo(".ab-onco-body-content", 
        { x: 60, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
        "-=1.1"
      );

      // 4. Staggered Bento Features and Value blocks soft glide-in
      tl.fromTo(".ab-onco-feature-card", 
        { opacity: 0, y: 35 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: "back.out(1.2)" },
        "-=0.6"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ab-onco-premium-section" ref={sectionRef}>
      {/* Decorative Premium Mesh Layer */}
      <div className="ab-onco-mesh-glow-left"></div>
      <div className="ab-onco-mesh-glow-right"></div>

      <div className="ab-onco-viewport-wrapper">
        
        {/* Core Layout Grid Matrix */}
        <div className="ab-onco-structural-layout">
          
          {/* Left Side Column: High-End Dual-Frame Medical Montage */}
          <div className="ab-onco-visual-canvas">
            <div className="ab-onco-main-frame-holder">
              <img 
                src="/Department/Oncology/oncoaa.jpg" // Replace with your main oncology laboratory/doctor image
                alt="Oncology Department Research" 
                className="ab-onco-primary-photo"
              />
              <div className="ab-onco-image-gradient-shade"></div>
            </div>

            {/* Premium Overlapping Compact Inset Frame */}
            <div className="ab-onco-secondary-frame-holder">
              <img 
                src="/Department/Oncology/OncoA.jpg" // Replace with secondary oncology treatment system image
                alt="Cancer Precision Treatment" 
                className="ab-onco-secondary-photo"
              />
              <div className="ab-onco-secondary-outline"></div>
            </div>

            
          </div>

          {/* Right Side Column: Editorial Content & Premium Feature Cards */}
          <div className="ab-onco-body-content">
            
          

            <h2 className="ab-onco-heading-title ab-onco-reveal-el">
              Pioneering the Next Era of <span className="ab-onco-color-glow">Cancer Treatment</span>
            </h2>

            <p className="ab-onco-lead-paragraph ab-onco-reveal-el">
              KG Nanda Hospital ka Oncology Department ek premier healthcare hub hai jahan world-class diagnostic modalities aur advanced patient care systems ka combination milta hai. Hum har patient ko personalized medical ecosystem pradan karte hain.
            </p>

            {/* Structured Medical Core Excellence Bento Cards Grid */}
            <div className="ab-onco-features-grid-bento">
              
              <div className="ab-onco-feature-card">
                <div className="ab-onco-icon-box">
                  <FaMicroscope />
                </div>
                <div className="ab-onco-card-details">
                  <h4>Precision Diagnostics</h4>
                  <p>Advanced molecular mapping aur high-definition scans se accurate disease staging check ki jaati hai.</p>
                </div>
              </div>

              <div className="ab-onco-feature-card">
                <div className="ab-onco-icon-box ab-icon-cyan-tint">
                  <FaLaptopMedical />
                </div>
                <div className="ab-onco-card-details">
                  <h4>Targeted Therapies</h4>
                  <p>Healthy tissues ko damage kiye bina directly cancer cells par hit karne wali smart immunotherapy systems.</p>
                </div>
              </div>

              <div className="ab-onco-feature-card">
                <div className="ab-onco-icon-box ab-icon-blue-tint">
                  <FaUserMd />
                </div>
                <div className="ab-onco-card-details">
                  <h4>Tumor Board Expertise</h4>
                  <p>Multiple highly experienced oncology surgeons aur radiation specialists milkar ek optimal blueprint banate hain.</p>
                </div>
              </div>

              <div className="ab-onco-feature-card">
                <div className="ab-onco-icon-box ab-icon-orange-tint">
                  <FaHeartbeat />
                </div>
                <div className="ab-onco-card-details">
                  <h4>Holistic Rehabilitation</h4>
                  <p>Physical, psychological aur post-treatment healing support panels jo recover hone me help karte hain.</p>
                </div>
              </div>

            </div>

            {/* Premium Interactive Action Interface Button */}
            <div className="ab-onco-action-block ab-onco-reveal-el">
              <button className="ab-onco-premium-cta">
                <span className="ab-onco-shimmer-effect"></span>
                Explore Clinical Infrastructure
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOncology;