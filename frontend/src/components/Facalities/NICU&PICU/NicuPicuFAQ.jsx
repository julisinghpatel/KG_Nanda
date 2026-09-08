import React, { useState } from 'react';
import './NicuPicuFAQ.css';

const NicuPicuFAQ = () => {
  // NICU & PICU specialized FAQs
  const faqData = [
    {
      id: 1,
      question: "What is the difference between NICU and PICU?",
      answer: "The NICU (Neonatal Intensive Care Unit) is specialized for newborn infants, premature babies, or infants born with critical illness up to their first few months. The PICU (Pediatric Intensive Care Unit) provides intensive medical care for older infants, children, and teenagers up to 18 years of age."
    },
    {
      id: 2,
      question: "Are parents allowed inside the NICU/PICU 24/7?",
      answer: "Yes, we encourage parental presence to facilitate bonding and quick recovery. However, to maintain absolute sterility and patient safety, we follow strict sanitization protocols and allow restricted entry during critical doctor rounds or procedures."
    },
    {
      id: 3,
      question: "What medical technology and infrastructure do you use?",
      answer: "Our units are equipped with advanced multi-parametric vital monitors, high-frequency oscillatory ventilators (HFOV), advanced incubators with micro-environment control, and dedicated bedside ultrasound and X-ray machines to minimize movement for the baby."
    },
    {
      id: 4,
      question: "How do you handle medical emergencies during transport?",
      answer: "We have a dedicated Neonatal and Pediatric Emergency Transport Service. Our advanced life-support ambulances act as mobile ICUs, equipped with transport incubators, specialized ventilators, and an expert medical retrieval team available 24/7."
    },
    {
      id: 5,
      question: "What is the nurse-to-patient ratio in the critical units?",
      answer: "To ensure the highest quality of continuous monitoring and precision care, we maintain a premium 1:1 or 1:2 nurse-to-patient ratio depending entirely on the severity and critical condition of the child."
    }
  ];

  // State to track which FAQ is open (Default 1st open rakhne ke liye jaise image_6ff1db.png me hai)
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
          Have questions about our neonatal and pediatric intensive care services? Find detailed answers below or contact our 24/7 support line.
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

export default NicuPicuFAQ;