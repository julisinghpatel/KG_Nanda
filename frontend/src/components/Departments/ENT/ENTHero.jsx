import React from 'react';
import './ENTHero.css'; // Importing your separate CSS file

const ENTHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f6fcfa] px-6 py-16 md:px-12 lg:px-24">
      
      {/* Premium Background Abstract Layers (Pinterest Inspired) */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#b5f5ff] bg-blob animate-float"></div>
      <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#aadcff] bg-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#cdffff] bg-blob"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side Content - Text & CTAs */}
        <div className="space-y-8 animate-fade-up">


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2f3395] leading-[1.15]">
            Expert Care for <br />
            <span className="gradient-text-primary">Ear, Nose & Throat</span>
          </h1>

          <p className="text-base md:text-lg text-[#60a9bd] max-w-xl leading-relaxed">
            Experience world-class ENT treatments powered by cutting-edge technology. From routine checkups to complex surgeries, our specialists ensure your senses stay sharp and healthy.
          </p>

         

          
        </div>

        {/* Right Side - Visual Interactive Grid (Premium Pinterest Grid Layout) */}
        <div className="relative flex justify-center items-center lg:justify-end animate-fade-right">
          
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-[480px] h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#9ce1f1]/20 animate-float">
            {/* Replace this src with your premium doctor/ENT setup image */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
              alt="ENT Specialist Department"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Elegant Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f3395]/40 via-transparent to-transparent"></div>
          </div>

          
         

          

          

        </div>

      </div>
    </section>
  );
};

export default ENTHero;