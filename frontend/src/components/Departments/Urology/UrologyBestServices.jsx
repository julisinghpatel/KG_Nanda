import React, { useState } from 'react';
import './UrologyBestServices.css'; // Apne workspace project path ke according import karein

const UrologyBestServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Advanced Kidney Stone Laser Treatment",
      shortDesc: "Bina chirfaad modern Holmium Laser technology se stones ka instant powder solution.",
      longDesc: "Hamare hospital me cutting-edge Flexible Ureteroscopy (RIRS) aur Mini-PCNL techniques ka use kiya jata hai. Isse bade se bada kidney stone bina kisi scar ya dard ke, laser energy dwara minto me dhoor kiya jata hai. Patient ko same day discharge bhi mil jata hai.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      badge: "Most Popular",
      badgeBg: "bg-[#aadcff] text-[#2f3395] border-[#82cfe9]"
    },
    {
      id: 1,
      title: "Robotic & Minimally Invasive Surgery",
      shortDesc: "Precision urological surgeries with faster recovery and minimal blood loss.",
      longDesc: "Prostatectomy, Nephrectomy, aur Bladder reconstructions ke liye advanced daVinci robotic system ka upyog kiya jata hai. High-definition 3D vision aur multi-jointed instruments ke saath hamare expert surgeons micro-level precision pradaan karte hain.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      badge: "Next-Gen Tech",
      badgeBg: "bg-[#b5f5ff] text-[#02acf0] border-[#82cfe9]"
    },
    {
      id: 2,
      title: "Prostate Health & Uro-Oncology",
      shortDesc: "Comprehensive screening, laser enlargement treatment (HoLEP), aur cancer care.",
      longDesc: "Age-related prostate enlargement (BPH) ke liye advanced HoLEP (Holmium Laser Enucleation of Prostate) aur prostate cancer ke liye standard localized chemotherapy radiation protocols pradaan kiye jaate hain.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: "Critical Care",
      badgeBg: "bg-[#cdffff] text-[#60a9bd] border-[#9ce1f1]"
    },
    {
      id: 3,
      title: "24/7 Emergency Urological Trauma",
      shortDesc: "Urinary retention, acute colic pain, aur kidney injuries ke liye immediate emergency.",
      longDesc: "Urological blockages, severe kidney pain ya traumatic tract injuries ke liye hamari dedicated acute care team 24 ghante on-duty rehti hai. Instant diagnostics aur pain-relief interventions turant chalu kiye jaate hain.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: "Emergency",
      badgeBg: "bg-[#f6fcfa] text-[#c90322] border-[#c20321]/30"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Structural Subtle Grids for Premium Tech Vibe */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#2f3395_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#b5f5ff]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#aadcff]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Heading Group */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 animate-fade-up">
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#2f3395]">
            Urology <span className="text-[#02acf0]">Best Premium Services</span>
          </h2>
          <p className="text-[#60a9bd] text-sm md:text-base">
            Hamare hospital me world-class technology aur renowned expertise ka integration hai, jo aapko sabse safe aur precise medical outcome ki guarantee deta hai.
          </p>
        </div>

        {/* Dynamic Interaction Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Interactive Service Selection Tabs */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 transform relative overflow-hidden group ${
                  activeService === service.id
                    ? 'bg-[#2f3395] text-white border-transparent shadow-xl shadow-[#2f3395]/20 scale-[1.01]'
                    : 'bg-[#f6fcfa] text-[#2f3395] border-[#9ce1f1]/40 hover:bg-white hover:border-[#02acf0] hover:shadow-lg hover:shadow-[#2f3395]/5'
                }`}
              >
                {/* Accent line trigger overlay on active state */}
                <div className={`absolute top-0 left-0 w-1 h-full transition-transform duration-300 ${
                  activeService === service.id ? 'bg-[#02acf0]' : 'bg-[#82cfe9] scale-y-0 group-hover:scale-y-100'
                }`} />

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                    activeService === service.id ? 'bg-white/10 text-[#b5f5ff]' : 'bg-[#cdffff] text-[#02acf0] group-hover:bg-[#02acf0] group-hover:text-white'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base md:text-lg tracking-tight transition-colors">
                      {service.title}
                    </h4>
                    <p className={`text-xs leading-relaxed transition-colors ${
                      activeService === service.id ? 'text-[#aadcff]' : 'text-[#60a9bd]'
                    }`}>
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Interactive Feature Showcase Panel */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#f6fcfa] to-[#cdffff]/30 border border-[#9ce1f1]/40 rounded-3xl p-8 md:p-12 shadow-2xl relative flex flex-col justify-between overflow-hidden group">
            
            {/* Ambient Background Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#b5f5ff]/40 to-transparent rounded-full filter blur-xl pointer-events-none transform translate-x-12 -translate-y-12" />
            
            {/* Key Content Area - re-triggers animation on active state index change */}
            <div key={activeService} className="space-y-6 relative z-10 animate-fade-in-premium">
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${services[activeService].badgeBg}`}>
                {services[activeService].badge}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-[#2f3395] leading-tight">
                {services[activeService].title}
              </h3>
              
              <div className="w-16 h-1 bg-[#02acf0] rounded-full" />
              
              <p className="text-[#2f3395]/80 text-sm md:text-base leading-relaxed font-normal">
                {services[activeService].longDesc}
              </p>

              {/* Premium Highlights Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#60a9bd]">
                  <span className="w-2 h-2 rounded-full bg-[#02acf0]" /> Advanced Patient Care Standards
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#60a9bd]">
                  <span className="w-2 h-2 rounded-full bg-[#7396d3]" /> Safe & Certified Diagnostics
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#60a9bd]">
                  <span className="w-2 h-2 rounded-full bg-[#c90322]" /> 24/7 Immediate Emergency Setup
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#60a9bd]">
                  <span className="w-2 h-2 rounded-full bg-[#82cfe9]" /> Highly Skilled Surgical Team
                </div>
              </div>
            </div>

           

          </div>

        </div>

      </div>
    </section>
  );
};

export default UrologyBestServices;