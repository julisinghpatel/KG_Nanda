import React, { useEffect, useState } from 'react';
import './HeroMedicin.css';

const HeroMedicin = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Page render hote hi smooth entry animation trigger karne ke liye
    setAnimate(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#f6f5ee] overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 py-12 lg:py-24 selection:bg-[#dd5200]/20">
      
      {/* Premium Ambient Background Blurs (Gradients) */}
      <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#003a70]/8 to-transparent blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-15%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-[#35b6b4]/10 to-transparent blur-[160px] pointer-events-none animate-pulse-slow delay-1000"></div>
      
      {/* Medical Vector Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#003a70_1px,transparent_1px),linear-gradient(to_bottom,#003a70_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        
        {/* Left Side: Text and Content Block */}
        <div className={`lg:col-span-7 flex flex-col justify-center space-y-8 transform transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
         

          {/* Main Dynamic Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#003a70] leading-[1.12] tracking-tight">
              Your Trust, Our Expertise.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#003a70] via-[#21818d] to-[#35b6b4] relative">
                General Medicine
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-[#003a70]/90 mt-1">
                Redefined.
              </span>
            </h1>
          </div>

          {/* Core Descriptive Text */}
          <p className="text-base sm:text-lg text-[#003a70]/80 max-w-xl leading-relaxed font-normal">
            Experience world-class primary care tailored to your lifestyle. From comprehensive diagnostics to personalized treatment plans, we manage your health with precision and compassion.
          </p>

         

         
        </div>

        {/* Right Side: Showcase Graphical Card (Aligned exactly with your UI image) */}
        <div className={`lg:col-span-5 relative flex justify-center items-center transform transition-all duration-1000 delay-300 cubic-bezier(0.16, 1, 0.3, 1) ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
          
          {/* Main Visual Glass Frame */}
          <div className="relative w-full max-w-[430px] aspect-[4/5] rounded-[2.5rem] p-4 bg-white/40 border border-white/70 shadow-[0_32px_64px_-16px_rgba(0,58,112,0.12)] backdrop-blur-xl overflow-hidden group hover:shadow-[0_45px_80px_-20px_rgba(0,58,112,0.18)] transition-all duration-500">
            
            {/* Deep Rich Navy Blue (#003a70) Canvas */}
            <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-[#003a70] via-[#00264d] to-[#1e7678] relative overflow-hidden flex flex-col justify-end p-8">
              
              {/* BACKDROP DOCTOR IMAGE - Aap yahan apni custom image path ya url daal sakte hain */}
              <img 
                src="/Department/image.png" 
                alt="Doctor Specialist" 
                className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              />
              
              {/* Smooth Dark Gradient Overlay for text readability over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a33] via-[#00264d]/60 to-transparent pointer-events-none"></div>

              {/* Mesh Structure overlay inside card */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>
              
              

              {/* Bottom Interactive Text blocks */}
              <div className="relative z-10 space-y-2 text-center">
                <h4 className="text-xl font-bold text-white tracking-wide">
                  Comprehensive Care
                </h4>
                <p className="text-xs text-[#f6f5ee]/80 max-w-xs mx-auto">
                  Advanced diagnostics & internal medicine specialties at your fingertips.
                </p>
              </div>

              {/* Subtle linear hover flash animation across the canvas */}
              <div className="absolute -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60 group-hover:animate-shine pointer-events-none" />
            </div>

           
           

          </div>

          {/* Geometric ambient float particles */}
          <div className="absolute -top-4 right-12 w-4 h-4 bg-[#35b6b4]/30 rounded-md animate-float pointer-events-none"></div>
          <div className="absolute bottom-16 -right-6 w-3 h-3 bg-[#dd5200]/25 rounded-full animate-float-delayed pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
};

export default HeroMedicin;