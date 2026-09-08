import React from 'react';
import './DigitalXrayHero.css';

const DigitalXrayHero = () => {
  return (
    <section className="xray-hero-section relative min-h-[90vh] flex items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
      
      {/* Background Decorative Premium Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Side - Styled closely to image_70091b.jpg structural flow */}
        <div className="xray-text-content flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold text-sky-700 uppercase tracking-wider">
              Next-Gen Diagnostic Imaging
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Advanced <span className="text-teal-600 font-extrabold relative xray-underline">Digital X-Ray</span> <br />
            <span className="text-sky-600 text-3xl md:text-5xl font-semibold">(Precision Imaging In Minutes)</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mb-8">
            Experience ultra-low radiation medical imaging equipped with instant high-resolution digital processing. Our state-of-the-art diagnostic infrastructure guarantees flawless clinical accuracy, delivering instant results safely across all emergency and routine investigations.
          </p>

        
        </div>

        {/* Right Graphic Side - Modernized organic shape similar to image_70091b.jpg */}
        <div className="xray-visual-side relative flex justify-center items-center">
          
          {/* Main Organic Shaped Image Frame */}
          <div className="xray-blob-frame relative w-[280px] h-[360px] sm:w-[400px] sm:h-[460px] md:w-[460px] md:h-[500px] overflow-hidden shadow-2xl">
            <img 
              src="/Department/xray.jpg" 
              alt="Advanced Digital X-Ray Machine" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Tech Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 to-transparent mix-blend-multiply"></div>
          </div>

          {/* Premium Floating Status Badge - Inspired by image_70091b.jpg overlay item */}
          <div className="absolute bottom-6 left-2 sm:left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-4 max-w-[280px] animate-float">
            <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/20">
              {/* Pulse / Scan Vector Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13.5v.75m0 3v.75m3-3v.75m0 3v.75M13.5 16.5h.75m3 0h.75m3 0h.75M13.5 19.5h.75m3 0h.75m3 0h.75" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Radiation Level</span>
              <span className="text-sm font-bold text-slate-800 leading-tight">Ultra-Low Exposure Safe Scan</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalXrayHero;