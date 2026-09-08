import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaUserCheck, FaAward } from "react-icons/fa";
import "./PediatricDoctor.css";

gsap.registerPlugin(ScrollTrigger);

export default function SpecialDoctors() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // SAFETY RESET
      gsap.set([".doc-premium-tag", ".special-doctors-heading", ".doctor-card"], {
        opacity: 0,
        y: 40
      });

      // ENTRANCE TIMELINE WITH SCROLL TRIGGER
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      });

      tl.to(".doc-premium-tag", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(".special-doctors-heading", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to(".doctor-card", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          clearProps: "opacity, transform" // Hover transform smooth chalne ke liye reset zaruri hai
        }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="special-doctors-section relative bg-[#fafbfc] py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Premium Ambient Background Lighting */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <span className="doc-premium-tag text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50/80 px-4 py-2 rounded-full inline-block border border-orange-100/60 shadow-sm">
            Expert Pediatricians
          </span>
          <h2 className="special-doctors-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#003a70] leading-tight">
            Our <span>Special Doctor</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-orange-500 via-amber-400 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Doctors Flex/Grid Row */}
        <div className="doctors-row flex flex-wrap justify-center gap-10">
          
          {/* Doctor Card 1 */}
          <div className="doctor-card group relative bg-white border border-slate-100/80 rounded-[32px] p-8 w-full max-w-[360px] text-center transition-all duration-500 hover:-translate-y-3">
            
            {/* Premium Absolute Float Badges */}
            <div className="absolute top-5 left-5 bg-blue-50 text-[#003a70] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-lg border border-blue-100/50 flex items-center gap-1">
              <FaAward className="text-blue-500" /> Top Rated
            </div>
            
            <div className="absolute top-5 right-5 bg-orange-50 text-orange-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-lg border border-orange-100/50 flex items-center gap-1">
              <FaUserCheck className="animate-pulse" /> Expert
            </div>

            {/* Premium Circular Doctor Image Frame */}
            <div className="doctor-image relative w-[180px] h-[180px] rounded-full overflow-hidden mx-auto mb-8 border-4 border-white shadow-[0_12px_35px_rgba(0,58,112,0.08)] bg-slate-50 transition-all duration-500 group-hover:shadow-[0_20px_45px_rgba(234,88,12,0.15)]">
              <img 
                src="https://images.unlash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" 
                alt="Dr. ABC" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Inner Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            

            {/* Name & Qualifications */}
            <div className="space-y-4">
              <h4 className="text-24 font-extrabold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-[#003a70]">
                Dr. S.P. Ghosh
              </h4>
              
              {/* Qualification Box */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold shadow-inner transition-colors duration-300 group-hover:bg-orange-50/30 group-hover:border-orange-100/50">
                <FaGraduationCap className="text-sm text-orange-500 transition-transform duration-500 group-hover:rotate-12" />
                <span>MBBS, MD, Pediatric</span>
              </div>

              {/* Subtitle/Specialization Stamp */}
              <p className="text-xs font-bold text-slate-400 tracking-widest uppercase pt-3 border-t border-dashed border-slate-200/80 group-hover:text-orange-600 transition-colors duration-300">
                PGPN (USA) Specialist
              </p>
            </div>

          </div>

          {/* Aap is poore card div ko copy karke duplicate doctors add kar sakte hain */}

        </div>
      </div>
    </section>
  );
}