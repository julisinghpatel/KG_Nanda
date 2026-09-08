import React, { useState } from 'react';
import './NicuPicuFacilities.css';

const NicuPicuFacilities = () => {
  // NICU & PICU se related dynamic content array
  const facilitiesData = [
    {
      id: 1,
      title: "Advanced Neonatal Incubators",
      tag: "NICU",
      description: "Micro-environment control with precise temperature and humidity regulations for premature newborns.",
      image: "/Department/NICUc.jpg"
    },
    {
      id: 2,
      title: "Pediatric Intensive Care",
      tag: "PICU",
      description: "24/7 continuous multi-parametric vital monitoring and dedicated critical care support for children.",
      image: "/Department/PICUc.jpg"
    },
    {
      id: 3,
      title: "Specialized Ventilation Support",
      tag: "NICU & PICU",
      description: "High-frequency oscillatory ventilation and non-invasive respiratory support systems.",
      image: "/Department/nicu&picu.jpg"
    },
    {
      id: 4,
      title: "24/7 Dedicated Nursing",
      tag: "Expert Care",
      description: "Highly trained, empathetic pediatric and neonatal ICU nurses maintaining a 1:1 care ratio.",
      image: "/Department/Expertcare.jpg"
    },
    {
      id: 5,
      title: "Emergency Transport Service",
      tag: "Critical Care",
      description: "Specially equipped neonate-friendly ambulances with transport incubators and ventilators.",
      image: "/Department/Critical care.jpg"
    }
  ];

  const [activeCard, setActiveCard] = useState(3); // Default par middle card stretched rahega

  return (
    <section className="facility-section min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-10">
      
      {/* Header Area styled similarly to image_6f88e3.jpg */}
      <div className="text-center max-w-3xl mb-12">
       
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight mb-4">
          World-Class NICU & PICU Critical Care
        </h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Providing advanced medical infrastructure, round-the-clock monitoring, and specialized neonatologist intervention for our little fighters.
        </p>
      </div>

      {/* Premium Interactive Grid (Stretching Cards Layout) */}
      <div className="facility-container w-full max-w-6xl flex flex-col md:flex-row gap-4 h-[550px] md:h-[480px]">
        {facilitiesData.map((facility) => (
          <div
            key={facility.id}
            className={`facility-card relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out ${
              activeCard === facility.id ? 'active-stretch' : 'normal-shrink'
            }`}
            onMouseEnter={() => setActiveCard(facility.id)}
          >
            {/* Background Image */}
            <img 
              src={facility.image} 
              alt={facility.title} 
              className="w-full h-full object-cover facility-img"
            />
            
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 card-overlay transition-opacity duration-500"></div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end text-white z-10 h-full">
              
              {/* Badge/Tag - Visible always on active, acts as teaser on normal */}
              <span className="bg-sky-500/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded w-fit mb-2 backdrop-blur-sm">
                {facility.tag}
              </span>

              {/* Title - Rotates vertically when card is closed, goes normal when active */}
              <h3 className={`font-bold tracking-wide transition-all duration-500 whitespace-nowrap ${
                activeCard === facility.id 
                  ? 'text-xl md:text-2xl mb-2 opacity-100' 
                  : 'text-lg opacity-80 md:rotate-[-90deg] md:origin-left md:absolute md:bottom-12 md:left-14'
              }`}>
                {facility.title}
              </h3>

              {/* Description Content - Only shows up when stretched */}
              <p className={`text-sm text-slate-200 font-light max-w-md transition-all duration-500 delay-200 origin-bottom ${
                activeCard === facility.id 
                  ? 'opacity-100 max-h-24 transform translate-y-0' 
                  : 'opacity-0 max-h-0 pointer-events-none transform translate-y-4'
              }`}>
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default NicuPicuFacilities;