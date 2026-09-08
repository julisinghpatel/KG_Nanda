import React, { useState, useEffect, useRef } from "react";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const deskRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close or press Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (deskRef.current && !deskRef.current.contains(e.target)) {
        setIsAdminOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsAdminOpen(false);
      }
    };

    if (isAdminOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAdminOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="kg-floating-actions-wrapper">
      
      {/* 1. SCROLL TO TOP FLOATING BUTTON */}
      <button
        onClick={scrollToTop}
        className={`kg-scroll-top-btn ${showScroll ? "is-visible" : ""}`}
        aria-label="Scroll to top"
        title="Go to Top"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      {/* 2. ADMINISTRATIVE DESK SIDE STRETCH WIDGET */}
      <div 
        ref={deskRef}
        className={`kg-admin-side-desk ${isAdminOpen ? "is-active" : ""}`}
      >
        {/* Expanded Details Card */}
        <div className="kg-desk-expanded-content">
          <div className="kg-desk-top-row">
            <div className="kg-desk-badge-group">
              <span className="kg-live-dot"></span>
              <span className="kg-desk-badge">Administrative Desk</span>
            </div>
            <button 
              className="kg-desk-close"
              onClick={(e) => {
                e.stopPropagation();
                setIsAdminOpen(false);
              }}
              aria-label="Close Administrative Desk"
              title="Close"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <h4 className="kg-hindi-heading">मरीज़ सहायता केंद्र</h4>
          <p className="kg-sub-hospital">KG Nanda Hospital • 24x7 Help Desk</p>

          <div className="kg-desk-links">
            {/* Email link */}
            <a href="mailto:admin@kgnandahospital.com" className="kg-desk-item kg-email-item">
              <div className="kg-item-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="kg-item-details">
                <span className="kg-item-tag">Official Email</span>
                <strong className="kg-item-text">admin@kgnandahospital.com</strong>
              </div>
            </a>

            {/* Helpline One */}
            <a href="tel:8840376333" className="kg-desk-item kg-phone-item">
              <div className="kg-item-icon-wrap phone-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="kg-item-details">
                <span className="kg-item-tag">Helpline 1</span>
                <strong className="kg-item-text">8840376333</strong>
              </div>
              <span className="kg-item-arrow">→</span>
            </a>

            {/* Helpline Two */}
            <a href="tel:9838850287" className="kg-desk-item kg-phone-item">
              <div className="kg-item-icon-wrap phone-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="kg-item-details">
                <span className="kg-item-tag">Helpline 2</span>
                <strong className="kg-item-text">9838850287</strong>
              </div>
              <span className="kg-item-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Vertical Side Trigger */}
        <div 
          className="kg-desk-vertical-bar"
          onClick={() => setIsAdminOpen((prev) => !prev)}
        >
          {/* Pulsing Light Beam / Shimmer Bar */}
          <div className="kg-bar-shimmer"></div>
          
          {/* Pulse Indicator */}
          <span className="kg-bar-indicator"></span>

          {/* Premium Desk Icon */}
          <div className="kg-desk-icon-container">
            <svg className="kg-desk-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              <path d="M9 12h6"></path>
              <path d="M9 16h6"></path>
            </svg>
          </div>

          <span className="kg-bar-text">ADMINISTRATIVE DESK</span>
        </div>
      </div>

    </div>
  );
}