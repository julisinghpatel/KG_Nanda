import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./PediatricHero.css";

const heroImages = [
  "https://i.pinimg.com/736x/5c/43/77/5c43776da864d59e5f6842e928db4f6b.jpg",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1920&auto=format&fit=crop",
  "https://i.pinimg.com/1200x/65/eb/17/65eb179ba4c790456cb4c505aa84552f.jpg"
];

const DiabetesHeroSection = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* background zoom animation */
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 5,
          ease: "power1.inOut"
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [index]);

  /* change image every 5s */
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  /* content animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".diabetesHero_heading", {
        y: -80,
        opacity: 0,
        duration: 1
      }).from(".diabetesHero_description", {
        y: 40,
        opacity: 0,
        duration: 1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="diabetesHero_section" ref={heroRef}>
      <img
        ref={imgRef}
        src={heroImages[index]}
        className="diabetesHero_background"
        alt="Pediatric Care"
      />
      <div className="diabetesHero_overlay"></div>
      <div className="diabetesHero_contentWrapper">
        <h1 className="diabetesHero_heading">
          Caring <span>Pediatric</span> Specialists for Your Child
        </h1>
        <p className="diabetesHero_description">
          Compassionate medical care for infants, children and teenagers in a safe and friendly environment.
        </p>
      </div>
      <div className="diabetesHero_bottomCurve"></div>
    </section>
  );
};

export default DiabetesHeroSection;