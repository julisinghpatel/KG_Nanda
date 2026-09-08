import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = ({ child, stagger = 0.15, yOffset = 30, duration = 0.6, ease = "power3.out" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (child) {
        gsap.fromTo(
          child,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: stagger,
            duration: duration,
            ease: ease,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [child, stagger, yOffset, duration, ease]);

  return sectionRef;
};
