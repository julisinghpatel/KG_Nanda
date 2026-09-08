import React from "react";
import "./WhyChooseDental.css";
import { 
  FaSmile, 
  FaCamera, 
  FaShieldAlt, 
  FaLayerGroup 
} from "react-icons/fa";

export default function WhyChooseDental() {
  const advantages = [
    {
      icon: <FaSmile className="dental-why-icon" />,
      title: "Painless Procedures",
      desc: "Advanced anesthesia and gentle techniques for anxiety-free, comfortable dental care."
    },
    {
      icon: <FaCamera className="dental-why-icon" />,
      title: "Precision Technology",
      desc: "Digital X-rays and intra-oral cameras for accurate, real-time diagnoses."
    },
    {
      icon: <FaShieldAlt className="dental-why-icon" />,
      title: "Specialized Care",
      desc: "Expert treatment for complex dental and maxillofacial conditions."
    },
    {
      icon: <FaLayerGroup className="dental-why-icon" />,
      title: "Radiological Support",
      desc: "Superior diagnostic amenities including Dentascan, OPG, and periapical X-rays."
    }
  ];

  return (
    <section className="why-dental-outer bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Container mimicking the curved layout of image_dc1801.png */}
      <div className="why-dental-wrapper max-w-7xl mx-auto rounded-[32px] bg-[#091638] py-32 px-6 sm:px-10 lg:px-16 relative overflow-hidden shadow-[0_25px_60px_rgba(9,22,56,0.25)]">
        
        {/* Ambient Glows for High-End Premium Look */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[130px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 space-y-3">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Choose Our <span className="text-sky-400 font-black">Dental Care</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-blue-500 to-sky-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="why-dental-card group relative bg-[#0e2254]/50 border border-blue-900/40 backdrop-blur-md p-8 rounded-2xl text-left transition-all duration-300 hover:-translate-y-2 hover:bg-[#122b68]/70 hover:border-sky-500/40"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Top Accent Light Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              {/* Icon Holder Frame */}
              <div className="why-dental-icon-box w-12 h-12 rounded-xl border border-blue-800 bg-[#0c1e4a] flex items-center justify-center text-sky-400 mb-8 transition-all duration-300 group-hover:border-sky-400/50 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                {item.icon}
              </div>

              {/* Card Main Head & Description */}
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-sky-300 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}