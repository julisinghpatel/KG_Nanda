import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHeart, FaRibbon, FaMicroscope } from "react-icons/fa"; // Swapped for more premium/specific icons
import "./WhoWeAre.css";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation removed to ensure content is always visible

      // Keep the background shape subtle micro-float loop
      gsap.to(".who-bg-shape", {
        y: 30,
        x: 15,
        rotation: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="who-section">
      {/* Background subtle graphic element for depth */}
      <div className="who-bg-shape"></div>

      <div className="who-container">

        {/* LEFT COLUMN: CONTENT */}
        <div className="who-left">
          <span className="who-tag">Legacy of Trust</span>
          <h2 className="who-title">Chandauli’s Leading Health Ecosystem</h2>

          <p className="who-desc leading-p">
            <span>KG Nanda Hospital</span> is a premier medical institution, dedicated to delivering a seamless blend of cutting-edge clinical technology, trusted professional expertise, and genuine, patient-focused compassion.
          </p>
          <p className="who-desc">
            Our Chandauli campus is engineered for precision and safety, upholding the absolute highest standards of accredited healthcare delivery for every patient we serve.
          </p>

          <div className="who-features">

            <div className="who-feature-item">
              <div className="who-icon-wrapper compassion-gradient">
                <FaHeart />
              </div>
              <div className="who-feature-text">
                <h4>Precision Compassion</h4>
                <p>Treating every individual with dignity and human dignity.</p>
              </div>
            </div>

            <div className="who-feature-item teal-active">
              <div className="who-icon-wrapper teal-gradient">
                <FaRibbon /> {/* Symbolizes Quality Accreditation */}
                </div>
              <div className="who-feature-text">
                <h4>Accredited Standards</h4>
                <p>Meeting global excellence benchmarks for safe medical practices.</p>
              </div>
            </div>

            <div className="who-feature-item">
              <div className="who-icon-wrapper innovation-gradient">
                <FaMicroscope />
              </div>
              <div className="who-feature-text">
                <h4>Advanced Diagnostics</h4>
                <p>Continuously modernizing our technology for superior outcomes.</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL SHOWN IN IMAGE */}
        <div className="who-right">
          <div className="who-image-container">
            <img
              className="who-image"
              src="/AboutUs/A1.png" // Reusing your reception image as requested implicitly
              alt="KG Nanda Hospital Reception"
            />
            {/* Premium Image Overlay */}
            <div className="img-overlay-mask"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;