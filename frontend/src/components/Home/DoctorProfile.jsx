import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorProfile.css';

// KG Nanda Hospital Doctors Data Array
const doctorData = [
  {
    id: 1,
    name: "Dr. Anand Prakash Tiwari",
    role: "Senior Gynaecologist & Infertility Specialist",
    degrees: "M.S. (Obs & Gynae) Ay",
    experience: "EX- ASSISTANT PROFESSOR (J.A.M.C.H)",
    specialties: ["Expert Care for Every Woman", "Infertility Specialist", "Comprehensive Women's Health", "Compassion You Can Trust"],
    image: "./Home/Dr. Anand Prakash.png",
  }
];

const DoctorProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="doctor-profile-section bg-[#f6f5ee] overflow-hidden relative">
      {/* Background Decorative Premium Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#35b6b4]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#dd5200]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Main Header */}
        <div className="text-center doctor-section-header animate-fade-in-up">
          
          <h2 className="doctor-heading font-black text-[#003a70] tracking-tight leading-tight max-w-3xl mx-auto px-2">
            Our Professional Medical Leadership
          </h2>
          <div className="relative w-32 h-[4px] bg-[#35b6b4] mx-auto mt-5 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-[#dd5200] animate-line-glow"></div>
          </div>
        </div>

        {/* Profiles Grid Mapper */}
        {doctorData.map((doctor) => (
          <div 
            key={doctor.id} 
            className="doctor-card premium-card rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center animate-fade-in-up visual-delay-1 bg-white"
          >
            
            {/* Left Side: Doctor Image Layout */}
            <div className="lg:col-span-5 flex justify-center w-full doctor-image-col">
              <div className="img-wrapper relative w-full rounded-2xl overflow-hidden shadow-xl doctor-img-frame">
                
                {/* Subtle dark ambient gradient overlay over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003a70]/90 via-[#003a70]/20 to-transparent z-10 mix-blend-multiply"></div>
                
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover img-zoom object-top animate-premium-float"
                />
                
                {/* Brand Overlay Label */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 text-white smooth-transition">
                  <p className="text-xs font-bold text-[#35b6b4] uppercase tracking-widest mb-1">Dr. Anand Prakash Tiwari</p>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#dd5200] inline-block animate-ping"></span>
                    <p className="text-xs text-slate-300 font-medium tracking-wide">Senior Gynaecologist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Professions, Degrees & Specialty Tags */}
            <div className="lg:col-span-7 flex flex-col justify-center doctor-info-col">
              <div>
                <span className="inline-flex items-center bg-[#003a70]/5 border border-[#003a70]/10 text-[#003a70] text-[10px] sm:text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35b6b4] mr-2"></span>
                  {doctor.degrees}
                </span>
                
                <h3 className="doctor-name font-black text-[#003a70] mt-4 tracking-tight leading-tight">
                  {doctor.name}
                </h3>
                
                <p className="doctor-role font-bold text-[#dd5200] mt-3 tracking-wide flex items-center flex-wrap">
                  <span className="w-4 sm:w-5 h-[2px] bg-[#dd5200] mr-2.5 inline-block shrink-0"></span>
                  {doctor.role}
                </p>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-slate-200 via-slate-100 to-transparent my-5 md:my-6"></div>

              <div className="bg-[#f6f5ee]/60 border border-white p-3 sm:p-4 rounded-2xl shadow-inner-premium">
                <p className="text-slate-600 leading-relaxed font-semibold text-xs sm:text-sm md:text-base flex items-center flex-wrap gap-1">
                  <span className="text-[#35b6b4] text-base sm:text-xl mr-1 shrink-0">★</span>
                  <span className="shrink-0">Experience:</span>
                  <span className="text-[#003a70] font-bold break-words">{doctor.experience}</span>
                </p>
              </div>

              <div className="mt-5 md:mt-6">
                <h4 className="text-[10px] sm:text-xs font-black text-[#003a70]/70 uppercase tracking-widest mb-3 sm:mb-4">
                  Core Expertise &amp; Specialties
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {doctor.specialties.map((spec, index) => (
                    <span 
                      key={index} 
                      className="specialty-tag bg-white border border-slate-200/80 text-slate-700 text-xs md:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm cursor-default flex items-center space-x-2"
                    >
                      <span className="text-[#35b6b4] font-bold text-xs">✦</span>
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Actions Buttons */}
              <div className="doctor-cta-buttons pt-5 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <button 
                  onClick={() => navigate('/book-appointment')} 
                  className="btn-primary relative bg-[#dd5200] text-white font-bold text-sm md:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg overflow-hidden group w-full sm:w-auto text-center"
                >
                  <span className="relative z-10">Book Appointment</span>
                </button>
                <button 
                  className="btn-secondary bg-transparent border-2 border-[#003a70] text-[#003a70] font-bold text-sm md:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl group overflow-hidden relative w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 group-hover:text-white smooth-transition">View Full Profile</span>
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default DoctorProfile;