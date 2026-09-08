import React, { useState } from 'react';

const WHATSAPP_NUMBER = "919161138859"; // Aapka WhatsApp Business Number

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (defaultText) => {
    const encodedText = encodeURIComponent(defaultText);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
      {/* Modal Popup */}
      {isOpen && (
        <div style={{
          width: '320px',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          marginBottom: '15px',
          fontFamily: 'sans-serif'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '50%',
              background: '#25D366', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 'bold'
            }}>
              WA
            </div>
            <div>
              <h4 style={{ margin: 0, color: '#0f172a', fontSize: '16px' }}>KG Nanda Healthcare</h4>
              <p style={{ margin: 0, color: '#16a34a', fontSize: '12px', fontWeight: '600' }}>● Reply instantly</p>
            </div>
          </div>

          <p style={{ fontSize: '13px', color: '#475569', marginBottom: '15px', lineHeight: '1.4' }}>
            Namaste! Choose an option below to start chat on WhatsApp:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => handleOptionClick("1. Appointment Book karna hai")}
              style={{
                padding: '10px 14px', borderRadius: '12px', border: '1px solid #e2e8f0',
                background: '#ffffff', color: '#0f172a', fontWeight: '500', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.2s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
              }}>
              📅 Book Appointment
            </button>
            <button 
              onClick={() => handleOptionClick("2. Doctor timing aur fees details chahiye")}
              style={{
                padding: '10px 14px', borderRadius: '12px', border: '1px solid #e2e8f0',
                background: '#ffffff', color: '#0f172a', fontWeight: '500', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.2s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
              }}>
              👨‍⚕️ View Doctors & Timing
            </button>
            <button 
              onClick={() => handleOptionClick("4. Talk to Support")}
              style={{
                padding: '10px 14px', borderRadius: '12px', border: '1px solid #e2e8f0',
                background: '#ffffff', color: '#0f172a', fontWeight: '500', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.2s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
              }}>
              💬 General Consultation
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          border: 'none', color: 'white', fontSize: '28px', cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          display: 'grid', placeItems: 'center', transition: 'transform 0.2s ease'
        }}>
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}