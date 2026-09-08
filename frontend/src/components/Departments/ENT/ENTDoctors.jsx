import React from 'react';
import { Phone, Calendar, Award, Star, ArrowUpRight, CheckCircle } from 'lucide-react';
import './ENTDoctors.css';

const ENTDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Prashant Singh",
      education: "M.B.B.S., M.S. (ENT)",
      specialty: "Consultant ENT Surgeon",
      image: "https://images.usplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=700"
    },
    
  ];

  return (
    <section className="ent-doctors-section relative bg-gradient-to-b from-[#f6fcfa] via-[#cdffff] to-[#f6fcfa] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Premium Elements */}
      <div className="absolute top-20 right-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-[#b5f5ff] to-[#aadcff] rounded-full blur-[130px] opacity-40 doctor-float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[550px] h-[550px] bg-gradient-to-bl from-[#9ce1f1] to-[#7396d3] rounded-full blur-[130px] opacity-30 doctor-float-reverse pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 doctor-fade-in">
         
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2f3395] mb-6">
            Meet Our Premium <span className="text-[#02acf0]">ENT Specialists</span>
          </h2>
          <p className="text-lg text-[#60a9bd] font-medium leading-relaxed">
            Highly qualified global experts dedicated to restoring your sensory health with premium clinical excellence.
          </p>
          <div className="mt-5 w-24 h-1.5 bg-gradient-to-r from-[#02acf0] to-[#2f3395] mx-auto rounded-full" />
        </div>

        {/* Doctors Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {doctors.map((doc, index) => (
            <div 
              key={doc.id} 
              className="doctor-premium-card w-full max-w-[300px] group relative rounded-3xl overflow-hidden flex flex-col justify-between"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              
              {/* Top Section: Image with Overlay */}
              <div className="relative overflow-hidden h-[220px] rounded-2xl m-3 shadow-md bg-slate-100">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                
               
               

               
              </div>

              {/* Bottom Section: Details Content */}
              <div className="p-4 pt-1 flex-grow flex flex-col justify-between">
                <div>
                  {/* Doctor Name & Dynamic Link Arrow */}
                  <h3 className="text-lg font-bold text-[#2f3395] mb-1 group-hover:text-[#02acf0] transition-colors duration-300 flex items-center justify-between">
                    {doc.name}
                    <ArrowUpRight className="w-4 h-4 text-[#7396d3] opacity-0 group-hover:opacity-100 group-hover:text-[#02acf0] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </h3>
                  <p className="text-[10px] font-bold text-[#02acf0] tracking-wide uppercase mb-3 line-clamp-1">{doc.role}</p>
                  
                  {/* Education / Qualifications */}
                  <p className="text-[11px] text-[#60a9bd] font-medium leading-relaxed mb-3 min-h-[34px] line-clamp-2">
                    {doc.education}
                  </p>

                 
                </div>

               
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ENTDoctors;