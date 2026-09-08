import React from 'react';
import './WhyChoosePathology.css';

// Premium high-fidelity icons from Lucide package
import { ShieldCheck, ClipboardCheck, FlaskConical, Users, Award, Phone, Truck } from 'lucide-react';

const WhyChoosePathology = () => {
  // Pathology core features with specialized medical context and high-quality image backdrops
  const features = [
    {
      id: 1,
      title: "100% Automated Trackability",
      desc: "Fully robotic pipelines scan barcoded vials seamlessly from extraction to processing, maintaining zero-error trace integrity.",
      icon: <FlaskConical className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "NABL Accredited Governance",
      desc: "Operating strictly under national and international reference standards with multi-tier molecular quality control systems.",
      icon: <Award className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Hygienic Home Sample Collection",
      desc: "Certified phlebotomists collect blood parameters right at your doorstep using temperature-controlled cold chain transport boxes.",
      icon: <Truck className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Ultra Fast Turnaround Time (TAT)",
      desc: "Advanced assay analysis infrastructure delivers routine metabolic panels directly to your phone within 4 to 6 hours.",
      icon: <ClipboardCheck className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Senior Consultant Sign-offs",
      desc: "Every critical or atypical bio-marker is rigorously checked manually and cross-verified by clinical pathology professors.",
      icon: <Users className="w-5 h-5 text-white" />,
      image: "https://images.unsplsh.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "100% Transparent Price Index",
      desc: "Premium quality diagnostics designed accessible for everyone with no hidden lab charges or dynamic registration margins.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="why-choose-us-section py-16 px-4 max-w-7xl mx-auto font-sans">
      
      {/* Header Section */}
      <div className="mb-12 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="block text-[#1e3a8a] mb-1">Why Choose Our</span>
          <span className="block text-[#ea580c]">Pathology Lab Services</span>
        </h2>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side Big Banner Card */}
        <div className="lg:col-span-4 relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-end p-6 group">
          {/* Background Image with Deep Blue Overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
          <div className="absolute inset-0 bg-[#1e3a8a]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#1e3a8a]/20 to-transparent"></div>

          {/* Premium Floating Glassmorphic Contact Card */}
          <div className="glass-card-pathology relative z-10 w-full rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase block mb-3">
              Home Collection Helpline
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
                  1500<span className="text-[#ea580c] text-2xl ml-0.5">+</span>
                </h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold mt-1">Total Tests</p>
              </div>
              <div className="border-l border-white/10">
                <h3 className="text-3xl font-black text-white flex items-center justify-center">
                  100<span className="text-[#38bdf8] text-2xl ml-0.5">%</span>
                </h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold mt-1">Sterile Safety</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Complex Grid Layout */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="feature-hover-card-path group relative h-56 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
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

export default WhyChoosePathology;