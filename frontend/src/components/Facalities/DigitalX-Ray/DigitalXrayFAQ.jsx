import React, { useState } from 'react';
import './DigitalXrayFAQ.css';

const DigitalXrayFAQ = () => {
  // Digital X-Ray specialized FAQs with high-fidelity medical content
  const faqData = [
    {
      id: 1,
      question: "How is a Digital X-Ray different from a traditional film X-Ray?",
      answer: "Digital X-Rays use electronic sensors instead of photographic film to capture images. The results are instantaneous, can be digitally enhanced or zoomed by radiologists, expose the patient to significantly less radiation, and are stored electronically for easy sharing."
    },
    {
      id: 2,
      title: "Is the radiation exposure safe during a Digital X-Ray?",
      answer: "Yes, absolute safety is guaranteed. Our advanced Digital Radiography (DR) systems reduce radiation exposure by up to 80% compared to conventional X-rays. We also strictly follow the ALARA (As Low As Reasonably Achievable) principle and provide protective lead aprons."
    },
    {
      id: 3,
      question: "How long does it take to get the Digital X-Ray reports?",
      answer: "The imaging process itself takes only a few seconds, and the digital scans are instantly transferred to our PACS system. A verified diagnostic report prepared by our expert radiologists is typically ready within 10 to 15 minutes."
    },
    {
      id: 4,
      question: "Do I need any special preparation or fasting before the scan?",
      answer: "Most routine digital X-rays (like chest, limbs, or joints) require zero preparation or fasting. You simply need to remove metallic objects, jewelry, or thick clothing over the target area. For specific contrast-based X-rays, our lab team will guide you in advance."
    },
    {
      id: 5,
      question: "Can doctors access my X-Ray scans remotely?",
      answer: "Yes, our facility is integrated with a next-gen digital ecosystem. Your high-resolution diagnostic images and reports are uploaded to a secured cloud network, enabling your consulting doctors to securely view and analyze them instantly on any device."
    }
  ];

  // State to track which FAQ is open (Default 1st open rakhne ke liye)
  const [openFaqId, setOpenFaqId] = useState(1);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="faq-section py-20 px-4 md:px-10 min-h-screen flex flex-col items-center justify-center">
      
      {/* Title Header styled exactly like your requirement */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-500 text-sm md:text-base">
          Have questions about our ultra-low radiation digital imaging services? Find detailed technical and safety answers below or contact our 24/7 diagnostics support line.
        </p>
      </div>

      {/* Accordion List Container */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {faqData.map((item) => {
          const isOpen = openFaqId === item.id;
          return (
            <div
              key={item.id}
              className={`faq-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen 
                  ? 'faq-card-active border-transparent' 
                  : 'bg-white border-slate-200 hover:border-sky-300'
              }`}
            >
              {/* Question / Header Row */}
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                  isOpen ? 'text-white' : 'text-slate-800'
                }`}>
                  {item.question}
                </span>
                
                {/* Plus / Minus Action Button */}
                <div className={`flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-50 text-slate-500 border border-slate-200'
                }`}>
                  {isOpen ? '−' : '＋'}
                </div>
              </button>

              {/* Collapsible Answer Block */}
              <div 
                className={`faq-answer-wrapper transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className={`p-5 md:p-6 pt-0 text-sm md:text-base leading-relaxed font-light ${
                  isOpen ? 'text-sky-50' : 'text-slate-600'
                }`}>
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default DigitalXrayFAQ;