import React, { useState } from 'react';
import './CoreServicesGeneralSurgery.css';

const servicesData = [
  {
    id: 'laparoscopic',
    title: 'Laparoscopic (Keyhole) Surgery',
    shortDesc: 'Advanced minimally invasive procedures for faster recovery and minimal scarring.',
    longDesc: 'Our department specializes in state-of-the-art laparoscopic techniques for gallstones, hernia repair, and appendectomy. Using HD camera systems and precision instruments, we ensure micro-incisions.',
    features: ['Minimal Post-Op Pain', '1-2 Days Hospital Stay', 'Negligible Scarring', 'Rapid Return to Work'],
    tag: 'Advanced Tech',
    accentColor: '#02acf0'
  },
  {
    id: 'trauma',
    title: 'Emergency Trauma & Acute Care',
    shortDesc: '24/7 comprehensive surgical support for critical abdominal and soft tissue injuries.',
    longDesc: 'Equipped with a dedicated surgical ICU and round-the-clock consultants, we manage complex poly-trauma cases, acute appendicitis, bowel obstructions, and peritonitis with zero delay.',
    features: ['24/7 Availability', 'Immediate OT Readiness', 'Trauma Specialists', 'ICU Backup Support'],
    tag: 'Critical Care',
    accentColor: '#c20321',
    isEmergency: true
  },
  {
    id: 'colorectal',
    title: 'Colorectal & Proctology Clinic',
    shortDesc: 'Modern laser and surgical management for complex anorectal disorders.',
    longDesc: 'Laser surgery for piles (hemorrhoids), fissures, and complex fistulas. We offer pain-free, day-care procedures using cutting-edge laser fibers ensuring high success rates.',
    features: ['Laser Procedure', 'No Pain / No Stitches', 'Same Day Discharge', 'High Cure Rate'],
    tag: 'Laser Speciality',
    accentColor: '#2f3395'
  },
  {
    id: 'endocrine',
    title: 'Endocrine & Breast Surgery',
    shortDesc: 'Specialized surgical care for thyroid, parathyroid, and benign/malignant breast conditions.',
    longDesc: 'Comprehensive management of thyroid tumors, multi-nodular goiters, and breast lumps. We offer oncoplastic breast surgeries maintaining aesthetic excellence along with therapeutic clearing.',
    features: ['Cosmetic Closure', 'Biopsy Facilities', 'Multidisciplinary Team', 'Post-Op Rehab'],
    tag: 'Onco-Surgery',
    accentColor: '#7396d3'
  }
];

const CoreServicesGeneralSurgery = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);

  return (
    <section className="premium-gradient-bg relative py-16 px-6 md:px-12 lg:px-24 overflow-hidden flex flex-col justify-center">
      
      {/* Background Decorative Premium Orbs */}
      <div className="glow-orb-1 absolute top-10 left-[-10%] w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none" />
      <div className="glow-orb-2 absolute bottom-10 right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mb-10 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2f3395] tracking-tight leading-none mb-6">
          General Surgery <span className="text-[#02acf0]">Services</span>
        </h2>
        <p className="text-lg text-[#60a9bd] font-medium max-w-2xl">
          Combining clinical excellence with futuristic surgical innovations. Explore our comprehensive treatment spectrum designed for rapid recovery.
        </p>
      </div>

      {/* Main Layout: Split Section instead of standard cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
        
        {/* Left Panel: Interactive Dynamic List */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-3">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-interactive-item p-4 md:p-5 rounded-2xl border border-white/40 glass-panel flex flex-col justify-between transition-all duration-300 ${
                activeTab.id === service.id ? 'active shadow-xl transform translate-x-2' : 'hover:bg-white/60'
              }`}
              onMouseEnter={() => setActiveTab(service)}
              onClick={() => setActiveTab(service)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span 
                  className="text-xs font-bold px-3 py-1 rounded-md text-white shadow-sm"
                  style={{ backgroundColor: service.accentColor }}
                >
                  {service.tag}
                </span>
                {service.isEmergency && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#c20321] uppercase tracking-wider bg-[#f6fcfa] px-2.5 py-1 rounded-full border border-[#c90322]/20 emergency-pulse">
                    <span className="w-2 h-2 rounded-full bg-[#c20321]" /> Emergency
                  </span>
                )}
              </div>      
              <h3 className="text-xl font-bold text-[#2f3395] mb-2 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-[#60a9bd] line-clamp-2">
                {service.shortDesc}
              </p>

              {/* Action indicator link */}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#2f3395] opacity-60 hover:opacity-100 transition-opacity">
                <span>View Insights</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel: Massive Interactive Showcase (The Premium Display) */}
        <div className="lg:col-span-7 rounded-3xl glass-panel p-6 md:p-10 border border-white/60 shadow-2xl flex flex-col justify-center relative overflow-hidden transition-all duration-500 ease-out transform">
          
          {/* Subtle watermark background grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2f3395_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Dynamic Top Content Area */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg floating-image"
                style={{ background: `linear-gradient(135deg, ${activeTab.accentColor}, #2f3395)` }}
              >
                {activeTab.title.charAt(0)}
              </div>
             
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-[#2f3395] mb-4 leading-tight transition-all">
              {activeTab.title}
            </h3>
            
            <p className="text-sm md:text-base text-[#60a9bd] leading-relaxed mb-6 font-medium border-l-4 pl-4 border-[#82cfe9]">
              {activeTab.longDesc}
            </p>
          </div>

          {/* Dynamic Bottom Key-Highlights Grid */}
          <div className="relative z-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2f3395] mb-4">
              Clinical Quality Indicators & Standards:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeTab.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/80 hover:bg-[#cdffff]/40 transition-colors duration-300"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white shadow-inner shrink-0"
                    style={{ backgroundColor: activeTab.accentColor }}
                  >
                    ✓
                  </div>
                  <span className="text-sm font-bold text-[#2f3395]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Premium CTA Button inside Section */}
            <div className="mt-8 pt-5 border-t border-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-[#7396d3] max-w-xs text-center sm:text-left">
                *Guidelines match International Healthcare Protocols & Safety Standards.
              </p>
             
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default CoreServicesGeneralSurgery;