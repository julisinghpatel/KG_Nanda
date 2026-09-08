import React from "react";
import "./GovernmentSchemes.css";

export default function GovernmentSchemes() {
  return (
    <section className="kg-schemes-section">
      <div className="kg-schemes-container">
        
        {/* Section Header */}
        <div className="kg-schemes-header">
          <span className="kg-schemes-tag">CASHLESS HEALTHCARE SUPPORT</span>
          <h2 className="kg-schemes-title">Authorized Government Health Schemes</h2>
          <p className="kg-schemes-subtitle">
            Empanelled with major government health initiatives to provide 100% cashless treatment, surgeries, and critical care facilities.
          </p>
        </div>

        {/* Schemes Grid (Side by Side) */}
        <div className="kg-schemes-grid">
          
          {/* CARD 1: AYUSHMAN BHARAT */}
          <div className="kg-scheme-card kg-ayushman-card">
            <div className="kg-card-glow" />
            
            {/* Header Badge & Logo */}
            <div className="kg-card-top">
              <div className="kg-logo-box">
                <img 
                  src="/Home/PM-JAY.jpg" 
                  alt="Ayushman Bharat Logo" 
                  className="kg-scheme-img" 
                />
              </div>
              <span className="kg-status-badge emerald">
                <span className="kg-pulse-dot" /> 100% Cashless Facility
              </span>
            </div>

            {/* Scheme Content */}
            <div className="kg-card-body">
              <h3 className="kg-scheme-name">Ayushman Bharat PM-JAY</h3>
              <p className="kg-scheme-desc">
                Under <strong>Pradhan Mantri Jan Arogya Yojana</strong>, eligible families get complete cashless medical and surgical treatment at our hospital.
              </p>

              {/* Highlight Badges */}
              <div className="kg-features-list">
                <div className="kg-feature-item">
                  <span className="kg-check-icon">✓</span>
                  <span>Coverage up to <strong>₹5 Lakh</strong> per family/year</span>
                </div>
                <div className="kg-feature-item">
                  <span className="kg-check-icon">✓</span>
                  <span>Secondary & Tertiary Care Surgeries Included</span>
                </div>
                <div className="kg-feature-item">
                  <span className="kg-check-icon">✓</span>
                  <span>Hassle-free Admission via Ayushman Golden Card</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="kg-card-footer">
              <a className="kg-btn kg-btn-emerald">
                <span>Avail Cashless Treatment</span>
                <span className="kg-btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* CARD 2: PT. DEEN DAYAL HEALTH SCHEME */}
          <div className="kg-scheme-card kg-deendayal-card">
            <div className="kg-card-glow" />

            {/* Header Badge & Logo */}
            <div className="kg-card-top">
              <div className="kg-logo-box deendayal-logo">
                <img 
                  src="/Home/Pt.DeenDayal.png" 
                  alt="Pt. Deen Dayal Health Scheme Logo" 
                  className="kg-scheme-img"
                />
              </div>
              <span className="kg-status-badge orange">
                <span className="kg-pulse-dot" /> UP State Govt Approved
              </span>
            </div>

            {/* Scheme Content */}
            <div className="kg-card-body">
              <h3 className="kg-scheme-name">Pt. Deen Dayal Health Scheme</h3>
              <p className="kg-scheme-desc">
                Dedicated cashless healthcare scheme for <strong>UP State Government Employees & Pensioners</strong> along with their dependent families.
              </p>

              {/* Highlight Badges */}
              <div className="kg-features-list">
                <div className="kg-feature-item">
                  <span className="kg-check-icon">✓</span>
                  <span><strong>Unlimited Cashless</strong> Treatment in IPD</span>
                </div>
                <div className="kg-feature-item">
                  <span className="kg-check-icon">✓</span>
                  <span>For State Servants, Pensioners & Dependents</span>
                </div>
                <div className="kg-feature-item">
                  <span className="kg-check-icon">✓</span>
                  <span>State Health Card & Emergency Services Support</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="kg-card-footer">
              <a className="kg-btn kg-btn-orange">
                <span>Avail Cashless Treatment</span>
                <span className="kg-btn-arrow">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}