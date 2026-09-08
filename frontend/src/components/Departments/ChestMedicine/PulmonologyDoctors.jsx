import React from 'react';
import './PulmonologyDoctors.css';

const PulmonologyDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Arvind K. Chaturvedi",
      role: "Chief Interventional Pulmonologist",
      experience: "18+ Years Experience",
      education: "MD, DM (Pulmonary & Critical Care Medicine)",
      specialty: "Advanced Bronchoscopy & Lung Transplant",
      image: "https://images.unsplash.com/photo-12253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      availability: "Mon - Sat (10:00 AM - 04:00 PM)"
    },
    {
      id: 2,
      name: "Dr. Elena Rostova",
      role: "Senior Consultant - Sleep Medicine",
      experience: "14+ Years Experience",
      education: "MD, Ph.D. (Respiratory Sleep Disorders)",
      specialty: "Obstructive Sleep Apnea & Chronic Ventilation",
      image: "https://images.unsplash.com/photo-159424813573-246434de83fb?auto=format&fit=crop&w=600&q=80",
      availability: "Mon - Fri (11:00 AM - 05:00 PM)"
    },
    {
      id: 3,
      name: "Dr. Rajeshwar Nair",
      role: "Director - Interstitial Lung Disease Clinic",
      experience: "22+ Years Experience",
      education: "MD, FCCP (USA), Fellowship in ILD",
      specialty: "Pulmonary Fibrosis & Post-COVID Rehab",
      image: "https://images.unsplash.co/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
      availability: "By Appointment Only"
    }
  ];

  return (
    <section className="pulmo-doctors-section relative overflow-hidden py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f6fcfa]">
      
      {/* Premium Pinterest Ambient Fluid Gradients */}
      <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#cdffff] opacity-40 blur-[100px] pointer-events-none animate-float-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#aadcff] opacity-35 blur-[130px] pointer-events-none animate-float-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 animate-fade-in-up">
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#2f3395] leading-tight">
            Meet Our Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] via-[#7396d3] to-[#2f3395]">
              Chest Medicine Specialists
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#02acf0] to-[#2f3395] mx-auto rounded-full"></div>
          
          <p className="text-[#60a9bd] text-sm md:text-base max-w-xl mx-auto font-medium">
            Highly decorated clinical experts dedicated to exceptional respiratory care, innovative diagnostics, and medical excellence.
          </p>
        </div>

        {/* Pinterest Inspired Interactive Portrait Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-center">
          {doctors.map((doctor, index) => (
            <div 
              key={doctor.id}
              className="premium-doctor-card w-full max-w-[300px] group relative bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(47,51,149,0.04)] hover:shadow-[0_30px_70px_rgba(2,172,240,0.18)] border border-white transition-all duration-700 flex flex-col cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              
              {/* Image Frame with Overlays */}
              <div className="relative overflow-hidden h-[220px] bg-gray-100 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                

               
              </div>

              {/* Informational Rich Metadata Base */}
              <div className="p-4 flex-grow flex flex-col justify-between relative z-20 bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#cdffff]/10 transition-colors duration-500">
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#02acf0] line-clamp-1">{doctor.role}</p>
                    <h3 className="text-base font-bold text-[#2f3395] tracking-tight group-hover:text-[#02acf0] transition-colors duration-300">
                      {doctor.name}
                    </h3>
                  </div>

                 
                </div>

                {/* Appointment Action Footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                 
                  
                  <button className="h-8 px-3 rounded-lg bg-[#aadcff]/40 text-[#2f3395] text-[10px] group-hover:bg-[#2f3395] group-hover:text-white flex items-center justify-center transition-all duration-300 border border-transparent group-hover:border-white shadow-sm">
                    Book Appointment
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

export default PulmonologyDoctors;