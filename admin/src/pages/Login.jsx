import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { 
  Activity, 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  HeartPulse
} from "lucide-react";
import { DEMO_ADMIN, isAdminLoggedIn, loginAdmin } from "../utils/auth";
import "./login.css";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  if (isAdminLoggedIn()) return <Navigate to="/admin/dashboard" replace />;

  const submit = (e) => {
    e.preventDefault();
    if (loginAdmin(email.trim(), password)) {
      nav("/admin/dashboard", { replace: true });
    } else {
      setError("Invalid admin email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-layout">
        {/* Left Side: Hospital Building Image */}
        <section className="login-brand-panel"></section>

        {/* Right Side: Clean Login Form */}
        <section className="login-card-wrap">
          <div className="login-card">
            <div className="login-card-top">
              <div className="login-icon">
                <Lock size={22} />
              </div>
              <div>
                <h2>Admin Portal</h2>
                <p>Enter your authorization credentials</p>
              </div>
            </div>

            <form onSubmit={submit}>
              <div className="form-group">
                <label>Admin ID / Email</label>
                <div className="login-input">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@hospital.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="login-input">
                  <Lock size={18} className="input-icon" />
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your security token"
                    required
                  />
                  <button 
                    type="button" 
                    className="toggle-password" 
                    onClick={() => setShow(!show)}
                    aria-label="Toggle password visibility"
                  >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && <div className="login-error">{error}</div>}

              

              {/* Submit Button */}
              <button type="submit" className="login-submit">
                <span>Login</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="login-security">
              <ShieldCheck size={15} /> 
              <span>End-to-end encrypted hospital network</span>
            </div>

            <div className="demo-credentials">
              <div className="demo-head">
                <Sparkles size={13} />
                <strong>Frontend Demo Access</strong>
              </div>
              <div className="demo-tags">
                <code>{DEMO_ADMIN.email}</code>
                <code>{DEMO_ADMIN.password}</code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}