import React, { useState } from "react";
import { 
  Bell, 
  Search, 
  ChevronDown, 
  Command, 
  Activity, 
  ShieldCheck,
  Sparkles,
  User,
  Settings,
  LogOut
} from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="admin-navbar">
      {/* Top Accent Light Beam */}
      <div className="navbar-top-accent"></div>

      {/* Left Title & Status Area */}
      <div className="navbar-heading">
        <div className="heading-row">
          
          <h1>Hospital Admin Panel</h1>
         
        </div>
        <p>Real-time patient monitoring, staff management & hospital operations</p>
      </div>

      {/* Right Action Items */}
      <div className="navbar-actions">
        {/* Modern Search Bar */}
        <div className="global-search">
          <Search size={17} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search patients, doctors, records..." 
          />
          <div className="keyboard-shortcut">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>

        {/* Live Notification Button */}
        <button 
          className="notification-btn" 
          aria-label="View notifications"
        >
          <Bell size={18} />
          <span className="notification-badge">3</span>
        </button>

        {/* Vertical Divider */}
        <div className="navbar-divider"></div>

        {/* User Account Capsule */}
        <div className="navbar-user-container">
          <div 
            className={`navbar-user ${isDropdownOpen ? "active" : ""}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="user-avatar-wrap">
              <div className="user-avatar">SA</div>
              <span className="online-radar"></span>
            </div>

            <div className="user-info">
              <div className="user-name-row">
                <strong className="user-name">Dr. Sharma</strong>
                <span className="verified-check"><ShieldCheck size={12} /></span>
              </div>
              <span className="user-role">Super Admin</span>
            </div>

            <div className="dropdown-arrow">
              <ChevronDown size={15} strokeWidth={2.5} />
            </div>
          </div>

          {/* Quick Dropdown Menu */}
          {isDropdownOpen && (
            <div className="user-dropdown-menu">
              <div className="dropdown-header">
                <strong>Dr. Sharma</strong>
                <span>admin@kgnandahospital.com</span>
              </div>
              <div className="dropdown-items">
                <a href="#profile"><User size={15} /> My Profile</a>
                <a href="#settings"><Settings size={15} /> System Config</a>
                <div className="dropdown-sep"></div>
                <a href="#logout" className="logout-opt"><LogOut size={15} /> Sign Out</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}