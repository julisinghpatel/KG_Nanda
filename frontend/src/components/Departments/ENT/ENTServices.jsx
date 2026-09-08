import React from 'react';
import { Ear, Eye, ShieldCheck, Activity, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import './ENTServices.css'; // Importing separate CSS file

const ENTServices = () => {
  const services = [
    {
      id: 1,
      icon: <Ear className="w-8 h-8 text-[#02acf0]" />,
      title: "Ear & Otology Care",
      desc: "Advanced diagnostics and treatment for hearing loss, tinnitus, chronic ear infections, and balance disorders.",
      features: ["Audiometry Testing", "Hearing Aid Fitting", "Micro-ear Surgery"]
    },
    {
      id: 2,
      icon: <Activity className="w-8 h-8 text-[#2f3395]" />,
      title: "Nasal & Sinus Treatments",
      desc: "Premium relief from chronic sinusitis, nasal blockages, deviated septum (DNS), and advanced allergic rhinitis.",
      features: ["FESS (Sinus Surgery)", "Allergy Management", "Septoplasty"]
    },
    {
      id: 3,
      icon: <Stethoscope className="w-8 h-8 text-[#02acf0]" />,
      title: "Throat & Voice Disorders",
      desc: "Expert care for voice hoarseness, tonsillitis, snoring, sleep apnea, and sophisticated laryngeal disorders.",
      features: ["Micro-laryngeal Surgery", "Voice Therapy", "Sleep Apnea Study"]
    },
    {
      id: 4,
      icon: <Sparkles className="w-8 h-8 text-[#2f3395]" />,
      title: "Head & Neck Surgeries",
      desc: "Highly precise surgical interventions for thyroid, parathyroid, salivary glands, and benign or malignant tumors.",
      features: ["Thyroidectomy", "Salivary Gland Surgery", "Biopsies"]
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f6fcfa] via-[#cdffff] to-[#f6fcfa] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Premium Animated Background Shapes */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#b5f5ff] to-[#aadcff] rounded-full blur-[120px] opacity-40 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#9ce1f1] to-[#7396d3] rounded-full blur-[150px] opacity-30 animate-float-reverse pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2f3395] mb-4">
            World-Class <span className="text-[#02acf0]">Ear, Nose & Throat</span> Care
          </h2>
          <p className="text-base md:text-lg text-[#60a9bd] font-medium leading-relaxed">
            Experience premium medical excellence equipped with next-generation technology and handled by elite clinical experts.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-[#02acf0] to-[#2f3395] mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="premium-glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                {/* Icon Wrapper */}
                <div className="icon-glow w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md mb-5 border border-white/80 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#b5f5ff]">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#2f3395] mb-3 group-hover:text-[#02acf0] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#60a9bd] leading-relaxed mb-4 font-medium text-sm">
                  {service.desc}
                </p>

                {/* Tag/Features list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-semibold text-[#2f3395]/80 bg-[#aadcff]/40 px-3 py-1.5 rounded-xl border border-[#aadcff]/60 transition-all duration-300 group-hover:bg-[#b5f5ff]/60"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button/Link */}
              <div className="flex items-center text-sm font-bold text-[#2f3395] group-hover:text-[#c90322] transition-colors duration-300 pt-4 border-t border-slate-100">
                <span>Learn More About {service.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
              </div>

            </div>
          ))}
        </div>

        {/* Premium Emergency Note Bottom Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#2f3395] to-[#02acf0] rounded-3xl p-6 md:p-8 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold mb-1.5 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c90322] animate-ping" /> 
              Need Immediate ENT Assistance?
            </h4>
            <p className="text-[#cdffff] text-sm md:text-base opacity-90 font-light">
              Our specialized emergency trauma unit for foreign object removal and epistaxis is open 24/7.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default ENTServices;