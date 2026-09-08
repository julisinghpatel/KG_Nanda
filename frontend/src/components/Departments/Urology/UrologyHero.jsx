import React from 'react';
import './UrologyHero.css'; // Apne path ke according import karein

const UrologyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f6fcfa] pt-16">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-primary pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow-secondary pointer-events-none" />

      {/* Grid Mesh Background Lines (Subtle Premium Touch) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#2f3395_1px,transparent_1px),linear-gradient(to_bottom,#2f3395_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
           

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2f3395] leading-tight animate-fade-in-up delay-100">
              World-Class <br />
              <span className="text-[#02acf0] relative inline-block">
                Urological Care
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#b5f5ff] -z-10 rounded-full" />
              </span>
              {" "}For You
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#60a9bd] max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Experience precise diagnostics and advanced robotic treatments. Our world-renowned specialists deliver personalized, compassionate solutions tailored to your urological health.
            </p>

          

            

          </div>

          {/* RIGHT VISUAL COLUMN */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:mt-0 mt-12">
            
            {/* Background Abstract Geometric Shapes */}
            <div className="absolute w-[80%] h-[80%] bg-[#cdffff] rounded-full filter blur-xl opacity-60 animate-float" />
            <div className="absolute w-[60%] h-[60%] border-2 border-[#aadcff] rounded-full rotate-45 pointer-events-none" />

            {/* Main Interactive Doctor/Department Image Container */}
            <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] bg-gradient-to-tr from-[#2f3395] to-[#02acf0] rounded-3xl p-1 shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              <div className="w-full h-full bg-[#f6fcfa] rounded-[22px] overflow-hidden relative">
                {/* Yahan aap apni Department ya Doctor ki image lagayenge */}
                <img 
                  src="/Department/UrologyH.jpg" 
                  alt="Urology Care Department"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* FLOATING BADGE 1: Premium Glassmorphic Card */}
           
           

          </div>

        </div>
      </div>
    </section>
  );
};

export default UrologyHero;