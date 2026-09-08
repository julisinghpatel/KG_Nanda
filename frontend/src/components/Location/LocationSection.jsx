import { useEffect, useRef, useState } from "react";
import "./LocationSection.css";

// ─── KG Nanda Hospital Data ──────────────────────────────────────────────────
const HOSPITAL_DATA = {
  name: "KG Nanda Hospital",
  tagline: "Advanced Multi-Speciality Care · 24/7 Emergency",
  address: "Word No.11 Sanjay Nagar,\nInfront of Chaurashia Petrol Pump, Bichhiya Kala,\nChandauli, Jasori, Uttar Pradesh 232104",
  phone: ["096283 00438"],
  email: "contact@kgnandahospital.com",
  hours: "Open 24 Hours · 7 Days A Week",
};

// Embed URL structured for Chandauli geometry mapping point
const MAP_EMBED = "https://maps.google.com/maps?q=KG%20Nanda%20Hospital%20Chandauli&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function LocationSection() {
  const [mapOpen, setMapOpen] = useState(false);
  const [animated, setAnimated] = useState(false);

  // Trigger content entry trigger animations right after structural mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openMap = () => {
    setMapOpen(true);
  };

  const closeMap = () => {
    setMapOpen(false);
  };

  return (
    <>
      {/* ── MAIN LAYOUT SECTION ──────────────────────────────────────────────── */}
      <section className="kg-sec-container" id="kg-map-frame-section">
        
        {/* Header Block Section */}
        <div className={`kg-sec-header ${animated ? "kg-fade-up" : ""}`}>
          <div className="kg-sec-badge">
            <div className="kg-sec-badge-dot" />
            Find Our Campus
          </div>

          <h2 className="kg-sec-title">
            Visit <span>KG Nanda Hospital</span>
          </h2>

          <p className="kg-sec-subtitle">Chandauli Medical Center & Coordinates</p>
        </div>

        {/* Unified Corporate Data Grid */}
        <div className={`kg-sec-body ${animated ? "kg-slide-in" : ""}`}>

          {/* ── INTERACTIVE MAP WRAPPER ────────────────────────────────────────── */}
          <div
            className="kg-sec-map-wrap"
            onClick={openMap}
            title="Click to expand view parameters"
          >
            <iframe
              src={MAP_EMBED}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KG Nanda Hospital Location Blueprint Map"
            />
            <div className="kg-sec-map-overlay" />

            {/* Top Badge */}
            <div className="kg-sec-map-corner-badge">
              <div className="kg-sec-map-pin-icon" />
              Live Hospital Landmark
            </div>

            {/* Dynamic Bottom View Trigger Hint */}
            <div className="kg-sec-map-click-hint">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Click to maximize interactive view
            </div>
          </div>

          {/* ── METADATA TEXT CARD SIDE ───────────────────────────────────────── */}
          <div className="kg-sec-info">
            
            <div>
              <div className="kg-sec-hospital-name">{HOSPITAL_DATA.name}</div>
              <div className="kg-sec-hospital-tagline">{HOSPITAL_DATA.tagline}</div>
              <div className="kg-sec-divider" />

              {/* Row: Address Block */}
              <div className="kg-sec-info-row">
                <div className="kg-sec-icon-box text-teal">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="kg-sec-info-label">Official Address</div>
                  <div className="kg-sec-info-value" style={{ whiteSpace: "pre-line" }}>
                    {HOSPITAL_DATA.address}
                  </div>
                </div>
              </div>

              {/* Row: Contact Lines */}
              <div className="kg-sec-info-row">
                <div className="kg-sec-icon-box text-orange">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="kg-sec-info-label">Reception Desk / Phone</div>
                  <div className="kg-sec-info-value">
                    {HOSPITAL_DATA.phone.map((num, idx) => (
                      <div key={idx}>
                        <a href={`tel:${num.replace(/\s/g, "")}`} className="kg-phone-link">
                          {num}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row: Digital Mailing Node */}
              <div className="kg-sec-info-row">
                <div className="kg-sec-icon-box text-blue">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="kg-sec-info-label">Email Communications</div>
                  <div className="kg-sec-info-value">
                    <a href={`mailto:${HOSPITAL_DATA.email}`} className="kg-email-link">
                      {HOSPITAL_DATA.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Row: Operational Timeline Metrics */}
              <div className="kg-sec-info-row">
                <div className="kg-sec-icon-box text-teal">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="kg-sec-info-label">Working Hours</div>
                  <div className="kg-sec-info-value highlight-hours">{HOSPITAL_DATA.hours}</div>
                </div>
              </div>
            </div>

            {/* Emergency Alerts Critical Dashboard Row */}
            <div>
              <div className="kg-sec-emergency-box">
                <div className="kg-sec-pulse-wrapper">
                  <div className="kg-pulse-wave" />
                  <div className="kg-pulse-core" />
                </div>
                <div>
                  <div className="kg-sec-emergency-text">24/7 Trauma Emergency Unit</div>
                  <div className="kg-sec-emergency-sub">
                    Ambulance Deployment · Critical Care Ready
                  </div>
                </div>
              </div>

              <button className="kg-sec-cta-btn" onClick={openMap}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Initiate Navigation Map
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── FULL-SCREEN PORTAL MAP MODAL ────────────────────────────────────── */}
      {mapOpen && (
        <div className="kg-modal-backdrop" onClick={closeMap}>
          <div className="kg-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="kg-modal-header">
              <div className="kg-modal-live-dot" />
              KG Nanda Hospital Campus · Live Satelite Frame
            </div>

            <iframe
              src={MAP_EMBED}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Full Scaled Navigation Core Map"
            />

            <button className="kg-modal-close-trigger" onClick={closeMap}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}