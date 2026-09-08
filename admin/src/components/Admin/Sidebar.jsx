import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  Stethoscope,
  UsersRound,
  Siren,
  Star,
  Newspaper,
  BookOpen,
  Images,
  MessageSquareText,
  Settings,
  LogOut,
  Activity,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { logoutAdmin } from "../../utils/auth";
import "./Sidebar.css";

const groups = [
  {
    title: "Management",
    items: [
      ["/admin/dashboard", "Dashboard", LayoutDashboard],
      ["/admin/appointments", "Appointments", CalendarCheck, "12"],
      ["/admin/doctors", "Doctors", Stethoscope],
     
    ]
  },
  {
    title: "Operations",
    items: [
      ["/admin/emergency", "Emergency", Siren, "3", "emergency"],
      ["/admin/reviews", "Patient Reviews", Star, "New", "highlight"],
      
    ]
  },
  {
    title: "Website Content",
    items: [
      ["/admin/news", "News & Blogs", Newspaper],
      ["/admin/gallery", "Gallery", Images]
    ]
  }
  
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="admin-sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="brand-mark-wrap">
          <div className="brand-mark">
            <img src="/Logo.png" alt="KG Nanda Hospital Logo" className="sidebar-logo-img" />
          </div>
          <span className="brand-pulse-dot"></span>
        </div>
        <div className="brand-text">
          <div className="brand-name">
            KG Nanda <span>Hospital</span>
          </div>
          
        </div>
      </div>

      {/* Navigation Links Scrollable Area */}
      <div className="sidebar-scroll">
        {groups.map((g) => (
          <section className="nav-group" key={g.title}>
            <div className="nav-group-title">{g.title}</div>
            <div className="nav-items">
              {g.items.map(([to, label, Icon, badge, badgeType]) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    "sidebar-link " + (isActive ? "active" : "")
                  }
                >
                  <span className="active-glow-pill"></span>
                  <span className="link-icon">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <span className="link-label">{label}</span>

                  {badge && (
                    <span
                      className={`nav-badge ${
                        badgeType ? `badge-${badgeType}` : ""
                      }`}
                    >
                      {badge === "New" && <Sparkles size={10} />}
                      {badge}
                    </span>
                  )}

                  <ChevronRight className="link-arrow" size={15} strokeWidth={2.2} />
                </NavLink>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer / Profile & Logout */}
      <div className="sidebar-footer">
       

        <button
          className="logout-btn"
          onClick={() => {
            logoutAdmin();
            navigate("/admin/login", { replace: true });
          }}
        >
          <LogOut size={17} strokeWidth={2} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}