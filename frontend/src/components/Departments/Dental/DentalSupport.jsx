import React from "react";
import "./DentalSupport.css";
import { FaCheckCircle } from "react-icons/fa";

export default function DentalSupport() {
  const supportPoints = [
    "Cordless Digital Intra-oral Periapical Radiographs",
    "Orthopantomograph (OPG)",
    "Dentascan for precise implant planning",
    "Same-day digital reports"
  ];

  return (
    <section className="dental-support-section relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium Subdued Background Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-400/5 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-left relative z-10 space-y-8 dental-support-container">
        
        {/* TOP HEADER BLOCK matching image_dc26c3.png */}
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
            Diagnostic Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            Digital Radiological <span className="support-blue-highlight">Support</span>
          </h2>
          {/* Custom Sleek Accent Divider */}
          <div className="w-20 h-[4px] bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4" />
        </div>

        {/* PARAGRAPH BLOCKS */}
        <div className="space-y-6 max-w-5xl text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
          <p className="text-slate-800 font-semibold text-lg sm:text-xl leading-relaxed">
            The department is backed by exceptional diagnostic amenities — including cordless digital Intra-oral periapical radiographs, Orthopantomograph (OPG), and Dentascan — ensuring flawless management of even the most complex dental conditions.
          </p>
          <p className="text-slate-500 text-sm sm:text-base">
            The Department of Dentistry at Popular Hospital practices everything about dentistry under one roof, delivering international-standard care in a comfortable, sterile, and pain-free environment.
          </p>
        </div>

        {/* 2-COLUMN PREMIUM ROW GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 max-w-5xl">
          {supportPoints.map((point, index) => (
            <div 
              key={index}
              className="support-grid-card flex items-center gap-4 bg-slate-50/70 border border-slate-100/80 px-6 py-5 rounded-xl transition-all duration-300 hover:bg-white hover:border-sky-300 hover:shadow-[0_12px_30px_rgba(30,58,138,0.04)] hover:-translate-y-0.5"
            >
              <FaCheckCircle className="support-check-icon text-blue-500 text-lg flex-shrink-0 transition-transform duration-300" />
              <span className="text-sm font-bold text-slate-700 tracking-wide">{point}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}