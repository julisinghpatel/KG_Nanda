import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Activity, ShieldCheck, HeartPulse } from "lucide-react";
import "./NPHero.css";

export default function NephrologyHero() {
  const navigate = useNavigate();

  return (
    <section className="nh-hero">
      {/* Dynamic Cinematic Blobs */}
      <div className="nh-blob nh-blob-1" />
      <div className="nh-blob nh-blob-2" />

      <div className="nh-grid-layout">
        
        {/* Left Side: Premium Context Block */}
        <div className="flex flex-col items-start max-md:items-center">
          
          

          {/* Main Display Headline */}
          <h1 className="nh-h1">
            Expert Nephrology Care <span>for Vibrant Health.</span>
          </h1>

          {/* Styled Subtitle Paragraph */}
          <p className="nh-sub">
            We deliver top-tier, international standard renal medical management. From precision diagnostics to customized therapeutic treatments, your kidney path to health is fully secure with us.
          </p>

          {/* Premium Call to Actions */}
          <div className="nh-cta-group max-sm:flex-col max-sm:w-full">
            <button 
              className="nh-btn-primary flex items-center justify-center gap-2 group" 
              onClick={() => navigate("/book-now")}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <button 
              className="nh-btn-secondary flex items-center justify-center gap-2" 
              onClick={() => navigate("/departments")}
            >
              Explore Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex items-center gap-6 text-xs text-[#60a9bd] font-medium border-t border-[#cdffff] pt-6 w-full max-w-md max-md:justify-center">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-[#02acf0]" />
              <span>NABH Accredited Hospital</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HeartPulse size={16} className="text-[#2f3395]" />
              <span>24/7 Renal Emergency</span>
            </div>
          </div>
        </div>

        {/* Right Side: Pinterest Inspired Modern Image Frame & Live Analytics Overlay */}
        <div className="nh-visual-container">
          <div className="nh-image-frame">
            <img 
              src="/Department/nephrology/NephroH.jpg" 
              alt="Premium Nephrology Department Diagnostics" 
            />
          </div>

        
        </div>

      </div>
    </section>
  );
}