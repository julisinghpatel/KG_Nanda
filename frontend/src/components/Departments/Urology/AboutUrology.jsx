import React from 'react';
import './AboutUrology.css'; // Apne folder path ke hisab se setup karein

const AboutUrology = () => {
  return (
    <section className="relative py-24 bg-[#f6fcfa] overflow-hidden">
      
      {/* Premium Ambient Decorative Glowing Vectors */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-[#b5f5ff] to-transparent rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#aadcff] to-transparent rounded-full opacity-30 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: VISUAL EXPERIENCE IMAGE GRID */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Decorative Frame Line */}
            <div className="absolute inset-0 border-2 border-dashed border-[#82cfe9]/30 rounded-3xl -rotate-3 scale-105 pointer-events-none" />
            
            <div className="grid grid-cols-12 gap-4">
              {/* Main Image Container */}
              <div className="col-span-12 relative rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src="/Department/UrologyAbout.jpg" 
                  alt="Modern Urology Clinic" 
                  className="w-full h-[320px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/60 via-transparent to-transparent opacity-80" />
                
                {/* Embedded Glassmorphic Hover Panel */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs text-[#b5f5ff] font-semibold tracking-wider uppercase">Infrastructure</p>
                  <p className="text-sm font-medium">State-of-the-art diagnostic & surgical facility</p>
                </div>
              </div>

              {/* Patient Privacy Stat Box */}


              {/* Technology Tag Box */}
             
            </div>

            {/* Experience Floating Badge */}
            

          </div>

          {/* RIGHT SIDE: CONTENT & VALUE PROPOSITION */}
          <div className="lg:col-span-7 space-y-8">

            {/* Typography Heading Group */}
            <div className="space-y-4 opacity-0 animate-fade-in delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f3395] leading-tight">
                Dedicated to Advancing <br />
                <span className="text-[#02acf0] relative inline-block">
                  Urological Health & Wellness
                  <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#b5f5ff] -z-10 rounded" />
                </span>
              </h2>
              <p className="text-[#60a9bd] text-base md:text-lg leading-relaxed">
                Hamara Urology Department modern medical technology aur compassionate patient care ka ek premium amalgamation hai. Hum kidney, urinary tract, aur male reproductive system se judi har chhoti-badi samasya ka definitive aur minimally invasive treatment pradaan karte hain.
              </p>
            </div>

            {/* Interactive Service/Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0 animate-fade-in delay-400">
              
              {/* Feature Box 1 */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-[#2f3395]/5 transition-all duration-300 border border-transparent hover:border-[#9ce1f1]/30 group">
                <div className="w-10 h-10 rounded-xl bg-[#b5f5ff] text-[#02acf0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#02acf0] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.05 12H6.95c-.4 0-.75-.25-.85-.65l-.9-3.5c-.15-.55.25-1.1.85-1.1h6.1c.6 0 1 .55.85 1.1l-.9 3.5c-.1.4-.45.65-.85.65z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v6m0 0H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2f3395] text-sm md:text-base">Endourology & Stones</h4>
                  <p className="text-xs text-[#60a9bd] mt-1">Advanced laser lithotripsy se bina chirfaad ke kidney stones ka safal ilaaj.</p>
                </div>
              </div>

              {/* Feature Box 2 */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-[#2f3395]/5 transition-all duration-300 border border-transparent hover:border-[#9ce1f1]/30 group">
                <div className="w-10 h-10 rounded-xl bg-[#cdffff] text-[#60a9bd] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2f3395] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2f3395] text-sm md:text-base">Uro-Oncology Care</h4>
                  <p className="text-xs text-[#60a9bd] mt-1">Prostate, bladder, aur kidney tumors ke liye precision-guided screening aur surgeries.</p>
                </div>
              </div>

              {/* Feature Box 3 */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-[#2f3395]/5 transition-all duration-300 border border-transparent hover:border-[#9ce1f1]/30 group">
                <div className="w-10 h-10 rounded-xl bg-[#aadcff]/60 text-[#2f3395] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7396d3] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2f3395] text-sm md:text-base">Reconstructive Urology</h4>
                  <p className="text-xs text-[#60a9bd] mt-1">Urinary tract structure restoration aur congenital defects ke liye advanced repairs.</p>
                </div>
              </div>

              {/* Feature Box 4 (Emergency Highlight Color Accent) */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-[#2f3395]/5 transition-all duration-300 border border-transparent hover:border-[#9ce1f1]/30 group">
                <div className="w-10 h-10 rounded-xl bg-[#f6fcfa] text-[#c90322] border border-[#c90322]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c90322] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c20321] text-sm md:text-base">24/7 Acute Uro-Trauma</h4>
                  <p className="text-xs text-[#60a9bd] mt-1">Urinary retention aur severe trauma emergencies ke liye instantaneous response team.</p>
                </div>
              </div>

            </div>

            {/* Bottom Premium Notice Bar */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#cdffff]/60 to-[#aadcff]/40 border-l-4 border-l-[#02acf0] flex items-center justify-between opacity-0 animate-fade-in delay-500">
              <span className="text-xs md:text-sm font-medium text-[#2f3395]">
                International dynamic standards aur hygienic treatment parameters se equipped.
              </span>
             
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUrology;