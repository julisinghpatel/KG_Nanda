import React from 'react';
import './PulmonologyHero.css';

const PulmonologyHero = () => {
  return (
    <section className="pulmo-hero-container relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-[#f6fcfa] px-6 py-16 md:px-12 lg:px-24">
      
      {/* Premium Background Ambient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#b5f5ff] to-[#aadcff] opacity-40 blur-[120px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#82cfe9] to-[#7396d3] opacity-20 blur-[150px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Content - Entry Animation Loaded via CSS */}
        <div className="pulmo-left-content space-y-6 text-left">
          
          {/* Main Heading with Gradient Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2f3395] leading-tight">
            Breathing Life Into <br />
            <span className="bg-gradient-to-r from-[#02acf0] to-[#7396d3] bg-clip-text text-transparent">
              Every Moment
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#60a9bd] max-w-xl leading-relaxed">
            Experience world-class pulmonology and chest medicine. Our state-of-the-art diagnostic lung lab and specialized care units are dedicated to restoring your respiratory health with precision.
          </p>

          {/* Action Buttons with Premium Hover Effects */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="premium-btn-primary px-8 py-3.5 rounded-xl font-semibold text-white bg-[#02acf0] shadow-lg shadow-[#02acf0]/20 transition-all duration-300 hover:bg-[#2f3395] hover:shadow-[#2f3395]/30 transform hover:-translate-y-0.5">
              Book Appointment
            </button>
          </div>

        </div>

        {/* Right Content - Visual Presentation */}
        <div className="pulmo-right-content relative flex justify-center items-center">
          
          {/* Main Decorative Interactive Circle */}
          <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-[#82cfe9]/40 animate-spin-slow" />
          
          {/* Premium Glassmorphic Card Container */}
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-white/60 to-[#cdffff]/20 backdrop-blur-xl border border-white/80 shadow-2xl p-4 transition-all duration-500 hover:shadow-[#02acf0]/10 hover:border-[#82cfe9]/50 group">
            
            {/* Image Placeholder Wrapper - Dynamic Hover Scale */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#aadcff] via-[#9ce1f1] to-[#7396d3] relative overflow-hidden flex items-center justify-center">
              
              {/* Premium Clinical Image Layer */}
              <img 
                src="/Department/chest-medicine/pulmonologyH.jpg" 
                alt="Advanced Pulmonology Care Clinic" 
                className="absolute inset-0 w-full h-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              
              
              
              {/* Premium Blue Vignette Shade Control */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/50 via-transparent to-transparent z-10 pointer-events-none" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PulmonologyHero;