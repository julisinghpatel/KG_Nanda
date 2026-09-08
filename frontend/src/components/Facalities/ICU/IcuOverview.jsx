import { useEffect, useRef, useState } from "react";
import "./IcuOverview.css";

/* â”€â”€ Animated counter hook â”€â”€ */
function useCounter(target, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [startCounting, target, duration]);
  return count;
}

/* â”€â”€ Premium ICU Stats Data â”€â”€ */
const STATS = [
  { value: 40,  suffix: "+", label: "ICU Beds Available", desc: "Fully equipped class-A advanced ventilators", progress: "90%" },
  { value: 98,  suffix: "%", label: "Survival Rate",      desc: "Exceptional clinical recovery outcomes", progress: "98%" },
  { value: 15,  suffix: "+", label: "Years of Trust",    desc: "Uninterrupted critical care since 2011",  progress: "85%" },
  { value: 24,  suffix: "/7", label: "Intensivist Cover",  desc: "Continuous round-the-clock doctor monitoring", progress: "100%" },
];

export default function IcuOverview() {
  const sectionRef = useRef(null);
  const [textIn, setTextIn]     = useState(false);
  const [statsIn, setStatsIn]   = useState(false);

  /* Intersection observer for staggered entrance */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setTextIn(true), 150);
          setTimeout(() => setStatsIn(true), 450);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="llh-icu-ov__section" ref={sectionRef}>

      {/* Subtle Medical Blueprint Pattern Background */}
      <div className="llh-icu-ov__dotgrid" />

      {/* Decorative Connecting Arc Removed */}

      <div className="llh-icu-ov__inner">

        {/* â•â• LEFT COLUMN â€” Clinical Description â•â• */}
        <div className={`llh-icu-ov__text ${textIn ? "llh-icu-ov__text--in" : ""}`}>
          
          <span className="llh-icu-ov__eyebrow">
            <span className="llh-icu-ov__eyebrow-line" />
            Advanced Facility Overview
          </span>

          <h2 className="llh-icu-ov__heading">
            Where <em>Precision</em><br />
            Meets Absolute Care
          </h2>

          <p className="llh-icu-ov__body">
            KG Nanda's Intensive Care Unit is a state-of-the-art ecosystem built to manage complex, life-threatening conditions, merging world-class medical tech infrastructure with deeply reassuring human handling.
          </p>

          <p className="llh-icu-ov__body llh-icu-ov__body--second">
            From advanced hemodynamic monitoring matrix to comprehensive multi-organ support wings, our dedicated teams operate without downtime.
          </p>

          {/* Premium Tech Tags */}
          <div className="llh-icu-ov__pill-row">
            <span className="llh-icu-ov__pill">Central Vitals Hub</span>
            <span className="llh-icu-ov__pill">HEPA Clean Air</span>
            <span className="llh-icu-ov__pill">Dialysis Port</span>
            <span className="llh-icu-ov__pill">Trauma Bay</span>
          </div>
        </div>

        {/* â•â• RIGHT COLUMN â€” Interactive Stats Matrix â•â• */}
        <div className="llh-icu-ov__stats">
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} index={i} trigger={statsIn} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* â”€â”€ Premium Glassmorphic Stat Card Component â”€â”€ */
function StatCard({ value, suffix, label, desc, index, trigger, progress }) {
  const count = useCounter(value, 2000, trigger);
  return (
    <div
      className="llh-icu-ov__card"
      style={{ transitionDelay: `${index * 0.12}s` }}
      data-in={trigger ? "true" : "false"}
    >
      <div className="llh-icu-ov__card-inner">
        
        {/* Dynamic radial glow orb inside the card */}
        <div className="llh-icu-ov__card-glow" />
        
        <span className="llh-icu-ov__card-num">
          {count}<span className="llh-icu-ov__card-suffix">{suffix}</span>
        </span>
        
        <span className="llh-icu-ov__card-label">{label}</span>
        <span className="llh-icu-ov__card-desc">{desc}</span>
        
        {/* Animated Premium Structural Load Bar */}
        <div className="llh-icu-ov__card-bar">
          <div
            className="llh-icu-ov__card-bar-fill"
            style={{ 
              width: trigger ? progress : "0%",
              transitionDelay: `${0.4 + index * 0.15}s` 
            }}
          />
        </div>
      </div>
    </div>
  );
}