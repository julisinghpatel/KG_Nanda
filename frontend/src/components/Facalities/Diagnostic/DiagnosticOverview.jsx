import React from 'react';
import './DiagnosticOverview.css'; // Importing separate premium CSS

const DiagnosticOverview = () => {
  // Premium Diagnostic Data
  const diagnostics = [
    {
      id: 1,
      title: "Advanced Radiology",
      code: "MRI / CT Scan",
      availability: "24/7 Available",
      status: "Operational",
      count: "12 Labs Active",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
      color: "#02acf0",
      bgGradient: "from-[#aadcff]/20 to-[#b5f5ff]/10"
    },
    {
      id: 2,
      title: "Pathology & Genomics",
      code: "Blood / DNA Analysis",
      availability: "Reports in 4 Hrs",
      status: "High Load",
      count: "3,400+ Daily Tests",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "#2f3395",
      bgGradient: "from-[#7396d3]/20 to-[#aadcff]/10"
    },
    {
      id: 3,
      title: "Cardiology Suite",
      code: "ECG / Echo / TMT",
      availability: "By Appointment",
      status: "Operational",
      count: "5 Top Consultants",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "#c20321", // Emergency Alert Accent
      bgGradient: "from-[#c90322]/10 to-[#f6fcfa]"
    },
    {
      id: 4,
      title: "Precision Endoscopy",
      code: "GI / Colonoscopy",
      availability: "Next Day Slots",
      status: "Fast Track",
      count: "HD Imaging Tech",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "#dd5200", // Orange Accent
      bgGradient: "from-[#dd5200]/10 to-[#f6fcfa]"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#f6fcfa] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Decorative Premium Shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#82cfe9]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7396d3]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section with Smooth Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
         
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2f3395] mb-4">
            Diagnostic <span className="text-[#02acf0]">Overview</span>
          </h2>
          <p className="text-base text-[#60a9bd] font-medium">
            Real-time status updates of smart laboratory modules, precision imaging facilities, and automated pathology streams.
          </p>
        </div>

        {/* Responsive Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diagnostics.map((item, index) => (
            <div
              key={item.id}
              className={`premium-card relative p-6 rounded-2xl flex flex-col justify-between opacity-0 animate-fade-in-up delay-${index + 1}`}
            >
              {/* Dynamic Gradient Top Accent */}
              <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r ${item.bgGradient}`}></div>

              <div>
                {/* Top Badge & Icon Layout */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 animate-icon" 
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.status === 'Operational' ? 'bg-[#b5f5ff] text-[#2f3395]' : 'bg-[#dd5200]/10 text-[#dd5200]'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#2f3395] mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#02acf0] font-semibold mb-4">
                  {item.code}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiagnosticOverview;