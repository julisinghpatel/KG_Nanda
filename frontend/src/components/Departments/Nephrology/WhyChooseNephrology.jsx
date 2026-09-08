import React from 'react';
import { Award, Users, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import './WhyChooseNephrology.css'; // Don't forget to import the CSS file

const WhyChooseNephrology = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-[#2f3395]" />,
      
      title: "Pioneering Kidney Transplants",
      desc: "Our high-precision transplant ecosystem brings together elite surgeons and innovative post-op protocols for unmatched survival rates.",
      bgColor: "bg-[#aadcff]/20"
    },
    {
      icon: <Users className="w-6 h-6 text-[#02acf0]" />,
      tag: "Expert Panel",
      title: "Globally Acclaimed Nephrologists",
      desc: "Consult with industry thought-leaders certified by international renal boards, dedicated to customized therapy designs.",
      bgColor: "bg-[#b5f5ff]/30"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#60a9bd]" />,
      tag: "Advanced Standards",
      title: "Ultra-Pure Dialysis Infrastructure",
      desc: "Equipped with next-gen multi-stage water filtration systems preventing tracking infections and giving seamless comfort.",
      bgColor: "bg-[#cdffff]/40"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#c90322]" />,
      title: "24/7 Acute Renal Emergency Response",
      desc: "Instant critical care deployment for sudden kidney failures or urgent toxins filtration processes.",
      bgColor: "bg-[#f6fcfa]",
      isCritical: true
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#f6fcfa] flex items-center justify-center py-24 px-4 overflow-hidden">
      
      {/* Background Soft Abstract Shapes */}
      <div className="absolute top-[-5%] right-[-5%] w-[35rem] h-[35rem] bg-[#cdffff] rounded-full filter blur-[130px] opacity-50 pointer-events-none animate-ambient" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-[#aadcff] rounded-full filter blur-[150px] opacity-40 pointer-events-none animate-ambient" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-reveal">
         
          <h2 className="text-3xl md:text-5xl font-black text-[#2f3395] tracking-tight mb-6">
            Why Patients Trust Our <span className="text-brand-gradient">Nephrology Unit</span>
          </h2>
          <p className="text-base text-[#60a9bd] leading-relaxed">
            We don't just treat renal conditions; we engineer advanced, compassionate lifelines utilizing medical science's latest clinical breakthroughs.
          </p>
        </div>

        {/* Pinterest-Inspired Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop over features */}
          {highlights.map((item, index) => (
            <div 
              key={index}
              className={`premium-interactive-card rounded-3xl p-8 flex flex-col justify-between group cursor-pointer animate-reveal ${
                item.isCritical ? 'lg:col-span-1 md:col-span-2 border-l-4 border-l-[#c90322]' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div>
                {/* Header elements inside card */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  
                  {item.tag ? (
                    <span className="text-[11px] font-bold text-[#2f3395]/70 bg-white/80 border border-[#7396d3]/20 px-3 py-1 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-[#c90322] bg-[#c90322]/10 px-3 py-1 rounded-full">
                      Critical Support
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#2f3395] mb-4 group-hover:text-[#02acf0] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#60a9bd] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Interactive Footer element of Card */}
              <div className="pt-4 border-t border-[#7396d3]/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2f3395]/60 group-hover:text-[#2f3395] transition-colors">
                  Clinical Standards
                </span>
                <div className="w-8 h-8 rounded-full bg-[#f6fcfa] flex items-center justify-center border border-[#82cfe9]/30 text-[#60a9bd] group-hover:bg-[#2f3395] group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseNephrology;