import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutHero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Entry animation trigger for background and content
    el.classList.add("hero-show");
  }, []);

  return (
    <section ref={heroRef} className="about-hero">
      {/* Premium subtle animated background mesh for modern UI feel */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none"></div>
      
      <div className="hero-content">
  
        <h1>
          About <br />
          <span className="hospital-name">KG Nanda Hospital</span> 
         
        </h1>

        <p>
          Delivering premium healthcare ecosystems with unmatched compassion, 
          state-of-the-art medical innovation, and trusted professional expertise.
        </p>

       
      </div>

      {/* Elegant glassmorphism stat card for premium look */}
      <div className="hero-stats-card">
        <div className="stat-item">
          <span className="stat-num">24/7</span>
          <span className="stat-label">Emergency Care</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">50+</span>
          <span className="stat-label">Expert Doctors</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;