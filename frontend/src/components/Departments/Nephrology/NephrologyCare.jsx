import React from 'react';
import { Activity, ShieldAlert, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import './NephrologyCare.css'; // Apni CSS file ko import zaroor karein

const NephrologyCare = () => {
  // Premium Features Data
  const services = [
    {
      icon: <Activity className="w-6 h-6 text-[#02acf0]" />,
      title: "Advanced Dialysis Care",
      desc: "State-of-the-art hemodialysis and peritoneal dialysis with ultra-pure water filtration systems."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#c90322]" />,
      title: "Kidney Disease Management",
      desc: "Comprehensive treatment maps for CKD (Chronic Kidney Disease) and acute kidney injury."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#2f3395]" />,
      title: "Kidney Transplant Support",
      desc: "Pre-transplant evaluation, donor matching, and world-class post-transplant follow-up care."
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#f6fcfa] overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Creative Elements (Pinterest Inspired) */}
      <div className="absolute top-10 left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#cdffff] to-[#aadcff] rounded-full filter blur-[120px] opacity-60 pointer-events-none animate-float" />
      <div className="absolute bottom-10 right-[-10%] w-[35rem] h-[35rem] bg-gradient-to-bl from-[#b5f5ff] to-[#7396d3] rounded-full filter blur-[100px] opacity-40 pointer-events-none animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section with Scroll-in Feel */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
         
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nephrology <span className="text-gradient-primary"> Care</span>
          </h2>
          <p className="text-base text-[#60a9bd] leading-relaxed">
            Dedicated to restoring kidney health through cutting-edge technology, pioneering research, and deeply personalized patient care models.
          </p>
        </div>

        {/* Main Content Grid: Left Content, Right Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Hero Content & Quick Stats */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#2f3395]">
                Nurturing Health, Renewing Lifelines.
              </h3>
              <p className="text-[#60a9bd] leading-relaxed">
                Our department brings together top nephrologists and advanced renal therapies to ensure your journey to recovery is smooth, transparent, and precise.
              </p>
            </div>

            {/* Premium Interactive Bullet Points */}
            <div className="space-y-3.5">
              {[
                "24/7 Emergency Dialysis Services",
                "Minimally Invasive Biopsies",
                "Dedicated Renal ICU & Modular Setup"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9ce1f1]/30 flex items-center justify-center group-hover:bg-[#02acf0] transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#2f3395] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-[#2f3395]/90 group-hover:translate-x-1 transition-transform duration-300">{text}</span>
                </div>
              ))}
            </div>

            {/* Premium CTA Button with Hover Glow */}
            <div className="pt-4">
              <button className="relative group overflow-hidden px-8 py-3.5 bg-[#2f3395] text-white font-medium rounded-xl shadow-lg shadow-[#2f3395]/20 hover:shadow-xl hover:shadow-[#02acf0]/30 transition-all duration-300 hover:-translate-y-0.5">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#02acf0] to-[#2f3395] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  Book Nephrology Consultation 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Premium 3D Hover Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Loop through services */}
            {services.map((item, index) => (
              <div 
                key={index} 
                className={`premium-glass-card rounded-2xl p-6 md:p-8 ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#b5f5ff] mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-[#2f3395] mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#60a9bd] leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Subtle card action link */}
                <div className="mt-6 flex items-center text-xs font-semibold text-[#02acf0] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}

            {/* Extra Decorative Achievement Badge */}
            <div className="premium-glass-card rounded-2xl p-6 flex items-center space-x-4 border-dashed border-2 border-[#82cfe9]/50 sm:col-span-2 bg-[#cdffff]/20">
              <div className="p-3 bg-[#aadcff]/50 rounded-xl text-[#2f3395]">
                <Award className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#2f3395]">Excellence Certified</h5>
                <p className="text-xs text-[#60a9bd]">National award-winning kidney care department & labs.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NephrologyCare;