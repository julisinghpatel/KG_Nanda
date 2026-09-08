import { useEffect, useRef } from "react";
import "./WhyChooseUs.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUserMd,
  FaShieldVirus,
  FaBriefcaseMedical,
  FaCheckCircle,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Left layout core stack animation
      tl.fromTo(
        ".why-tag-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
      .fromTo(
        ".why-main-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".why-global-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".premium-feature-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Right dynamic visual graphics deck
      gsap.fromTo(
        ".interactive-graphics-deck",
        { x: 50, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-premium-section bg-[#f6f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT PANEL: Branding & Core Interactive Feature List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="why-tag-badge inline-flex items-center space-x-2 bg-[#35b6b4]/10 border border-[#35b6b4]/30 text-[#35b6b4] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <Sparkles size={12} className="text-[#dd5200]" />
                <span>Why Choose Our Clinical Ecosystem</span>
              </div>
              <h2 className="why-main-heading text-3xl md:text-5xl font-black text-[#003a70] tracking-tight leading-[1.15]">
                Expertise, Compassion, Trust, <br />
                <span className="text-[#35b6b4]">Always At Your Service.</span>
              </h2>
              <p className="why-global-desc text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
                Advanced medical expertise, modern high-precision tech matrices, and compassionate critical workflows focused entirely on delivering fast recovery.
              </p>
            </div>

            {/* Feature Row Collections */}
            <div className="space-y-4">
              <div className="premium-feature-card group bg-white border border-gray-100 hover:border-[#35b6b4]/40 p-5 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,58,112,0.1)]">
                <div className="flex items-start space-x-5">
                  <div className="premium-icon-box bg-[#35b6b4]/10 text-[#35b6b4] group-hover:scale-110 transition-transform duration-300">
                    <FaUserMd />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#003a70] group-hover:text-[#35b6b4] transition-colors duration-200">
                      Standards of Treatment
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 font-medium leading-relaxed">
                      Internationally aligned clinical guidelines ensuring top-tier diagnostic execution and transparent safety protocols.
                    </p>
                  </div>
                </div>
              </div>

              <div className="premium-feature-card group bg-white border border-gray-100 hover:border-[#dd5200]/40 p-5 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,58,112,0.1)]">
                <div className="flex items-start space-x-5">
                  <div className="premium-icon-box bg-[#dd5200]/10 text-[#dd5200] group-hover:scale-110 transition-transform duration-300">
                    <FaShieldVirus />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#003a70] group-hover:text-[#dd5200] transition-colors duration-200">
                      Infection Prevention
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 font-medium leading-relaxed">
                      Laminar airflow controls, rigid continuous sterilization routines protecting parameters for all surgical zones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="premium-feature-card group bg-white border border-gray-100 hover:border-[#003a70]/40 p-5 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,58,112,0.1)]">
                <div className="flex items-start space-x-5">
                  <div className="premium-icon-box bg-[#003a70]/10 text-[#003a70] group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcaseMedical />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#003a70] group-hover:text-[#35b6b4] transition-colors duration-200">
                      Quality of Care Services
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 font-medium leading-relaxed">
                      Dedicated multidisciplinary nursing desks designed to provide empathetic and precise critical observation round-the-clock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Floating Layout Graphic Composition */}
          <div className="interactive-graphics-deck lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
            
            {/* Ambient Background Decorative Mesh elements */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#35b6b4]/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#dd5200]/5 rounded-full blur-3xl -z-10"></div>

            {/* Core Composition Image Shield */}
            <div className="why-image-wrapper relative border-4 border-white shadow-2xl rounded-[32px] overflow-hidden bg-white">
              <img
                src="./Home/High-tech Operation.jpg"
                alt="High-tech Operation Suite Environment"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003a70]/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Premium Statistics Overlay Badge (Middle Layer Overlay) */}
            <div className="floating-trust-card absolute -left-6 bottom-16 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40 max-w-[280px]">
              <h3 className="text-sm font-bold text-[#003a70] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                Ecosystem Metrics
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-xs font-bold text-gray-700 space-x-2">
                  <FaCheckCircle className="text-[#35b6b4] flex-shrink-0 text-base" />
                  <span>Realtime Health Monitoring</span>
                </li>
                <li className="flex items-center text-xs font-bold text-gray-700 space-x-2">
                  <FaCheckCircle className="text-[#35b6b4] flex-shrink-0 text-base" />
                  <span>Senior Consultant Desks</span>
                </li>
                <li className="flex items-center text-xs font-bold text-gray-700 space-x-2">
                  <FaCheckCircle className="text-[#35b6b4] flex-shrink-0 text-base" />
                  <span>Advanced Life Support Tech</span>
                </li>
                <li className="flex items-center text-xs font-bold text-gray-700 space-x-2">
                  <FaCheckCircle className="text-[#35b6b4] flex-shrink-0 text-base" />
                  <span>Trusted By 25,000+ Families</span>
                </li>
              </ul>
            </div>

           

          </div>

        </div>
      </div>
    </section>
  );
}