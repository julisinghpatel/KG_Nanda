import React from 'react';
import './AboutENT.css';

const AboutENT = () => {
  return (
    <section className="py-20 bg-[#f6fcfa] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side: Pinterest-Inspired Stack */}
          <div className="image-stack-container reveal-animation">
            {/* Background Accent Shape */}
            <div className="absolute -left-10 -top-10 w-64 h-64 bg-[#cdffff] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            
            {/* Main Image */}
            <img 
              src="/Department/ENT.jpg" 
              alt="Medical Technology" 
              className="main-img"
            />

            

            {/* Secondary Image */}
            <img 
              src="/Department/ENTt.jpg" 
              alt="Surgery Setup" 
              className="secondary-img"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#c90322]"></span>
                <span className="text-[#c20321] font-bold tracking-[0.2em] text-sm uppercase">
                  Pioneering ENT Excellence
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#2f3395] leading-tight">
                Dedicated to Your <br />
                <span className="text-[#02acf0]">Sensory Health & Well-being</span>
              </h2>
              <p className="text-[#60a9bd] text-lg leading-relaxed">
                Our ENT department combines world-class surgical expertise with the most advanced diagnostic technology. We don't just treat symptoms; we restore your quality of life through personalized care plans.
              </p>
            </div>

            {/* Features List with Premium Hover */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Advanced Micro-Surgery",
                "Pediatric ENT Specialists",
                "Speech & Language Therapy",
                "Hearing Aid Solutions"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="list-item flex items-center gap-4 feature-item-animate"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-box w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#2f3395]">{item}</span>
                </div>
              ))}
            </div>

            {/* Premium CTA Row */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-8">
              <button className="relative group px-10 py-4 overflow-hidden rounded-full bg-[#2f3395] text-white self-start transition-all duration-300">
                <span className="relative z-10 font-bold uppercase tracking-wider">Meet Specialists</span>
                <div className="absolute inset-0 bg-[#02acf0] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutENT;