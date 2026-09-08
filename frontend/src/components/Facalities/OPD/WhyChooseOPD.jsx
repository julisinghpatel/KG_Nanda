import React from 'react';
import './WhyChooseOPD.css';

// Lucide icons ka use kiya hai premium look ke liye (Aap normal SVG ya koi bhi icon library use kar sakte hain)
import { Shield, Activity, Users, Building, Stethoscope, Phone, Heart } from 'lucide-react';

const WhyChooseOPD = () => {
  // Cards ka data jisme hover content bhi shamil hai (Exactly matching the 2nd image design)
  const features = [
    {
      id: 1,
      title: "Exceptional healthcare services",
      desc: "Providing world-class medical treatments with highly experienced doctors and compassionate nursing staff available round the clock.",
      icon: <Stethoscope className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Multi Super specialty hospital",
      desc: "All major departments including Cardiology, Neurology, Orthopedics, and Oncology under one integrated digital ecosystem.",
      icon: <Building className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Compassionate Care",
      desc: "We believe that healthcare is not just about treating illnesses, but also about providing compassionate care to our patients.",
      icon: <Heart className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "State-of-the-art facilities",
      desc: "Advanced diagnostic labs, modular operation theaters, and next-gen medical equipment for precise treatment and fast recovery.",
      icon: <Activity className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Patient-Centric",
      desc: "We prioritize patient comfort and personalized care plans, ensuring you feel completely safe and at home during your recovery.",
      icon: <Users className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Trusted healthcare provider",
      desc: "Serving thousands of families with a commitment to clinical excellence, transparency, and accessible healthcare for all.",
      icon: <Shield className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="why-choose-us-section py-16 px-4 max-w-7xl mx-auto font-sans">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="block text-[#1e3a8a] mb-1">Why</span>
          <span className="block text-[#ea580c]">KG Nanda Hospital</span>
        </h2>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side Big Banner Card */}
        <div className="lg:col-span-4 relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-end p-6 group">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
          <div className="absolute inset-0 bg-[#1e3a8a]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#1e3a8a]/20 to-transparent"></div>

          {/* Premium Floating Glassmorphic Contact Card */}
          <div className="glass-card relative z-10 w-full rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase block mb-3">
              24/7 Emergency Support
            </span>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#ea580c] flex items-center justify-center shadow-lg shadow-orange-500/30 animate-pulse">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <p className="font-bold text-lg tracking-wide">+91-7800001895</p>
                <p className="font-bold text-lg tracking-wide">+91-7800001896</p>
              </div>
            </div>

            <hr className="border-white/10 my-4" />

            <div className="grid grid-cols-2 gap-4 text-white text-center pt-2">
              <div>
                <h3 className="text-3xl font-black text-white flex items-center justify-center">
                  32<span className="text-[#ea580c] text-2xl ml-0.5">+</span>
                </h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold mt-1">Years Exp</p>
              </div>
              <div className="border-l border-white/10">
                <h3 className="text-3xl font-black text-white flex items-center justify-center">
                  50<span className="text-[#38bdf8] text-2xl ml-0.5">+</span>
                </h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold mt-1">Specialists</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Complex Grid Layout */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="feature-hover-card group relative h-56 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <img src={feature.image} alt={feature.title} className="card-img" />
              <div className="card-overlay"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                <div className="flex items-center gap-3 card-title-container">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-bold text-base tracking-wide leading-snug">{feature.title}</h4>
                </div>
                <p className="card-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseOPD;