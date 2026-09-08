import React, { useEffect, useState } from 'react';
import './MedicineCareProcess.css'; // Separate CSS file path configuration

const MedicineCareProcess = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Component screen par mount hote hi micro-animations run karne ke liye
    setAnimate(true);
  }, []);

  // Premium step-by-step metadata workflow array 
  const steps = [
    {
      id: '01',
      title: 'Digital Consultation',
      subtitle: 'Easy Scheduling',
      description: 'Book your appointment via our unified secure digital portal or premium tele-health workspace instantly.',
      icon: '📱',
      color: '#003a70'
    },
    {
      id: '02',
      title: 'Precision Diagnosis',
      subtitle: 'Advanced Analysis',
      description: 'Undergo exhaustive clinical screenings, vital telemetry checks, and automated AI data reviews.',
      icon: '🩺',
      color: '#35b6b4'
    },
    {
      id: '03',
      title: 'Tailored Therapeutics',
      subtitle: 'Personalized Plans',
      description: 'Receive highly curated targeted pharmaceutical blueprints and proactive recovery protocols.',
      icon: '💊',
      color: '#dd5200'
    },
    {
      id: '04',
      title: 'Continuous Oversight',
      subtitle: '24/7 Monitoring',
      description: 'Benefit from non-stop post-care wellness reporting, automatic profile trackers, and direct help.',
      icon: '🔄',
      color: '#003a70'
    }
  ];

  return (
    <section className="relative bg-[#f6f5ee] py-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#dd5200]/20">
      
      {/* Background Flow Vector Soft Ambient Blurs */}
      <div className="absolute top-[-10%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-[#003a70]/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-[#35b6b4]/6 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Dynamic Typography Section Title Block */}
        <div className={`max-w-3xl mx-auto text-center mb-20 space-y-4 transform transition-all duration-1000 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         
          <h2 className="text-4xl sm:text-5xl font-black text-[#003a70] tracking-tight leading-tight">
            Our Premium Medical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003a70] via-[#248590] to-[#35b6b4]">
              Care & Recovery Process
            </span>
          </h2>
          <div className="w-20 h-1 bg-[#dd5200] mx-auto rounded-full mt-2"></div>
          <p className="text-[#003a70]/70 text-base max-w-xl mx-auto pt-2">
            A seamless, highly integrated four-step patient journey built around state-of-the-art clinical efficiency and genuine luxury comfort.
          </p>
        </div>

        {/* Process Steps Cards System Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Aesthetic Dashed Connecting Tracker Line (Only Visible on Desktop Layouts) */}
          <div className="absolute top-[28%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#003a70]/10 via-[#35b6b4]/25 to-[#dd5200]/10 border-dashed border-b border-[#003a70]/10 pointer-events-none hidden lg:block z-0" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="process-card bg-white rounded-[2.5rem] p-8 border border-[#003a70]/5 shadow-[0_16px_45px_-12px_rgba(0,58,112,0.03)] flex flex-col items-start relative z-10 overflow-hidden group transform transition-all duration-700"
              style={{
                transitionDelay: `${index * 150}ms`, // Premium staggered cascade drop
                transform: animate ? 'translateY(0)' : 'translateY(45px)',
                opacity: animate ? 1 : 0
              }}
            >
              {/* Giant Absolute Watermark Step ID Number */}
              <div className="absolute top-4 right-6 text-5xl font-black text-[#003a70]/5 tracking-tighter group-hover:text-[#dd5200]/8 transition-colors duration-500 selection:bg-transparent">
                {step.id}
              </div>

              {/* Icon Frame Box */}
              <div className="w-16 h-16 rounded-2xl bg-[#f6f5ee] flex items-center justify-center text-3xl mb-8 relative z-10 shadow-sm border border-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <span className="relative z-10">{step.icon}</span>
                <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              </div>

              {/* Subtitle Accent Detail */}
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#35b6b4] group-hover:text-[#dd5200] transition-colors duration-300">
                {step.subtitle}
              </p>

              {/* Main Step Heading Title */}
              <h3 className="text-xl font-extrabold text-[#003a70] tracking-tight mt-2 mb-3">
                {step.title}
              </h3>

              {/* Explanatory Body Description Paragraph */}
              <p className="text-sm text-[#003a70]/70 leading-relaxed font-normal">
                {step.description}
              </p>

              {/* Bottom Expandable Indicator bar */}
              <div className="w-8 h-[3px] bg-[#003a70]/10 rounded-full mt-6 group-hover:w-16 group-hover:bg-[#35b6b4] transition-all duration-500" />

              {/* Internal Backdrop Glow Burst Spot */}
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#35b6b4]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#003a70]/5 transition-colors duration-700" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MedicineCareProcess;