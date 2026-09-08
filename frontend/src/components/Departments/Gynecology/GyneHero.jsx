import React from 'react';
import './GyneHero.css'; // Importing separate custom styling

const GyneHero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#f6fcfa] py-16 lg:py-24">
      
      {/* Premium Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#b5f5ff] to-[#aadcff] filter blur-[80px] opacity-60 gh-pulse-bg" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#9ce1f1] to-[#7396d3] filter blur-[100px] opacity-40 gh-pulse-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
           

            {/* Premium Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2f3395] leading-[1.15] gh-animate-fade-in gh-delay-1">
              Compassionate Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] to-[#7396d3]">
                For Every Stage
              </span> Of Womanhood
            </h1>

            {/* Short Description */}
            <p className="text-base md:text-lg text-[#60a9bd] max-w-xl leading-relaxed gh-animate-fade-in gh-delay-2">
              Experience world-class gynecological and maternity solutions tailored to your unique journey. Led by expert specialists with advanced clinical ecosystems.
            </p>

           
           

          </div>

          {/* Right Visual/Image Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center gh-animate-fade-in gh-delay-2">
            
            {/* Decorative Floating Circle */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#cdffff] z-0 gh-floating-element opacity-80" />
            
            {/* Main Premium Visual Wrapper */}
            <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#aadcff] to-[#cdffff] group">
              
              {/* Replace src with actual doctor/maternity high-quality premium image */}
              <img 
                src="/Department/gyneH.jpg" 
                alt="Gynecology Department"
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default GyneHero;