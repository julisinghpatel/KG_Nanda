import React from 'react';
import './FacilitiesPathology.css';

// Premium high-fidelity diagnostic icons from Lucide package
import { 
  Dna, 
  Droplet, 
  Activity, 
  Microscope, 
  ShieldCheck, 
  Heart, 
  ArrowUpRight, 
  Clock 
} from 'lucide-react';

const FacilitiesPathology = () => {
  // Comprehensive premium facility offerings structure
  const labFacilities = [
    {
      id: 1,
      title: "Hematology & Blood Disorders",
      tagline: "Complete Blood Matrix Evaluation",
      desc: "Advanced automated counting for cell structures, hemoglobin profiling, and coagulation analytics using next-gen flow cytometry.",
      icon: <Droplet className="w-6 h-6 text-[#1e3a8a]" />,
      bgSoft: "bg-blue-50/70",
      status: "Fully Automated"
    },
    {
      id: 2,
      title: "Immunology & Hormone Assays",
      tagline: "Ultra-sensitive Chemiluminescence",
      desc: "Precision immunoassay trackers mapping thyroid matrices, fertility panels, and oncology markers at nanogram detection thresholds.",
      icon: <Activity className="w-6 h-6 text-[#ea580c]" />,
      bgSoft: "bg-orange-50/70",
      status: "Same Day Turnaround"
    },
    {
      id: 3,
      title: "Molecular Genomics & DNA",
      tagline: "Real-time Amplification Protocols",
      desc: "High-throughput PCR engines and genetic indexing models tracking infectious strains and hereditary molecular sequences with high fidelity.",
      icon: <Dna className="w-6 h-6 text-emerald-600" />,
      bgSoft: "bg-emerald-50/70",
      status: "NABL Certified"
    },
    {
      id: 4,
      title: "Clinical Biochemistry Matrix",
      tagline: "Integrated Fluid Pathologies",
      desc: "Comprehensive profiling engines for metabolic channels, advanced lipid systems, liver analytics, and specialized renal bio-indicators.",
      icon: <Microscope className="w-6 h-6 text-cyan-600" />,
      bgSoft: "bg-cyan-50/70",
      status: "Dual Validated"
    },
    {
      id: 5,
      title: "Microbiology & Cultures",
      tagline: "Rapid Pathogen Isolation",
      desc: "Environmentally monitored bio-incubators executing accelerated aerobic, anaerobic culture diagnostics and antibiotic profiling.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      bgSoft: "bg-indigo-50/70",
      status: "Zero-Contamination Zone"
    },
    {
      id: 6,
      title: "Preventive Wellness Screening",
      tagline: "Comprehensive Health Mapping",
      desc: "Tailored full-body screening panels combining biochemical and metabolic trends for pro-active metabolic and lifestyle optimization.",
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      bgSoft: "bg-rose-50/70",
      status: "Premium Care Package"
    }
  ];

  return (
    <section className="facilities-pathology-section py-24 px-4 md:px-10 lg:px-16 font-sans">
      {/* Background visual artifact layer */}
      <div className="background-vector-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper Title Section Header block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-[#1e3a8a] text-xs font-black tracking-widest uppercase block mb-3">
              State-Of-The-Art Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Our Advanced <span className="text-[#ea580c]">Pathology Facilities</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed font-normal">
              Equipped with fully integrated, premium diagnostic infrastructure platforms to perform complex multi-disciplinary testing under absolute clinical controls.
            </p>
          </div>
          
          {/* Subheader tracking active metric banner */}
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl p-4 w-fit h-fit self-start md:self-auto">
            <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full live-pulse-indicator"></span>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800 tracking-wide leading-tight">All Modalities Operational</p>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Real-time tracking active</p>
            </div>
          </div>
        </div>

        {/* Dynamic Responsive Facility Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labFacilities.map((facility) => (
            <div 
              key={facility.id} 
              className="facility-interactive-card p-6 md:p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer"
            >
              
              {/* Upper Structure: Icon & Dynamic Action Badge row */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Visual Premium Custom Icon Frame */}
                  <div className={`facility-card-icon-container w-14 h-14 rounded-2xl ${facility.bgSoft} flex items-center justify-center border border-white/50 shadow-inner`}>
                    {facility.icon}
                  </div>
                  
                  {/* Floating Action Circle arrow icon */}
                  <div className="action-arrow-box w-9 h-9 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Facility Labels and Descriptions */}
                <div className="text-left">
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider block mb-1 uppercase">
                    {facility.tagline}
                  </span>
                  <h4 className="text-slate-900 font-extrabold text-lg md:text-xl tracking-wide leading-snug mb-3">
                    {facility.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    {facility.desc}
                  </p>
                </div>
              </div>

              {/* Lower Section Card Footer metadata status tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-left">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-semibold text-slate-600 tracking-wide">
                  Status: <span className="text-slate-900 font-extrabold">{facility.status}</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilitiesPathology;