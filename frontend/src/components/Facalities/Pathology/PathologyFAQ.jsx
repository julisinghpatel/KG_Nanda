import React, { useState } from 'react';
import './PathologyFAQ.css';

// Premium UI icons from the verified Lucide pack
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall, Clock } from 'lucide-react';

const PathologyFAQ = () => {
  // Tracker mapping variable tracking which specific accordion card is actively open
  const [activeFaqId, setActiveFaqId] = useState(1);

  // High fidelity real clinical pathology diagnostics dataset
  const faqDataset = [
    {
      id: 1,
      question: "Do I need to fast before coming for a blood pathology test?",
      answer: "Yes, certain metabolic profiles such as Fasting Blood Sugar (FBS), Lipid Profiles, and Insulin parameters strictly require 8 to 12 hours of absolute water-only fasting. Avoid drinking juices, tea, or coffee during this structural window to maintain marker precision."
    },
    {
      id: 2,
      question: "How can I access or download my diagnostic pathology reports?",
      answer: "As soon as our senior consultants sign off on your sample evaluation, an automated tracking SMS and WhatsApp alert will deliver a unique hyper-secured direct cloud download link. Alternatively, you can log into our patient portal using your registered mobile number."
    },
    {
      id: 3,
      question: "What is the typical turnaround time (TAT) for molecular genomic reports?",
      answer: "Routine biochemistry and hematology markers are dispatched in 4 to 6 hours. However, advanced molecular pathology panels, real-time PCR tests, or comprehensive DNA genomics mapping timelines take anywhere from 24 to 72 hours due to complex sequencing protocols."
    },
    {
      id: 4,
      question: "How safe is the home sample collection protocol?",
      answer: "Your safety is non-negotiable. Our certified phlebotomists use entirely disposable single-use vacuum systems, wear full clinical gear, and deposit your bio-samples straight into temperature-controlled digital cold-chain boxes to completely prevent ambient sample lysis."
    },
    {
      id: 5,
      question: "Can I request a re-test if my biomarkers appear highly atypical?",
      answer: "Absolutely. Every high-risk or critical laboratory finding triggers our automated internal validation system where our professors run your second sample aliquot (saved portion) on a secondary setup for strict calibration checks at zero added cost."
    }
  ];

  // Logic switcher checking and altering states smoothly
  const toggleAccordionHandler = (targetId) => {
    setActiveFaqId(activeFaqId === targetId ? null : targetId);
  };

  return (
    <section className="pathology-faq-wrapper py-24 px-4 md:px-10 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Core Layout Blueprint split into 2 asymmetrical sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky Support Column Anchor */}
          <div className="lg:col-span-4 lg:sticky lg:top-10 text-left">
            <span className="text-[#1e3a8a] text-xs font-black tracking-widest uppercase block mb-3">
              Clear Answers Online
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
              Frequently Asked <br />
              <span className="text-[#ea580c]">Pathology FAQs</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal mb-8">
              Got general queries regarding sample parameters, pre-test preparation timelines, or report interpretation? We have laid down everything below.
            </p>

            {/* Quick Micro-card support anchor link */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 border border-orange-100">
                <MessageSquare className="w-5 h-5 text-[#ea580c]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 tracking-wide">Still have a question?</h4>
                <p className="text-xs text-slate-500 mt-1 mb-3">Our clinical lab desk operates 24/7 to resolve queries.</p>
                <a 
                  href="tel:+917800001895" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#ea580c] transition-colors duration-200"
                >
                  <PhoneCall className="w-3 h-3" /> Contact Support Desk
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion Track Framework */}
          <div className="lg:col-span-8 w-full flex flex-col gap-4">
            {faqDataset.map((faq) => {
              const isCurrentOpen = activeFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`faq-interactive-item relative rounded-2xl md:rounded-[1.5rem] overflow-hidden ${isCurrentOpen ? 'item-active' : ''}`}
                >
                  {/* Visual Accent bar indicator code */}
                  <div className="faq-active-accent-bar"></div>

                  {/* Header Trigger Box button row */}
                  <button
                    onClick={() => toggleAccordionHandler(faq.id)}
                    className="w-full py-5 md:py-6 pl-6 pr-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isCurrentOpen}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${isCurrentOpen ? 'text-[#ea580c]' : 'text-slate-400'}`} />
                      <span className="text-slate-900 font-bold text-sm md:text-base tracking-wide leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    
                    <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm faq-chevron-icon">
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </div>
                  </button>

                  {/* Dynamic Height Grid wrapper block */}
                  <div className="faq-body-collapse">
                    <div className="faq-inner-content">
                      <div className="pl-14 pr-6 pb-6 md:pb-7 text-left">
                        <p className="text-slate-500 text-sm leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                        
                        {/* Dynamic lab metadata sub-stamp tags for active cards */}
                        <div className="mt-4 flex items-center gap-4 text-[10px] uppercase tracking-wider font-bold text-slate-400">
                          <span className="flex items-center gap-1 text-[#1e3a8a]">
                            <Clock className="w-3 h-3" /> Verified Protocol
                          </span>
                          <span>•</span>
                          <span>Medical Code: LAB-FAQ-{faq.id}00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PathologyFAQ;