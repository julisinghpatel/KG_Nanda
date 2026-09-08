import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCalendarCheck, FaFileMedical, FaUserMd } from "react-icons/fa";
import "./AccessService.css";

gsap.registerPlugin(ScrollTrigger);

const AccessService = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Premium GSAP Context scoped architecture to avoid memory leaks
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none"
        }
      });

      // 1. Staggered reveal of header elements
      tl.fromTo(".acc-reveal-header", 
        { y: -40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.18, ease: "power4.out" }
      );

      // 2. Smooth scale and entry of left curved image frame
      tl.fromTo(".acc-visual-wrapper", 
        { x: -80, opacity: 0, scale: 0.95 }, 
        { x: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" },
        "-=0.8"
      );

      // 3. Right side content block fluid slip in
      tl.fromTo(".acc-content-wrapper", 
        { x: 80, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1.2"
      );

      // 4. Staggered timeline milestone block entry
      tl.fromTo(".acc-journey-milestone", 
        { opacity: 0, x: 40 }, 
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" },
        "-=0.6"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="acc-premium-section-scope" ref={sectionRef}>
      {/* Background Micro Mesh Element */}
      <div className="acc-ambient-radial-glow"></div>

      <div className="acc-max-viewport-container">
        
        {/* Title Block Wrapper */}
        <div className="acc-title-block">
          
          <h2 className="acc-main-heading acc-reveal-header">
            How to Access the <span className="acc-gradient-highlight">Orthopaedic Service?</span>
          </h2>
        </div>

        {/* Dual Grid Architecture */}
        <div className="acc-structural-grid">
          
          {/* Left Column: Premium Curved Image Composition */}
          <div className="acc-visual-wrapper">
            <div className="acc-asymmetric-frame">
              <img
                src="/Department/OrthoServ.jpg"
                alt="Orthopaedic Consultation Service"
                className="acc-premium-hero-img"
              />
              <div className="acc-image-overlay-tint"></div>
            </div>
            {/* Dynamic Absolute Highlight Card */}
          
          </div>

          {/* Right Column: Premium Multi-Step Timeline Journey */}
          <div className="acc-content-wrapper">
            <h3 className="acc-content-title">Easy Access to Orthopaedic Care</h3>
            <p className="acc-content-paragraph">
              Joint pain, sports injuries, ya back problems ko ignore na karein. Humne KG Nanda Hospital me orthopaedic care ko access karna behad simple aur fast bana diya hai.
            </p>

            {/* Structured Journey Track */}
            <div className="acc-journey-timeline">
              
              <div className="acc-journey-milestone">
                <div className="acc-milestone-icon-box">
                  <FaCalendarCheck />
                </div>
                <div className="acc-milestone-details">
                  <h4>1. Quick Digital Booking</h4>
                  <p>Click karke easily consultation book karein ya humare helpline par call karein.</p>
                </div>
              </div>

              <div className="acc-journey-milestone">
                <div className="acc-milestone-icon-box acc-icon-blue-shade">
                  <FaFileMedical />
                </div>
                <div className="acc-milestone-details">
                  <h4>2. Comprehensive Diagnosis</h4>
                  <p>In-house advanced digital X-Rays aur high-definition MRI options directly available.</p>
                </div>
              </div>

              <div className="acc-journey-milestone">
                <div className="acc-milestone-icon-box acc-icon-orange-shade">
                  <FaUserMd />
                </div>
                <div className="acc-milestone-details">
                  <h4>3. Specialized Treatment Plan</h4>
                  <p>Top surgeons ke dwara banaya gaya medical rehabilitation ya robotic-surgery blueprint.</p>
                </div>
              </div>

            </div>

            {/* Premium Interactive Action CTA */}
            <div className="acc-cta-holding-area">
              <button className="acc-premium-action-btn">
                <span className="acc-btn-shimmer-wave"></span>
                Connect With Specialists
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AccessService;