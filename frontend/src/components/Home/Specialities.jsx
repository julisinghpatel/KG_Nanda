import { useEffect, useRef, useState } from "react";
import "./Specialities.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUserMd,
  FaHeartbeat,
  FaHospital,
  FaAmbulance,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { HeartPulse } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FaUserMd />,
    title: "Expert Medical Team",
    desc: "Highly qualified doctors and specialists united by a single goal, delivering precise, personalised care to every patient.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Advanced Diagnostics",
    desc: "Modern diagnostic technology ensuring accurate, timely results that support faster and more effective treatment decisions.",
  },
  {
    icon: <FaHospital />,
    title: "World-Class Infrastructure",
    desc: "Purpose-built facilities designed to the highest standards of comfort, hygiene, and patient safety at every touchpoint.",
  },
  {
    icon: <FaAmbulance />,
    title: "24/7 Emergency Services",
    desc: "Round-the-clock emergency response and ambulance services — ready to act swiftly when every second counts.",
  },
];

export default function HospitalFeatures() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const videoRef = useRef(null);
  
  // Changing initial state to false so it stays paused by default
  const [isPlaying, setIsPlaying] = useState(false); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.fromTo(
        ".premium-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
      .fromTo(
        ".features-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .fromTo(
        ".feature-row",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".image-frame-container",
        { x: 50, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="features-section bg-[#f6f5ee]">
      <div className="max-w-7xl mx-auto">
        
        {/* Premium Core Header Section */}
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center px-2">
          <div className="premium-badge inline-flex items-center space-x-2 bg-[#35b6b4]/10 border border-[#35b6b4]/30 text-[#35b6b4] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <HeartPulse size={14} />
            <span>Why Choose Our Infrastructure</span>
          </div>
          <h2 className="features-heading text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-[#003a70] leading-tight">
            Hospital Key <span>Features</span>
          </h2>
        </div>

        <div className="features-layout grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Core Track Elements */}
          <div className="features-wrapper lg:col-span-7 relative">
            <div ref={lineRef} className="features-line" />

            {features.map((item, index) => (
              <div className="feature-row group" key={index}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{item.icon}</div>
                </div>

                <div className="feature-content">
                  <h3 className="group-hover:text-[#35b6b4] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Media Canvas with Click-to-Play System */}
          <div className="image-wrapper lg:col-span-5 flex justify-center">
            <div className="image-frame-container relative">
              
              {/* Back Accent Ambient Boxes */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#35b6b4]/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#dd5200]/5 rounded-3xl -z-10"></div>
              
              {/* Video Frame */}
              <div 
                className={`image-premium-frame border border-white shadow-2xl cursor-pointer relative ${!isPlaying ? 'video-paused' : ''}`}
                onClick={handleVideoToggle}
              >
                {/* Removed autoPlay so it waits for user interaction */}
                <video
                  ref={videoRef}
                  src="./Home/DP.mp4"
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                  style={{ objectPosition: 'center 65%' }}
                />
                
                {/* Ambient Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003a70]/40 via-transparent to-[#003a70]/10 transition-opacity duration-300 pointer-events-none"></div>

                {/* Glassmorphic Play/Pause Button */}
                <div className="video-controller-overlay">
                  <div className="controller-glass-btn">
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                  </div>
                  <span className="controller-status-text">
                    {isPlaying ? "" : ""}
                  </span>
                </div>
              </div>

             

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}