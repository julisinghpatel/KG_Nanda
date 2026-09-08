import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { PhoneCall, ShieldAlert, Activity, Clock } from "lucide-react";
import "./EHero.css";
import { useNavigate } from "react-router-dom";

const words = ["Emergency Care", "Trauma Support", "Critical Care"];

export default function EmergencyHero() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".em-hero-bg-wrapper",
        { scale: 1.15, filter: "blur(2px)" },
        { scale: 1, filter: "blur(0px)", duration: 1.8, ease: "power3.out" }
      );

      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".em-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".em-title-main",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".em-subtitle-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".em-action-btns",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".em-feature-card",
        { y: 30, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" },
        "-=0.3"
      );

      gsap.to(".em-hero-bg-wrapper", {
        scale: 1.04,
        duration: 16,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="em-hero-container">
      {/* Background Wrapper */}
      <div className="em-hero-bg-wrapper">
        <div className="em-gradient-overlay"></div>
      </div>

      <div className="em-content-orchestrator">
       

        {/* Main Title */}
        <h1 className="em-title-main">
          Your Life Is Our Absolute{" "}
          <div className="em-word-container">
            <span key={index} className="em-word-rotator">
              {words[index]}
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="em-subtitle-text">
          State-of-the-art ICU setups, specialized trauma surgeons, and advanced cardiac life support systems active round the clock.
        </p>

       

        {/* Modern Horizontal Features Grid */}
        {/* <div className="em-features-grid">
          <div className="em-feature-card">
            <div className="em-icn-box em-icn-orange">
              <Clock size={20} />
            </div>
            <div className="em-card-text">
              <h3>24/7 Response</h3>
              <p>Zero waiting time policy</p>
            </div>
          </div>

          <div className="em-feature-card">
            <div className="em-icn-box em-icn-teal">
              <Activity size={20} />
            </div>
            <div className="em-card-text">
              <h3>Advanced ICU</h3>
              <p>Next-gen life support</p>
            </div>
          </div>

          <div className="em-feature-card">
            <div className="em-icn-box em-icn-blue">
              <ShieldAlert size={20} />
            </div>
            <div className="em-card-text">
              <h3>Trauma Experts</h3>
              <p>Senior critical care panel</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}