import React from "react";
import "./DentalSpecialties.css";
import { 
  FaHeartbeat, 
  FaSyncAlt, 
  FaSmile, 
  FaHeart, 
  FaShieldAlt, 
  FaInfoCircle 
} from "react-icons/fa";

export default function DentalSpecialties() {
  const specialties = [
    {
      id: "01",
      icon: <FaHeartbeat className="spec-icon" />,
      title: "Oral & Maxillofacial Surgery",
      desc: "Removal of impacted teeth, fixation of facial fractures to jaw corrective surgeries."
    },
    {
      id: "02",
      icon: <FaSyncAlt className="spec-icon" />,
      title: "Prosthodontics",
      desc: "Complete rehabilitation of occlusion including maxillofacial Prosthetics."
    },
    {
      id: "03",
      icon: <FaSmile className="spec-icon" />,
      title: "Orthodontics & Dentofacial Orthopaedics",
      desc: "Alignment of crowded teeth and correction of jaw discrepancies."
    },
    {
      id: "04",
      icon: <FaHeart className="spec-icon" />,
      title: "Pediatric Dentistry",
      desc: "Child dentistry emphasised to reduce the incidence of dental ailments in adults."
    },
    {
      id: "05",
      icon: <FaShieldAlt className="spec-icon" />,
      title: "Periodontics",
      desc: "Gum strengthening, Gingival Flap Surgeries, Bone Grafts, Depigmentation, Frenectomy."
    }
  ];

  return (
    <section className="dental-spec-section relative bg-slate-50/50 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Soft Premium Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-400/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER GRID matching image_dc1f07.png */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 text-left">
          <div className="md:col-span-8 space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
              Clinical Programmes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1e3a8a] leading-tight">
              Oral & Dental Specialties
            </h2>
            <div className="w-20 h-[4px] bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-3" />
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-sm font-medium text-slate-500 max-w-xs md:ml-auto leading-relaxed">
              Advanced interventions across all major dental disciplines.
            </p>
          </div>
        </div>

        {/* ASYMMETRICAL PREMIUM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specialties.map((item) => (
            <div 
              key={item.id} 
              className="spec-premium-card group relative bg-white border border-slate-100 p-8 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(30,58,138,0.05)] hover:border-blue-200/60"
            >
              {/* Card Header Info Layer */}
              <div className="flex items-center justify-between mb-6">
                {/* Icon Wrapper box */}
                <div className="spec-icon-box w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50/70 text-blue-600 border border-blue-100/50 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shadow-sm">
                  {item.icon}
                </div>
                {/* Number Badge */}
                <span className="text-xs font-bold text-blue-500/80 bg-blue-50/50 border border-blue-100/30 px-2.5 py-1 rounded-md tracking-wider">
                  {item.id}
                </span>
              </div>

              {/* Card Description */}
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM COLLABORATION ALERT BANNER */}
        <div className="spec-footer-banner flex items-start sm:items-center gap-3.5 bg-blue-50/50 border border-blue-100/60 p-5 rounded-2xl text-left shadow-[0_4px_20px_rgba(30,58,138,0.01)]">
          <FaInfoCircle className="text-blue-600 text-lg flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm font-semibold text-slate-700 italic leading-relaxed">
            Craniofacial Surgeries are performed in close collaboration with the Department of Plastic Surgery.
          </p>
        </div>

      </div>
    </section>
  );
}