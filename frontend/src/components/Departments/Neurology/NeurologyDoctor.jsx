import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldAlert, Award, Stethoscope, Clock, CalendarCheck, Zap, UserCheck } from 'lucide-react';
import './NeurologyDoctor.css';

gsap.registerPlugin(ScrollTrigger);

const NeurologyDoctor = () => {
  const containerRef = useRef(null);
  const cardItemsRef = useRef([]);

  const neuroDoctors = [
    {
      id: 1,
      name: "Prof. Dr. Devendra Jha",
      designation: "Chief Neurosurgeon & Micro-Surgery Pioneer",
      specs: "22+ Yrs Exp | Fellow Royal College of Surgeons (UK)",
      degrees: "MBBS, MS, M.Ch (Neurosurgery - AIIMS)",
      surgeries: "4,500+ Successful Brain Surgeries",
      opd: "Mon, Wed, Fri — 10:00 AM to 03:00 PM",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500&h=600"
    },
    {
      id: 2,
      name: "Dr. Riddhima Kapoor",
      designation: "Senior Consultant - Interventional Neurology",
      specs: "15+ Yrs Exp | Stroke Thrombectomy Expert",
      degrees: "MBBS, MD, DM (Neurology), Fellowship (Stroke - Canada)",
      surgeries: "1,800+ Acute Stroke Interventions",
      opd: "Tue, Thu, Sat — 09:00 AM to 01:00 PM",
      img: "https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&q=80&w=500&h=600"
    },
    {
      id: 3,
      name: "Dr. Sameer Malhotra",
      designation: "Director - Pediatric Neurology & Epilepsy Center",
      specs: "19+ Yrs Exp | Neuromodulation Specialist",
      degrees: "MBBS, MD (Pediatrics), DM (Child Neurology)",
      surgeries: "2,200+ Complex Pediatric Rehabs",
      opd: "Mon, Tue, Thu — 02:00 PM to 06:00 PM",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500&h=600"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animations
      gsap.fromTo(".neuro-doc-header-el", 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.18, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%"
          }
        }
      );

      // Staggered cards entry animation
      cardItemsRef.current.forEach((card, idx) => {
        gsap.fromTo(card,
          { opacity: 0, y: 70, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            delay: idx * 0.15
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-[#f6fcfa] via-[#cdffff] to-[#f6fcfa] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Premium Ambient Aesthetic Orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] bg-gradient-to-br from-[#b5f5ff] to-[#aadcff] rounded-full blur-[140px] neuro-glow-element pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[45vw] h-[45vw] bg-gradient-to-tr from-[#9ce1f1] to-[#7396d3] rounded-full blur-[140px] neuro-glow-element pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading Metadata */}
        <div className="text-center max-w-3xl mx-auto mb-12">
        
          <h2 className="neuro-doc-header-el text-4xl md:text-5xl font-black text-[#2f3395] tracking-tight mb-6 leading-tight">
            World-Renowned <span className="text-[#02acf0]">Neuro Consultants</span>
          </h2>
          <p className="neuro-doc-header-el text-lg text-[#60a9bd] font-medium max-w-2xl mx-auto leading-relaxed">
            Consult with highly decorated neurological medical pioneers, recognized globally for exceptional clinical precision and research frameworks.
          </p>
          <div className="neuro-doc-header-el mt-6 w-20 h-1.5 bg-gradient-to-r from-[#02acf0] to-[#2f3395] mx-auto rounded-full" />
        </div>

        {/* Doctors Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {neuroDoctors.map((doc, index) => (
            <div
              key={doc.id}
              ref={el => cardItemsRef.current[index] = el}
              className="neuro-doc-card w-full max-w-[300px] rounded-3xl p-4 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Profile Image Component with Layout Clip */}
                <div className="neuro-doc-img-wrapper rounded-[20px] h-[220px] overflow-hidden mb-4 shadow-sm">
                  <img 
                    src={doc.img} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Verified Indicator Pill Overlay */}
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md py-1 px-2.5 rounded-xl flex items-center gap-1.5 border border-white shadow-sm">
                    <UserCheck className="w-3 h-3 text-[#02acf0]" />
                    <span className="text-[9px] font-extrabold tracking-wider text-[#2f3395] uppercase">Verified Core Faculty</span>
                  </div>
                </div>

                {/* Info and Coordinates */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-lg font-extrabold text-[#2f3395] tracking-tight group-hover:text-[#02acf0] transition-colors duration-300">
                    {doc.name}
                  </h3>
                  <p className="text-[10px] font-bold text-[#02acf0] uppercase tracking-wide line-clamp-1">
                    {doc.designation}
                  </p>
                </div>

                {/* Clinical Specs Subtext */}
                <p className="text-[11px] text-[#7396d3] font-bold mb-3 flex items-center gap-1 line-clamp-1">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-[#2f3395]" /> {doc.specs}
                </p>

                {/* Profile Inner Divider Line */}
                <div className="w-full h-[1px] bg-slate-100 my-3" />

                
              </div>

              {/* Action Dynamic Appointment Button */}
              <button className="neuro-doc-btn-primary w-full py-2.5 mt-2 rounded-xl text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 tracking-wide transform active:scale-[0.98]">
                <CalendarCheck className="w-3.5 h-3.5" /> Request Slot
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NeurologyDoctor;