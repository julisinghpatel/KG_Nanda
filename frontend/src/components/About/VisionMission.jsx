import { useScrollReveal } from "../../hooks/useScrollReveal";
import { FaEye, FaBullseye } from "react-icons/fa";
import "./MV.css";

const VisionMission = () => {
  // Maintaining your custom hook animation logic seamlessly
  const sectionRef = useScrollReveal({ child: ".vm-heading, .vm-box", stagger: 0.12 });

  return (
    <section ref={sectionRef} className="vm-premium">
      {/* Dynamic Premium Ambient Light Sources */}
      <div className="vm-ambient-blob vm-blob-teal"></div>
      <div className="vm-ambient-blob vm-blob-orange"></div>

      <div className="vm-container">
        {/* SECTION HEADER */}
        <div className="vm-heading">
          <span className="vm-section-tag">Corporate Philosophy</span>
          <h2>
            Our <span>Vision</span> & <span>Mission</span>
          </h2>
          <p>
            Driving clinical benchmarks at KG Nanda Hospital, Chandauli through structured innovation, deep-rooted empathy, and continuous healthcare advancements.
          </p>
        </div>

        {/* CARDS WRAPPER GRID */}
        <div className="vm-wrapper">
          
          {/* THE VISION CARD */}
          <div className="vm-box">
            {/* Corner Decorative Accent */}
            <div className="card-top-accent teal-accent"></div>
            
            <div className="icon-circle-frame frame-teal">
              <FaEye />
            </div>
            
            <h3>Our Vision</h3>
            <p>
              To be a highly recognized regional healthcare leader, celebrated for absolute ethical compliance, premium safety standards, and revolutionary human-centered medical practices that redefine patient hospitality.
            </p>

            <div className="card-arrow-indicator">
              <span>01</span>
            </div>
          </div>

          {/* THE MISSION CARD */}
          <div className="vm-box highlight-card">
            {/* Corner Decorative Accent */}
            <div className="card-top-accent orange-accent"></div>
            
            <div className="icon-circle-frame frame-orange">
              <FaBullseye />
            </div>
            
            <h3>Our Mission</h3>
            <p>
              To systematically engineer accessible, highly advanced, and uncompromising medical care infrastructure backed by certified top-tier professionals, improving real clinical recovery for every individual.
            </p>

            <div className="card-arrow-indicator">
              <span>02</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;