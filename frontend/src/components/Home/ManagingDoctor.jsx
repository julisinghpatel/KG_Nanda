import React from "react";
import "./ManagingDoctor.css"; // CSS file integration

export default function ManagingDoctor() {
  return (
    <div className="doctor-section-bg font-sans min-h-screen py-20 px-4 md:px-8 flex flex-col items-center justify-center relative z-10">
      
      {/* Premium Section Title */}
      <div className="text-center mb-16 animate-fade-in-up w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4 drop-shadow-sm">
          Chief of Administration and Management
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-sm"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        
        {/* --- LEFT PROFILE CARD (Takes 4 columns on large screens) --- */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 premium-profile-card flex flex-col items-center justify-center relative overflow-hidden border border-slate-100">
          <div className="w-full flex flex-col items-center">
            {/* Main Outer Profile Container */}
            <div className="profile-img-container relative mb-6">
              <img
                src="/ImageDoctor/Managing Director.jpeg"
                alt="Amit Srivastava"
                className="profile-img object-cover object-top"
              />
            </div>

            {/* Hospital Logo Placement */}
            <div className="mb-4 flex justify-center items-center gap-2">
              <span className="text-orange-500 font-bold text-lg">●</span>
              <span className="text-[#102a43] font-black uppercase tracking-wider text-sm">K.G. Nanda Hospital</span>
            </div>

            {/* Doctor Info */}
            <h2 className="text-2xl font-extrabold text-[#1e3a8a] text-center tracking-wide">
              Amit Srivastava
            </h2>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
              IT and Management.
            </p>
          </div>

        </div>

        {/* --- RIGHT DETAILS GRID (Takes 7 columns on large screens) --- */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          {/* Section Main Header Title */}
          <div className="border-l-4 border-orange-500 pl-4 py-1">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-widest">
              Profile Summary
            </h3>
          </div>

          {/* Premium Dynamic Quote Block */}
          <div className="bg-gradient-to-r from-sky-50/50 to-white border border-sky-100/50 p-6 sm:p-8 rounded-2xl relative quote-card-shadow">
            <span className="absolute top-2 right-6 text-7xl text-sky-100 font-serif select-none pointer-events-none">“</span>
            <p className="text-base sm:text-lg italic text-slate-700 leading-relaxed relative z-10 font-medium">
              “The strength of a modern healthcare institution lies in efficient management, seamless technology, and a patient-first approach.{" "}
              <strong className="text-[#102a43] font-bold not-italic border-b-2 border-orange-400/60 pb-0.5">
                Amit Srivastava
              </strong>
              {" "}With a strong focus on IT and administration, our management team ensures that every process is organized, transparent, and designed to deliver a smooth healthcare experience.”
            </p>
          </div>

          {/* 4 Quadrant Grid Layout (Matching the provided Image layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            
            {/* Grid 1: Qualifications */}
            <div className="info-feature-card bg-white border border-slate-100 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl icon-wrapper">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Qualifications</p>
                <p className="text-sm font-bold text-slate-800 leading-snug">Post graduate in IT and PGCPF from IIT Roorkee.</p>
              </div>
            </div>

            {/* Grid 2: Specialization */}
            <div className="info-feature-card bg-white border border-slate-100 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl icon-wrapper">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Specialization</p>
                <p className="text-sm font-bold text-slate-800 leading-snug">IT and Management.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}