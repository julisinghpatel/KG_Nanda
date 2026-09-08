import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaAmbulance,
  FaHeartbeat,
  FaHospitalAlt,
  FaExclamationTriangle,
  FaBone,
  FaSkullCrossbones,
  FaBurn,
  FaBaby,
  FaProcedures,
} from "react-icons/fa";
import "./BestServices.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { text: "24×7 Emergency Care", icon: <FaAmbulance /> },
  { text: "Advanced Trauma Support", icon: <FaExclamationTriangle /> },
  { text: "ICU & Critical Care Unit", icon: <FaHospitalAlt /> },
  { text: "Cardiac Emergency Response", icon: <FaHeartbeat /> },
  { text: "Burn & Injury Care Unit", icon: <FaBurn /> },
];

export default function BestServices() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { duration: 1, ease: "power4.out" },
      });

      // Split Cinematic Entries
      tl.fromTo(".luxury-main-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
        .fromTo(".luxury-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.8")
        .fromTo(".luxury-title-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.85")
        .fromTo(".luxury-image-frame", { opacity: 0, scale: 0.95, x: -50 }, { opacity: 1, scale: 1, x: 0 }, "-=0.9")
        .fromTo(".luxury-service-card", 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, stagger: 0.08, ease: "back.out(1.2)" }, 
          "-=0.85"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="luxury-services-outer">
      <div className="luxury-services-container">
        
        {/* TOP HEADER REGION */}
        <div className="luxury-header-block">
          
          <h2 className="luxury-title">
            Our Best <span className="teal-highlight">Services</span> Included
          </h2>
          <p className="luxury-title-desc">
            Equipped with high-precision infrastructure and specialists offering absolute medical interventions.
          </p>
        </div>

        {/* TWO COLUMN CONTENT INTERFACE */}
        <div className="luxury-content-layout">
          
          {/* LEFT IMAGE SHOWCASE */}
          <div className="luxury-image-frame">
            <div className="image-wrapper-inner">
              <img
                src="/Facalities/E.png"
                alt="KG Nanda Hospital Emergency Services"
                className="luxury-hero-img"
              />
              <div className="luxury-image-tint"></div>
            </div>
            {/* Embedded Floating Metrics */}
            <div className="luxury-floating-metric">
              <div className="metric-glow"></div>
              <h4>24/7</h4>
              <p>Active Response</p>
            </div>
          </div>

          {/* RIGHT HORIZONTAL TILES SHOWCASE */}
          <div className="luxury-services-grid">
            {services.map((item, index) => (
              <div key={index} className="luxury-service-card">
                <div className="card-hover-bg"></div>
                <div className="service-icon-box">
                  {item.icon}
                </div>
                <div className="service-text-box">
                  <h4>{item.text}</h4>
                  <p>Specialized immediate treatment module</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}