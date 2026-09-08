import React from 'react';
import './AboutDigitalXray.css';

const AboutDigitalXray = () => {
  return (
    <section className="about-xray-section py-24 px-6 md:px-16 relative overflow-hidden">
      
      {/* Decorative Moving Background Elements for Premium Look */}
      <div className="moving-pulse pulse-1"></div>
      <div className="moving-pulse pulse-2"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content Area (Inspired by layout structure of image_7a6e26.jpg) */}
        <div className="about-content-block">
         
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            We provide top-tier <br />
            <span className="text-sky-600 premium-gradient-text">Digital X-Ray Diagnostics.</span>
          </h2>
          
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10">
            Our department features full-spectrum digital radiography systems capable of processing crystal-clear imaging in milliseconds. By discarding traditional film processing, we offer ultra-fast reporting with 80% reduced radiation exposure.
          </p>

          {/* Feature Lists with premium hover properties */}
          <div className="flex flex-col gap-6">
            
            {/* Feature item 1 */}
            <div className="feature-card flex items-start gap-4 p-4 rounded-2xl transition-all duration-300">
              <div className="icon-box shrink-0 w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 transition-transform duration-300">
                {/* Radiation Scan Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-1">Ultra-Low Radiation Dosage</h4>
                <p className="text-xs md:text-sm text-slate-500">Advanced ALARA software filters maximize child and adult safety during exposures.</p>
              </div>
            </div>

            {/* Feature item 2 */}
            <div className="feature-card flex items-start gap-4 p-4 rounded-2xl transition-all duration-300">
              <div className="icon-box shrink-0 w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 transition-transform duration-300">
                {/* Instant Speed/Clock Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-1">Instant High-Resolution Previews</h4>
                <p className="text-xs md:text-sm text-slate-500">Images seamlessly link directly to clinical expert workstations within 30 seconds.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Specialized Curved Image Frame (Strictly following image_7a6e26.jpg layout architecture) */}
        <div className="about-visual-block relative flex justify-center lg:justify-end items-center">
          
          {/* Main Frame with custom rounded corners mirroring image_7a6e26.jpg */}
          <div className="image-frame-container relative w-full max-w-[450px] aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" 
              alt="High-Tech Diagnostic Room" 
              className="about-xray-img w-full h-full object-cover transition-transform duration-700"
            />
            
            {/* Subtle tech tint grid overlay */}
            <div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply"></div>

            {/* Floating Contact/Info Badge inside image area mirroring image_7a6e26.jpg */}
            <div className="absolute bottom-6 left-6 right-6 bg-sky-600/90 backdrop-blur-md px-6 py-4 rounded-xl flex items-center gap-4 text-white shadow-xl border border-sky-400/30 moving-float">
              
               
             
              <div>
                <p className="text-xs text-sky-200 uppercase tracking-widest font-medium">24/7 Diagnostics Support</p>
               </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutDigitalXray;