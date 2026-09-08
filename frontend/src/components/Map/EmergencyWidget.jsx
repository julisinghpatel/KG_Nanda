import React, { useState } from "react";
import "./EmergencyWidget.css";

export default function EmergencyWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDesk = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div 
      className={`kg-admin-tab-container ${isOpen ? "is-expanded" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 1. COLLAPSED VERTICAL TAB TRIGGER */}
      <div 
        className="kg-admin-trigger-tab" 
        onClick={toggleDesk}
        title="Administrative Desk - मरीज सहायता केंद्र"
      >
        <div className="kg-admin-icon-wrap">
          <svg viewBox="0 0 24 24" className="kg-tab-svg">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/>
          </svg>
        </div>
        <span className="kg-vertical-title">ADMIN DESK</span>
        <div className="kg-live-dot-pulse" />
      </div>

      {/* 2. EXPANDABLE STRETCH BOX (NO FULL-SCREEN OVERLAY) */}
      <div className="kg-admin-expand-box">
        {/* Header */}
        <div className="kg-admin-box-header">
          <div className="kg-header-badge">
            <span className="kg-badge-dot" /> 24x7 Help Desk
          </div>
          <button 
            className="kg-admin-close-btn" 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="kg-admin-titles">
          <h3>Administrative Desk</h3>
          <p className="kg-hindi-sub">मरीज़ सहायता केंद्र</p>
          <small className="kg-hospital-name">KG Nanda Hospital</small>
        </div>

        <div className="kg-admin-divider" />

        {/* Contact Information Cards */}
        <div className="kg-admin-actions">
          
          {/* Email Card */}
          <a href="mailto:admin@kgnandahospital.com" className="kg-info-card kg-card-email">
            <div className="kg-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="kg-card-content">
              <span className="kg-card-label">Official Email</span>
              <p className="kg-card-value">admin@kgnandahospital.com</p>
              <small>Click to send email</small>
            </div>
          </a>

          {/* Helpline 1 */}
          <a href="tel:8840376333" className="kg-info-card kg-card-phone">
            <div className="kg-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="kg-card-content">
              <span className="kg-card-label">Hospital Helpline One</span>
              <p className="kg-card-value">8840376333</p>
              <small>Tap to call directly</small>
            </div>
          </a>

          {/* Helpline 2 */}
          <a href="tel:9838850287" className="kg-info-card kg-card-phone">
            <div className="kg-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="kg-card-content">
              <span className="kg-card-label">Hospital Helpline Two</span>
              <p className="kg-card-value">9838850287</p>
              <small>Tap to call directly</small>
            </div>
          </a>

        </div>

        {/* Footer info */}
        <div className="kg-admin-footer">
          <p>Sanjay Nagar, Chandauli • Administrative & Patient Desk</p>
        </div>
      </div>
    </div>
  );
}