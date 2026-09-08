import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, ArrowUpRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Left Image Wrapper Animation
      tl.fromTo(".about-img-container", 
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      // Right side contents cascade
      .fromTo(".about-tag-badge, .about-right-content h2, .about-right-content > p", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
      )
      // CTA trigger
      .fromTo(".about-cta-btn", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
        "-=0.3"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section bg-[#f6f5ee] pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden" ref={sectionRef}>
      <div className="about-wrapper max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: IMAGE ARCHITECTURE (Order 2 on mobile, Order 1 on desktop) */}
        <div className="about-left-block w-full lg:w-[48%] relative order-2 lg:order-1">
          
          {/* Top Floating Badge */}
          <div className="about-badge-top">
                       <h4 className="badge-title">Trusted Healthcare</h4>
          </div>

          <div className="about-img-container relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="./Home/Bulding.png" 
              alt="KG Nanda Hospital Building" 
              className="w-full h-[480px] sm:h-[530px] lg:h-[560px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003a70]/40 to-transparent"></div>
          </div>

          {/* Bottom Floating Badge */}
          <div className="about-badge-bottom">
            <div className="badge-icon-wrapper">
              <svg className="badge-shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <div className="badge-text-wrapper">
              <span className="badge-main-text">24/7 Care</span>
              <span className="badge-sub-text">Emergency support</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CONTENT & CARDS (Order 1 on mobile, Order 2 on desktop) */}
        <div className="about-right-content w-full lg:w-[52%] flex flex-col order-1 lg:order-2">
          
         
          <h2 className="about-heading">
            About <span className="about-heading-highlight">KG Nanda Hospital</span>
          </h2>

          

          <p className="about-description">
            <strong className="hospital-brand-name">KG NANDA HOSPITAL</strong>, one of Chandauli's 
            best Multi Speciality Hospital that redefines standards of excellence in healthcare delivery 
            by bringing together the best of infrastructure, technology, training, education and medical 
            intelligentsia.
          </p>

         

         

          {/* CTA Action Button */}
          <button 
            onClick={() => navigate("/about-us")}
            className="about-cta-btn mx-auto lg:mx-0 group flex items-center justify-center space-x-2 bg-[#dd5200] hover:bg-[#c24800] text-white font-bold text-sm tracking-wide px-7 py-3.5 rounded-xl shadow-lg shadow-orange-700/10 w-fit transition-all duration-300"
          >
            <span> About Us</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;