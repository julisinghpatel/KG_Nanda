import React, { useEffect, useState } from 'react';
import './DigitalXrayFacilities.css';

const DigitalXrayFacilities = () => {
  // Digital X-Ray specialized facilities & procedures
  const facilitiesData = [
    {
      id: 1,
      title: "Chest & Pulmonary Imaging",
      tag: "Advanced Scan",
      description: "Crystal-clear visualization for rapid diagnosis of respiratory tracking and chest structures.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Orthopedic Trauma Grid",
      tag: "Skeletal Mapping",
      description: "Ultra-high definition imaging tailored for complex bone structures, fractures, and joint studies.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Spinal Column Radiography",
      tag: "Precision Alignment",
      description: "Comprehensive cervical, thoracic, and lumbar spine examinations with low radiation exposure.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Pediatric Low-Dose Scans",
      tag: "Ultra-Safe Protocol",
      description: "Specially calibrated gentle scanning configurations ensuring maximum radiation safety for children.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Entry animation controller state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Section render hote hi entrance animation execute hoga
    const triggerTimer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(triggerTimer);
  }, []);

  return (
    <section className="xray-facilities-section py-24 px-6 md:px-16 relative overflow-hidden bg-white">
      
      {/* Premium Subtle Ambient Background Blur (Inspired by image_ce0eed.jpg) */}
      <div className="ambient-blur blur-teal"></div>
      <div className="ambient-blur blur-sky"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block with exact color matching of image_ce0eed.jpg */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
         
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
            Our Advanced <span className="text-teal-600">Digital X-Ray</span> Facilities
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Experience advanced diagnostics through high-resolution infrastructure designed for flawless clinical precision and rapid automated reporting.
          </p>
        </div>

        {/* Clean 4-Column Grid with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilitiesData.map((facility, index) => (
            <div
              key={facility.id}
              className={`xray-premium-card bg-white rounded-2xl border border-slate-100 overflow-hidden relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }} // Multi-stage entry delay
            >
              {/* Image Window with strict overlay mask controls */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Tech blue ambient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Micro Category Floating Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-teal-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-white/40">
                  {facility.tag}
                </span>
              </div>

              {/* Text Information Blocks */}
              <div className="p-6 relative transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-lg font-bold text-slate-800 tracking-wide mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                  {facility.description}
                </p>

                {/* Animated Interactive Bottom Indicator */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600 tracking-wider uppercase group/link cursor-pointer w-fit">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/link:translate-x-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </div>

              {/* Sleek Underline Neon Border Highlight Layer */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-teal-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DigitalXrayFacilities;