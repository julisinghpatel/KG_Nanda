import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./NeurosurgeryDoctors.css";

gsap.registerPlugin(ScrollTrigger);

export default function NeurosurgeryDoctors() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const neuroFaculty = [
    {
      name: "Dr. ABC",
      degree: "MCh, Fellowship - Functional Neurosurgery",
      specialty: "",
      experience: "Over 22+ Years of Surgical Mastery",
      photo: "https://image.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. CBG",
      degree: "MD, MCh - Endoscopic Spine Specialist",
      specialty: "Senior Consultant",
      experience: "Over 15+ Years of Clinical Excellence",
      photo: "https://image.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. GHF",
      degree: "MCh, MS - Neurovascular Surgeon",
      specialty: "Associate Consultant",
      experience: "Over 11+ Years of Micro-Surgery Practice",
      photo: "https://images.unwsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Strict Pre-animation Alpha Bounds Allocation to Stop Layout Jumps
      gsap.set([".ndh-section-header", ".ndh-doctor-card"], {
        opacity: 0,
        y: 45
      });

      // Animate Main Descriptions Text Wrapper
      gsap.to(".ndh-section-header", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          once: true,
        }
      });

      // Sequential Reveal Trigger Mechanics for Professional Bio Cards
      gsap.to(".ndh-doctor-card", {
        y: 0,
        opacity: 1,
        duration: 0.95,
        stagger: 0.16,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".ndh-doctors-grid",
          start: "top 80%",
          once: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ndh-doctors-wrapper">
      {/* Background Lighting Gradients Flares */}
      <div className="ndh-radial-glow-top" />
      <div className="ndh-radial-glow-bottom" />

      <div className="container mx-auto">
        
        {/* Core Header Elements Block */}
        <div className="ndh-section-header">
          <h2>
            Doctor of <span>Neuro-Surgeons</span>
          </h2>
          <p className="mt-4">
            Our department is led by globally celebrated masters of neurosurgery, specialized 
            in managing highly complex cerebral pathways, trauma interventions, and advanced spinal care tracks.
          </p>
        </div>

        {/* Master Profile Render Grid Frame */}
        <div className="ndh-doctors-grid">
          {neuroFaculty.map((doc, index) => (
            <div className="ndh-doctor-card" key={index}>
              
              {/* Upper Section Photo Module with Smooth Lens Filter Mask */}
              <div className="ndh-image-shell">
                <img 
                  src={doc.photo} 
                  alt={`${doc.name} Headshot`} 
                  className="ndh-surgeon-photo"
                  loading="lazy"
                />
                <div className="ndh-dark-overlay-mask">
                  <button 
                    className="ndh-action-trigger-btn"
                    onClick={() => navigate("/book-appointment")}
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>

              {/* Lower Section Metadata Typography Box */}
              <div className="ndh-profile-details">
                <div>
                  <div className="ndh-specialty-badge">{doc.specialty}</div>
                  <h3>{doc.name}</h3>
                  <div className="ndh-medical-degree">{doc.degree}</div>
                </div>
                
                <div>
                  <div className="ndh-card-divider" />
                  <p className="ndh-experience-metric">{doc.experience}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}