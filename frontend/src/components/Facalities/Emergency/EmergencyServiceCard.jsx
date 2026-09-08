import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Ambulance, HeartPulse, FlaskConical, Building2, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import "./EmergencyServiceCard.css";

gsap.registerPlugin(ScrollTrigger);

export default function EmergencyServiceCard() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      // Cinematic Split Animation Elements
      tl.fromTo(".em-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
        .fromTo(".em-headline", { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=0.9")
        .fromTo(".em-description", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=1")
        .fromTo(".em-list-item", { opacity: 0, x: -30 }, { opacity: 1, x: 0, stagger: 0.15 }, "-=0.95")
        .fromTo(".em-main-btn", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, "-=0.8")
        .fromTo(".em-media-wrapper", { opacity: 0, scale: 1.05, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)" }, "-=1.2")
        .fromTo(".em-grid-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2 }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  return (
    <>
      <section ref={containerRef} className="premium-emergency-container">
        <div className="premium-emergency-wrapper">
          
          {/* LEFT SIDE CONTENT - BOLD TYPOGRAPHY & TRUST */}
          <div className="em-content-column">
           
            
            <h2 className="em-headline">
              The Battle for <br />
              <span className="highlight-text">Every Single Life</span>
            </h2>

            <p className="em-description">
              At <strong>KG Nanda Hospital Chandauli</strong>, our Emergency Care Unit operates 24×7 to respond instantly when every second matters. From rapid triage to advanced life support, our entire framework is engineered to save lives without delay.
            </p>

            <ul className="em-feature-checklist">
              <li className="em-list-item">
                <ShieldCheck className="check-icon" size={20} />
                <span>Immediate Trauma Resuscitation Bays</span>
              </li>
              <li className="em-list-item">
                <ShieldCheck className="check-icon" size={20} />
                <span>Centralized 24×7 Emergency Control Desk</span>
              </li>
              <li className="em-list-item">
                <ShieldCheck className="check-icon" size={20} />
                <span>Real-time Triage Categorization System</span>
              </li>
            </ul>

            <div className="em-action-wrapper">
              <button className="em-main-btn" onClick={() => setIsModalOpen(true)}>
                <span>Explore Care Modalities</span>
                <ArrowUpRight size={18} className="arrow-icon" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT - INTEGRATED PREMIUM GRID VISUAL */}
          <div className="em-visual-column">
            <div className="em-media-wrapper">
              <img 
                src="/Facalities/A.png" 
                alt="KG Nanda Advanced Emergency Unit" 
                className="em-main-img"
              />
              <div className="glass-overlay-gradient"></div>
            </div>
          </div>

        </div>

        {/* BOTTOM FULL-WIDTH GRID SHOWCASE */}
        <div className="em-bottom-grid-showcase">
          
          {/* Card 1 */}
          <div className="em-grid-card">
            <div className="em-card-image-box">
              <img src="/Facalities/image.png" alt="Ambulance Service" />
            </div>
            <div className="em-card-content-box">
              <div className="em-card-icon-container orange-theme">
                <Ambulance size={22} />
              </div>
              <div className="em-card-texts">
                <h3>24x7 Ambulance</h3>
                <p>Rapid dispatch unit with real-time tracking and fully engineered pre-hospital life support care.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="em-grid-card">
            <div className="em-card-image-box">
              <img src="/Facalities/image copy.png" alt="Trauma Care" />
            </div>
            <div className="em-card-content-box">
              <div className="em-card-icon-container teal-theme">
                <HeartPulse size={22} />
              </div>
              <div className="em-card-texts">
                <h3>Level-1 Trauma</h3>
                <p>Multidisciplinary trauma surgery experts, state-of-the-art facilities, and instantaneous critical response panels.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL SYSTEM */}
      {isModalOpen && (
        <div className="premium-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="premium-modal-box" onClick={(e) => e.stopPropagation()}>
            
            <div className="p-modal-header">
              <div className="p-modal-badge-row">
                <span className="p-modal-tag">CRITICAL OPERATIONS</span>
                <button className="p-modal-close-btn" onClick={() => setIsModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <h2> <span>Emergency System</span></h2>
              <p>World-class trauma management framework active around the clock.</p>
            </div>

            <div className="p-modal-blocks-grid">
              <div className="p-info-tile">
                <div className="p-tile-icon"><Ambulance size={24} /></div>
                <div>
                  <h4>Rapid Triage System</h4>
                  <p>Colour-coded active triage system prioritising critical patients within milliseconds of arrival.</p>
                </div>
              </div>

              <div className="p-info-tile">
                <div className="p-tile-icon"><HeartPulse size={24} /></div>
                <div>
                  <h4>Advanced Life Support</h4>
                  <p>Equipped with ventilators, monitors, and point-of-care diagnostics for multi-organ failures.</p>
                </div>
              </div>

              <div className="p-info-tile">
                <div className="p-tile-icon"><FlaskConical size={24} /></div>
                <div>
                  <h4>On-Site Diagnostics</h4>
                  <p>In-house round-the-clock radiology, high-speed lab routing, and ultra-sound setups.</p>
                </div>
              </div>

              <div className="p-info-tile">
                <div className="p-tile-icon"><Building2 size={24} /></div>
                <div>
                  <h4>Dedicated Emergency ICU</h4>
                  <p>Stabilisation adjacent complex beds to ensure uninterrupted absolute care flow.</p>
                </div>
              </div>
            </div>

          

          </div>
        </div>
      )}
    </>
  );
}