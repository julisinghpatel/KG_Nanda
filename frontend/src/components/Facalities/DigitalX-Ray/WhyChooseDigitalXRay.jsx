import React from 'react';
import './WhyChooseDigitalXRay.css';

// Lucide icons for premium healthcare and radiology look
import { Shield, Zap, Sparkles, Eye, Clock, Phone, Radio, CheckCircle } from 'lucide-react';

const WhyChooseDigitalXRay = () => {
  // Digital X-Ray centric features with relevant medical images and high-fidelity descriptions
  const features = [
    {
      id: 1,
      title: "Ultra-High Resolution Imaging",
      desc: "Equipped with advanced crystal-clear digital sensors that capture microscopic bone fractures and soft tissue anomalies with perfect precision.",
      icon: <Eye className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Up to 80% Lower Radiation",
      desc: "Prioritizing patient safety with state-of-the-art low-dose technology that ensures minimum radiation exposure while maintaining top diagnostic quality.",
      icon: <Shield className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Instant Digital Reports",
      desc: "No more waiting for chemical film processing. Digital images are generated instantly and transferred to the radiologist within seconds.",
      icon: <Clock className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Advanced DR System Technology",
      desc: "Our fully motorized Digital Radiography (DR) system offers flexible positioning, minimizing discomfort for trauma and critical care patients.",
      icon: <Radio className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Seamless PACS & Cloud Sharing",
      desc: "All digital scans are linked directly to your electronic health record, allowing doctors to view, zoom, and analyze report files anywhere, anytime.",
      icon: <Sparkles className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Accurate Clinical Diagnoses",
      desc: "Trusted by top orthopedicians and pulmonologists for highly detailed imaging that reduces rediagnosis rates and ensures successful treatment paths.",
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      image: "https://imags.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="why-choose-us-section py-16 px-4 max-w-7xl mx-auto font-sans">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="block text-[#1e3a8a] mb-1">Why Choose Our</span>
          <span className="block text-[#ea580c]">Digital X-Ray Services</span>
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
              24/7 Diagnostics Support
            </span>
            
           
            <hr className="border-white/10 my-4" />

           
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

export default WhyChooseDigitalXRay;