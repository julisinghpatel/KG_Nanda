import { useEffect, useRef, useState } from "react";
import {
  HeartPulse,
  Wind,
  Brain,
  Droplets,
  MonitorSmartphone,
  ShieldPlus,
  ArrowRight,
} from "lucide-react";
import "./IcuFacilities.css";

const FACILITIES = [
  {
    id: 1,
    name: "Cardiac ICU",
    short: "Heart & Critical Circulatory Care",
    preview: "Advanced continuous hemodynamic analytics, complex ventilation, immediate resuscitation & high-risk post-cardiac surgery recovery wings.",
    Icon: HeartPulse,
    color: "#2f3395", // Theme Trust Dark Blue
    image: "/Department/CardiacICU.jpg",
  },
  {
    id: 2,
    name: "Respiratory ICU",
    short: "Ventilator & Pulmonary Matrix",
    preview: "High-tier respiratory mechanics setup, tailored invasive and non-invasive ventilation tracks managed by dedicated expert pulmonologists.",
    Icon: Wind,
    color: "#02acf0", // Theme Sky Blue
    image: "/Department/RespiratoryICU.jpg",
  },
  {
    id: 3,
    name: "Neuro ICU",
    short: "Brain & Spine Emergency Unit",
    preview: "Intensive targeted monitoring and instant microsurgical interventions for severe stroke vectors, spinal traumas, and brain injury support.",
    Icon: Brain,
    color: "#7396d3", // Theme Supporting Steel Blue
    image: "/Department/NeuroICU.jpg",
  },
  {
    id: 4,
    name: "Renal ICU",
    short: "Dialysis & Continuous Kidney Support",
    preview: "Bedside ultrafiltration and localized dialysis integration tracks for urgent acute multi-organ renal failures and post-operative recovery blocks.",
    Icon: Droplets,
    color: "#dd5200", // Theme Warning Orange Accent
    image: "/Department/RenalICU.jpg",
  },
];

export default function IcuFacilities() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const active = FACILITIES[hovered];

  return (
    <section className="llh-icu-fac__section" ref={sectionRef}>
      
      {/* High-Tech Technical Dot Backdrop Grid */}
      <div className="llh-icu-fac__dotgrid" />

      <div className="llh-icu-fac__inner">

        {/* ══ SECTION TOP HEADER ══ */}
        <div className={`llh-icu-fac__header ${inView ? "llh-icu-fac__header--in" : ""}`}>
          <span className="llh-icu-fac__eyebrow">
            <span className="llh-icu-fac__eyebrow-line" />
            Clinical Excellence Centers
          </span>
          <h2 className="llh-icu-fac__heading">
            Specialized Units for <em>Every</em> Critical Need
          </h2>
        </div>

        {/* ══ INTERACTIVE DUAL COLUMN PANEL ══ */}
        <div className="llh-icu-fac__body">

          {/* LEFT — High-Fidelity Crossfade Image Frame */}
          <div 
            className={`llh-icu-fac__imgwrap ${inView ? "llh-icu-fac__imgwrap--in" : ""}`}
            style={{ "--active-color": active.color }}
          >
            {FACILITIES.map((f, i) => (
              <div
                key={f.id}
                className={`llh-icu-fac__img-holder ${hovered === i ? "llh-icu-fac__img-holder--active" : ""}`}
              >
                <div 
                  className="llh-icu-fac__img"
                  style={{ backgroundImage: `url(${f.image})` }}
                />
              </div>
            ))}

            {/* Premium Dynamic Neon Float Badge */}
            <div className="llh-icu-fac__chip" style={{ "--chip-color": active.color }}>
              <span className="llh-icu-fac__chip-icon-box">
                <active.Icon size={22} color={active.color} strokeWidth={2} />
              </span>
              <div className="llh-icu-fac__chip-meta">
                <div className="llh-icu-fac__chip-name">{active.name}</div>
                <div className="llh-icu-fac__chip-short">{active.short}</div>
              </div>
            </div>

            {/* Master Tracking Linear Color Bar */}
            <div
              className="llh-icu-fac__img-accent"
              style={{ background: active.color }}
            />
          </div>

          {/* RIGHT — Micro-Animated Cyclical Hover List */}
          <div className={`llh-icu-fac__list ${inView ? "llh-icu-fac__list--in" : ""}`}>
            {FACILITIES.map((f, i) => {
              const IsCurrent = hovered === i;
              return (
                <div
                  key={f.id}
                  className={`llh-icu-fac__item ${IsCurrent ? "llh-icu-fac__item--active" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  style={{ 
                    "--item-color": f.color, 
                    transitionDelay: `${i * 0.05}s` 
                  }}
                >
                  {/* Digital Index Counters */}
                  <span className="llh-icu-fac__item-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon Node */}
                  <span className="llh-icu-fac__item-icon">
                    <f.Icon size={20} color={IsCurrent ? f.color : "#2f3395"} strokeWidth={2} />
                  </span>

                  {/* Informational Expansion Data */}
                  <div className="llh-icu-fac__item-text">
                    <span className="llh-icu-fac__item-name">{f.name}</span>
                    <span className="llh-icu-fac__item-preview">{f.preview}</span>
                  </div>

                  {/* Directional Fluid Arrow */}
                  <span className="llh-icu-fac__item-arrow">
                    <ArrowRight size={18} color={f.color} strokeWidth={2.5} />
                  </span>

                  {/* Dynamic Structural Indicator Side Border */}
                  <span className="llh-icu-fac__item-bar" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}