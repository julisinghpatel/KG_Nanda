import React from 'react';
import './PulmonologyServices.css';

const PulmonologyServices = () => {
  const services = [
    {
      id: "01",
      title: "Advanced Bronchoscopy",
      tag: "Interventional",
      desc: "State-of-the-art minimally invasive optical insertion to visualize and diagnose complex airway and lung structure conditions with extreme precision.",
      features: ["EBUS (Endobronchial Ultrasound)", "Rigid & Flexible Bronchoscopy", "Foreign Body Removal"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      bgGradient: "from-[#b5f5ff]/40 to-[#aadcff]/30"
    },
    {
      id: "02",
      title: "Comprehensive Sleep Diagnostics",
      tag: "Sleep Labs",
      desc: "Premium overnight polysomnography and sleep monitoring systems designed to detect, analyze, and treat complex Obstructive Sleep Apnea (OSA).",
      features: ["Overnight Polysomnography", "CPAP/BiPAP Titration", "Home Sleep Apnea Testing"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      bgGradient: "from-[#9ce1f1]/40 to-[#82cfe9]/20"
    },
    {
      id: "03",
      title: "Chronic Airway Management",
      tag: "Therapeutic",
      desc: "Advanced therapeutic protocols and customized biological treatment pipelines for managing severe refractory Asthma, COPD, and Emphysema.",
      features: ["Biologic Therapies", "Advanced Pulmonary Function Tests", "Volume Reduction Consultation"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgGradient: "from-[#cdffff]/50 to-[#b5f5ff]/30"
    },
    {
      id: "04",
      title: "Pulmonary Rehabilitation",
      tag: "Restorative",
      desc: "A premium, multidisciplinary recovery ecosystem combining physical reconditioning, targeted breathing exercises, and clinical lung strengthening.",
      features: ["Post-COVID Lung Recovery", "6-Minute Walk Test Analysis", "Respiratory Endurance Training"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgGradient: "from-[#aadcff]/40 to-[#7396d3]/20"
    },
    {
      id: "05",
      title: "Diffuse Lung Disease Clinic",
      tag: "Specialized",
      desc: "Expert diagnostic frameworks and cutting-edge anti-fibrotic counseling for Interstitial Lung Disease (ILD) and progressive pulmonary fibrosis.",
      features: ["High-Resolution CT Evaluation", "Multi-Disciplinary Discussion", "Anti-Fibrotic Management"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      bgGradient: "from-[#b5f5ff]/50 to-[#9ce1f1]/30"
    },
    {
      id: "06",
      title: "Pleural Disease Interventions",
      tag: "Critical Care",
      desc: "Rapid response and premium precision infrastructure for complex pleural space management, including ultrasound-guided drainage procedures.",
      features: ["Medical Thoracoscopy", "Indwelling Pleural Catheters", "Pleurodesis Protocols"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      bgGradient: "from-[#cdffff]/60 to-[#aadcff]/40"
    }
  ];

  return (
    <section className="pulmo-services-section relative overflow-hidden py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f6fcfa]">
      
      {/* Background Pinterest Blurs */}
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#cdffff] opacity-30 blur-[140px] pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#aadcff] opacity-40 blur-[120px] pointer-events-none animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4 animate-fade-in-up">
         
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#2f3395] leading-tight">
            Premium Respiratory Services &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] via-[#7396d3] to-[#2f3395]">
              Advanced Chest Interventions
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#02acf0] to-[#2f3395] mx-auto rounded-full mt-3"></div>
          
          <p className="text-[#60a9bd] text-sm md:text-base max-w-2xl mx-auto pt-2 font-medium">
            Utilizing next-generation medical technology and highly specialized protocols to restore optimal pulmonary health.
          </p>
        </div>

        {/* Pinterest-style Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="premium-service-card group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-[0_10px_30px_rgba(47,51,149,0.03)] hover:shadow-[0_20px_50px_rgba(2,172,240,0.12)] transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-white shadow-md shadow-[#7396d3]/10 text-[#2f3395] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#02acf0] group-hover:to-[#2f3395] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-black text-[#2f3395]/5 group-hover:text-[#2f3395]/10 transition-colors duration-500 select-none">
                    {service.id}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#02acf0] bg-[#aadcff]/40 group-hover:bg-white px-2.5 py-1 rounded-md transition-colors duration-500">
                    {service.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#2f3395] tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-normal group-hover:text-gray-700 transition-colors duration-500 line-clamp-3">
                  {service.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-gray-100 group-hover:border-[#2f3395]/10 transition-colors duration-500">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2 text-[11px] font-semibold text-[#60a9bd] group-hover:text-[#2f3395]/80 transition-colors duration-500">
                      <svg className="w-3.5 h-3.5 text-[#02acf0] group-hover:text-[#2f3395] shrink-0 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 pt-4 mt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2f3395] group-hover:text-[#02acf0] transition-colors duration-500">
                <span>Explore Details</span>
                <div className="w-7 h-7 rounded-full bg-[#f6fcfa] group-hover:bg-[#2f3395] group-hover:text-white flex items-center justify-center transition-all duration-500 transform group-hover:translate-x-1 shadow-inner">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#2f3395] to-[#7396d3] rounded-2xl p-7 md:p-10 shadow-2xl relative overflow-hidden group/cta flex flex-col md:flex-row items-center justify-between gap-7 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#02acf0] opacity-20 blur-2xl group-hover/cta:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 max-w-xl space-y-3 text-center md:text-left">
            <h4 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">Need Immediate Respiratory Consultation?</h4>
            <p className="text-[#cdffff]/80 text-sm leading-relaxed">
              Connect with India's leading chest medicine experts and experience highly standardized diagnostic algorithms for precise therapeutic care.
            </p>
          </div>
         
        </div>

      </div>
    </section>
  );
};

export default PulmonologyServices;