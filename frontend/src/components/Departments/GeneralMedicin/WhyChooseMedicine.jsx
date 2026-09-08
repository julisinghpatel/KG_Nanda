import React, { useEffect, useState } from 'react';
import './WhyChooseMedicine.css';

const WhyChooseMedicine = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="relative bg-[#f6f5ee] py-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#dd5200]/20">
      
      {/* Premium Ambient Background Blur Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[38rem] h-[38rem] rounded-full bg-[#35b6b4]/8 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] rounded-full bg-[#003a70]/5 blur-[120px] pointer-events-none animate-pulse-slow delay-700"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Asymmetric Header Layout matching the uploaded layout structure */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-20 transform transition-all duration-1000 cubic-bezier ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#35b6b4] border-l-2 border-[#dd5200] pl-3 mb-2">
              Our Core Identity
            </p>
            <p className="text-sm text-[#003a70]/70 leading-relaxed font-normal">
              Expediting vertical medical best practices, redefining technically sound diagnostic systems with genuine hospitality and high-end clinical infrastructure.
            </p>
          </div>

          <div className="lg:col-span-8 lg:text-right">
            <h2 className="text-4xl sm:text-5xl font-black text-[#003a70] tracking-tight leading-tight">
              Why Choose Our <br className="hidden sm:inline"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003a70] via-[#21818d] to-[#35b6b4]">
                General Medicine Department
              </span>
            </h2>
          </div>
        </div>

        {/* Dynamic Multi-Layout Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          
          {/* Card 1: Left Standard Feature */}
          <div 
            className={`feature-card bg-white rounded-3xl p-8 border border-[#003a70]/5 shadow-[0_12px_40px_-15px_rgba(0,58,112,0.03)] flex flex-col justify-between h-[340px] relative overflow-hidden group transform transition-all duration-1000 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#003a70]/5 border border-[#003a70]/10 flex items-center justify-center text-2xl group-hover:bg-[#dd5200] group-hover:text-white transition-all duration-500">
                🔬
              </div>
              <h3 className="text-xl font-bold text-[#003a70] tracking-tight">Express Laboratory Testing</h3>
              <p className="text-sm text-[#003a70]/70 leading-relaxed font-normal">
                State-of-the-art diagnostic testing pipelines engineered to deliver automated, prompt, and accurate chemical profiles.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#35b6b4] group-hover:text-[#dd5200] transition-colors duration-300 cursor-pointer pt-4 border-t border-[#f6f5ee]">
              <span>Explore Metrics</span> <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2: Left Center Standard Feature */}
          <div 
            className={`feature-card bg-white rounded-3xl p-8 border border-[#003a70]/5 shadow-[0_12px_40px_-15px_rgba(0,58,112,0.03)] flex flex-col justify-between h-[340px] relative overflow-hidden group transform transition-all duration-1000 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#003a70]/5 border border-[#003a70]/10 flex items-center justify-center text-2xl group-hover:bg-[#003a70] group-hover:text-white transition-all duration-500">
                🩺
              </div>
              <h3 className="text-xl font-bold text-[#003a70] tracking-tight">Holter Telemetry Oversight</h3>
              <p className="text-sm text-[#003a70]/70 leading-relaxed font-normal">
                Continuous cardiac data mapping algorithms ensuring multi-day vital analysis seamlessly captured in clinical records.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#35b6b4] group-hover:text-[#dd5200] transition-colors duration-300 cursor-pointer pt-4 border-t border-[#f6f5ee]">
              <span>Explore Metrics</span> <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: CENTRAL HERO FEATURE CARD (Deep Premium Variant matching image_c171ae.png) */}
          <div 
            className={`feature-card-center rounded-[2.5rem] bg-gradient-to-br from-[#003a70] via-[#002b54] to-[#1d7476] p-8 text-white h-[380px] lg:h-[410px] flex flex-col justify-between relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,58,112,0.25)] border border-white/10 group transform transition-all duration-1000 delay-300 md:col-span-2 lg:col-span-1 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            {/* Embedded Mesh Grid Graphic Pattern inside the central element */}
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest uppercase text-[#35b6b4]">
                ⚡ Premium Core
              </div>
              <h3 className="text-2xl font-black tracking-tight leading-tight pt-2">
                Advanced Precision <br />
                MRI Scan & Imaging
              </h3>
              <p className="text-xs text-[#f6f5ee]/80 leading-relaxed font-light">
                Distinctively unleashing high-resolution internal diagnostic magnetic imaging systems directly backed by expert clinical radiology boards.
              </p>
            </div>

            {/* Glowing Trigger Circle Button */}
            <div className="w-12 h-12 rounded-full bg-white text-[#003a70] flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 group-hover:bg-[#dd5200] group-hover:text-white transition-all duration-500 relative z-10 cursor-pointer self-start">
              ↗
            </div>

            {/* Linear Glow Sweep Effect */}
            <div className="absolute -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60 group-hover:animate-shine pointer-events-none" />
            {/* Dynamic Corner Gradient Flare */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#35b6b4]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#dd5200]/20 transition-colors duration-500"></div>
          </div>

          {/* Card 4: Right Standard Feature */}
          <div 
            className={`feature-card bg-white rounded-3xl p-8 border border-[#003a70]/5 shadow-[0_12px_40px_-15px_rgba(0,58,112,0.03)] flex flex-col justify-between h-[340px] relative overflow-hidden group transform transition-all duration-1000 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#003a70]/5 border border-[#003a70]/10 flex items-center justify-center text-2xl group-hover:bg-[#35b6b4] group-hover:text-white transition-all duration-500">
                🧬
              </div>
              <h3 className="text-xl font-bold text-[#003a70] tracking-tight">Ultrasound & Screenings</h3>
              <p className="text-sm text-[#003a70]/70 leading-relaxed font-normal">
                High-frequency somatic sonography diagnostics ensuring targeted preventative screening evaluations.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#35b6b4] group-hover:text-[#dd5200] transition-colors duration-300 cursor-pointer pt-4 border-t border-[#f6f5ee]">
              <span>Explore Metrics</span> <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseMedicine;