import React from 'react';
import './NeurologyBestServices.css';

const services = [
  {
    id: 1,
    title: "Neurodegenerative Care",
    description: "Advanced therapies and comprehensive management plans for Alzheimer's, Parkinson's, and memory disorders.",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Stroke & Cerebrovascular",
    description: "24/7 ultra-rapid response team equipped with state-of-the-art neuro-imaging for acute stroke interventions.",
    icon: "⚡",
    isEmergency: true,
  },
  {
    id: 3,
    title: "Epilepsy & Seizure Management",
    description: "Precision diagnostics using digital video EEG and personalized medication protocols for seizure control.",
    icon: "🌀",
  },
  {
    id: 4,
    title: "Neuromuscular Disorders",
    description: "Expert evaluation and cutting-edge treatments for ALS, muscular dystrophy, and peripheral neuropathies.",
    icon: "💪",
  },
  {
    id: 5,
    title: "Pediatric Neurology",
    description: "Compassionate, specialized neurological care tailored specifically for children and developmental milestones.",
    icon: "👶",
  },
  {
    id: 6,
    title: "Advanced Neuro-Diagnostics",
    description: "High-resolution 3T MRI, CT angiography, and nerve conduction studies for pinpoint accuracy.",
    icon: "🔬",
  }
];

const NeurologyBestServices = () => {
  return (
    <section className="neuro-section-wrapper py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Premium Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 bg-[#82cfe9] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-25 bg-[#2f3395]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section with Reveal Animation */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-down">
         
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2f3395]">
            Our Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] to-[#2f3395]">Neurology Services</span>
          </h2>
          <p className="text-[#60a9bd] max-w-2xl mx-auto text-base md:text-lg font-medium">
            Combining world-class neurological expertise with pioneering technology to deliver precision care for brain and spine health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`neuro-card group p-8 rounded-3xl transition-all duration-500 ease-out border backdrop-blur-md relative overflow-hidden
                ${service.isEmergency 
                  ? 'border-[#c90322]/20 hover:border-[#c90322]/50 bg-white/70' 
                  : 'border-white/40 hover:border-[#02acf0]/40 bg-white/40'
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Gradient Hover Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0
                ${service.isEmergency 
                  ? 'bg-gradient-to-br from-[#c90322]/5 via-transparent to-transparent' 
                  : 'bg-gradient-to-br from-[#cdffff]/50 via-transparent to-[#aadcff]/20'
                }`} 
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon & Status Tag */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                      ${service.isEmergency ? 'bg-[#c90322]/10 text-[#c90322]' : 'bg-gradient-to-br from-[#b5f5ff] to-[#82cfe9] text-[#2f3395]'}`}>
                      {service.icon}
                    </div>
                    {service.isEmergency && (
                      <span className="bg-[#c90322] text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse shadow-sm">
                        24/7 Emergency
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-[#2f3395] mb-3 transition-colors duration-300 group-hover:text-[#02acf0]">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[#60a9bd] text-sm leading-relaxed mb-6 group-hover:text-[#2f3395]/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Premium Interactive Button */}
                <div className="pt-2">
                  <button className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-all duration-300 group-hover:gap-4
                    ${service.isEmergency ? 'text-[#c90322]' : 'text-[#02acf0] group-hover:text-[#2f3395]'}`}>
                    Learn More 
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NeurologyBestServices;