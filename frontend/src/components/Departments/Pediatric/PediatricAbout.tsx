import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./PediatricAbout.css";
import { useNavigate } from "react-router-dom";
export default function PediatricAbout() {
    const navigate = useNavigate();
    const sectionRef = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".pediatric-about-heading", {
                y: 60,
                opacity: 0,
                duration: 1
            })

            gsap.from(".pediatric-about-card", {
                y: 80,
                opacity: 0,
                duration: 1
            })

            gsap.to(".pediatric-about-card", {
                y: -10,
                repeat: -1,
                yoyo: true,
                duration: 2
            })

            gsap.to(".pediatric-about-image img", {
                y: -15,
                repeat: -1,
                yoyo: true,
                duration: 2.5
            })

        }, sectionRef)

        return () => ctx.revert()

    }, [])

    return (

        <section ref={sectionRef} className="pediatric-about">

            {/* SECTION HEADING */}

            <div className="pediatric-about-heading">

                <h2>Comprehensive Pediatric Care</h2>

                <p>
                    Providing compassionate and specialized healthcare for infants,
                    children and adolescents at KG Nanda Hospital.
                </p>

            </div>

            <div className="pediatric-about-container">

                {/* LEFT CONTENT */}

                <div className="pediatric-about-card">

                    <h3>About Our Pediatric Department</h3>

                    <p>
                        At KG Nanda Hospital, our Pediatric Department focuses on
                        preventive care, early diagnosis and advanced treatments to
                        support healthy child development.
                    </p>

                    <p>
                        Our experienced pediatricians provide personalized care in a
                        safe and child-friendly environment.
                    </p>



                </div>

                {/* RIGHT IMAGE */}

                <div className="pediatric-about-image">

                    <img
                        src="/Department/PediatricA.jpg"
                        alt="pediatric doctor"
                    />

                </div>


            </div>

        </section>

    )

}