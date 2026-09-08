import React from 'react';
import './GyneServices.css';

const GyneServices = () => {
  // Premium Gynecology Services Data Array
  const servicesData = [
    {
      id: 1,
      title: "Prenatal & Maternity Care",
      desc: "Comprehensive multi-stage care for expectant mothers, ensuring a safe journey from conception to delivery.",
      tag: "Maternity",
      delayClass: "gs-delay-1",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Advanced Laparoscopy",
      desc: "Minimally invasive keyhole surgical techniques for rapid recovery and minimal post-operative discomfort.",
      tag: "Surgical",
      delayClass: "gs-delay-2",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 0A48.536 48.536 0 0 1 12 3m0 0c2.917 0 5.747.294 8.5.862m-21 10.398c0-.552.448-1 1-1h6.25a1 1 0 0 1 1 1v3.83a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1v-3.83Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Infertility Evaluation",
      desc: "Highly personalized reproductive diagnostics, counseling, and high-tech care paths for couples.",
      tag: "Reproductive",
      delayClass: "gs-delay-3",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Urogynecology Clinic",
      desc: "Dedicated diagnostics and treatment protocols for pelvic floor disorders and bladder therapeutic support.",
      tag: "Specialized Care",
      delayClass: "gs-delay-4",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Menopause Management",
      desc: "Holistic hormonal support, lifestyle tracking, and bone health checkups during transitional phases.",
      tag: "Wellness",
      delayClass: "gs-delay-5",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Preventive Screenings",
      desc: "High-end regular diagnostics including Pap Smears, Mammograms, and comprehensive pelvic ultrasound screening.",
      tag: "Diagnostics",
      delayClass: "gs-delay-6",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.03-2.22a.75.75 0 0 0-1.06-1.06l-4.72 4.72-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.25-5.25Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#f6fcfa] overflow-hidden">
      
      {/* Premium Background Soft Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#cdffff] to-[#b5f5ff] rounded-full filter blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#aadcff] rounded-full filter blur-[120px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 gs-reveal-animate">
         
          <h2 className="text-3xl md:text-5xl font-bold text-[#2f3395] tracking-tight">
            Premium Gynecological Solutions
          </h2>
          <p className="text-base md:text-lg text-[#60a9bd] max-w-2xl mx-auto leading-relaxed">
            Providing empathetic clinical care combined with high-tier technological intervention for women of all age brackets.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#02acf0] via-[#7396d3] to-[#dd5200] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={`relative overflow-hidden rounded-[2rem] p-8 gs-premium-card gs-reveal-animate ${service.delayClass}`}
            >
              {/* Card Meta Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="gs-icon-wrapper w-14 h-14 rounded-2xl flex items-center justify-center text-[#2f3395]">
                  {service.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#cdffff] text-[#2f3395]">
                  {service.tag}
                </span>
              </div>

              {/* Service Details */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#2f3395] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#60a9bd] leading-relaxed min-h-[72px]">
                  {service.desc}
                </p>
              </div>

              {/* Premium Footer Interactive Link */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#7396d3]/10">
                <span className="text-xs font-semibold text-[#7396d3]">Explore Protocol</span>
                <div className="gs-arrow-link flex items-center gap-1 font-bold text-sm cursor-pointer">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative Subtle Orange Indicator Corner on Focus */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#dd5200] rounded-tl-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default GyneServices;