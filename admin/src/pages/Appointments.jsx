import React, { useMemo, useState, useEffect } from "react";
import { 
  CalendarDays, 
  Search, 
  Download, 
  UserRound, 
  CheckCircle2, 
  Clock3, 
  XCircle, 
  UserCheck, 
  Stethoscope, 
  RotateCcw,
  Plus
} from "lucide-react";
import AppointmentList from "../components/Appointment/AppointmentList";
import { DOCTOR_DEPARTMENT_MAP } from "../constants/appointmentRules";
import "../styles/appointments.css";

const INITIAL_APPOINTMENTS = [
  {
    id: "APT-8091",
    patient: "Rahul Verma",
    age: "34 Yrs",
    gender: "Male",
    mobile: "9876543210",
    email: "rahul.verma@gmail.com",
    doctor: "Dr. Anand Prakash Tiwari",
    department: "Obstetrics, Gynecology",
    date: "08 Sep 2026",
    time: "10:30 AM",
    status: "Confirmed",
    room: "201",
    message: "Routine specialist checkup and consultation for ongoing maternal care."
  },
  {
    id: "APT-8092",
    patient: "Priya Singh",
    age: "28 Yrs",
    gender: "Female",
    mobile: "9812345670",
    email: "priya.singh@outlook.com",
    doctor: "Dr. Abhishek Kumar Singh",
    department: "General Medicine",
    date: "08 Sep 2026",
    time: "11:15 AM",
    status: "Pending",
    room: "104",
    message: "Persistent fever and headache over the last 3 days. Needs blood work review."
  },
  {
    id: "APT-8093",
    patient: "Amit Sharma",
    age: "45 Yrs",
    gender: "Male",
    mobile: "9898989898",
    email: "amit.sharma@yahoo.com",
    doctor: "Dr. Umesh Kumar Maurya",
    department: "Critical Care",
    date: "08 Sep 2026",
    time: "12:00 PM",
    status: "Cancelled",
    room: "ICU-B",
    message: "Post-discharge review scheduled but cancelled by patient due to outstation travel."
  },
  {
    id: "APT-8094",
    patient: "Neha Gupta",
    age: "31 Yrs",
    gender: "Female",
    mobile: "9001122334",
    email: "neha.gupta@gmail.com",
    doctor: "Dr. Vishnath Pratap Singh",
    department: "Laproscopy Surgeon",
    date: "08 Sep 2026",
    time: "12:30 PM",
    status: "Confirmed",
    room: "305",
    message: "Follow-up consultation for laparoscopic gallbladder recovery."
  },
  {
    id: "APT-8095",
    patient: "Pooja Yadav",
    age: "26 Yrs",
    gender: "Female",
    mobile: "9112233445",
    email: "pooja.yadav@gmail.com",
    doctor: "Dr. Sadhana",
    department: "Obstetrics, Gynecology",
    date: "08 Sep 2026",
    time: "01:00 PM",
    status: "Pending",
    room: "203",
    message: "Ultrasound scan review and antenatal nutritional advice."
  },
  {
    id: "APT-8096",
    patient: "Rakesh Kumar",
    age: "52 Yrs",
    gender: "Male",
    mobile: "9223344556",
    email: "rakesh.kumar@rediffmail.com",
    doctor: "Dr. Yogendra Pandey",
    department: "General Surgeon",
    date: "08 Sep 2026",
    time: "01:30 PM",
    status: "Completed",
    room: "108",
    message: "Surgical stitch removal and dressing inspection completed successfully."
  },
  {
    id: "APT-8097",
    patient: "Anjali Singh",
    age: "24 Yrs",
    gender: "Female",
    mobile: "9334455667",
    email: "anjali.singh@gmail.com",
    doctor: "Dr. Vikaram Singh",
    department: "Urology",
    date: "08 Sep 2026",
    time: "02:00 PM",
    status: "Pending",
    room: "112",
    message: "Kidney stone diagnosis and urine test report consultation."
  },
  {
    id: "APT-8098",
    patient: "Suresh Patel",
    age: "60 Yrs",
    gender: "Male",
    mobile: "9445566778",
    email: "suresh.patel@gmail.com",
    doctor: "Dr. Vaibhav Sankar",
    department: "Anesthesia",
    date: "08 Sep 2026",
    time: "02:30 PM",
    status: "Confirmed",
    room: "202",
    message: "Pre-anesthesia evaluation for upcoming minor orthopedic procedure."
  }
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("kg_nanda_appointments");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_APPOINTMENTS;
      }
    }
    return INITIAL_APPOINTMENTS;
  });

  const [q, setQ] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("All Doctors");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedDate, setSelectedDate] = useState("All Dates");

  // Save to LocalStorage on state change
  useEffect(() => {
    localStorage.setItem("kg_nanda_appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Real-time Status Changer
  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  // Delete Appointment
  const handleDeleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  // Dynamic Statistics
  const stats = useMemo(() => {
    const total = appointments.length;
    const confirmed = appointments.filter((a) => a.status === "Confirmed").length;
    const pending = appointments.filter((a) => a.status === "Pending").length;
    const completed = appointments.filter((a) => a.status === "Completed").length;
    const cancelled = appointments.filter((a) => a.status === "Cancelled").length;
    return { total, confirmed, pending, completed, cancelled };
  }, [appointments]);

  // Unique Departments for filter
  const departmentsList = useMemo(() => {
    const set = new Set();
    DOCTOR_DEPARTMENT_MAP.forEach((d) => {
      d.departments.forEach((dept) => set.add(dept));
    });
    return ["All Departments", ...Array.from(set)];
  }, []);

  // Filtered Appointments
  const filteredRows = useMemo(() => {
    return appointments.filter((x) => {
      const matchQuery =
        !q ||
        `${x.id} ${x.patient} ${x.doctor} ${x.mobile} ${x.department}`
          .toLowerCase()
          .includes(q.toLowerCase());

      const matchDoctor =
        selectedDoctor === "All Doctors" || x.doctor === selectedDoctor;

      const matchStatus =
        selectedStatus === "All" || x.status === selectedStatus;

      const matchDept =
        selectedDept === "All Departments" || x.department.includes(selectedDept);

      const matchDate =
        selectedDate === "All Dates" || x.date === selectedDate;

      return matchQuery && matchDoctor && matchStatus && matchDept && matchDate;
    });
  }, [appointments, q, selectedDoctor, selectedStatus, selectedDept, selectedDate]);

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ["ID,Patient Name,Mobile,Doctor,Department,Date,Time,Status,Room"];
    const rowsCSV = filteredRows.map(
      (r) =>
        `"${r.id}","${r.patient}","${r.mobile}","${r.doctor}","${r.department}","${r.date}","${r.time}","${r.status}","${r.room || "102"}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rowsCSV].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `kgnanda_appointments_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetFilters = () => {
    setQ("");
    setSelectedDoctor("All Doctors");
    setSelectedStatus("All");
    setSelectedDept("All Departments");
    setSelectedDate("All Dates");
  };

  const hasActiveFilters =
    q ||
    selectedDoctor !== "All Doctors" ||
    selectedStatus !== "All" ||
    selectedDept !== "All Departments" ||
    selectedDate !== "All Dates";

  return (
    <div className="appointments-page">
      {/* Page Title & Export Bar */}
      <div className="page-title-row">
        <div>
          <span>CLINICAL OPERATIONS</span>
          <h1>Appointment Management</h1>
          <p>Real-time patient bookings, live queue management & doctor schedule verification</p>
        </div>
        <div className="title-action-buttons">
          <button className="export-btn" onClick={handleExportCSV}>
            <Download size={16} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Dynamic Real-Time KPI Statistics Grid */}
      <div className="appointment-summary-grid">
        {/* Total Card */}
        <div 
          className={`summary-stat-card card-total ${selectedStatus === "All" ? "card-active" : ""}`}
          onClick={() => setSelectedStatus("All")}
        >
          <div className="stat-icon-wrap total-icon">
            <CalendarDays size={22} />
          </div>
          <div className="stat-data-wrap">
            <small>Total Bookings</small>
            <strong>{stats.total}</strong>
          </div>
          <span className="card-sub-pill">All Records</span>
        </div>

        {/* Pending Card */}
        <div 
          className={`summary-stat-card card-pending ${selectedStatus === "Pending" ? "card-active" : ""}`}
          onClick={() => setSelectedStatus("Pending")}
        >
          <div className="stat-icon-wrap pending-icon">
            <Clock3 size={22} />
          </div>
          <div className="stat-data-wrap">
            <small>Pending Approval</small>
            <strong>{stats.pending}</strong>
          </div>
          <span className="card-sub-pill pending-pulse">Requires Action</span>
        </div>

        {/* Confirmed Card */}
        <div 
          className={`summary-stat-card card-confirmed ${selectedStatus === "Confirmed" ? "card-active" : ""}`}
          onClick={() => setSelectedStatus("Confirmed")}
        >
          <div className="stat-icon-wrap confirmed-icon">
            <CheckCircle2 size={22} />
          </div>
          <div className="stat-data-wrap">
            <small>Confirmed Slots</small>
            <strong>{stats.confirmed}</strong>
          </div>
          <span className="card-sub-pill confirmed-pill">Ready for Visit</span>
        </div>

        {/* Completed Card */}
        <div 
          className={`summary-stat-card card-completed ${selectedStatus === "Completed" ? "card-active" : ""}`}
          onClick={() => setSelectedStatus("Completed")}
        >
          <div className="stat-icon-wrap completed-icon">
            <UserCheck size={22} />
          </div>
          <div className="stat-data-wrap">
            <small>Consulted / Done</small>
            <strong>{stats.completed}</strong>
          </div>
          <span className="card-sub-pill">Completed</span>
        </div>

        {/* Cancelled Card */}
        <div 
          className={`summary-stat-card card-cancelled ${selectedStatus === "Cancelled" ? "card-active" : ""}`}
          onClick={() => setSelectedStatus("Cancelled")}
        >
          <div className="stat-icon-wrap cancelled-icon">
            <XCircle size={22} />
          </div>
          <div className="stat-data-wrap">
            <small>Cancelled</small>
            <strong>{stats.cancelled}</strong>
          </div>
          <span className="card-sub-pill">Rejected</span>
        </div>
      </div>

      {/* Main Appointment Management Card */}
      <section className="appointment-management-card">
        {/* Doctor Filter Strip */}
        <div className="doctor-filter-strip">
          <div className="doctor-filter-head">
            <div className="doctor-label">
              <Stethoscope size={16} />
              <b>Filter by Doctor</b>
              <small>{DOCTOR_DEPARTMENT_MAP.length} Specialists</small>
            </div>

            {hasActiveFilters && (
              <button className="reset-filter-btn" onClick={handleResetFilters}>
                <RotateCcw size={13} />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

          <div className="doctor-pills-scroll">
            <button
              className={`doc-pill ${selectedDoctor === "All Doctors" ? "selected" : ""}`}
              onClick={() => setSelectedDoctor("All Doctors")}
            >
              All Doctors
            </button>
            {DOCTOR_DEPARTMENT_MAP.map((d) => (
              <button
                key={d.doctor}
                className={`doc-pill ${selectedDoctor === "d.doctor" || selectedDoctor === d.doctor ? "selected" : ""}`}
                onClick={() => setSelectedDoctor(d.doctor)}
              >
                {d.doctor}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter Tab Pills */}
        <div className="status-tabs-row">
          <div className="status-tab-group">
            <button 
              className={`status-tab ${selectedStatus === "All" ? "active" : ""}`}
              onClick={() => setSelectedStatus("All")}
            >
              All Appointments <span className="tab-count">{stats.total}</span>
            </button>
            <button 
              className={`status-tab tab-pending ${selectedStatus === "Pending" ? "active" : ""}`}
              onClick={() => setSelectedStatus("Pending")}
            >
              Pending Approval <span className="tab-count count-amber">{stats.pending}</span>
            </button>
            <button 
              className={`status-tab tab-confirmed ${selectedStatus === "Confirmed" ? "active" : ""}`}
              onClick={() => setSelectedStatus("Confirmed")}
            >
              Confirmed Slots <span className="tab-count count-green">{stats.confirmed}</span>
            </button>
            <button 
              className={`status-tab tab-completed ${selectedStatus === "Completed" ? "active" : ""}`}
              onClick={() => setSelectedStatus("Completed")}
            >
              Completed <span className="tab-count count-blue">{stats.completed}</span>
            </button>
            <button 
              className={`status-tab tab-cancelled ${selectedStatus === "Cancelled" ? "active" : ""}`}
              onClick={() => setSelectedStatus("Cancelled")}
            >
              Cancelled <span className="tab-count count-red">{stats.cancelled}</span>
            </button>
          </div>
        </div>

        {/* Global Toolbar Filters */}
        <div className="appointment-toolbar-row">
          {/* Search Box */}
          <div className="appointment-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by Patient Name, ID (e.g. APT-8091), Phone, or Doctor..."
            />
            {q && (
              <button className="clear-search-btn" onClick={() => setQ("")}>
                ✕
              </button>
            )}
          </div>

          {/* Department Select */}
          <select
            className="filter-select"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            {departmentsList.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>

          {/* Date Selector */}
          <select
            className="filter-select"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="All Dates">All Dates</option>
            <option value="08 Sep 2026">Today (08 Sep 2026)</option>
            <option value="09 Sep 2026">Tomorrow (09 Sep 2026)</option>
          </select>
        </div>

        {/* Appointments List Component */}
        <AppointmentList
          rows={filteredRows}
          onStatusChange={handleStatusChange}
          onDelete={handleDeleteAppointment}
        />

        {/* Footer info */}
        <div className="appointment-table-footer">
          <div className="footer-left">
            Showing <b>{filteredRows.length}</b> of <b>{appointments.length}</b> appointments
            {hasActiveFilters && <span className="filtered-hint"> (Filtered Results)</span>}
          </div>
          <div className="footer-right">
            <span>● Real-time hospital synchronization active</span>
          </div>
        </div>
      </section>
    </div>
  );
}