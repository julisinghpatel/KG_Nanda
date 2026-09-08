import { useState, useRef } from "react";
import gsap from "gsap";
import "./DepartmentSection.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, HeartPulse } from "lucide-react";

const departments = [
  {
    id: 0,
    name: "Obstetrics, Gynecology & Infertility",
    image: "./Home/Gynecology.jpg",
    title: "Obstetrics, Gynecology & Infertility",
    desc: "Comprehensive care for women's health, pregnancy, childbirth, infertility, menstrual disorders, PCOS, and gynecological conditions. Our specialists provide personalized treatment and advanced reproductive healthcare for every stage of life.",
    link: "/gynecology-obstetrics"
  },
  {
    id: 1,
    name: "Neurology",
    image: "./Home/Neurology & Brain Care.jpg",
    title: "Neurology & Brain Care",
    desc: "Comprehensive diagnosis and treatment for conditions affecting the brain, spinal cord, and nervous system, including stroke, epilepsy, Parkinson's, dementia, headaches, and neuropathies delivered by a skilled team of neurologists committed to restoring quality of life.",
    link: "/neurology"
  },
  {
    id: 2,
    name: "Cardiology",
    image: "./Home/Cardiology.jpg",
    title: "Cardiology Department",
    desc: "Complete heart care from prevention to intervention, backed by state-of-the-art cardiac monitoring, rapid emergency response, and a team of experienced heart specialists available 24/7 to safeguard your cardiovascular health.",
    link: "/cardiology"
  },
  {
    id: 3,
    name: "Nephrology",
    image: "./Home/Nephrology.jpg",
    title: "Nephrology Department",
    desc: "Comprehensive kidney care supported by advanced diagnostics and a dedicated team of experienced nephrologists, available around the clock to manage, treat, and monitor every stage of kidney health.",
    link: "/nephrology"
  },
  {
    id: 4,
    name: "Orthopedics",
    image: "./Home/Orthopedics.jpg",
    title: "Orthopedics Department",
    desc: "Specialized care for bones, joints, and musculoskeletal conditions, offering both surgical and non-surgical treatment pathways for fractures, joint injuries, and trauma, guided by experienced orthopedic specialists focused on restoring mobility and strength.",
    link: "/orthopedics"
  },
  {
    id: 5,
    name: "Pediatrics",
    image: "./Home/Pediatrics.jpg",
    title: "Pediatrics Department",
    desc: "Compassionate, age-appropriate medical care for infants, children, and adolescents, supported by a dedicated pediatric team equipped to handle routine health needs as well as urgent and emergency situations with gentle, family-centred care.",
    link: "/pediatrics"
  },
  {
    id: 6,
    name: "Plastic Surgery",
    image: "./Home/PlasticSurgery.jpg",
    title: "Plastic Surgery",
    desc: "KG Nanda's Plastic Surgery team delivers precise surgical and non-surgical solutions focused on both aesthetics and functional restoration, specialising in reconstructive procedures, cosmetic surgery, and trauma-related care, with every treatment tailored to the individual needs and well-being of each patient.",
    link: "/general-surgery"
  },
  {
    id: 7,
    name: "Diabetes",
    image: "./Home/Diabetes.jpg",
    title: "Diabetes Management",
    desc: "Holistic, long-term care for managing and treating diabetes, combining specialist endocrinologist expertise, advanced monitoring tools, and personalised treatment plans designed to help every patient achieve better health outcomes and an improved quality of life.",
    link: "/general-medicine"
  },
  {
    id: 8,
    name: "Obstetrics",
    image: "./Home/ObMaternity.jpg",
    title: "Obstetrics & Maternity Care",
    desc: "Dedicated care for every stage of a woman's journey from early pregnancy through childbirth and post-delivery recovery, delivered by a compassionate obstetrics team at KG Nanda Hospital committed to the safety, comfort, and well-being of both mother and newborn.",
    link: "/gynecology-obstetrics"
  },
  {
    id: 9,
    name: "ENT",
    image: "./Home/ENT.jpg",
    title: "ENT (Ear, Nose & Throat)",
    desc: "Expert diagnosis and treatment for a wide range of ear, nose, throat, and head-neck conditions including hearing disorders, sinus issues, voice problems, and allergies, managed by specialist ENT surgeons dedicated to restoring comfort and function.",
    link: "/ent"
  },
];

export default function DepartmentSection() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const buttonsScrollRef = useRef(null);
  const activeBtnRef = useRef(null);

  const goPrev = () => {
    const prev = active === 0 ? departments.length - 1 : active - 1;
    handleChange(prev);
  };

  const goNext = () => {
    const next = active === departments.length - 1 ? 0 : active + 1;
    handleChange(next);
  };

  const handleChange = (index) => {
    if (index === active || isAnimating) return;
    setIsAnimating(true);

    const direction = index > active ? 1 : -1;
    const slideDistance = 100;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setTimeout(() => {
          activeBtnRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }, 50);
      }
    });

    tl.to(cardRef.current, {
      x: direction * -slideDistance,
      opacity: 0,
      scale: 0.97,
      duration: 0.3,
      ease: "power2.in"
    });

    tl.add(() => setActive(index), "-=0.05");

    tl.fromTo(
      cardRef.current,
      { x: direction * slideDistance, opacity: 0, scale: 0.97 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
      "-=0.05"
    );

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.4"
    );
    
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.3"
    );
  };

  return (
    <section className="department-section bg-[#f6f5ee]" ref={sectionRef}>
      
      {/* Premium Badge & Header Block */}
      <div className="flex flex-col items-center mb-12 text-center">
       
        <h2 className="department-heading text-3xl md:text-5xl font-black tracking-tight text-[#003a70]">
          Our Specialized <span>Departments</span>
        </h2>
      </div>

      {/* Capsule Navigation Strips Inspired by image_0f6568.png */}
      <div className="department-buttons-wrapper max-w-5xl mx-auto px-2">
        <button
          type="button"
          className="dept-arrow dept-arrow-left"
          onClick={goPrev}
          disabled={isAnimating}
          aria-label="Previous department"
        >
          <ArrowLeft size={18} />
        </button>
        
        <div className="department-buttons-scroll" ref={buttonsScrollRef}>
          <div className="department-buttons">
            {departments.map((dept, i) => (
              <button
                key={dept.id}
                ref={active === i ? activeBtnRef : undefined}
                className={`dept-btn ${active === i ? "active" : ""}`}
                onClick={() => handleChange(i)}
                disabled={isAnimating}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="dept-arrow dept-arrow-right"
          onClick={goNext}
          disabled={isAnimating}
          aria-label="Next department"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Main Feature Showcase Container */}
      <div className="department-card-wrapper max-w-6xl mx-auto mt-6">
        <div className="department-card bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 rounded-[32px] border border-gray-100 shadow-xl" ref={cardRef}>
          
          {/* Left Block: Image View */}
          <div className="dept-image lg:col-span-6 relative overflow-hidden rounded-2xl group/img" ref={imageRef}>
            <img 
              src={departments[active].image} 
              alt={departments[active].name} 
              className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003a70]/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Right Block: Pure Typography Info */}
          <div className="dept-content lg:col-span-6 flex flex-col justify-center" ref={contentRef}>
            <h3 className="text-2xl md:text-3xl font-black text-[#003a70] tracking-tight mb-4">
              {departments[active].title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
              {departments[active].desc}
            </p>
            
            <button
              className="dept-explore-btn group/btn flex items-center justify-center space-x-2 bg-[#dd5200] hover:bg-[#c24800] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-orange-700/10 w-fit transition-all duration-300 self-center lg:self-start"
              onClick={() => navigate(departments[active].link)}
            >
              <span>Explore {departments[active].name} Care</span>
              <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}