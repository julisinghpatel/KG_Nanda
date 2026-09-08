import React from 'react';
import './UrologyDoctor.css'; // Apne project direct structure ke according import path check karein

const UrologyDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Vineet Singh",
      designation: "Urologist",
      education: "MBBS, MS, M.Ch. (Urology)",
      specialties: ["Urology", "Kidney Stone Treatment", "Urinary Disorders", "Prostate Diseases"],
      image: "",
      availability: "Mon - Sat"
    },
  ];

  return (
    <section className="relative py-24 bg-[#f6fcfa] overflow-hidden">
      
      {/* Decorative Premium Subtle Ambient Backdrops */}
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#cdffff] to-transparent rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-[#aadcff]/40 to-transparent rounded-full opacity-50 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 doctor-header-animate">
         
          <h2 className="text-3xl md:text-5xl font-bold text-[#2f3395] leading-tight">
            Meet Our <span className="text-[#02acf0]">Expert Urologists</span>
          </h2>
          <p className="text-[#60a9bd] text-sm md:text-base max-w-xl mx-auto">
            Hamare highly qualified aur clinically experienced surgeons complex urological standard procedures me global benchmark set karte hain.
          </p>
        </div>

        {/* Card Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {doctors.map((doc, index) => (
            <div 
              key={doc.id}
              className={`bg-white rounded-3xl border border-[#9ce1f1]/30 shadow-xl hover:shadow-2xl hover:shadow-[#2f3395]/10 transform transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group doctor-card-delay-${index}`}
            >
              
              {/* Doctor Formal Image Frame */}
              <div className="relative aspect-[4/4] overflow-hidden bg-gradient-to-b from-[#b5f5ff]/30 to-[#f6fcfa]">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Availability Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#82cfe9]/40 shadow-sm">
                  <p className="text-[11px] font-bold text-[#2f3395] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02acf0]" /> {doc.availability}
                  </p>
                </div>

                
              </div>

              {/* Informative Body Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#2f3395] group-hover:text-[#02acf0] transition-colors duration-300">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#02acf0] tracking-wide uppercase">
                    {doc.designation}
                  </p>
                  <p className="text-[11px] text-[#60a9bd] font-medium leading-relaxed pt-1">
                    {doc.education}
                  </p>
                </div>

                {/* Tag Pills List */}
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2f3395]/60 uppercase tracking-widest">Core Clinical Focus</p>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-medium text-[#2f3395] bg-[#cdffff]/50 px-2.5 py-1 rounded-md border border-[#9ce1f1]/30 group-hover:bg-[#b5f5ff]/40 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

             
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default UrologyDoctor;