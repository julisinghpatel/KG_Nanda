import React, { useState } from "react";
import { 
  Eye, 
  CheckCircle2, 
  Clock3, 
  XCircle, 
  UserCheck, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  Stethoscope, 
  Printer, 
  X, 
  FileText, 
  ShieldCheck,
  Check,
  AlertCircle,
  MoreVertical,
  Trash2
} from "lucide-react";
import "./appointment.css";

const STATUS_CONFIG = {
  Confirmed: {
    icon: CheckCircle2,
    className: "confirmed",
    label: "Confirmed",
    bg: "#ecfdf5",
    color: "#047857",
    border: "#a7f3d0"
  },
  Pending: {
    icon: Clock3,
    className: "pending",
    label: "Pending",
    bg: "#fffbeb",
    color: "#b45309",
    border: "#fde68a"
  },
  Completed: {
    icon: UserCheck,
    className: "completed",
    label: "Completed",
    bg: "#eff6ff",
    color: "#1d4ed8",
    border: "#bfdbfe"
  },
  Cancelled: {
    icon: XCircle,
    className: "cancelled",
    label: "Cancelled",
    bg: "#fef2f2",
    color: "#dc2626",
    border: "#fecaca"
  }
};

export default function AppointmentList({ rows, onStatusChange, onDelete }) {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="appointment-table-wrap">
        <table className="appointment-table">
          <thead>
            <tr>
              <th style={{ width: "13%" }}>TOKEN / ID</th>
              <th style={{ width: "22%" }}>PATIENT INFO</th>
              <th style={{ width: "24%" }}>DOCTOR & SPECIALTY</th>
              <th style={{ width: "15%" }}>DEPARTMENT</th>
              <th style={{ width: "13%" }}>DATE & TIME</th>
              <th style={{ width: "13%" }}>LIVE STATUS</th>
              <th style={{ width: "10%", textAlign: "center" }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-appointments-cell">
                  <div className="empty-state-box">
                    <AlertCircle size={36} />
                    <h3>No Appointments Found</h3>
                    <p>No records matched your search filter criteria. Try adjusting the filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map((item) => {
                const config = STATUS_CONFIG[item.status] || STATUS_CONFIG.Pending;
                const StatusIcon = config.icon;
                const initials = item.patient
                  ? item.patient
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()
                  : "PT";

                return (
                  <tr key={item.id} className="appointment-row">
                    {/* Token ID */}
                    <td>
                      <div className="token-wrapper">
                        <span className="appointment-id-badge">{item.id}</span>
                        <span className="opd-badge">OPD #{item.room || "102"}</span>
                      </div>
                    </td>

                    {/* Patient Details */}
                    <td>
                      <div className="patient-cell-flex">
                        <div className="patient-avatar-badge">{initials}</div>
                        <div className="patient-info-stack">
                          <strong className="patient-name">{item.patient}</strong>
                          <span className="patient-phone">
                            <Phone size={11} /> {item.mobile}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Doctor Details */}
                    <td>
                      <div className="doctor-cell-stack">
                        <strong className="doctor-name">{item.doctor}</strong>
                        <span className="doctor-spec">
                          <Stethoscope size={11} /> {item.department}
                        </span>
                      </div>
                    </td>

                    {/* Department */}
                    <td>
                      <span className="dept-tag-pill">{item.department}</span>
                    </td>

                    {/* Schedule Date & Time */}
                    <td>
                      <div className="schedule-cell-stack">
                        <span className="sched-date">
                          <Calendar size={12} /> {item.date}
                        </span>
                        <span className="sched-time">
                          <Clock size={12} /> {item.time}
                        </span>
                      </div>
                    </td>

                    {/* Interactive Real-Time Status Dropdown */}
                    <td>
                      <div className="status-selector-wrapper">
                        <select
                          className={`status-select-badge status-${config.className}`}
                          value={item.status}
                          onChange={(e) => onStatusChange(item.id, e.target.value)}
                          aria-label="Change Status"
                        >
                          <option value="Confirmed">✓ Confirmed</option>
                          <option value="Pending">⏳ Pending</option>
                          <option value="Completed">★ Completed</option>
                          <option value="Cancelled">✕ Cancelled</option>
                        </select>
                      </div>
                    </td>

                    {/* Row Actions */}
                    <td>
                      <div className="row-action-buttons">
                        <button
                          className="action-icon-btn view-btn"
                          title="View Consultation Slip"
                          onClick={() => setSelectedAppointment(item)}
                        >
                          <Eye size={15} />
                        </button>

                        <button
                          className="action-icon-btn delete-btn"
                          title="Cancel / Delete Record"
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete appointment ${item.id}?`)) {
                              onDelete(item.id);
                            }
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ================= Medical Appointment Details Modal ================= */}
      {selectedAppointment && (
        <div className="appointment-modal-overlay" onClick={() => setSelectedAppointment(null)}>
          <div className="appointment-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Top Bar */}
            <div className="modal-header-bar">
              <div className="modal-header-title">
                <div className="modal-token-pill">
                  <FileText size={16} />
                  <span>{selectedAppointment.id}</span>
                </div>
                <div>
                  <h3>Hospital Consultation Slip</h3>
                  <p>K.G. Nanda Central Command • Official Appointment Record</p>
                </div>
              </div>

              <div className="modal-header-actions">
                <button className="print-slip-btn" onClick={handlePrint}>
                  <Printer size={15} />
                  <span>Print Slip</span>
                </button>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setSelectedAppointment(null)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body Info Sections */}
            <div className="modal-body-scroll">
              {/* Status Banner */}
              <div className={`modal-status-banner banner-${selectedAppointment.status.toLowerCase()}`}>
                <div className="status-banner-left">
                  <ShieldCheck size={18} />
                  <span>Current Booking Status: <strong>{selectedAppointment.status}</strong></span>
                </div>
                <div className="status-quick-actions">
                  {selectedAppointment.status !== "Confirmed" && (
                    <button 
                      className="btn-quick-confirm"
                      onClick={() => {
                        onStatusChange(selectedAppointment.id, "Confirmed");
                        setSelectedAppointment({ ...selectedAppointment, status: "Confirmed" });
                      }}
                    >
                      <Check size={13} /> Confirm Slot
                    </button>
                  )}
                  {selectedAppointment.status !== "Completed" && (
                    <button 
                      className="btn-quick-complete"
                      onClick={() => {
                        onStatusChange(selectedAppointment.id, "Completed");
                        setSelectedAppointment({ ...selectedAppointment, status: "Completed" });
                      }}
                    >
                      <UserCheck size={13} /> Mark Completed
                    </button>
                  )}
                  {selectedAppointment.status !== "Cancelled" && (
                    <button 
                      className="btn-quick-cancel"
                      onClick={() => {
                        onStatusChange(selectedAppointment.id, "Cancelled");
                        setSelectedAppointment({ ...selectedAppointment, status: "Cancelled" });
                      }}
                    >
                      <X size={13} /> Cancel
                    </button>
                  )}
                </div>
              </div>

              {/* 2-Column Info Grid */}
              <div className="modal-info-grid">
                {/* Patient Information Box */}
                <div className="info-section-box">
                  <h4 className="info-box-heading">Patient Demographics</h4>
                  <div className="info-data-list">
                    <div className="info-data-row">
                      <span className="lbl">Patient Name</span>
                      <strong className="val">{selectedAppointment.patient}</strong>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">Phone Number</span>
                      <span className="val">{selectedAppointment.mobile || "N/A"}</span>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">Gender & Age</span>
                      <span className="val">{selectedAppointment.gender || "Male"}, {selectedAppointment.age || "32 Yrs"}</span>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">Email ID</span>
                      <span className="val">{selectedAppointment.email || "patient@kgnandahospital.com"}</span>
                    </div>
                  </div>
                </div>

                {/* Clinical Consultation Box */}
                <div className="info-section-box">
                  <h4 className="info-box-heading">Clinical Consultation</h4>
                  <div className="info-data-list">
                    <div className="info-data-row">
                      <span className="lbl">Attending Doctor</span>
                      <strong className="val text-primary">{selectedAppointment.doctor}</strong>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">Department</span>
                      <span className="val">{selectedAppointment.department}</span>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">Appointment Date</span>
                      <span className="val">{selectedAppointment.date}</span>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">Time Slot</span>
                      <span className="val font-semibold">{selectedAppointment.time}</span>
                    </div>
                    <div className="info-data-row">
                      <span className="lbl">OPD Room</span>
                      <span className="val">Room #{selectedAppointment.room || "102"} (Main Building)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chief Complaints / Message Note */}
              <div className="info-section-box full-width">
                <h4 className="info-box-heading">Chief Complaints / Clinical Notes</h4>
                <p className="complaint-text">
                  {selectedAppointment.message ||
                    "Patient booked consultation via hospital website digital portal for routine specialist checkup and diagnosis."}
                </p>
              </div>

              {/* Hospital Instructions Footer in Modal */}
              <div className="slip-footer-notes">
                <small>• Please arrive 15 minutes prior to the scheduled time slot at the OPD Reception.</small>
                <small>• Bring previous medical reports, prescriptions, and government ID card for verification.</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}