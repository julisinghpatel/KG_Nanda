import React from 'react';
import { Award, GraduationCap, Calendar, ArrowUpRight, Star, Heart } from 'lucide-react';
import './NephrologyDoctor.css';

const NephrologyDoctor = () => {
  // Premium Curated Doctors Dataset
  const doctors = [
    {
      name: "Dr. Alok Sharma",
      role: "Chief of Nephrology & Renal Transplants",
      
      education: "MD, DM - Nephrology (AIIMS)",
      fellowship: "Fellowship in Kidney Transplant (UK)",
      
      reviews: "1,240+ Patients Solved",
      tag: "Top Surgeon",
      imgPlaceholder: "https://images.unsplash.om/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dr. Ananya Iyer",
      role: "Senior Consultant - Clinical Nephrology",
      
      education: "DNB, MNAMS - Nephrology",
      fellowship: "Specialist in Pediatric Renal Care",
     
      reviews: "980+ Success Cases",
      tag: "Renal Specialist",
      imgPlaceholder: "https://images.unsplash.cm/photo-1594824813573-246434e3b96f?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dr. Ritesh Deshmukh",
      role: "Director - Dialysis & Critical Renal Care",
      
      education: "MD, DM - Renal Medicine",
      fellowship: "Advanced Dialysis Management Cert. (USA)",
     
      reviews: "2,100+ Dialysis Lifelines",
      tag: "Critical Care",
      imgPlaceholder: "https://images.unsplash.com/phto-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#f6fcfa] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Soft Pinterest Aesthetic Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[45rem] h-[45rem] bg-gradient-to-br from-[#cdffff] to-[#b5f5ff] rounded-full filter blur-[140px] opacity-60 pointer-events-none animate-fluid-blob" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#aadcff] to-[#7396d3] rounded-full filter blur-[150px] opacity-40 pointer-events-none animate-fluid-blob-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with High-End Typography */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-premium-reveal">
         
          <h2 className="text-4xl md:text-5xl font-black text-[#2f3395] tracking-tight mb-6">
            Meet Our <span className="text-premium-gradient">Nephrologists</span>
          </h2>
          <p className="text-base text-[#60a9bd] leading-relaxed">
            Consult with internationally trained kidney specialists and transplant pioneers committed to clinical precision and patient healing.
          </p>
        </div>

        {/* Premium Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {doctors.map((doc, idx) => (
            <div 
              key={idx}
              className="doctor-premium-card w-full max-w-[300px] rounded-2xl overflow-hidden flex flex-col justify-between group animate-premium-reveal"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              
              {/* Image and Tag Container */}
              <div className="relative overflow-hidden image-zoom-wrapper bg-[#cdffff]/20 h-[220px]">
                <img 
                  src={doc.imgPlaceholder} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700" 
                />
                
                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-[#2f3395] px-3 py-1.5 rounded-xl shadow-md border border-white/20">
                    {doc.tag}
                  </span>
                </div>

               
              </div>

              {/* Doctor Details Body */}
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Name and Role */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#2f3395] group-hover:text-[#02acf0] transition-colors duration-300">
                      {doc.name}
                    </h3>
                    <p className="text-[10px] font-semibold text-[#02acf0] mt-1 tracking-wide uppercase line-clamp-1">
                      {doc.role}
                    </p>
                  </div>

                  {/* Experience & Credentials Block */}
                  <div className="space-y-2 pt-3 border-t border-[#7396d3]/15">
                   

                    <div className="flex items-center space-x-2 text-[#60a9bd]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#82cfe9] flex-shrink-0" />
                      <span className="text-xs text-[#60a9bd] line-clamp-1">{doc.education}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-[#60a9bd]">
                      <Heart className="w-3.5 h-3.5 text-[#c90322]/80 flex-shrink-0 animate-pulse" />
                      <span className="text-[10px] italic text-[#60a9bd] line-clamp-1">{doc.fellowship}</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button inside Card */}
                <div className="mt-5 pt-4 border-t border-[#7396d3]/15 flex items-center justify-between">
                 

                  <button className="flex items-center justify-center space-x-1.5 bg-[#2f3395] hover:bg-[#02acf0] text-white px-3 py-2 rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#02acf0]/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold tracking-wide">Book Slot</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45" />
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

export default NephrologyDoctor;