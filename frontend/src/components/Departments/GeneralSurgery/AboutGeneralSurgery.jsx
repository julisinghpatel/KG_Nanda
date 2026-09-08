import React from 'react';
import './GeneralSurgery.css'; // Apni CSS file import karein

const GeneralSurgery = () => {
  return (
    <div className="min-h-screen bg-[#f6fcfa] overflow-x-hidden font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#cdffff] via-[#b5f5ff] to-[#aadcff] px-6 py-20 lg:px-16 overflow-hidden">
        
        {/* Decorative Background Blobs for Premium Depth */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#82cfe9] blur-[120px] opacity-40 animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#7396d3] blur-[150px] opacity-30 animate-float delay-300"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in-up">
           
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2f3395] leading-tight">
              Department of <br />
              <span className="bg-gradient-to-r from-[#02acf0] to-[#2f3395] bg-clip-text text-transparent">
                General Surgery
              </span>
            </h1>
            
            <p className="text-lg text-[#60a9bd] font-medium max-w-xl mx-auto lg:mx-0">
              Experience world-class surgical care powered by precision technology, highly experienced surgeons, and a patient-first approach.
            </p>
            
           
          </div>

          {/* Right Image/Visual Section */}
          <div className="relative flex justify-center items-center animate-fade-in-up delay-200">
            {/* Glassmorphic Background Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9ce1f1]/30 to-[#7396d3]/20 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>
            
            <div className="relative w-full max-w-md h-[450px] bg-gradient-to-br from-[#82cfe9] to-[#2f3395] rounded-3xl overflow-hidden shadow-2xl animate-float">
              {/* Replace src with your actual surgery/doctor image */}
              <img 
                src="/Department/generalsurH.jpg" 
                alt="General Surgery" 
                className="w-full h-full object-cover mix-blend-overlay opacity-90 transition-transform duration-700 hover:scale-110"
              />
              
              {/* Floating Stat Card inside Hero */}
             
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT GENERAL SURGERY SECTION ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Interactive Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative animate-fade-in-up">
            <div className="absolute -z-10 w-72 h-72 bg-[#9ce1f1]/40 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl shadow-md border-b-4 border-[#02acf0] transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#cdffff] text-[#02acf0] flex items-center justify-center mb-4 font-bold">01</div>
                <h4 className="font-bold text-[#2f3395] mb-1">Advanced OT</h4>
                <p className="text-xs text-[#60a9bd]">Modular operation theaters with laminar airflow.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border-b-4 border-[#2f3395] transform hover:-translate-y-2 transition-all duration-300 translate-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#aadcff] text-[#2f3395] flex items-center justify-center mb-4 font-bold">02</div>
                <h4 className="font-bold text-[#2f3395] mb-1">Minimally Invasive</h4>
                <p className="text-xs text-[#60a9bd]">Laparoscopic techniques for faster recovery.</p>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="p-6 bg-white rounded-2xl shadow-md border-b-4 border-[#7396d3] transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#b5f5ff] text-[#7396d3] flex items-center justify-center mb-4 font-bold">03</div>
                <h4 className="font-bold text-[#2f3395] mb-1">24/7 Trauma</h4>
                <p className="text-xs text-[#60a9bd]">Emergency surgical care available round the clock.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border-b-4 border-[#c90322] transform hover:-translate-y-2 transition-all duration-300 translate-y-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#c90322] flex items-center justify-center mb-4 font-bold">04</div>
                <h4 className="font-bold text-[#2f3395] mb-1">Post-Op Care</h4>
                <p className="text-xs text-[#60a9bd]">Dedicated team for seamless recovery monitoring.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Description */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f3395] leading-tight">
              Pioneering Surgical Excellence with Compassionate Patient Care
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#02acf0] to-[#2f3395] rounded-full"></div>
            
            <p className="text-base text-[#60a9bd] leading-relaxed">
              Our General Surgery department provides comprehensive surgical care for a wide range of health conditions. From routine procedures to highly complex emergency interventions, our board-certified surgeons utilize the latest technology to ensure optimal patient outcomes.
            </p>
            
            <p className="text-base text-[#60a9bd] leading-relaxed">
              We specialize in minimally invasive (laparoscopic) surgeries, which significantly reduce pain, minimize scarring, and speed up recovery times compared to traditional open surgeries.
            </p>

            {/* Premium Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Highly experienced lead surgeons",
                "Laser & Laparoscopic options",
                "Comprehensive pre-surgery counseling",
                "Affordable & transparent package pricing"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#cdffff] group-hover:bg-[#02acf0] flex items-center justify-center text-[#02acf0] group-hover:text-white transition-colors duration-300">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-[#2f3395] opacity-90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GeneralSurgery;