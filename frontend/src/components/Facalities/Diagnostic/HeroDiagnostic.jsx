import React from 'react';
import './HeroDiagnostic.css';

const HeroDiagnostic = () => {
  return (
    <section className="hero-diagnostic-container relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f6fcfa] px-6 py-16 md:px-12 lg:px-24">
      
      {/* Background Decorative Premium Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#aadcff] to-[#b5f5ff] opacity-40 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#7396d3] to-[#2f3395] opacity-15 blur-[150px] animate-pulse-slow"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Content & CTA */}
        <div className="hero-content-left space-y-8 text-left opacity-0 translate-y-10">
          
          

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2f3395] leading-tight font-sans">
            Accurate Results. <br />
            <span className="bg-gradient-to-r from-[#02acf0] via-[#2f3395] to-[#7396d3] bg-clip-text text-transparent premium-gradient-text">
              Precision Care.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-[#60a9bd] max-w-xl font-medium leading-relaxed">
            Experience premium healthcare diagnostics powered by advanced technology. Get swift, reliable, and expert-analyzed reports designed for your peace of mind.
          </p>

          

          
        </div>

        {/* Right Side: Animated Premium Visual Elements with Image in Circle */}
        <div className="hero-visual-right relative flex items-center justify-center min-h-[450px] md:min-h-[550px]">
          
          {/* Central Animated Outer Ring */}
          <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-4 border-dashed border-[#82cfe9]/40 animate-spin-slow flex items-center justify-center">
          </div>

          {/* Central Premium Circle Image (Eye-catching Core) */}
          <div className="absolute w-56 h-56 md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-tr from-[#9ce1f1]/20 to-[#b5f5ff]/40 backdrop-blur-md border border-white/60 overflow-hidden shadow-2xl shadow-[#2f3395]/10 group z-0">
            <img 
              src="/Department/diagnosticH.jpg" 
              alt="Premium Diagnostic Lab" 
              className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Soft gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/20 via-transparent to-transparent"></div>
          </div>  
        </div>

      </div>
    </section>
  );
};

export default HeroDiagnostic;