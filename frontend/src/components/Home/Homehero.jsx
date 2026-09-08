import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, PhoneCall, ShieldCheck, Activity } from "lucide-react";
import gsap from "gsap";
import "./Homehero.css";

export default function HomeHero() {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [".hero-left-content", ".hero-btn", ".hero-feature-btn", ".hero-tag"],
        { opacity: 1, x: 0, y: 0 }
      );

      // Tagline Animation
      gsap.from(".hero-tag", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Left Content Heading & Paragraph
      gsap.from(".hero-left-content h1, .hero-left-content p, .hero-address-bar", {
        x: -70,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Action Buttons
      gsap.from(".hero-btn", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.6,
      });

      // Bottom Premium Features Cards
      gsap.from(".hero-feature-btn", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="home-hero relative h-[68vh] min-h-[460px] md:h-[90vh] flex flex-col justify-end overflow-hidden">

        {/* Dynamic Background Video/Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Main Video - Fills 100% of height and width on all devices */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video"
          >
            <source src="/Home/Homehero.mp4" type="video/mp4" />
          </video>

          {/* Clean Cinema Gradient Overlay - High Contrast for Heading */}
          <div className="hero-overlay absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none"></div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 w-full flex-grow flex items-end justify-center z-10 pb-8 sm:pb-12 md:pb-20">

          {/* CENTER CONTENT */}
          <div className="hero-left-content w-full text-white text-center flex flex-col items-center justify-center">

            {/* Main Hindi Heading - Bold & Centered */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{textShadow: '2px 4px 14px rgba(0,0,0,0.7)'}}>
              आपके हर श्वास के रक्षक
            </h1>

          </div>

        </div>



      </section>


    </>
  );
}