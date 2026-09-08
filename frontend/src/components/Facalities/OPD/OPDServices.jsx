import React, { useState } from 'react';
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  Heart, 
  ChevronRight, 
  Clock, 
  UserCheck,
  ChevronLeft
} from 'lucide-react';
import './OPDServices.css';

const OPDServices = () => {
  // Active specialized category tab state (Section 1 - Tabs System)
  const [activeTab, setActiveTab] = useState('obstetrics');



  
  // Service list mapping with structural dynamic hover visibility states (Section 2 - Grid Hover)
  const services = [
    {
      id: 1,
      title: "General Medicine",
      desc: "Comprehensive diagnostic and therapeutic care for adult acute and chronic illnesses.",
      icon: <Stethoscope className="w-6 h-6 opd-icon" />,
      image: "https://images.unsplash.com/photo-1666214280557-f1b212211aa3?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Pediatrics & Care",
      desc: "Expert, specialized clinical care and diagnostic testing from senior pediatricians.",
      icon: <Baby className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Cardiology Department",
      desc: "Advanced screening, ECG monitoring, and consultative heart care by top specialists.",
      icon: <Heart className="w-6 h-6 opd-icon" />,
      image: "https://images.unsplash.com/photo-1557615290-741b3d633423?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      title: "Orthopedics Consult",
      desc: "Treatment for joint pains, bone fractures, sports injuries, and advanced physiotherapy.",
      icon: <Activity className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      title: "Dermatology & Skin",
      desc: "Clinical evaluation and minor OPD procedures for diverse skin, hair, and nail disorders.",
      icon: <UserCheck className="w-6 h-6 opd-icon" />,
      image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 6,
      title: "24x7 Emergency OPD",
      desc: "Immediate trauma response, stabilized critical care beds, and round-the-clock doctors.",
      icon: <Clock className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="opd-master-container">


      {/* SECTION 2: EXPERT OPD GRID WITH INTELLIGENT HOVER LOGIC (As per image_6169c2.jpg) */}
      <section className="opd-services-grid-section">
        {/* Ambient Premium Radial Lighting Fills */}
        <div className="opd-glow-effect position-left" />
        <div className="opd-glow-effect position-right" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Layout Wing */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 opd-badge-pill-dark">
              <span className="opd-badge-dot"></span>
              Outpatient Department | OPD Services
            </div>
            
            <h2 className="opd-grid-title">
              Expert Consultations for <br />
              <span className="text-gradient-teal-emerald">
                Specialized Health & Care
              </span>
            </h2>
            
            <p className="opd-grid-subtitle">
              Skip the long queues. Book your slot online to consult with senior doctors, specialized clinicians, and diagnostic experts at our advanced OPD wings.
            </p>
            
            {/* Minimal Double Dot and Dash Accent line from design markup */}
            <div className="flex justify-center items-center gap-1 mt-6">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              <span className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            </div>
          </div>

          {/* Pure Image Grid with Dynamic Hover Presentation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="opd-interactive-hover-card group">
                
                {/* Standard Base State: Pure Image Mode across all grid blocks */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="opd-card-bg-image"
                  />
                  {/* Darkening filter layer */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#021324]/90 transition-all duration-500 group-hover:opacity-0" />
                </div>

                {/* Constant Floating Indicator Layer: Title & Minimal Icon stays perfectly visible at all times */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center text-white text-sm shadow-md">
                    {service.id % 2 === 0 ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-wide shadow-text-sm">
                    {service.title}
                  </h4>
                </div>

                {/* IMMERSIVE HOVER OVERLAY REVEAL FRAME (Content transforms into clean minimal focus block on hover) */}
                <div className="opd-card-hover-content-panel">
                  
                  {/* Top Header Group within card state */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center shadow-md">
                      {React.cloneElement(service.icon, { className: "w-6 h-6 text-sky-600" })}
                    </div>
                    <span className="text-xs font-bold text-sky-600 tracking-widest uppercase bg-sky-50 px-2.5 py-1 rounded-md">
                      OPD Services
                    </span>
                  </div>

                  {/* Core Information Flow */}
                  <h3 className="text-2xl font-extrabold text-[#062c52] mb-3 text-left w-full">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 font-normal leading-relaxed text-left mb-6">
                    {service.desc}
                  </p>

                  {/* High Contrast Signature Orange Operational Action Button from image_6169c2.jpg */}
                  <button className="opd-card-readmore-action-btn">
                    Read More
                  </button>

                </div>

              </div>
            ))}
          </div>

          {/* Premium Bottom Fixed Ribbon Control Strip */}
          <div className="mt-16">
            <div className="opd-glass-action-ribbon">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-500/20 border border-sky-400/30 rounded-xl flex items-center justify-center text-sky-400 shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-lg">Top Panel Specialists</h4>
                  <p className="text-slate-400 text-sm">Every single clinical department is led by highly certified senior consultants.</p>
                </div>
              </div>
             
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OPDServices;