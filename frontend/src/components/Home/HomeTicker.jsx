import React from "react";
import "./HomeTicker.css";

export default function HomeTicker() {
  return (
    <div className="home-ticker-container">
      <div className="home-ticker-wrapper">
        {/* Left Static Badge */}
        <div className="home-ticker-badge">
          <span className="ticker-badge-dot"></span>
          <span>UPDATES</span>
        </div>

        {/* Scrolling Content Panel */}
        <div className="home-ticker-content">
          <div className="home-ticker-track">
            <div className="home-ticker-items">
              <span>Timings for Gynaecologist & Infertility have been updated to 8 AM - 8 PM.</span>
              
              
              <span className="ticker-divider">•</span>
              <span>Emergency Trauma Center is now fully operational 24/7.</span>
            </div>
            {/* Duplicate for infinite loop */}
            <div className="home-ticker-items" aria-hidden="true">
              <span>Timings for Cardiology have been updated to 9 AM - 5 PM.</span>
              
             
              <span className="ticker-divider">•</span>
              <span>Emergency Trauma Center is now fully operational 24/7.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
