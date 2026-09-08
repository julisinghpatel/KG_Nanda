import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { CalendarDays, ArrowRight, HeartPulse, Activity } from "lucide-react";
import "./HospitalCTA.css";

export default function HospitalCTA() {
  const navigate = useNavigate();
  const sectionRef = useScrollReveal({ child: ".cta-premium-card" });
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Premium entry fade scale on reveal
    gsap.fromTo(
      ".cta-premium-card",
      { y: 50, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
    );

    // Ultra smooth organic looping float mechanism for button
    gsap.to(btnRef.current, {
      y: -5,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Background floating abstract dynamic vectors loop
    gsap.to(".vector-orb-1", {
      x: 30,
      y: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    gsap.to(".vector-orb-2", {
      x: -40,
      y: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section ref={sectionRef} className="cta-premium-section bg-[#f6f5ee]">
      {/* Background Micro Particle Vectors */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#003a70_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div ref={cardRef} className="cta-premium-card bg-white text-[#003a70] border border-gray-100 shadow-xl">
        
        {/* Dynamic Abstract Vectors Inside Container */}
        <div className="vector-orb-1 bg-[#35b6b4]/10 blur-3xl"></div>
        <div className="vector-orb-2 bg-[#dd5200]/10 blur-3xl"></div>

        {/* Floating Top Mini Header Tag */}
        <div className="cta-mini-badge bg-[#35b6b4]/10 border border-[#35b6b4]/30 text-[#35b6b4]">
          <HeartPulse size={14} className="text-[#dd5200] animate-pulse" />
          <span>24/7 Priority Emergency Network</span>
        </div>

        {/* Content Engine Workspace */}
        <div className="cta-core-content">
          <h2 className="cta-main-heading text-[#003a70]">
            Your Health Deserves <span>Immediate Care</span>
          </h2>
          <p className="cta-main-description text-gray-500 font-medium">
            Take the first step towards better medical reliance. Our globally certified specialist panel and futuristic diagnosis matrices are operational for you, every single hour of every single day.
          </p>

          {/* Quick Metrics Checklist Meta */}
          <div className="cta-meta-features-row text-gray-700 font-bold">
            <div className="feature-pill">
              <Activity size={14} className="text-[#35b6b4]" />
              <span>Zero Waiting Window</span>
            </div>
            <div className="feature-pill">
              <Activity size={14} className="text-[#dd5200]" />
              <span>Insurance Integrated</span>
            </div>
          </div>

          {/* Interactive Actions Deck */}
          <div className="cta-action-deck">
            <button 
              ref={btnRef} 
              className="cta-action-primary-btn group bg-[#003a70] text-white hover:bg-[#dd5200]" 
              onClick={() => navigate("/book-appointment")}
            >
              <CalendarDays size={18} />
              <span>Secure Appointment Now</span>
              <ArrowRight size={16} className="cta-arrow-slide group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}