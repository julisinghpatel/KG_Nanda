import { useEffect, useState } from "react";
import "./CardiologyHero.css";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=2070",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070",
  "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070",
];

export default function CardiologyHero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ch-section-wrapper">
      {/* Background Image Slider Layer */}
      <div 
        className="ch-slider-bg" 
        style={{ backgroundImage: `url(${images[index]})` }}
      />
      
      {/* Premium Dark Glass & Gradient Overlay */}
      <div className="ch-premium-overlay" />

      {/* Main Responsive Layout Wrapper */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative w-full h-full flex items-center justify-start">
        
        {/* Content Box */}
        <div className="ch-content-box text-left space-y-6 md:space-y-8">
          
         

          {/* Premium Animated Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ch-animate-reveal ch-delay-1 text-white">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02acf0] to-[#b5f5ff]">
              Heart Care Solutions
            </span>
          </h1>

          {/* Calming Premium Description */}
          <p className="text-xs md:text-sm lg:text-base text-[#aadcff] max-w-xl leading-relaxed font-medium ch-animate-reveal ch-delay-2 opacity-95">
            KG Nanda Hospital Varanasi provides world-class cardiac care including 
            interventional cardiology, preventive heart programs, 24/7 emergency services, 
            and advanced diagnostic technology.
          </p>

          {/* Dynamic Buttons Setup with Scale and Glow effects */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto ch-animate-reveal ch-delay-3">
            <button 
              className="ch-btn-primary text-white font-semibold px-8 py-4 rounded-full text-sm md:text-base shadow-lg tracking-wide"
              onClick={() => navigate("/book-appointment")}
            >
              Consult a Cardiologist
            </button>
            <button 
              className="ch-btn-secondary text-white font-semibold px-8 py-4 rounded-full text-sm md:text-base tracking-wide"
              onClick={() => navigate("/")}
            >
              Our Medical Technologies
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}