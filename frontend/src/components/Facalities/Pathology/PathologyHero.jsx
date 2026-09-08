import React from 'react';
import './PathologyHero.css';

// Premium interactive icons from Lucide
import { ShieldCheck, Activity, Award, ArrowUpRight, Search, ClipboardCheck, FlaskConical } from 'lucide-react';

const PathologyHero = () => {
  return (
    <section className="pathology-hero-bg min-h-[90vh] flex items-center pt-24 pb-16 px-4 md:px-10 lg:px-16 grid-overlay">
      
      {/* Background Orbs Elements */}
      <div className="ambient-orb orb-blue"></div>
      <div className="ambient-orb orb-orange"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Premium Text Headings & Action Bars */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          

          {/* Main Hero Hook Title */}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Precision Testing. <br />
            <span className="text-[#1e3a8a]">Trusted Diagnostic</span> <br />
            <span className="text-[#ea580c] relative inline-block">
              Smart Reports.
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#ea580c]/10 rounded-full"></span>
            </span>
          </h1>

          {/* Supportive Subtitle paragraph */}
          <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal">
            Experience next-generation pathology solutions with highly precise medical automation. From certified barcoded collection protocols to immediate digital delivery, your health metrics are accurate and safe.
          </p>

         

         

        </div>

        {/* Right Side: Complex Image Montage with Live Badges & Cards */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:pl-6">
          
          {/* Main Large Graphic Wrapper Container */}
          <div className="image-mask-container w-full max-w-[500px] aspect-[4/5] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" 
              alt="Advanced Pathology Automation Equipment" 
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            {/* Subtle blue ambient overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          

          {/* Floating Badge 2: Bottom Right - Smart QR System (Animated Delay) */}
          <div className="floating-badge badge-delay absolute -bottom-6 -right-2 md:-right-6 bg-white p-4 rounded-2xl flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center animate-pulse">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sample Quality</p>
              <p className="text-sm font-extrabold text-slate-900">Barcoded Safety</p>
            </div>
          </div>

          {/* Floating Glass Dashboard Widget: Center Left Overlay */}
          <div className="hero-glass-card absolute bottom-12 -left-6 md:-left-12 p-4 rounded-2xl flex items-center gap-4 max-w-[220px] cursor-pointer">
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center shadow-md shadow-blue-900/20">
              <Activity className="w-5 h-5 text-white animate-bounce" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Processing</span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
              </div>
              <p className="text-xs font-bold text-slate-800 leading-tight">Critical Analytics Active</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PathologyHero;