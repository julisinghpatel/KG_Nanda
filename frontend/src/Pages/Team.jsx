import React, { useState, useEffect } from "react";
import { Sparkles, Search, ArrowRight, User, Loader2, AlertCircle } from "lucide-react";
import HospitalCTA from "../components/Home/HospitalCTA";
import doctorService from "../services/doctorService";

const Team = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function loadDoctors() {
      setLoading(true);
      setError("");
      try {
        const fetchedDoctors = await doctorService.getDoctors();
        if (isMounted) {
          setDoctors(fetchedDoctors);
        }
      } catch (err) {
        console.error("Failed to load doctor dataset:", err);
        if (isMounted) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Failed to connect to backend API /api/doctors"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadDoctors();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute available departments dynamically from doctor list
  const departments = [
    "All",
    ...Array.from(new Set(doctors.map((doc) => doc.department).filter(Boolean))),
  ];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesDept = selectedDept === "All" || doc.department === selectedDept;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      (doc.name || "").toLowerCase().includes(q) ||
      (doc.specialty || "").toLowerCase().includes(q) ||
      (doc.role || "").toLowerCase().includes(q) ||
      (doc.department || "").toLowerCase().includes(q);
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-[#f6f5ee] min-h-screen">
      {/* Premium Team Hero Banner */}
      <section className="relative overflow-hidden bg-[#003a70] text-white py-36 md:py-44 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003a70]/90 via-[#003a70]/60 to-transparent z-10" />
          <img
            src="/Media/M1.png"
            alt="Medical Team Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center sm:text-left space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#35b6b4]/10 border border-[#35b6b4]/30 text-[#35b6b4] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
            <Sparkles size={13} className="text-[#dd5200]" />
            <span>KG Nanda Medical Panel</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Meet Our <span className="text-[#35b6b4]">Elite Doctors</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
            Our multi-speciality team of medical experts, senior consultants, and compassionate surgeons is dedicated to providing clinical excellence and premium patient care.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search doctor by name, department or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#f6f5ee]/60 border border-gray-200 rounded-xl focus:outline-none focus:border-[#35b6b4] text-[#003a70] font-medium transition-all"
            />
          </div>

          {/* Metrics */}
          <div className="flex items-center gap-6">
            <div className="text-center md:text-right border-l-2 border-[#35b6b4] pl-4">
              <span className="block text-2xl font-black text-[#003a70]">
                {doctors.length ? `${doctors.length}` : "0"}
              </span>
              <span className="text-xs text-gray-400 font-bold uppercase">Specialists</span>
            </div>
            <div className="text-center md:text-right border-l-2 border-[#dd5200] pl-4">
              <span className="block text-2xl font-black text-[#003a70]">99.8%</span>
              <span className="text-xs text-gray-400 font-bold uppercase">Success Rate</span>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 font-medium">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>API Error: {error}</span>
          </div>
        )}

        {/* Department Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                selectedDept === dept
                  ? "bg-[#003a70] text-white shadow-md shadow-blue-900/10"
                  : "bg-white text-[#003a70] hover:bg-[#35b6b4]/10 border border-gray-200/60"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200/60 shadow-sm">
            <Loader2 className="w-10 h-10 mx-auto text-[#35b6b4] animate-spin mb-4" />
            <p className="text-[#003a70] font-bold text-lg">Fetching live doctor dataset from backend...</p>
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/60">
            <User className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            <p className="text-[#003a70] font-bold text-lg">No doctors returned from backend matching criteria.</p>
            <p className="text-gray-400 text-sm mt-1">Try modifying your search or check if backend database has active doctor entries.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-[#35b6b4]/40 transition-all duration-300 flex flex-col group"
              >
                {/* Doctor Visual */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#35b6b4] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {doc.department}
                    </span>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-black text-[#003a70] group-hover:text-[#dd5200] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-[#dd5200] font-bold uppercase tracking-wider mt-0.5">
                        {doc.role}
                      </p>
                    </div>

                    <div className="h-px bg-gray-100" />

                    <div className="space-y-2 text-sm text-gray-500 font-medium">
                      <p>
                        <strong className="text-[#003a70]">Degree:</strong> {doc.qualification}
                      </p>
                      <p>
                        <strong className="text-[#003a70]">Experience:</strong> {doc.experience}
                      </p>
                      <p className="line-clamp-2">
                        <strong className="text-[#003a70]">Areas of Focus:</strong> {doc.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <a
                      href="/book-appointment"
                      className="w-full flex items-center justify-center gap-2 bg-[#003a70] hover:bg-[#dd5200] text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 text-sm tracking-wide"
                    >
                      <span>Book Appointment</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Premium CTA Panel */}
      <HospitalCTA />
    </div>
  );
};

export default Team;
