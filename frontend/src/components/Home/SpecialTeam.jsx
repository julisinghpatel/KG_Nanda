import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./SpecialTeam.css";
import { useNavigate } from "react-router-dom";
import { Sparkles, Users, Award, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function SpecialTeam() {
  const navigate = useNavigate();
  const sectionRef = useScrollReveal({
    child: ".team-heading, .team-images, .team-content",
    stagger: 0.15
  });

  return (
    <section ref={sectionRef} className="team-premium-section bg-[#f6f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP LAYOUT: Section Heading Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="team-premium-tag inline-flex items-center space-x-2 bg-[#35b6b4]/10 border border-[#35b6b4]/30 text-[#35b6b4] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
            <Sparkles size={13} className="text-[#dd5200]" />
            <span>World-Class Medical Panel</span>
          </div>
          <h2 className="team-heading text-3xl md:text-5xl font-black text-[#003a70] tracking-tight">
            Our <span>Special Team</span>
          </h2>
          <div className="w-16 h-1 bg-[#dd5200] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="team-grid-container">

          {/* LEFT SIDE: Premium Asymmetric Image Canvas (Inspired by image_023227.jpg) */}
          <div className="team-images-wrapper">
            <div className="team-images-matrix">

              {/* Box 1: Large Rounded Top-Left Canvas */}
              <div className="matrix-cell cell-top-left border-4 border-white shadow-xl">
                <img src="https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg" alt="Senior Surgeon" />
                <div className="cell-overlay">
                  <h4>Dr. Robert Vance</h4>
                  <p>Chief Neurosurgeon</p>
                </div>
              </div>

              {/* Box 2: Tall Elegant Right Canvas */}
              <div className="matrix-cell cell-right border-4 border-white shadow-xl">
                <img src="./Home/Dr. Anand Prakash.png" alt="Cardiologist Specialist" />
                <div className="cell-overlay">
                  <h4>Dr. Anand Prakash Tiwari</h4>
                  <p>Senior Gynaecologist & Infertility Specialist</p>
                </div>
              </div>

              {/* Box 3: Square Left Bottom Canvas */}
              <div className="matrix-cell cell-bottom-left border-4 border-white shadow-xl">
                <img src="https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg" alt="Pediatrician" />
                <div className="cell-overlay">
                  <h4>Dr. Sameer Joshi</h4>
                  <p>Senior Pediatrician</p>
                </div>
              </div>

              {/* Box 4: Rounded Bottom-Right Canvas */}
              <div className="matrix-cell cell-bottom-right border-4 border-white shadow-xl">
                <img src="https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg" alt="Clinical Specialist" />
                <div className="cell-overlay">
                  <h4>Dr. Elena Rostova</h4>
                  <p>Oncology Expert</p>
                </div>
              </div>

            </div>

            {/* Central High-End Rotating Trust Badge */}
            <div className="team-center-rotating-badge bg-[#003a70] text-white shadow-xl border-4 border-white">
              <div className="badge-internal-spin">
                <Award size={24} className="text-[#35b6b4]" />
                <span className="text-[9px] font-black tracking-wider uppercase mt-1">Certified</span>
              </div>
            </div>

            {/* Ambient Vector Accents from image_023227.jpg */}
            <div className="absolute -bottom-6 -left-6 text-[#35b6b4]/30 animate-pulse hidden sm:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.6z" />
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE: Content Delivery Engine */}
          <div className="team-content space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#dd5200] block">
                // Excellence in Care
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-[#003a70] leading-tight">
                Meet Our Expert & <br />
                <span className="text-[#35b6b4]">Compassionate Medical Panel</span>
              </h3>
            </div>

            <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
              Backed by a team of highly experienced doctors, surgeons, and specialists, each committed to delivering compassionate, patient-centred care at every stage of your treatment matrix.
            </p>

            {/* Corporate Micro Metric Counters */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/60">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-[#35b6b4]/10 text-[#35b6b4] mt-0.5">
                  <Users size={16} />
                </div>
                <div>
                  <h5 className="text-lg font-black text-[#003a70]">150+</h5>
                  <p className="text-xs text-gray-400 font-bold uppercase">Medical Specialists</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-[#dd5200]/10 text-[#dd5200] mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h5 className="text-lg font-black text-[#003a70]">99.8%</h5>
                  <p className="text-xs text-gray-400 font-bold uppercase">Success Rate</p>
                </div>
              </div>
            </div>

            {/* High-End Dynamic Action Deck Button */}
            <div className="pt-6">
              <button
                className="view-doctors-btn group flex items-center space-x-3 bg-[#003a70] hover:bg-[#35b6b4] text-white font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
                onClick={() => navigate("/team")}
              >
                <span>View All Doctors</span>
                <ArrowUpRight size={14} className="text-[#dd5200] group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Background Radial Premium Meshes */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#35b6b4]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#dd5200]/4 rounded-full blur-3xl pointer-events-none -z-0"></div>
    </section>
  );
}