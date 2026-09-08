import React, { useEffect, useRef } from "react";
import "./LocationHero.css";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import gsap from "gsap";

// Actual Google Maps URL for the given address geometry
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=KG+Nanda+Hospital+Chandauli+Sanjay+Nagar";

const LocationHero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".kg-loc-badge", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })
      .from(".kg-loc-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .from(".kg-loc-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.5")
      .from(".kg-loc-info-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.2)"
      }, "-=0.4")
      .from(".kg-loc-btn", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToLocation = () => {
    // Scrolls smoothly down to your interactive map frame container section
    const target = document.getElementById("kg-map-frame-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, "_blank");
  };

  return (
    <section className="kg-loc-hero" ref={heroRef}>
      {/* Premium Visual Overlay */}
      <div className="kg-loc-hero-overlay"></div>
      
      <div className="kg-loc-hero-container">
        <div className="kg-loc-hero-content">
          
          {/* Badge */}
          <div className="kg-loc-badge">
            <MapPin size={14} className="kg-pin-icon" />
            <span>KG Nanda Hospital Campus</span>
          </div>

          {/* Main Title */}
          <h1 className="kg-loc-title">
            Find Our <span>Location</span> & Directions
          </h1>

          {/* Subtitle description */}
          <p className="kg-loc-subtitle">
            Access world-class emergency care and multi-speciality clinical diagnostics 
            without any hassle. Located centrally in Chandauli to ensure lightning-fast accessibility.
          </p>

          {/* Address Meta Card */}
          <div className="kg-loc-info-card">
            <div className="kg-card-row border-b border-white/10 pb-4 mb-4">
              <MapPin size={22} className="text-[#35b6b4] shrink-0" />
              <p>
                <strong>Address:</strong> Ward No.11, Sanjay Nagar, Infront of Chaurashia Petrol Pump, 
                Bichhiya Kala, Chandauli, Jasori, Uttar Pradesh 232104
              </p>
            </div>
            <div className="kg-card-row">
              <Phone size={18} className="text-[#dd5200] shrink-0" />
              <p>
                <strong>Emergency Helpline:</strong> <a href="tel:+919628300438" className="hover:underline text-white font-bold">096283 00438</a>
              </p>
            </div>
          </div>

          {/* Action Interactive Elements */}
          <div className="kg-loc-hero-buttons">
            <button
              className="kg-loc-btn kg-btn-primary"
              onClick={handleScrollToLocation}
            >
              <Navigation size={16} />
              <span>Get Directions</span>
            </button>

            <button
              className="kg-loc-btn kg-btn-outline"
              onClick={handleOpenGoogleMaps}
            >
              <span>View on Google Maps</span>
              <ExternalLink size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationHero;