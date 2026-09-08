import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import './Footer.css';

const MAP_EMBED_URL = "https://www.google.com/maps?q=KG+Nanda+Hospital+Chandauli&output=embed";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=KG+Nanda+Hospital+Chandauli";

export default function Footer() {
  return (
    <footer className="premium-corporate-footer bg-[#003a70]">
      {/* Top Banner Accent Strip */}
      <div className="footer-accent-strip bg-gradient-to-r from-[#dd5200] via-[#35b6b4] to-[#003a70]"></div>

      <div className="footer-max-wrapper">
        <div className="footer-main-grid">

          {/* COLUMN 1: Brand Matrix & Accreditations */}
          <div className="footer-column brand-info-column">
            <Link to="/" className="footer-main-logo text-white">
              KG Nanda <span>Hospital</span>
            </Link>
            <p className="footer-tagline-text text-gray-300">
              Your Health, Our Supreme Commitment.
            </p>
            <p className="footer-corporate-profile text-gray-400">
              Providing state-of-the-art multi-speciality clinical excellence, advanced trauma support, and compassionate patient care 24/7.
            </p>

            {/* Trust Badges */}
            <ul className="footer-trust-highlights">
              <li className="text-gray-300">
                <ShieldCheck size={14} className="text-[#35b6b4]" />
                <span>24×7 Advanced Emergency Support</span>
              </li>
              <li className="text-gray-300">
                <ShieldCheck size={14} className="text-[#dd5200]" />
                <span>Highly Experienced Clinicians</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: Quick Navigation Links */}
          <div className="footer-column navigation-column">
            <h4 className="column-title text-white">Quick Links</h4>
            <ul className="navigation-links-list">
              <li><Link to="/">Home Base</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/book-now">Book Appointment</Link></li>
              <li><Link to="/facilities/emergency">Emergency Unit</Link></li>
              <li><Link to="/team">Our Medical Panel</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/Empanelled">Empanelled TPA</Link></li>
              <li><Link to="/news">Latest News</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Core Medical Services */}
          <div className="footer-column navigation-column">
            <h4 className="column-title text-white">Our Services</h4>
            <ul className="navigation-links-list">
              <li><Link to="/facilities/emergency">Emergency Trauma Care</Link></li>
              <li><Link to="/facilities/OPD">Out-Patient Dept (OPD)</Link></li>
              <li><Link to="/facilities/Surgery">Advanced Modular OT</Link></li>
              <li><Link to="/facilities/ICU">Intensive Care Unit (ICU)</Link></li>
              <li><Link to="/facilities/diagnostics">Pathology & Diagnostics</Link></li>
              <li><Link to="/facilities/pharmacy">24/7 In-House Pharmacy</Link></li>
              <li><Link to="/departments">Clinical Departments</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Core & Live Map */}
          <div className="footer-column contact-map-column">
            <h4 className="column-title text-white">Contact Desk</h4>
            <ul className="footer-live-contact-info">
              <li className="align-start">
                <MapPin size={18} className="text-[#dd5200] shrink-0 mt-0.5" />
                <div>
                  <span className="info-label text-gray-400">Address</span>
                  <p className="info-value text-gray-200">
                    Ward No.11, Sanjay Nagar,<br />
                    Infront of Chaurasia Petrol Pump,<br />
                    Bichhiya Kala, Chandauli, Jasori,<br />
                    Uttar Pradesh – 232104
                  </p>
                </div>
              </li>
              <li>
                <Phone size={16} className="text-[#35b6b4]" />
                <div>
                  <span className="info-label text-gray-400">Phone Hotline</span>
                  <a href="tel:09628300438" className="info-value hover-link text-white font-bold" aria-label="Call 096283 00438">
                    096283 00438
                  </a>
                </div>
              </li>
              <li>
                <Clock size={16} className="text-[#35b6b4]" />
                <div>
                  <span className="info-label text-gray-400">Working Hours</span>
                  <p className="info-value text-[#35b6b4] font-black uppercase tracking-wider">
                    Open 24 Hours (All Days)
                  </p>
                </div>
              </li>
            </ul>
            <div className="footer-interactive-map-frame border border-white/10">
              <iframe
                src={MAP_EMBED_URL}
                title="KG Nanda Hospital Location map"
                className="footer-iframe-engine"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="footer-map-action-btn bg-[#35b6b4] text-white hover:bg-[#dd5200] w-full sm:w-auto" aria-label="Get directions to KG Nanda Hospital">
                <span>Get Directions</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM MATRIX FOOTNOTE */}
        <div className="footer-bottom-deck border-t border-white/10 text-gray-400">
          <p>© {new Date().getFullYear()} KG Nanda Hospital. All Rights Reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}