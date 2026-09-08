import React from 'react';
import './GyneSpecialDoctor.css';

const GyneSpecialDoctor = () => {
  // Ultra-Premium Gynaecology Specialists Dataset
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Anand Prakash Tiwari",
      designation: "M.S. (Obs & Gynae) Ay",
      specialty: "Senior Gynaecologist & Infertility Specialist EX-ASSISTANT PROFESSOR(J.A.M.C.H.)", 
      imgUrl: "/Home/Dr. Anand Prakash.png",
      delayClass: "gd-delay-1"
    },
    {
      id: 2,
      name: "Dr. Neetu Chaurasia",
      designation: "M.B.B.S., D.G.O. (Diploma in Gynecology & Obstetrics)",
      specialty: "Gynaecologist & Infertility Specialist",
      imgUrl: "/Department/Gynecology/Dr. Neetu Chaurasia Senior gynecologist.jpg",
      delayClass: "gd-delay-2"
    },
    {
      id: 3,
      name: "Dr. Nidhi Gupta",
      designation: "R.M.O. (Resident Medical Officer)",
      specialty: "Gynaecologist & Infertility Specialist",
      imgUrl: "/Department/Gynecology/Dr. Nidhi Gupta Senior gynecologist.jpg",
      delayClass: "gd-delay-3"
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#f6fcfa] overflow-hidden">
      
      {/* Premium Ambient Background Spheres */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-br from-[#cdffff] to-[#b5f5ff] rounded-full filter blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#aadcff] to-[#7396d3] rounded-full filter blur-[150px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Premium Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 gd-reveal-card">
         
          <h2 className="text-3xl md:text-5xl font-bold text-[#2f3395] tracking-tight mt-2">
            Meet Our Special Gynecology Doctors
          </h2>
          <p className="text-sm md:text-base text-[#60a9bd] max-w-xl mx-auto leading-relaxed">
            Highly certified medical specialists dedicated to supplying premium clinical treatments and supportive care framework.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#02acf0] to-[#dd5200] mx-auto mt-4 rounded-full" />
        </div>

        {/* Specialists Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctorsData.map((doc) => (
            <div 
              key={doc.id} 
              className={`relative rounded-[2.5rem] p-6 gd-doctor-card gd-reveal-card ${doc.delayClass}`}
            >
              
              {/* Doctor Profile Image Container */}
              <div className="gd-img-wrapper aspect-[4/4] mb-6 shadow-md">
                <img 
                  src={doc.imgUrl} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out gd-doctor-img"
                />
                
                
              </div>

              {/* Expert Credentials Content */}
              <div className="space-y-3 text-center lg:text-left px-2">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
                  <h3 className="text-xl font-bold text-[#2f3395] tracking-tight">
                    {doc.name}
                  </h3>
                
                </div>
                
                <p className="text-xs font-bold text-[#7396d3] uppercase tracking-wide">
                  {doc.designation}
                </p>
                
                <p className="text-sm text-[#60a9bd] leading-relaxed font-medium pt-1 border-t border-[#7396d3]/10">
                   <span className="text-[#2f3395] font-semibold">{doc.specialty}</span>
                </p>
              </div>

             
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default GyneSpecialDoctor;