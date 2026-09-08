import React from 'react';
import './AboutPulmonology.css'; // Custom styles aur animations ke liye

const AboutPulmonology = () => {
  return (
    <section className="pulmo-about-section relative overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-[#f6fcfa]">
      
      {/* Premium Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#cdffff] opacity-40 blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#aadcff] opacity-30 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Premium Visual Content (Pinterest Inspired Layout) */}
        <div className="lg:col-span-5 space-y-6 reveal-fade-left">
          <div className="relative group">
            {/* Decorative Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#02acf0] to-[#2f3395] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Main Image Container with Glassmorphism Border */}
            <div className="relative bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white/40 shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                alt="Pulmonology Care" 
                className="w-full h-[400px] object-cover rounded-xl transform hover:scale-105 transition-transform duration-700 ease-out"
              />
             
            </div>
          </div>

         
        </div>

        {/* RIGHT COLUMN: Rich Informational Text */}
        <div className="lg:col-span-7 space-y-8 reveal-fade-right">
          <div className="space-y-3">

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2f3395] leading-tight">
              Breathing Life Into Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] to-[#7396d3]">
                Advancing Chest Medicine.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Our Pulmonology & Chest Medicine department delivers world-class, premium respiratory care. 
            We specialize in diagnosing and treating complex lung conditions, combining state-of-the-art 
            bronchoscopy technology with compassionate, patient-centered expertise to help you breathe free.
          </p>

          {/* Core Features / Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Feature 1 */}
            <div className="premium-feature-card group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#7396d3]/10 border border-transparent hover:border-white/80">
              <div className="p-3 rounded-xl bg-[#b5f5ff] text-[#2f3395] group-hover:bg-[#02acf0] group-hover:text-white transition-colors duration-300 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-[#2f3395]">Advanced Asthma & COPD Care</h4>
                <p className="text-sm text-[#60a9bd] mt-1">Tailored therapies for critical and chronic airway management.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="premium-feature-card group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#7396d3]/10 border border-transparent hover:border-white/80">
              <div className="p-3 rounded-xl bg-[#aadcff] text-[#2f3395] group-hover:bg-[#2f3395] group-hover:text-white transition-colors duration-300 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-[#2f3395]">Interventional Pulmonology</h4>
                <p className="text-sm text-[#60a9bd] mt-1">Minimally invasive diagnostics using modern Bronchoscopy.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="premium-feature-card group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#7396d3]/10 border border-transparent hover:border-white/80">
              <div className="p-3 rounded-xl bg-[#9ce1f1] text-[#2f3395] group-hover:bg-[#02acf0] group-hover:text-white transition-colors duration-300 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-[#2f3395]">Sleep Apnea Diagnostics</h4>
                <p className="text-sm text-[#60a9bd] mt-1">Comprehensive sleep labs and monitoring for sleep disorders.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="premium-feature-card group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#7396d3]/10 border border-transparent hover:border-white/80">
              <div className="p-3 rounded-xl bg-[#cdffff] text-[#2f3395] group-hover:bg-[#2f3395] group-hover:text-white transition-colors duration-300 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-[#2f3395]">Post-COVID Rehabilitation</h4>
                <p className="text-sm text-[#60a9bd] mt-1">Dedicated lung strengthening and specialized recovery programs.</p>
              </div>
            </div>

          </div>

          {/* Premium CTA Button */}
          <div className="pt-4 flex items-center space-x-6">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-[#2f3395] rounded-xl group bg-gradient-to-br from-[#02acf0] via-[#7396d3] to-[#2f3395] group-hover:from-[#02acf0] group-hover:to-[#2f3395] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#82cfe9] transition-all duration-300 shadow-lg shadow-[#2f3395]/20">
              <span className="relative px-8 py-3.5 transition-all ease-in duration-200 bg-white rounded-[10px] group-hover:bg-opacity-0 font-bold uppercase tracking-wider text-xs">
                Book Department Consultation
              </span>
            </button>
            
           
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPulmonology;