import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHeartbeat,
  FaProcedures,
  FaStethoscope,
  FaUserMd,
  FaNotesMedical,
  FaHospital,
  FaDiagnoses,
  FaAmbulance,
  FaHeart,
  FaShieldAlt
} from "react-icons/fa";
import "./CardioCondition.css";

gsap.registerPlugin(ScrollTrigger);

export default function CardioCondition() {
  const sectionRef = useRef(null);

  const conditions = [
    {
      icon: <FaShieldAlt />,
      title: "Heart Disease Prevention",
      desc: "Preventive cardiology programs focused on lifestyle guidance and early risk detection.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Coronary Artery Disease",
      desc: "Advanced diagnosis and treatment for blocked or narrowed heart arteries.",
    },
    {
      icon: <FaProcedures />,
      title: "Heart Failure Management",
      desc: "Comprehensive care plans for patients with acute and chronic heart failure.",
    },
    {
      icon: <FaStethoscope />,
      title: "Arrhythmias (Abnormal Rhythms)",
      desc: "Specialized diagnosis and high-tech mapping treatment for irregular heartbeats.",
    },
    {
      icon: <FaUserMd />,
      title: "Valvular Heart Disease",
      desc: "Expert care for heart valve conditions including advanced structural repair and replacement.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Hypertension Control",
      desc: "Long-term clinical management and proactive tracking metrics for high blood pressure.",
    },
    {
      icon: <FaHospital />,
      title: "Congenital Heart Conditions",
      desc: "Advanced therapeutic care for structural complex heart conditions present from birth.",
    },
    {
      icon: <FaHeart />,
      title: "Peripheral Artery Disease",
      desc: "Diagnosis and targeted treatment for narrowed vascular pathways affecting blood circulation.",
    },
    {
      icon: <FaDiagnoses />,
      title: "Advanced Diagnostics",
      desc: "Modern cardiac echo and scanner diagnostic technologies for precise and early detection.",
    },
    {
      icon: <FaAmbulance />,
      title: "24/7 Emergency Cardiac Care",
      desc: "Round-the-clock intensive trauma services for critical cardiovascular emergencies.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Prevent Flash of Unstyled Layout State Bounds
      gsap.set([".cct-section-header", ".cct-condition-card"], {
        opacity: 0,
        y: 40
      });

      // Header Animation Trigger Module
      gsap.to(".cct-section-header", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        }
      });

      // Cards Smooth Scale Sequence Cascade
      gsap.to(".cct-condition-card", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: {
          each: 0.08,
          grid: "auto"
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cct-conditions-grid",
          start: "top 80%",
          once: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cct-main-container">
      {/* Background Micro-lights Layers */}
      <div className="cct-ambient-ray-1" />
      <div className="cct-ambient-ray-2" />

      <div className="container mx-auto">
        
        {/* Core Section Metadata */}
        <div className="cct-section-header">
          <h2>
            Comprehensive Cardiac Care for <span>Every Stage of Life</span>
          </h2>
          <p className="mt-4">
            Cardiovascular health is essential to your overall well-being. 
            Whether youâ€™re looking for prevention, diagnosis, or treatment 
            for complex heart conditions, KG Nanda Hospital provides 
            advanced cardiology care and expert medical support.
          </p>
        </div>

        {/* Condition Grid Matrix Layout */}
        <div className="cct-conditions-grid">
          {conditions.map((item, index) => (
            <div className="cct-condition-card" key={index}>
              <div className="cct-icon-box">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}