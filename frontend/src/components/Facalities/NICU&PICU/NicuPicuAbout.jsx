import React from 'react';
import './NicuPicuAbout.css';

const NicuPicuAbout = () => {
  return (
    <section className="nicu-picu-about-section relative py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/50 overflow-hidden">
      
      {/* Decorative Blur Background Elements */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none generic-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none generic-pulse-delayed"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Content & Metrics (7 Columns on large screens) */}
        <div className="lg:col-span-7 space-y-6 text-left content-fade-up">
          
          

          {/* Premium Headline matching KG Nanda Hospital Brand Font styling */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            About Our <span className="text-blue-900">NICU</span> & <span className="text-orange-500">PICU</span> Care Units
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            <strong className="text-blue-950 font-semibold">KG Nanda HOSPITAL</strong> provides one of the region’s most advanced Level III Neonatal Intensive Care Units (NICU) and Pediatric Intensive Care Units (PICU). We combine high-end infrastructure, sophisticated life-support systems, and specialized clinical protocols to stabilize and nurture our youngest, most vulnerable patients.
          </p>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            Every bassinet and bed is backed by micro-premature temperature regulation, continuous multi-parameter physiological monitoring, and full-time pediatric sub-specialists ensuring your children receive premium medical intelligentsia.
          </p>

          {/* Interactive Feature Grid with Custom Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="feature-card flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold text-lg">👶</div>
              <div>
                <h4 className="text-base font-bold text-blue-950">Level III Neonatal Care</h4>
                <p className="text-xs text-slate-500 mt-1">Advanced incubators and micro-surgeries for ultra-low-birth-weight infants.</p>
              </div>
            </div>

            <div className="feature-card flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-200">
              <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl font-bold text-lg">🧸</div>
              <div>
                <h4 className="text-base font-bold text-orange-600">Pediatric Trauma Team</h4>
                <p className="text-xs text-slate-500 mt-1">Comprehensive emergency handling and postoperative recovery up to 18 years.</p>
              </div>
            </div>
          </div>

          
        </div>

        {/* RIGHT COLUMN: Premium Composite Grid (5 Columns on large screens) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Rounded Frame mirroring the uploaded template structure */}
          <div className="relative border-4 border-white bg-white rounded-[40px] shadow-2xl p-3 overflow-hidden image-container-hover transition-all duration-500 max-w-md w-full">
            
            {/* Orange Vertical Left Accent Line */}
            <div className="absolute top-1/4 left-0 w-1.5 h-16 bg-orange-500 rounded-r-md"></div>
            {/* Emerald Vertical Right Accent Line */}
            <div className="absolute bottom-1/4 right-0 w-1.5 h-16 bg-emerald-500 rounded-l-md"></div>

            {/* Split Top Images */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="overflow-hidden rounded-tl-[30px] rounded-bl-lg h-44 group">
                <img 
                  src="/Department/nicu.jpg" 
                  alt=" " 
                  className="w-full h-full object-cover inner-img-transition"
                />
              </div>
              <div className="overflow-hidden rounded-tr-[30px] rounded-br-lg h-44 group">
                <img 
                  src="/Department/PICU.jpg" 
                  alt="" 
                  className="w-full h-full object-cover inner-img-transition"
                />
              </div>
            </div>

            {/* Bottom Large Image */}
            <div className="overflow-hidden rounded-bl-[30px] rounded-br-[30px] h-52 group relative">
              <img 
                src="/Department/NICUH.jpg" 
                alt="Happy Family" 
                className="w-full h-full object-cover inner-img-transition"
              />
            </div>

           

            {/* Floating Bottom Left Status Widget */}
            <div className="absolute bottom-6 left-6 bg-blue-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 widget-float border border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                🛡️
              </div>
              <div className="text-left">
                <p className="text-xs font-bold tracking-wide">24/7 Super Care</p>
                <p className="text-[10px] text-sky-200 font-medium">Emergency Critical Support</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NicuPicuAbout;