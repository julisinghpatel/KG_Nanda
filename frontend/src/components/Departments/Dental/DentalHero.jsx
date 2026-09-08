import React from "react";
import "./DentalHero.css";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";

export default function DentalHero() {
  return (
    <section className="dental-hero relative w-full overflow-hidden flex items-center bg-[#091a36]">
      {/* Background Image / Overlay Blend */}
      <div className="absolute inset-0 dental-hero-bg opacity-40 pointer-events-none"></div>
      
      {/* Premium Ambient Lights */}
      <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] rounded-full bg-sky-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />

      {/* Floating Medical Tech Elements (Decorative Overlays like in image_dbb66b.jpg) */}
      <div className="absolute inset-0 tech-pattern-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 py-20">
        <div className="max-w-3xl text-left dental-content-box">
          
         
          {/* Main Massive Impact Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-8">
            Comprehensive <br />
            <span className="dental-sky-highlight font-black">Dental Care</span>
          </h1>

         

        </div>
      </div>
    </section>
  );
}