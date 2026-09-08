import React from 'react';
import "./GynecologyAbout.css"; 

const GyneAbout = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#f6fcfa]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cdffff] rounded-full filter blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b5f5ff] rounded-full filter blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Premium Image Stack */}
          <div className="w-full lg:w-1/2 ga-reveal">
            <div className="ga-image-container">
              {/* Main Image */}
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
                <img 
                  src="/Department/gyneAbout.jpg" 
                  alt="Gynecology Care" 
                  className="w-full h-[550px] object-cover"
                />
              </div>
              
              

              {/* Decorative dotted pattern */}
              <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20 pointer-events-none bg-[radial-gradient(#2f3395_2px,transparent_2px)] [background-size:16px_16px]" />
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="ga-reveal ga-delay-1">
             
              <h2 className="text-4xl md:text-5xl font-bold text-[#2f3395] mt-2 ga-heading-accent">
                Empowering Women Through <br /> Exceptional Care
              </h2>
            </div>

            <p className="text-lg text-[#60a9bd] leading-relaxed ga-reveal ga-delay-2">
              At our Gynecology department, we believe every woman deserves a healthcare journey that is personal, compassionate, and technologically advanced. From adolescence to menopause, our premium services are designed to nurture your well-being.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ga-reveal ga-delay-3">
              {[
                { title: 'Advanced Diagnostics', desc: 'Cutting-edge screening technologies.' },
                { title: 'Personalized Plans', desc: 'Treatment as unique as you are.' },
                { title: 'Expert Specialists', desc: 'Led by world-renowned gynecologists.' },
                { title: 'Holistic Wellness', desc: 'Focusing on body, mind, and spirit.' }
              ].map((item, index) => (
                <div key={index} className="ga-list-item flex gap-4 group">
                  <div className="ga-list-icon flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[#2f3395]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2f3395] group-hover:text-[#02acf0] transition-colors">{item.title}</h5>
                    <p className="text-sm text-[#7396d3]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          
          </div>

        </div>
      </div>
    </section>
  );
};

export default GyneAbout;