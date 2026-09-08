import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Cpu,
  ShieldAlert,
  Zap,
  Gauge,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";
import "./MedicalEquipments.css";

const EQUIPMENTS = [
  {
    id: 1,
    title: "Next-Gen Intelligent Ventilator",
    tag: "Respiratory Care",
    desc: "Adaptive supportive ventilation system providing real-time lung mechanics telemetry and automated closed-loop oxygenation control.",
    metric: "99.9% Up-time",
    Icon: Zap,
    color: "#02acf0", // Cyan Blue from your theme
    bgLight: "rgba(2, 172, 240, 0.05)",
  },
  {
    id: 2,
    title: "High-Acuity Patient Monitor",
    tag: "Hemodynamic Tracking",
    desc: "Multi-parameter vitals management with advanced arrhythmia analytics, continuous cardiac output tracking, and predictive AI alerts.",
    metric: "AI Predictive",
    Icon: Activity,
    color: "#2f3395", // Royal Navy Blue from your theme
    bgLight: "rgba(47, 51, 149, 0.05)",
  },
  {
    id: 3,
    title: "Continuous Renal Replacement (CRRT)",
    tag: "Metabolic Support",
    desc: "Ultra-precision blood purification therapy platform designed for critically ill patients with acute kidney injury or fluid overload.",
    metric: "Precision Fluidics",
    Icon: Gauge,
    color: "#c90322", // Deep Premium Red from your theme
    bgLight: "rgba(201, 3, 34, 0.05)",
  },
  {
    id: 4,
    title: "Targeted Temperature Management",
    tag: "Neuro-Protection",
    desc: "Advanced non-invasive thermal regulation system used to rapidly achieve and maintain precise therapeutic hypothermia post-cardiac arrest.",
    metric: "±0.1°C Accuracy",
    Icon: Cpu,
    color: "#7396d3", // Light Slate Blue from your theme
    bgLight: "rgba(115, 150, 211, 0.05)",
  }
];

/* ── Premium Equipment Card Component ── */
function EquipmentCard({ item, index, inView }) {
  const [activeHover, setActiveHover] = useState(false);

  return (
    <div
      className="llh-med-tech__card-container"
      style={{ transitionDelay: `${index * 0.12}s` }}
      data-animate={inView ? "true" : "false"}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      <div 
        className={`llh-med-tech__card ${activeHover ? "llh-med-tech__card--active" : ""}`}
        style={{ "--tech-accent": item.color, "--tech-bg-soft": item.bgLight }}
      >
        {/* Glow Layer on Hover */}
        <div className="llh-med-tech__card-glow" />

        {/* Top Header Row */}
        <div className="llh-med-tech__card-top">
          <div className="llh-med-tech__icon-box">
            <item.Icon size={22} className="llh-med-tech__icon" />
          </div>
          <span className="llh-med-tech__card-tag">{item.tag}</span>
        </div>

        {/* Body Content */}
        <div className="llh-med-tech__card-body">
          <h3 className="llh-med-tech__card-title">{item.title}</h3>
          <p className="llh-med-tech__card-desc">{item.desc}</p>
        </div>

        {/* Footer Metrics Panel */}
        <div className="llh-med-tech__card-footer">
          <div className="llh-med-tech__metric">
            <Layers size={13} />
            <span>{item.metric}</span>
          </div>
          <div className="llh-med-tech__action-arrow">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Section Container ── */
export default function MedicalEquipments() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="llh-med-tech__section" ref={containerRef}>
      {/* Structural Sci-Fi Grid Elements */}
      <div className="llh-med-tech__background-grid" />
      <div className="llh-med-tech__ambient-orb-1" />
      <div className="llh-med-tech__ambient-orb-2" />

      <div className="llh-med-tech__wrapper">
        {/* Section Header */}
        <div className={`llh-med-tech__header ${isVisible ? "llh-med-tech__header--visible" : ""}`}>
        
          <h2 className="llh-med-tech__heading">
            Advanced Medical <span>Equipments</span> Technology
          </h2>
          <p className="llh-med-tech__subtext">
            We employ state-of-the-art diagnostic and life-support platforms engineered to deliver absolute precision, maximum safety, and automated real-time patient monitoring.
          </p>
        </div>

        {/* 4-Column / Multi-Row Responsive Grid */}
        <div className="llh-med-tech__grid">
          {EQUIPMENTS.map((tech, index) => (
            <EquipmentCard key={tech.id} item={tech} index={index} inView={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}