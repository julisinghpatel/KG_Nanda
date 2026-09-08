import React from "react";
import "./WhyChooseOTSurgery.css";
import { 
  FaUserMd, 
  FaShieldVirus, 
  FaStethoscope, 
  FaClock 
} from "react-icons/fa";

export default function WhyChooseOTSurgery() {
  const surgicalPoints = [
    {
      icon: <FaUserMd className="ot-icon" />,
      title: "Board-Certified Surgeons",
      desc: "Elite medical experts leading precision surgeries with unparalleled expertise."
    },
    {
      icon: <FaShieldVirus className="ot-icon" />,
      title: "Zero Pathogen Risk",
      desc: "Ultra-clean, modular OT suites engineered for supreme infection control."
    },
    {
      icon: <FaStethoscope className="ot-icon" />,
      title: "Advanced Surgical Tech",
      desc: "Equipped with high-definition laparoscopy and cutting-edge vital monitoring systems."
    },
    {
      icon: <FaClock className="ot-icon" />,
      title: "24/7 Trauma Readiness",
      desc: "Immediate emergency response with standby medical teams ready at any hour."
    }
  ];

  return (
    <section className="ot-why-section relative overflow-hidden bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      {/* Premium Background Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-400/10 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 to-orange-400/5 blur-[130px] pointer-events-none" />

      <div className="ot-container max-w-7xl mx-auto text-center relative z-10">
        
       

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.2]">
          Uncompromised Standards In <span className="ot-gradient-text font-black">OT & Surgical Care</span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Empowering our board-certified surgeons with premium surgical environments built explicitly 
          for zero pathogen risk, maximum safety, and pristine procedural execution.
        </p>

        {/* Premium Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {surgicalPoints.map((item, index) => (
            <div 
              key={index} 
              className="ot-premium-card group relative bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-slate-100 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,123,255,0.08)]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Hover Border Glow Accent */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-sky-400/30 transition-all duration-300 pointer-events-none" />
              
              {/* Icon Container with Soft Glow */}
              <div className="ot-icon-wrapper w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-sky-50 to-blue-50 text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-sky-400 group-hover:text-white group-hover:scale-110 shadow-sm">
                {item.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}