import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Calendar, UserCheck, Clock, Stethoscope, ClipboardList } from "lucide-react";
import "./OPDHero.css";
import { useNavigate } from "react-router-dom";

const opdSpecialties = ["General Medicine", "Pediatrics & Care", "Orthopedics", "Gynecology"];

export default function OPDHero() {
    const [index, setIndex] = useState(0);
    const heroRef = useRef(null);
    const navigate = useNavigate();

    // Rotating Text Effect for OPD Specialties
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % opdSpecialties.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    // GSAP Premium Entrance Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth initial backdrop zoom
            gsap.fromTo(
                ".opd-hero-bg-wrapper",
                { scale: 1.15, filter: "blur(3px)" },
                { scale: 1, filter: "blur(0px)", duration: 1.8, ease: "power3.out" }
            );

            const tl = gsap.timeline({ delay: 0.2 });
            tl.fromTo(
                ".opd-badge",
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            )
                .fromTo(
                    ".opd-title-main",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
                    "-=0.4"
                )
                .fromTo(
                    ".opd-subtitle-text",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                    "-=0.5"
                )
                .fromTo(
                    ".opd-action-btns",
                    { y: 15, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                    "-=0.4"
                )
                .fromTo(
                    ".opd-feature-card",
                    { y: 30, opacity: 0, scale: 0.97 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" },
                    "-=0.3"
                );

            // Infinite Subtle Background Ken Burns effect
            gsap.to(".opd-hero-bg-wrapper", {
                scale: 1.05,
                duration: 18,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="opd-hero-container">
            {/* Background Wrapper */}
            <div className="opd-hero-bg-wrapper">
                <div className="opd-gradient-overlay"></div>
            </div>

            <div className="opd-content-orchestrator">
                {/* Top OPD Badge */}
                <div className="opd-badge">
                    <span className="opd-badge-pulse"></span>
                    <span className="opd-badge-text">Outpatient Department | OPD Services</span>
                </div>

                {/* Main Title with Dynamic Text Rotator */}
                <h1 className="opd-title-main">
                    Expert Consultations for{" "}
                    <div className="opd-word-container">
                        <span key={index} className="opd-word-rotator">
                            {opdSpecialties[index]}
                        </span>
                    </div>
                </h1>

                {/* Subtitle */}
                <p className="opd-subtitle-text">
                    Skip the long queues. Book your slot online to consult with senior doctors, specialized clinicians, and diagnostic experts at K.G. Nanda Hospital.
                </p>

               

                
            </div>
        </section>
    );
}