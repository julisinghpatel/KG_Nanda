import { useLayoutEffect, useRef } from "react";
import { FaBrain, FaMicroscope, FaAward, FaUserShield } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutNeurosurgery.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutNeurosurgery() {
  const sectionRef = useRef(null);
  const visualRef  = useRef(null);
  const textRef    = useRef(null);

  const features = [
    {
      icon: <FaMicroscope />,
      title: "Intraoperative Micro-Mapping",
      desc: "Utilizing 3D real-time neural navigation arrays to treat brain tumors with sub-millimeter clinical accuracy.",
    },
    {
      icon: <FaUserShield />,
      title: "Minimally Invasive Spine Surgery (MISS)",
      desc: "Advanced target endoscopic frameworks enabling rapid recovery tracks and minimal muscular disruptions.",
    },
    {
      icon: <FaAward />,
      title: "Board-Certified Neuro-Faculty",
      desc: "Chaired by globally trained surgeons holding specialized fellowship tenures across critical vascular procedures.",
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Lock Initial Layout State to Zero Opacity to Avoid Visual Glitches
      gsap.set([".ans-section-badge", ".ans-content-panel h2", ".ans-lead-text", ".ans-feature-item"], {
        opacity: 0,
        x: 50
      });
      gsap.set(visualRef.current, { opacity: 0, scale: 0.94, x: -50 });

      // Trigger Visual Framework Core Container
      gsap.to(visualRef.current, {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        }
      });

      // Sequential Timed Escalation for Content Texts and Rows
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          once: true,
        }
      });

      tl.to(".ans-section-badge", { opacity: 1, x: 0, duration: 0.5 })
        .to(".ans-content-panel h2", { opacity: 1, x: 0, duration: 0.6 }, "-=0.35")
        .to(".ans-lead-text", { opacity: 1, x: 0, duration: 0.6 }, "-=0.4")
        .to(".ans-feature-item", { 
          opacity: 1, 
          x: 0, 
          duration: 0.7, 
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.35");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ans-about-wrapper">
      {/* Soft Ambient Vector Ray */}
      <div className="ans-ambient-flare" />

      <div className="container mx-auto">
        <div className="ans-about-grid">
          
          {/* Left Column Structural Visual Layout Frame */}
          <div ref={visualRef} className="ans-visual-stack">
            <div className="ans-img-frame-master">
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" 
                alt="Elite Neurological Clinical Operation Research" 
                className="ans-img-master"
                loading="lazy"
              />
            </div>
            
                     </div>

          {/* Right Column Core Text Content Stream */}
          <div ref={textRef} className="ans-content-panel">
            
            
            <h2>
              Pioneering the Future of <span>Neurological Excellence</span>
            </h2>
            
            <p className="ans-lead-text">
              The Department of Neurosurgery at KG Nanda Hospital stands at the pinnacle of 
              neurological medical technology. We are dedicated to providing cutting-edge, patient-centric 
              interventions for complex structural conditions of the brain, spinal tract, and peripheral nerve channels.
            </p>

            {/* List Array Render mapping */}
            <div className="ans-features-list">
              {features.map((item, idx) => (
                <div className="ans-feature-item" key={idx}>
                  <div className="ans-item-icon-box">
                    {item.icon}
                  </div>
                  <div className="ans-item-texts">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}