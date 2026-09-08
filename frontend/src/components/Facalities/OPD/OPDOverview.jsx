import React from 'react';
import './OPDOverview.css'; // Importing the separate CSS file

const OPDOverview = () => {
    // Mock data for premium OPD highlights
    const highlights = [
        {
            id: 1,
            title: "Specialized Clinics",
            desc: "Access to world-class consultants across cardiology, neurology, pediatrics, and more.",
            icon: "⚡",
            bgAccent: "from-[#21cdfb]/10 to-[#a2eaf7]/20",
            borderHover: "hover:border-[#21cdfb]"
        },
        {
            id: 2,
            title: "Digital Token System",
            desc: "Zero waiting anxiety. Track your live queue status directly through your smartphone.",
            icon: "📱",
            bgAccent: "from-[#a5d23b]/10 to-[#dff1a0]/20",
            borderHover: "hover:border-[#a5d23b]"
        },
        {
            id: 3,
            title: "Diagnostics & Pharmacy",
            desc: "Integrated labs and immediate medicine dispensing right within the OPD wing.",
            icon: "🔬",
            bgAccent: "from-[#edb893]/10 to-[#fdf1ef]/20",
            borderHover: "hover:border-[#edb893]"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-[#fcf8f7] py-24 px-6 md:px-12 lg:px-24">

            {/* Decorative Premium Background Blobs with movement */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-gradient-to-tr from-[#a2eaf7] to-[#efc9e9] blur-[100px] opacity-50 animate-pulse-soft" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#dff1a0] to-[#21cdfb] blur-[120px] opacity-40 animate-pulse-soft" style={{ animationDelay: '3s' }} />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-fade-in-up">
                   
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b146c] tracking-tight leading-tight">
                        Outpatient Department <br />
                        <span className="bg-gradient-to-r from-[#21cdfb] via-[#841d5a] to-[#c50146] bg-clip-text text-transparent">
                            (OPD) Overview
                        </span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-[#3e166f]/70 font-medium leading-relaxed">
                        Experience healthcare re-imagined. Our Outpatient Department blends top-tier medical expertise with digital efficiency, ensuring your journey to recovery is seamless, comfortable, and quick.
                    </p>
                </div>

                {/* Info Grid - Content + Features */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Interactive Main Showcase */}
                    <div className="lg:col-span-5 space-y-6 opacity-0 animate-fade-in-up delay-1">
                        <div className="premium-glass p-8 rounded-3xl relative overflow-hidden group transition-all duration-500">
                            {/* Card background hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#21cdfb]/5 to-[#841d5a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-2xl font-bold text-[#3b146c] mb-4">
                                Patient-Centric Care Ecosystem
                            </h3>
                            <p className="text-[#3e166f]/80 text-sm leading-relaxed mb-6">
                                Our OPD is meticulously organized into specialized zones to avoid overcrowding. With over 45+ consultation suites, executive waiting lounges, and dedicated help-desks, we ensure you receive undivided attention.
                            </p>

                          
                        </div>

                        {/* Quick stats banner */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#21cdfb]/10 p-5 rounded-2xl text-center border border-[#21cdfb]/20">
                                <span className="block text-3xl font-black text-[#3b146c]">15+</span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-[#3e166f]/70">Expert Doctors</span>
                            </div>
                           
                        </div>
                    </div>

                    {/* Right Column: 3 Staggered Premium Highlight Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={item.id}
                                className={`interactive-card premium-glass p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start opacity-0 animate-fade-in-up delay-${index + 1} border-2 border-transparent ${item.borderHover}`}
                            >
                                {/* Animated Icon Container */}
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.bgAccent} flex items-center justify-center text-2xl shrink-0 shadow-inner transform transition-transform duration-500 group-hover:rotate-12`}>
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-[#3b146c] tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-[#3e166f]/70 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OPDOverview;