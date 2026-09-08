import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, ArrowRight } from 'lucide-react';
import './DoctorsGSurgery.css'; // Importing separate CSS

// Mock Data for General Surgery Doctors
const doctorsData = [
  {
    id: 1,
    name: "Dr. Abhinav Katiyar",
    role: "General Surgery & Laparoscopic Surgery",
    education: "M.B.B.S. D.N.B. (General Surgery) F.M.A.S. (Fellowship in Minimal Access Surgery)",
    image: "/Department/General_Surgery/Dr Abhinav.jpg" // Replace with actual Cloudinary/local image URL
  },
  {
    id: 2,
    name: "Dr. Vinay Yadav",
    role: "General Surgery & Laparoscopic Surgery",
    education: "M.B.B.S. M.S. (General Surgery) F.A.I.S.",
    image: "/Department/General_Surgery/Dr Vinay.jpg" // Replace with actual Cloudinary/local image URL
  },
  
];

// Animation Configuration variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const DoctorGSurgery = () => {
  return (
    <section className="doctors-container py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative Blur Blobs */}
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#2f3395] tracking-tight"
          >
            General Surgery <span className="text-[#02acf0]">Specialists</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-base text-[#60a9bd]"
          >
            Meet our world-class surgical team dedicated to delivering advanced, minimally invasive, and compassionate patient care.
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#02acf0] to-[#2f3395] mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        {/* Doctors Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >
          {doctorsData.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              className="doctor-card-glass w-full max-w-[300px] rounded-2xl p-4 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Image Container (Height/Width ratio perfectly maintained) */}
                <div className="doctor-img-wrapper w-full h-[220px] mb-4 shadow-inner">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                  />

                 
                </div>

                {/* Doctor Credentials & Info */}
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-[#02acf0] uppercase tracking-wider block">
                    {doctor.education}
                  </span>
                  <h3 className="text-lg font-bold text-[#2f3395] tracking-tight hover:text-[#02acf0] transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-[#60a9bd] font-medium leading-relaxed min-h-[36px]">
                    {doctor.role}
                  </p>
                </div>

                {/* Separation Line */}
                <div className="w-full h-[1px] bg-[#aadcff]/50 my-3"></div>

              </div>

             

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DoctorGSurgery;