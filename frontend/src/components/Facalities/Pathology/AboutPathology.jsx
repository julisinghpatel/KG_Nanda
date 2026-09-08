import React from 'react';
import './AboutPathology.css';

// Premium icons from Lucide package
import { ShieldCheck, Layers, Microscope, Fingerprint, CalendarDays, CheckCircle2 } from 'lucide-react';

const AboutPathology = () => {
  // Key critical capability layers of our specialized pathology setup
  const capabilities = [
    {
      id: 1,
      title: "Barcoded Traceability Ecosystem",
      desc: "Every single sample vial undergoes strict zero-error computerized barcoding directly at the point of collection, avoiding mismatched reports completely.",
      icon: <Fingerprint className="w-5 h-5 text-[#1e3a8a]" />
    },
    {
      id: 2,
      title: "Advanced Bio-Analytical Machinery",
      desc: "Fully robotic auto-analyzers reduce manual human handling error down to 0.01%, providing multi-tier clinical validation for every parameter.",
      icon: <Microscope className="w-5 h-5 text-[#ea580c]" />
    },
    {
      id: 3,
      title: "Rigorous Double-Scan Quality Control",
      desc: "Abnormal critical value findings are systematically checked twice across multi-level controls before passing on to senior consultant pathologists.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section className="about-pathology-section py-24 px-4 md:px-10 lg:px-16 font-sans">
      <div className="dot-matrix-overlay"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Dynamic Double-Frame Image Montage */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          
          {/* Main Large Visual Frame */}
          <div className="photo-frame-main w-full max-w-[420px] aspect-[4/5] overflow-hidden">
            <img 
              src="/Department/pathology.jpg" 
              alt="Medical Pathologist analyzing blood cultures" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Secondary Precision Frame */}
          <div className="photo-frame-secondary absolute -bottom-8 -right-4 md:-right-8 w-56 aspect-square overflow-hidden hidden sm:block">
            <img 
              src="/Department/Path.jpg" 
              alt="Automated clinical lab testing pipeline" 
              className="w-full h-full object-cover"
            />
          </div>

         

        </div>

        {/* Right Side: Elaborated Technical Insights & Grid Capabilities */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
         

          {/* Core Strategic Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Where Advanced Technology <br />
            <span className="text-[#1e3a8a]">Meets Diagnostic Precision</span>
          </h2>

          {/* Introductory Abstract paragraph */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-2xl">
            Our pathology facilities operate on a fully integrated digital network engine, ensuring clinical speed without sacrificing empirical truth. We constantly upgrade our laboratory systems to match global reference parameters.
          </p>

          {/* Interactive Stacked Row Feature Capability Cards */}
          <div className="flex flex-col gap-4 w-full max-w-2xl mb-8">
            {capabilities.map((item) => (
              <div key={item.id} className="capability-row-card p-4 md:p-5 rounded-2xl flex items-start gap-4 cursor-pointer">
                <div className="icon-wrapper-box w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1 tracking-wide">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bulleted trust guarantees footer */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 border-t border-slate-200/60 max-w-xl">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Certified Radiologists & Pathologists</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Biomedically Sealed Storage Containers</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPathology;