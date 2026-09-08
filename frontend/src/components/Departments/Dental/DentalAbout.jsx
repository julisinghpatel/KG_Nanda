import React from "react";
import "./DentalAbout.css";
import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

export default function DentalAbout() {
  const highlights = [
    "International-standard equipment",
    "Pain-free treatment protocols",
    "Advanced digital diagnostics",
    "All specialties under one roof",
  ];

  return (
    <section className="dental-about-section relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium Light Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/5 to-sky-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-sky-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Content (Takes 7 Cols on Large Screens) */}
        <div className="lg:col-span-7 space-y-8 text-left dental-about-content">
          
          {/* Top Subtle Badge */}
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
              About The Department
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.25]">
              Department of <span className="dental-blue-highlight">Dental</span>
            </h2>
            {/* Custom Modern Accent Line */}
            <div className="w-24 h-[4px] bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-3" />
          </div>

          {/* Main Block Quote / Featured Info Box */}
          <div className="about-quote-box bg-gradient-to-r from-blue-50/40 to-sky-50/20 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-2xl backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <p className="text-slate-700 font-medium leading-relaxed text-base sm:text-lg">
              The department is operational with state-of-the-art dental equipment harmonizing international standards to deliver quality treatment to patients. This multi-sphere dental unit offers a high-quality, specialized dental care experience with excellence, comfort, and a soothing atmosphere — offering a full range of dental services under one roof.
            </p>
          </div>

          {/* Points Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((point, index) => (
              <div 
                key={index} 
                className="about-point-card flex items-center gap-3 bg-slate-50/80 border border-slate-100 px-5 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:border-sky-300 hover:shadow-[0_10px_25px_rgba(0,123,255,0.05)] hover:-translate-y-0.5"
              >
                <FaCheckCircle className="text-blue-500 text-lg flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{point}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Profile Doctor Card (Takes 5 Cols on Large Screens) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end dental-about-card-col">
          
          {/* Main Card Container */}
          <div className="about-doctor-card relative w-full max-w-[420px] bg-white rounded-[32px] p-8 pt-14 border border-slate-100 shadow-[0_20px_50px_rgba(0,123,255,0.06)] text-center transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,123,255,0.12)] hover:-translate-y-1">
            
           

            {/* Doctor Image Container */}
            <div className="w-full aspect-[4/4] rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-100 flex items-center justify-center shadow-inner group">
              <img 
                src="https://images.unsplash.com/poto-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" 
                alt="Dr. Brijesh Kumar Tiwari" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Doctor Details */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-blue-600 tracking-tight">
                Dr. Brijesh Kumar Tiwari
              </h3>
              <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                B.D.S.
              </p>
              
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-wider text-[10px] uppercase border border-blue-100">
               Dentistry (Dental Care)
              </div>

              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase pt-2">
                Department of Dental
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}