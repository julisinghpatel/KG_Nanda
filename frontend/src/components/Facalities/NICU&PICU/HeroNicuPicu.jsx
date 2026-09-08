import React from 'react';
import './HeroNicuPicu.css'; // Importing separate custom CSS file

const HeroNicuPicu = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-blue-100 py-16 px-4 md:px-8">
      
      {/* Premium Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-sky-200/40 blur-3xl content-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl content-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Content & Badges */}
        <div className="space-y-6 text-left">
         

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">NICU & PICU</span> Care
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Our Neonatal and Pediatric Intensive Care Units are equipped with world-class life support systems and managed by round-the-clock specialized intensivists to protect your little ones when they need it most.
          </p>



          
        </div>

        {/* Right Side: Interactive Cards / Visual Element */}
        <div className="relative flex justify-center items-center lg:h-full min-h-[350px]">
          
          {/* Main Glassmorphic Split-Card UI */}
          <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-xl space-y-6 card-float-animation">
            
            <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900">Department Status</h3>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-emerald-100">
                Fully Operational
              </span>
            </div>

            {/* NICU Segment */}
            <div className="group p-4 bg-gradient-to-r from-sky-500/10 to-transparent rounded-2xl border border-sky-100/50 hover:bg-white/90 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-blue-900">NICU (Neonatal ICU)</h4>
                <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">Newborns</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Specialized incubators, advanced ventilation, and micro-premature newborn critical care.
              </p>
            </div>

            {/* PICU Segment */}
            <div className="group p-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-2xl border border-amber-100/50 hover:bg-white/90 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-amber-900">PICU (Pediatric ICU)</h4>
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Up to 18 Years</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Intensive therapy, complex surgery recovery, and trauma care for toddlers and adolescents.
              </p>
            </div>

          </div>
          
          

        </div>

      </div>
    </section>
  );
};

export default HeroNicuPicu;