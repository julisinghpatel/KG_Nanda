import { useScrollReveal } from "../../hooks/useScrollReveal";
import { FaUserMd, FaAmbulance, FaMicroscope, FaHeartbeat, FaCheckCircle } from "react-icons/fa";
import "./Intro.css";

const AboutHospital = () => {
  // Seamlessly matching your pre-built custom animation reveal engine
  const sectionRef = useScrollReveal({ child: ".about-left, .about-right, .intro-grid-card", stagger: 0.15 });

  return (
    <section className="lifeline-about" ref={sectionRef}>
      {/* Structural Subtle Gradient Mesh Layer */}
      <div className="intro-mesh-glow"></div>

      <div className="about-container">
        
        {/* LEFT VISUAL BLOCK - ASYMMETRIC PICTURE DESIGN */}
        <div className="about-left">
          <div className="premium-frame-wrapper">
            <img 
              src="/AboutUs/A2.png"
              alt="KG Nanda Hospital Infrastructure"
              className="main-showcase-img"
            />
            {/* Elegant Floating Stat Badge */}
            <div className="floating-stat-badge">
              <div className="badge-icon-core">
                <FaCheckCircle />
              </div>
              <div className="badge-text-core">
                <h5>24/7 Available</h5>
                <p>Emergency Systems</p>
              </div>
            </div>
            {/* Artistic Geometric Border Backing */}
            <div className="frame-backdrop-accent"></div>
          </div>
        </div>

        {/* RIGHT CONTENT BLOCK - LUXURY TYPOGRAPHY & CARDS */}
        <div className="about-right">
          <div className="intro-meta-tag">
            <span className="line-bar"></span>
            <span>Clinical Overview</span>
          </div>
          
          <h2 className="section-title">
            KG NANDA <br />
            <span className="title-tint">HOSPITAL</span>
          </h2>

          <p className="intro-main-paragraph">
            Setting healthcare benchmarks in Chandauli through state-of-the-art diagnostic ecosystems, globally accredited elite medical staff, and a patient-first hospitality mindset.
          </p>

          {/* Premium 2x2 Feature Grid Layout instead of standard bullet lists */}
          <div className="intro-features-grid">
            
            <div className="intro-grid-card">
              <div className="card-icon blue-theme">
                <FaUserMd />
              </div>
              <div className="card-details">
                <h4>Expert Clinicians</h4>
                <p>Top-tier specialized consulting doctors.</p>
              </div>
            </div>

            <div className="intro-grid-card">
              <div className="card-icon teal-theme">
                <FaHeartbeat />
              </div>
              <div className="card-details">
                <h4>Compassionate Care</h4>
                <p>Empathetic recovery management pipelines.</p>
              </div>
            </div>

            <div className="intro-grid-card">
              <div className="card-icon orange-theme">
                <FaAmbulance />
              </div>
              <div className="card-details">
                <h4>Emergency Ready</h4>
                <p>Fully equipped trauma responding system.</p>
              </div>
            </div>

            <div className="intro-grid-card">
              <div className="card-icon blue-theme">
                <FaMicroscope />
              </div>
              <div className="card-details">
                <h4>Modern Labs</h4>
                <p>Advanced automated pathology setups.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHospital;