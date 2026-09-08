import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Activity, Clock, BedDouble, GraduationCap, Award } from "lucide-react";
import "./SurgeryOverview.css";

// Registering structural plugins safely
gsap.registerPlugin(ScrollTrigger);

const bulletItems = [
  { Icon: ShieldCheck, text: "NABH-accredited modular ultra-clean operation theatres" },
  { Icon: Activity, text: "Advanced laparoscopic, endoscopic, and micro-precision surgery" },
  { Icon: Clock, text: "24/7 dedicated trauma & emergency surgical backup team" },
  { Icon: BedDouble, text: "Intensive post-operative surgical ICU monitoring units" },
  { Icon: GraduationCap, text: "Internationally experienced and board-certified chief surgeons" },
];

const overviewImg = "/Department/OTSur.jpg";

const SurgeryOverview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Linear stagger setup with advanced animation viewport triggers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".animate-ot-img", { 
        x: -60, 
        opacity: 0, 
        scale: 0.95,
        duration: 1.1, 
        ease: "power4.out" 
      })
      .from(".animate-ot-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.7")
      .from(".animate-ot-text", { 
        y: 30, 
        opacity: 0, 
        duration: 0.7, 
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6")
      .from(".animate-ot-row", { 
        x: 30, 
        opacity: 0, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out"
      }, "-=0.4");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="surgery-overview" ref={sectionRef}>
      <div className="surgery-overview-container">
        
        {/* Left Graphics Module: Image Box + Floating Core Metric Badge */}
        <div className="surgery-overview-image-wrapper">
          <div className="surgery-overview-image-frame animate-ot-img">
            <img src={overviewImg} alt="Modern clinical operating room at KG Nanda Hospital" />
          </div>
          
         
        </div>

        {/* Right Information Module: Headers & Dynamic Cards List */}
        <div className="surgery-overview-content">
         
          <h2 className="surgery-overview-heading animate-ot-text">
            About Our <span>Surgical Services</span>
          </h2>
          <p className="surgery-overview-desc animate-ot-text">
            KG Nanda Hospital delivers cutting-edge operative methodologies combined seamlessly with high-performance medical technology. Our facilities are curated extensively for optimal anatomical precision, complete patient sterility parameters, and faster recovery rates.
          </p>
          
          <ul className="surgery-overview-list">
            {bulletItems.map((item, index) => (
              <li className="surgery-overview-item animate-ot-row" key={index}>
                <div className="surgery-overview-item-icon">
                  <item.Icon size={20} className="stroke-[2.5]" />
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default SurgeryOverview;