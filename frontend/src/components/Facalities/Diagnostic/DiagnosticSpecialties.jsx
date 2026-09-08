import React from 'react';
import './DiagnosticSpecialties.css';

const DiagnosticSpecialties = () => {
  // Premium Specialities Data
  const specialities = [
    {
      id: 1,
      title: "Advanced Radiology",
      description: "High-resolution 3T MRI, 128-Slice CT Scans, and digital X-Rays for ultra-precise internal imaging.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5s-3.076 1.347-4.5 1.5-3-1.5-3-1.5M21 12c0 4.5-4.5 6-9 6s-9-1.5-9-6 4.5-6 9-6 9 1.5 9 6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.008v.008H9V12Zm3 0h.008v.008H12V12Zm3 0h.008v.008H15V12Z" />
        </svg>
      ),
      tag: "24/7 Available"
    },
    {
      id: 2,
      title: "Molecular Pathology",
      description: "Fully automated robotic labs ensuring 99.9% accurate blood biochemistry, hematology, and genetic sequencing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v17.792M14.25 3.104v17.792M3 12h18M6.75 7.5h10.5M6.75 16.5h10.5" />
        </svg>
      ),
      tag: "NABL Accredited"
    },
    {
      id: 3,
      title: "Cardiovascular Diagnostics",
      description: "Premium Echocardiography, TMT, and Holter monitoring driven by AI-assisted cardiac analytics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      tag: "Instant Reports"
    },
    {
      id: 4,
      title: "Neurology & EEG Centre",
      description: "Comprehensive digital EEG, EMG, and nerve conduction studies managed by senior neuro-physiologists.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 2.718-1.036l4.242 4.243m-6.96-3.207a6.01 6.01 0 0 1-2.718-1.036l-4.243 4.243M12 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      ),
      tag: "Super Specialty"
    }
  ];

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#f6fcfa]">
      
      {/* Background Decorative Premium Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#b5f5ff] to-[#aadcff] opacity-40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#7396d3] to-[#82cfe9] opacity-20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= DIAGNOSTIC OVERVIEW SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 diag-animate-fade-in">
          
          {/* Left: Rich Content */}
          <div className="lg:col-span-7 space-y-6">
           
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2f3395] leading-tight">
              Next-Gen Diagnostics <br />
              <span className="bg-gradient-to-r from-[#02acf0] to-[#2f3395] bg-clip-text text-transparent">
                Accuracy Meets Care.
              </span>
            </h2>

            <div className="w-24 h-1.5 bg-[#02acf0] rounded-full diag-line-glow" />

            <p className="text-[#60a9bd] text-lg leading-relaxed max-w-2xl">
              Our diagnostic division stands at the forefront of medical technology, combining AI-driven workflows with ultra-precise laboratory systems. We deliver rapid, reliable results that empower clinicians to draft precise treatment maps.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="border-l-4 border-[#02acf0] pl-4">
                <h3 className="text-3xl font-bold text-[#2f3395]">99.9%</h3>
                <p className="text-xs text-[#60a9bd] font-medium uppercase tracking-wider">Accuracy Rate</p>
              </div>
              <div className="border-l-4 border-[#82cfe9] pl-4">
                <h3 className="text-3xl font-bold text-[#2f3395]">45 Mins</h3>
                <p className="text-xs text-[#60a9bd] font-medium uppercase tracking-wider">Avg. Report Time</p>
              </div>
              <div className="border-l-4 border-[#2f3395] pl-4">
                <h3 className="text-3xl font-bold text-[#2f3395]">25+</h3>
                <p className="text-xs text-[#60a9bd] font-medium uppercase tracking-wider">Expert Radiologists</p>
              </div>
            </div>
          </div>

          {/* Right: Premium Interactive Visual Feature */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-[400px] h-[380px] rounded-3xl p-8 bg-gradient-to-b from-[#2f3395] to-[#1e2163] text-white shadow-2xl flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:shadow-[0_25px_50px_rgba(47,51,149,0.3)]">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#82cfe9] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-2 text-[#cdffff]">Smart Healthcare Link</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Directly synced with the KG Nanda HMS core. Your reports are automatically updated in your personal electronic health record (EHR) profile instantly.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#82cfe9]">
                <span>ISO 9001:2015 Certified</span>
                <span className="w-2 h-2 rounded-full bg-[#82cfe9]"></span>
              </div>
            </div>
          </div>
        </div>


        {/* ================= DIAGNOSTIC SPECIALITIES SECTION ================= */}
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#2f3395] tracking-tight">
              Our Diagnostic Specialities
            </h3>
            <p className="text-[#60a9bd] text-sm mt-1">
              Comprehensive clinical solutions under one premium smart facility.
            </p>
          </div>

          {/* Specialities Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialities.map((item, index) => (
              <div 
                key={item.id} 
                className="diag-glass-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer diag-animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }} // Staggered entry animation
              >
                <div>
                  {/* Icon Wrapper with smooth hover transition */}
                  <div className="diag-icon-container w-14 h-14 rounded-xl bg-[#aadcff]/40 text-[#2f3395] flex items-center justify-center mb-6 transition-all duration-500 ease-in-out">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-[#2f3395] mb-3 group-hover:text-[#02acf0] transition-colors duration-300">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[#60a9bd] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row inside card */}
                <div className="flex items-center justify-between pt-4 border-t border-[#82cfe9]/10">
                  <span className="text-[11px] font-bold tracking-wider text-[#02acf0] uppercase bg-[#b5f5ff]/30 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                  
                  {/* Interactive Arrow Link */}
                  <span className="text-[#2f3395] transform translate-x-[-5px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiagnosticSpecialties;