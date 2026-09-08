import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserCheck, FaAward, FaGraduationCap, FaCalendarCheck } from "react-icons/fa";
import "./OncoSpecialdoctor.jsx.css";

gsap.registerPlugin(ScrollTrigger);

// Structured Premium Doctors Data for complete oncology specializations
const specialistDoctors = [
  {
    id: "dr-1",
    name: "Dr. Rajesh Singh",
    designation: "Senior oncologist surgeon",
    education: "M.Ch - Surgical Oncology, AIIMS",
    experience: "18+ Years Experience",
    specialty: "Robotic & Minimally Invasive Cancer Surgeries",
    image: "/Home/Senior oncologist surgeon Dr. Rajesh Singh.jpg" // Aapka provided standard image path
  },
  {
    id: "dr-2",
    name: "Dr. Deepak Singh",
    designation: "Senior Medical Oncologist",
    education: "DM - Medical Oncology, TMH Mumbai",
    experience: "14+ Years Experience",
    specialty: "Targeted Immunotherapy & Precision Chemotherapy",
    image: "/Home/Senior consultant oncology surgeon Dr. Deepak Singh.jpg" 
  },
  {
    id: "dr-3",
    name: "Dr. Ananya Shirke",
    designation: "Director - Radiation Oncology",
    education: "MD, DNB - Radiation Medicine",
    experience: "16+ Years Experience",
    specialty: "CyberKnife, IMRT, aur Stereotactic Radiosurgery",
    image: "/Surgery/DrAbhishek.jpg"
  }
];

const OncoSpecialdoctor = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Isolated GSAP setup for clean animation workflow
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          toggleActions: "play none none none"
        }
      });

      // 1. Editorial Header Reveal Sequences
      tl.fromTo(".dr-onco-reveal-header", 
        { y: -35, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.14, ease: "power3.out" }
      );

      // 2. Doctor Grid Cards elegant staggered cascade entry
      tl.fromTo(".dr-onco-profile-card", 
        { y: 60, opacity: 0, scale: 0.96 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        "-=0.5"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="dr-onco-premium-scope" ref={sectionRef}>
      {/* Structural Architectural Background Light Rings */}
      <div className="dr-onco-ambient-glow-1"></div>
      <div className="dr-onco-ambient-glow-2"></div>

      <div className="dr-onco-viewport">
        
        {/* Upper Brand Header Alignment */}
        <div className="dr-onco-header-block">
          <h2 className="dr-onco-section-title dr-onco-reveal-header">
            Meet Our Elite <span className="dr-onco-gradient-text">Onco Specialists</span>
          </h2>
          <p className="dr-onco-section-subtitle dr-onco-reveal-header">
            KG Nanda Hospital ke specialized tumor board panel me hain highly distinguished cancer specialists jo global standards ke treatment protocols design karte hain.
          </p>
        </div>

        {/* 3-Column Luxury Doctors Presentation Grid */}
        <div className="dr-onco-doctors-grid">
          {specialistDoctors.map((doctor) => (
            <div className="dr-onco-profile-card" key={doctor.id}>
              
              {/* Image Frame Matrix with Custom Clipping Geometry */}
              <div className="dr-onco-image-frame-holder">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="dr-onco-expert-avatar"
                />
                <div className="dr-onco-frame-overlay-shade"></div>
                
                {/* Floating Micro-Badge for Experience Inside the Image Canvas */}
                <div className="dr-onco-experience-badge">
                  <FaAward />
                  <span>{doctor.experience}</span>
                </div>
              </div>

              {/* Bio & Clinical Credentials Details Section */}
              <div className="dr-onco-bio-details">
                <span className="dr-onco-expert-tag">{doctor.designation}</span>
                <h3 className="dr-onco-expert-name">{doctor.name}</h3>
                
                {/* Academic Qualifications & Infrastructure Focus Rows */}
                <div className="dr-onco-credentials-list">
                  <div className="dr-onco-credential-item">
                    <FaGraduationCap className="dr-onco-cred-icon-blue" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="dr-onco-credential-item">
                    <span className="dr-onco-pulse-node"></span>
                    <p><strong>Core Focus:</strong> {doctor.specialty}</p>
                  </div>
                </div>

                {/* Lower Action Interactive Component Area */}
                <div className="dr-onco-card-action-bar">
                  <button className="dr-onco-consult-btn">
                    <FaCalendarCheck />
                    <span>Request Consultation</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OncoSpecialdoctor;