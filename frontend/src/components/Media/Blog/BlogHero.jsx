// BlogHero.jsx
import React from 'react';
import './BlogHero.css';

const BlogHero = () => {
  return (
    <section className="blog-hero-section relative w-full min-h-[550px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      
      {/* Background Image Container with Premium Blue Overlay */}
      <div className="absolute inset-0 w-full h-full object-cover-wrapper">
        <img 
          src="/Media/BlogHero.png" 
          alt="KG Nanda Hospital Modern Clinic Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dynamic Multi-layered Gradient Overlay matching the reference image */}
        <div className="hero-custom-overlay"></div>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl text-left space-y-6">
          
         

          {/* Heading with Premium Typography and Split Colors */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight lg:leading-[1.15]">
            Caring for Life, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 block sm:inline-block mt-1 sm:mt-0">
              Every Single Day
            </span>
          </h1>

          {/* Structured Description paragraph */}
          <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl leading-relaxed opacity-95">
            KG Nanda Hospital brings the latest medical updates, expert health awareness programs, and cutting-edge innovations to keep you informed and healthy.
          </p>

         

        </div>
      </div>
    </section>
  );
};

export default BlogHero;