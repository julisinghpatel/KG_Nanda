import { useLayoutEffect, useRef } from "react";
import { 
  FaBrain, 
  FaSpine, 
  FaXRay, 
  FaUserMd, 
  FaClock, 
  FaShieldAlt, 
  FaChevronRight 
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./NeurosurgeryServices.css";

gsap.registerPlugin(ScrollTrigger);

export default function NeurosurgeryServices() {
  const containerRef = useRef(null);

  const medicalServices = [
    {
      icon: <FaBrain />,
      title: "Brain Tumor Microsurgery",
      desc: "High-precision removal of complex tumors utilizing state-of-the-art neuro-navigation and real-time 3D mapping systems.",
    },
    {
      icon: <FaSpine />,
      title: "Spine & Spinal Cord Surgery",
      desc: "Advanced treatment for herniated discs, spinal stenosis, and complex vertebral reconstruction using minimally invasive tubes.",
    },
    {
      icon: <FaXRay />,
      title: "Neurovascular Surgery",
      desc: "Micro-surgical clipping and endovascular coiling for treating critical cerebral aneurysms and vascular malformations.",
    },
    {
      icon: <FaUserMd />,
      title: "Functional Neurosurgery",
      desc: "Targeted surgical treatments including Deep Brain Stimulation (DBS) for Parkinson's disease, dystonia, and epilepsy control.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Pediatric Neurosurgery",
      desc: "Compassionate, highly specialized neurological surgical corrections for congenital skull and spine disorders in infants.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Neuro-Trauma Care",
      desc: "Round-the-clock emergency surgical intervention units for critical head traumas, brain stroke management, and spinal injuries.",
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Lock Layout Initial Alpha Opacity Levels
      gsap.set([".nss-section-header", ".nss-service-card"], {
        opacity: 0,
        y: 40
      });

      // Animate Section Headings Node
      gsap.to(".nss-section-header", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        }
      });

      // Cascading Fluid Stagger Reveal for Service Cards Array Matrix
      gsap.to(".nss-service-card", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".nss-services-grid",
          start: "top 80%",
          once: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="nss-services-container">
      {/* Background Lighting Blobs Layers */}
      <div className="nss-ambient-light-top" />
      <div className="nss-ambient-light-bottom" />

      <div className="container mx-auto">
        
        {/* Core Metadata Main Header Content */}
        <div className="nss-section-header">
          <h2>
            Our Advanced <span>Neurosurgical Specialities</span>
          </h2>
          <p className="mt-4">
            Combining ultra-modern technological ecosystems with surgical mastery to offer elite, 
            high-precision treatment structures for comprehensive cranial and spinal disorders.
          </p>
        </div>

        {/* Master Service Matrix Container Grid */}
        <div className="nss-services-grid">
          {medicalServices.map((service, idx) => (
            <div className="nss-service-card" key={idx}>
              
              {/* Technical Specialized Icon Frame */}
              <div className="nss-icon-wrapper">
                {service.icon}
              </div>

              {/* Informative Texts Panel */}
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              {/* Premium Micro Static Target Interactive Link */}
              <div className="nss-action-indicator">
                Learn More <FaChevronRight size={10} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}