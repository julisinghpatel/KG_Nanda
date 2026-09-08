import React from "react";
import {
  CalendarDays,
  UserRoundCheck,
  UsersRound,
  Star,
  ArrowUpRight,
  MoreVertical,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  FileDown,
  Stethoscope
} from "lucide-react";
import DashboardCard from "../components/Admin/DashboardCard";
import "../styles/dashboard.css";

const recent = [
  ["APT-8091", "Rahul Verma", "Dr. Anand Prakash Tiwari", "Obstetrics, Gynecology", "05 Sep 2026", "10:30 AM", "Confirmed"],
  ["APT-8092", "Priya Singh", "Dr. Abhishek Kumar Singh", "General Medicine", "05 Sep 2026", "11:15 AM", "Pending"],
  ["APT-8093", "Amit Sharma", "Dr. Umesh Kumar Maurya", "Critical Care", "05 Sep 2026", "12:00 PM", "Cancelled"],
  ["APT-8094", "Neha Gupta", "Dr. Vishnath Pratap Singh", "Laproscopy Surgeon", "05 Sep 2026", "12:30 PM", "Confirmed"]
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Top Stats Row */}
      <section className="stats-grid">
        <DashboardCard 
          title="Total Appointments" 
          value="1,248" 
          note="+12.5% from last month" 
          icon={CalendarDays} 
          tone="blue" 
        />
        <DashboardCard 
          title="Active Doctors" 
          value="12" 
          note="+2 this month" 
          icon={UserRoundCheck} 
          tone="green" 
        />
        <DashboardCard 
          title="Total Patients" 
          value="3,890" 
          note="+18.2% from last month" 
          icon={UsersRound} 
          tone="purple" 
        />
        <DashboardCard 
          title="Patient Rating" 
          value="4.9 / 5" 
          note="Based on 450+ reviews" 
          icon={Star} 
          tone="orange" 
        />
      </section>

      {/* Main Clinical Table Card */}
      <section className="hospital-table-card">
        {/* Card Header */}
        <div className="card-header-bar">
          <div className="header-info">
            <div className="title-with-pill">
              <h2>Today's Appointment Registry</h2>
              <span className="live-counter">4 Active Requests</span>
            </div>
            <p>Real-time patient check-ins, doctor queues, and clinical appointment status</p>
          </div>

          <div className="header-actions">
            <button className="export-action-btn">
              <FileDown size={16} />
              <span>Export CSV</span>
            </button>
            <button className="viewall-action-btn">
              <span>View All</span>
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Structured Clinical Table */}
        <div className="table-wrapper">
          <table className="clinical-data-table">
            <thead>
              <tr>
                <th style={{ width: "16%" }}>TOKEN / APPOINTMENT</th>
                <th style={{ width: "24%" }}>PATIENT DETAILS</th>
                <th style={{ width: "28%" }}>ATTENDING CONSULTANT</th>
                <th style={{ width: "16%" }}>SCHEDULE TIME</th>
                <th style={{ width: "12%" }}>STATUS</th>
                <th style={{ width: "4%", textAlign: "center" }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => {
                const initial = r[1].trim().charAt(0).toUpperCase();
                return (
                  <tr key={r[0]} className="table-row">
                    {/* Token */}
                    <td>
                      <div className="token-cell">
                        <span className="token-code">{r[0]}</span>
                        <span className="token-sub">OPD General</span>
                      </div>
                    </td>

                    {/* Patient Name + Avatar (Fixed together in flex row) */}
                    <td>
                      <div className="patient-flex-box">
                        <div className="patient-avatar">{initial}</div>
                        <div className="patient-names">
                          <strong className="p-name">{r[1]}</strong>
                          <span className="p-source">Self Registered</span>
                        </div>
                      </div>
                    </td>

                    {/* Doctor + Dept */}
                    <td>
                      <div className="doctor-flex-box">
                        <strong className="doc-name">{r[2]}</strong>
                        <div className="dept-tag">
                          <Stethoscope size={12} />
                          <span>{r[3]}</span>
                        </div>
                      </div>
                    </td>

                    {/* Date & Time */}
                    <td>
                      <div className="time-flex-box">
                        <div className="date-line">
                          <Calendar size={13} />
                          <span>{r[4]}</span>
                        </div>
                        <div className="time-line">
                          <Clock size={13} />
                          <span>{r[5]}</span>
                        </div>
                      </div>
                    </td>

                    {/* Status Pill */}
                    <td>
                      <span className={`status-tag status-${r[6].toLowerCase()}`}>
                        {r[6] === "Confirmed" && <CheckCircle2 size={13} strokeWidth={2.5} />}
                        {r[6] === "Pending" && <AlertCircle size={13} strokeWidth={2.5} />}
                        {r[6] === "Cancelled" && <XCircle size={13} strokeWidth={2.5} />}
                        <span>{r[6]}</span>
                      </span>
                    </td>

                    {/* Action Icon */}
                    <td style={{ textAlign: "center" }}>
                      <button className="action-dots-btn" aria-label="Options">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}