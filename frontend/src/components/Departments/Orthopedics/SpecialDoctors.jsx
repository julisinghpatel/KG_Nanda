import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBriefcaseMedical } from "react-icons/fa";
import "./SpecialDoctors.css";

gsap.registerPlugin(ScrollTrigger);

// Array architecture structured for scale (Aap easily details dynamic update kar sakte hain)
const doctorsList = [
  {
    id: 1,
    name: "Dr. Arun Singh",
    qualification: "M.B.B.S., D.N.B. (Orthopedics)",
    designation: "Orthopedic & Joint Replacement Surgeon",
    image: "/Home/Dr. Arun Singh.jpeg",
    facebook: "#",
    instagram: "#"
  },
  {
    id: 2,
    name: "Dr. Ashwani Kumar",
    qualification: "M.B.B.S., M.S. (Orthopedics)",
    designation: "Orthopedic & Spine Surgeon",
    image: "/Surgery/Dr. Ashwani Kumar.jpg", // Change code path dynamically as needed
    facebook: "#",
    instagram: "#"
  },
  {
    id: 3,
    name: "Dr. P. Maurya",
    qualification: "M.B.B.S., M.S. (Orthopedics)",
    designation: "Orthopedic & Trauma Surgeon",
    image: "/Surgery/Dr. P. Maurya.jpg", // Change code path dynamically as needed
    facebook: "#",
    instagram: "#"
  },
  {
    id: 4,
    name: "Dr. Arun Singh",
    qualification: "M.B.B.S., D.N.B. (Orthopedics)",
    designation: "Orthopedic & Trauma Surgeon",
    image: "/Home/Dr. Arun Singh.jpeg", // Change code path dynamically as needed
    facebook: "#",
    instagram: "#"
  }
];

export default function SpecialDoctors() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Safety preset structure configuration
      gsap.set(".doc-exp-card", {
        opacity: 1,
        y: 0,
        clearProps: "all"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none"
        }
      });

      // 1. Heading Elements staggered presentation
      tl.fromTo(".doc-exp-reveal-head",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out" }
      );

      // 2. Premium staggered flip-rise entry for clinical cards
      tl.fromTo(".doc-exp-card",
        { y: 60, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.18, ease: "power4.out" },
        "-=0.5"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="doc-exp-premium-section-scope">
      {/* Background ambient lighting structure */}
      <div className="doc-exp-mesh-blur-glow"></div>

      <div className="doc-exp-max-viewport">
        
        {/* Core Header System */}
        <div className="doc-exp-header-panel">
         
          <h2 className="doc-exp-main-title doc-exp-reveal-head">
            Our <span>Special Doctors</span>
          </h2>
          <div className="doc-exp-divider-line doc-exp-reveal-head"></div>
        </div>

        {/* Responsive Grid System Flex Row */}
        <div className="doc-exp-cards-row-matrix">
          {doctorsList.map((doctor) => (
            <div className="doc-exp-card" key={doctor.id}>
              
              {/* Premium Geometric Medical Grid Layer behind portrait */}
              <div className="doc-exp-card-glow-barrier"></div>
              
              <div className="doc-exp-portrait-housing">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="doc-exp-portrait-img" 
                />
                <div className="doc-exp-vignette-shading"></div>
                
                {/* Floating Glassmorphic Medical Badge */}
                <div className="doc-exp-department-tag">
                  <FaBriefcaseMedical className="doc-exp-tag-icon" />
                  <span>Orthopaedics</span>
                </div>

                {/* Micro-Interaction PopUp Social Suite */}
                <div className="doc-exp-social-glass-drawer">
                  <a href={doctor.facebook} className="doc-exp-social-node" aria-label="Facebook"><FaFacebookF /></a>
                  <a href={doctor.instagram} className="doc-exp-social-node" aria-label="Instagram"><FaInstagram /></a>
                </div>
              </div>

              {/* Professional Meta Profile details panel block */}
              <div className="doc-exp-profile-details">
                <h4 className="doc-exp-doctor-name">{doctor.name}</h4>
                <div className="doc-exp-qualification-strip">
                  <span className="doc-exp-bullet-tick"></span>
                  <p className="doc-exp-degree-txt">{doctor.qualification}</p>
                </div>
                <p className="doc-exp-specialization-subtitle">{doctor.designation}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}