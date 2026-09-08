import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardioDoctors.css";

gsap.registerPlugin(ScrollTrigger);

export default function CardioDoctors() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const doctorsList = [
    {
      name: "Dr. ABC",
      credentials: "MD, DM - Interventional Cardiology",
      tag: "Chief Surgeon",
      exp: "Over 18+ Years of Clinical Experience",
      photo: "htps://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. BCD",
      credentials: "MD, DNB - Pediatric Cardiology",
      tag: "Senior Specialist",
      exp: "Over 14+ Years of Clinical Experience",
      photo: "htps://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. EFG",
      credentials: "MD, DM - Electrophysiology",
      tag: "Cardiologist",
      exp: "Over 10+ Years of Clinical Experience",
      photo: "htps://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Prevent Layout Shifts and Flash of Content
      gsap.set([".ccd-section-header", ".ccd-doctor-card"], {
        opacity: 0,
        y: 50
      });

      // Header Animation Runtime Segment
      gsap.to(".ccd-section-header", {
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

      // Grid Cards Sliding Reveal Control
      gsap.to(".ccd-doctor-card", {
        y: 0,
        opacity: 1,
        duration: 0.95,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".ccd-doctors-grid",
          start: "top 82%",
          once: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ccd-doctors-section">
      {/* Structural Fluid Background Elements */}
      <div className="ccd-ambient-glow-left" />
      <div className="ccd-ambient-glow-right" />

      <div className="container mx-auto">
        
        {/* Core Metadata Segment Header */}
        <div className="ccd-section-header">
          <h2>
            Meet Our <span>Cardiac Specialists</span>
          </h2>
          <p className="mt-4">
            Our world-renowned cardiologists combine decades of clinical excellence with 
            advanced surgical innovations to bring you premium, unmatched cardiovascular care.
          </p>
        </div>

        {/* Professional Doctor Profile Grid Framework */}
        <div className="ccd-doctors-grid">
          {doctorsList.map((doc, index) => (
            <div className="ccd-doctor-card" key={index}>
              
              {/* Profile Image & Mask Action Layout Layer */}
              <div className="ccd-image-frame">
                <img 
                  src={doc.photo} 
                  alt={`${doc.name} Profile`} 
                  className="ccd-doc-photo"
                  loading="lazy"
                />
                <div className="ccd-image-mask">
                  <button 
                    className="ccd-floating-action-btn"
                    onClick={() => navigate("/book-now")}
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>

              {/* Text Detailed Panel Info */}
              <div className="ccd-details-panel">
                <div>
                  <div className="ccd-doc-tag">{doc.tag}</div>
                  <h3>{doc.name}</h3>
                  <div className="ccd-doc-credentials">{doc.credentials}</div>
                </div>
                
                <div>
                  <div className="ccd-divider-line" />
                  <p className="ccd-doc-exp">{doc.exp}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}