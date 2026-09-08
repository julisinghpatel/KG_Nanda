import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Sparkles,
    ArrowRight,
    Activity,
    HeartPulse,
    Brain,
    Droplet,
    Baby,
    Wind,
    Smile,
    Scissors
} from 'lucide-react';
import './OPDFacilities.css'; // Importing separate custom premium CSS

gsap.registerPlugin(ScrollTrigger);

const opdFacilitiesData = [
    {
        id: 1,
        title: 'Endocrinology',
        desc: 'Providing advanced diagnosis and treatment for hormone-related disorders and endocrine system conditions.',
        icon: Activity,
        bgImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        title: 'Gastroenterology',
        desc: 'Specialized care for digestive system disorders, including the stomach, liver, and intestines.',
        icon: HeartPulse,
        bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        title: 'Urology',
        desc: 'Comprehensive urological care for kidney, bladder, and male reproductive system issues.',
        icon: Brain,
        bgImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        title: 'Nephrology',
        desc: 'Expert treatment for kidney-related diseases, dialysis management, and kidney transplants.',
        icon: Droplet,
        bgImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        title: 'Pediatric',
        desc: 'Pediatrics is the branch of medicine dedicated to the comprehensive health and medical care.',
        icon: Baby,
        bgImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 6,
        title: 'Pulmonology',
        desc: 'Comprehensive Pulmonology treatment for TB, asthma, and other respiratory conditions.',
        icon: Wind,
        bgImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 7,
        title: 'Dermatology',
        desc: 'Advanced skin care solutions, treating various skin, hair, and nail conditions.',
        icon: Smile,
        bgImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 8,
        title: 'Onco Surgery',
        desc: 'Cutting-edge cancer diagnosis, treatment, and care with a patient-centered approach.',
        icon: Scissors,
        bgImage: 'https://images.unsplash.com/photo-1579684288227-4332881b2f1e?auto=format&fit=crop&w=600&q=80'
    },
];

export default function OPDFacilities() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header smooth entrance
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                    },
                }
            );

            // Staggered luxury load animation for cards
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#FFFBFB] text-slate-800 py-24 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden premium-animate-in"
        >
            {/* Ambient Background Fluid Orbs for Premium Glow Layout */}
            <div className="fluid-orb w-96 h-96 bg-red-100 top-[-10%] left-[-5%] opacity-40"></div>
            <div className="fluid-orb w-[500px] h-[500px] bg-amber-50 bottom-[-10%] right-[-5%] opacity-60"></div>

            {/* Top Pre-heading Area aligned perfectly with image_53cebc.png */}
            <div className="max-w-7xl mx-auto mb-4 relative z-10">
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.15em] text-[#E27D60] uppercase">
                    <span>Super Speciality</span>
                    <Sparkles size={12} className="fill-current text-[#E27D60]" />
                </div>
                {/* Custom Elegant Dashed Line */}
                <div className="w-full border-t border-dashed border-slate-300 mt-4 mb-10" />
            </div>

            {/* Main Header Split Layout with Refined Premium Text Styling */}
            <div ref={headerRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start relative z-10">
                <h2 className="lg:col-span-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2E40] tracking-tight leading-[1.15]">
                    Expert Care for Patients in Critical Condition
                </h2>
                <p className="lg:col-span-7 text-slate-500 text-sm md:text-[15px] leading-relaxed lg:pl-16 font-light">
                    We understand that every patient is unique, and we're committed to listening, understanding, and walking with you every step of the way. It's our privilege to be part of your health journey, and we strive to be your first and most trusted choice for medical care.
                </p>
            </div>

            {/* Facilities 4-Column Ultra Luxury Responsive Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 relative z-10">
                {opdFacilitiesData.map((facility, index) => {
                    const IconComponent = facility.icon;

                    return (
                        <div
                            key={facility.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="group relative bg-white rounded-xl ultra-luxury-card p-7 flex flex-col justify-between overflow-hidden min-h-[300px]"
                        >
                            {/* Dynamic Image Overlay - Activates Layering On Hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 scale-[1.06] group-hover:scale-100 transition-all duration-700 ease-out z-0"
                                style={{
                                    backgroundImage: `linear-gradient(to top, rgba(20, 32, 48, 0.98) 20%, rgba(20, 32, 48, 0.6) 100%), url(${facility.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />

                            {/* Card Content Wrapper */}
                            <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
                                <div>
                                    {/* Icon Bubble with smooth shape and shadow transitions */}
                                    <div className="w-12 h-12 rounded-full bg-[#111827] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#1A2E40] mb-8 transition-all duration-500 ease-out shadow-md">
                                        <IconComponent size={20} strokeWidth={1.8} />
                                    </div>

                                    {/* Custom Luxury Font Header Styling */}
                                    <h3 className="text-[20px] font-semibold text-[#8A2525] tracking-wide group-hover:text-white transition-colors duration-300">
                                        {facility.title}
                                    </h3>

                                    {/* Refined Description Styling */}
                                    <p className="mt-4 text-slate-500 group-hover:text-slate-200 font-light text-[13px] leading-relaxed transition-colors duration-300">
                                        {facility.desc}
                                    </p>
                                </div>

                                {/* Interactive Action Link Arrow with Animated Premium Shift */}
                                <div className="mt-8 pt-2">
                                    <button className="text-[13px] font-semibold text-[#1A2E40] group-hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group/btn">
                                        <span>Read More</span>
                                        <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 font-normal text-xs ml-0.5">&gt;&gt;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Luxury Action Button */}
            <div className="flex justify-center relative z-10">
                <button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#112244] text-white text-xs font-bold rounded-lg tracking-widest shadow-lg hover:bg-[#19325c] hover:shadow-xl transition-all duration-300 transform active:scale-95 uppercase">
                    View all Services
                    <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>
        </section>   
    ); 
}                        