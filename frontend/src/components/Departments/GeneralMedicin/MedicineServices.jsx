import React, { useEffect, useState } from 'react';
import './MedicineServices.css'; // Aapki separate CSS file ka import

const MedicineServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Section render hote hi entrance animation trigger karne ke liye
    setIsVisible(true);
  }, []);

  // General Medicine specific services data grid matching your layout structure
  const services = [
    {
      id: 1,
      title: 'Primary Consultation',
      icon: '🩺',
      description: 'Comprehensive initial health assessments, routine physical checkups, and systemic evaluations for general wellness.',
      badge: 'Most Popular'
    },
    {
      id: 2,
      title: 'Chronic Disease Care',
      icon: '❤️',
      description: 'Advanced management strategies for prolonged conditions like hypertension, diabetes mellitus, and cardiovascular risks.',
      badge: 'Critical Care'
    },
    {
      id: 3,
      title: 'Diagnostic Medicine',
      icon: '🔬',
      description: 'In-depth laboratory screening profiles, precision vital telemetry monitoring, and modern clinical analysis.',
      badge: 'Advanced Lab'
    },
    {
      id: 4,
      title: 'Geriatric Healthcare',
      icon: '👴',
      description: 'Specialized healthcare systems focused entirely on complex age-related ailments, cognitive care, and mobility wellness.',
      badge: 'Senior Care'
    },
    {
      id: 5,
      title: 'Infectious Diseases',
      icon: '🛡️',
      description: 'Targeted therapeutics, seasonal viral management systems, vaccinations, and comprehensive immune profiling.',
      badge: 'Immunity'
    },
    {
      id: 6,
      title: 'Preventive Wellness',
      icon: '🌱',
      description: 'Proactive lifestyle coaching models, preventative medical screening packages, and holistic wellness guidance.',
      badge: 'Lifestyle'
    }
  ];

  return (
    <section className="relative bg-[#f6f5ee] py-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#dd5200]/20">
      
      {/* Background Subtle Premium Ambient Blur Dots */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#35b6b4]/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#003a70]/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block with Smooth Entrance Transition */}
        <div className={`text-center max-w-3xl mx-auto mb-20 space-y-4 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         
          <h2 className="text-4xl sm:text-5xl font-black text-[#003a70] tracking-tight leading-tight">
            Our General Medicine <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003a70] via-[#21818d] to-[#35b6b4]">
              Expertise & Specializations
            </span>
          </h2>
          <div className="w-24 h-[4px] bg-[#dd5200] mx-auto rounded-full mt-2"></div>
          <p className="text-[#003a70]/70 text-base sm:text-lg max-w-2xl mx-auto pt-2">
            Explore our state-of-the-art diagnostic and clinical primary care ecosystems designed specifically to match your medical needs.
          </p>
        </div>

        {/* Dynamic Service Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-3xl p-8 border border-[#003a70]/5 shadow-[0_15px_40px_-12px_rgba(0,58,112,0.03)] flex flex-col justify-between relative overflow-hidden group transform transition-all duration-700"
              style={{
                transitionDelay: `${index * 120}ms`, // Premium staggered entrance effect
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              {/* Top Linear Line Border Reveal on Hover */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#35b6b4] to-[#003a70] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              
              <div className="space-y-6">
                
                {/* Icon Wrapper Frame & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#f6f5ee] border border-[#003a70]/5 flex items-center justify-center text-3xl shadow-sm group-hover:bg-[#003a70] group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#35b6b4] uppercase tracking-wider bg-[#35b6b4]/10 px-2.5 py-1 rounded-md group-hover:bg-[#dd5200] group-hover:text-white transition-colors duration-300">
                    {service.badge}
                  </span>
                </div>

                {/* Service Heading Title */}
                <h3 className="text-xl font-extrabold text-[#003a70] tracking-tight group-hover:text-[#dd5200] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Sub-text Paragraph Description */}
                <p className="text-sm text-[#003a70]/70 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Action Interactive Link Arrow Indicator */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#003a70] mt-8 pt-4 border-t border-[#f6f5ee] w-full group-hover:text-[#35b6b4] transition-colors duration-300">
                <span>View Details</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>

              {/* Backdrop Spot Radial Glow Overlay */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#35b6b4]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#dd5200]/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MedicineServices;