import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./NeurologyCare.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "01",
    title: "Neuro-Diagnostics",
    desc: "Advanced 3T MRI, High-definition CT Angiography, and digital EEG for precise neural mapping.",
    icon: "🧠",
  },
  {
    id: "02",
    title: "Stroke Management",
    desc: "24/7 hyper-acute stroke response team ready for immediate thrombolysis and intervention.",
    icon: "⚡",
  },
  {
    id: "03",
    title: "Neurosurgery",
    desc: "Minimally invasive spine and brain surgeries powered by micro-navigation systems.",
    icon: "🔬",
  },
  {
    id: "04",
    title: "Neuromuscular Care",
    desc: "Comprehensive therapeutic tracking and treatment for complex peripheral nervous disorders.",
    icon: "🧬",
  }
];

const NeurologyCare = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".neuro-header-animate",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Premium Cards Reveal Animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: index * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="neuro-care-wrapper-2026 relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      {/* Premium Ambient Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#b5f5ff]/30 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] bg-[#aadcff]/20 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Premium Text Content */}
        <div className="lg:col-span-5 space-y-6 z-10">
         
          
          <h2 className="neuro-header-animate text-4xl md:text-5xl font-extrabold text-[#2f3395] leading-tight">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] to-[#7396d3]">
              Neurology Solutions
            </span>
          </h2>
          
          <p className="neuro-header-animate text-[#60a9bd] text-lg max-w-xl leading-relaxed font-light">
            Bringing Pinterest-inspired structural elegance and medical superiority together. Our dedicated neurology facility combines elite clinical experts with futuristic glassmorphism paradigms to protect your neurological health.
          </p>

          <div className="neuro-header-animate pt-4">
            <button className="neuro-premium-btn relative overflow-hidden text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#2f3395]/20 transition-all duration-300">
              <span className="relative z-10">Explore Clinical Framework</span>
              <div className="btn-overlay"></div>
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Animated Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 z-10">
          {features.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="neuro-premium-card group relative p-8 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Hover Border Gradient Effect */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/80 via-transparent to-[#82cfe9]/20 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="neuro-icon-box w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 shadow-md">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-[#2f3395]/5 tracking-wider transition-colors duration-300 group-hover:text-[#02acf0]/10">
                  {item.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#2f3395] mb-3 transition-colors duration-300 group-hover:text-[#02acf0]">
                {item.title}
              </h3>
              
              <p className="text-sm text-[#60a9bd] leading-relaxed transition-colors duration-300 group-hover:text-[#2f3395]/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NeurologyCare;