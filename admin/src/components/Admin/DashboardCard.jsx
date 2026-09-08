import React from "react";
import "./DashboardCard.css";

export default function DashboardCard({ title, value, note, icon: Icon, tone = "blue" }) {
  return (
    <div className={`hospital-stat-box tone-${tone}`}>
      <div className="stat-box-inner">
        <div className="stat-data">
          <span className="stat-title">{title}</span>
          <div className="stat-number">{value}</div>
          <div className="stat-trend">
            <span className="trend-indicator">↗</span>
            <span className="trend-text">{note}</span>
          </div>
        </div>
        <div className="stat-icon-badge">
          <Icon size={24} strokeWidth={2.2} />
        </div>
      </div>
      <div className="stat-bottom-bar"></div>
    </div>
  );
}