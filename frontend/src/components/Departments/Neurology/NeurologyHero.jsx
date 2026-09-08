import React from 'react';
import { Brain, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import './NeurologyHero.css';

const NeurologyHero = () => {
  return (
    <section className="neurology-hero relative min-h-screen bg-gradient-to-br from-[#f6fcfa] via-[#cdffff] to-[#b5f5ff] py-20 lg:py-0 flex items-center overflow-hidden">
      
      {/* Premium Animated Abstract Neural Background Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-12 left-10 w-32 h-32 border border-[#82cfe9]/30 rounded-full neuro-pulse" />
        <div className="absolute bottom-24 right-1/3 w-48 h-48 border border-[#7396d3]/20 rounded-full neuro-pulse-slow" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q200,50 500,400 T1200,200" fill="none" stroke="rgba(2, 172, 240, 0.15)" strokeWidth="2" strokeDasharray="8 4" className="neuro-path-anim" />
          <path d="M100,600 Q400,300 800,700 T1600,400" fill="none" stroke="rgba(47, 51, 149, 0.1)" strokeWidth="1.5" className="neuro-path-anim-reverse" />
        </svg>
      </div>

      {/* Floating Ambient Blobs using your Color Theme */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#9ce1f1] to-[#aadcff] rounded-full blur-[140px] opacity-40 neuro-blob-float pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#7396d3] to-[#cdffff] rounded-full blur-[120px] opacity-30 neuro-blob-float-reverse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text and CTA Content (Takes 7 Cols) */}
          <div className="lg:col-span-7 space-y-8 neuro-text-entrance text-center lg:text-left">
            
            {/* Premium Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2f3395] leading-[1.15] tracking-tight">
              Mapping the Mind<br />
              <span className="bg-gradient-to-r from-[#02acf0] via-[#7396d3] to-[#2f3395] bg-clip-text text-transparent neuro-gradient-text">
                Restoring the hope
              </span>
            </h1>

            {/* Premium Detailed Description */}
            <p className="text-base sm:text-lg text-[#60a9bd] font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience elite neurological care driven by groundbreaking science and compassionate medical pioneers. We specialize in complex brain, spine, and nerve care utilizing next-gen surgical navigation systems.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2f3395] to-[#02acf0] text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:from-[#c90322] hover:to-[#c20321] transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-2 group">
                Schedule Neuro Consultation
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Visual Layout Container (Takes 5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center neuro-visual-entrance">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Rotating Glowing Core Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-[#82cfe9] rounded-full animate-spin-slow opacity-60" />
              <div className="absolute inset-6 bg-gradient-to-tr from-[#b5f5ff] via-white to-[#cdffff] rounded-full shadow-inner neuro-pulse-core" />

              {/* Main Interactive Premium Center Piece Glass Card with Integrated Image Backdrop */}
              <div className="neuro-center-glass-card w-[85%] h-[85%] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden z-10">
                
                {/* Premium Medical Imaging Backdrop overlay Layer */}
                <div className="neuro-card-image-overlay" />

               

             

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeurologyHero;