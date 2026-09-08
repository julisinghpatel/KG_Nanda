import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./PediatricNeuroServices.css";
import {
FaBrain,
FaBolt,
FaWheelchair,
FaPuzzlePiece,
FaDna,
FaRunning,
FaMicroscope,
FaChild,
FaWaveSquare,
FaHeartbeat
} from "react-icons/fa";

export default function PediatricNeuroServices(){

const sectionRef = useRef(null);

useLayoutEffect(()=>{

const ctx = gsap.context(()=>{

gsap.from(".neuro-services-heading",{
y:60,
opacity:0,
duration:1,
ease:"power3.out"
})

gsap.from(".neuro-service-card",{
y:50,
opacity:0,
duration:0.8,
stagger:0.15,
ease:"power3.out",
delay:0.3
})

gsap.from(".neuro-services-note",{
y:40,
opacity:0,
duration:0.8,
delay:1
})

},sectionRef)

return ()=> ctx.revert()

},[])


const services = [

{icon:<FaBrain/>, title:"Headaches & Migraines in Children"},
{icon:<FaBolt/>, title:"Epilepsy & Seizure Disorders"},
{icon:<FaWheelchair/>, title:"Cerebral Palsy"},
{icon:<FaPuzzlePiece/>, title:"Autism Spectrum Disorders"},
{icon:<FaDna/>, title:"Neurogenetic Disorders"},
{icon:<FaRunning/>, title:"Movement Disorders"},
{icon:<FaMicroscope/>, title:"Neurocutaneous Syndromes"},
{icon:<FaChild/>, title:"Neurodevelopmental Conditions"},
{icon:<FaWaveSquare/>, title:"Electroencephalogram (EEG)"},
{icon:<FaHeartbeat/>, title:"Electromyography (EMG)"}

]

return(

<section ref={sectionRef} className="pediatric-neuro-services">

<div className="neuro-services-heading">

<h2>
<span>Our Best</span> Services Included
</h2>

<p>
Advanced pediatric neurological care with modern diagnostics
and compassionate treatment for children.
</p>

</div>

<div className="neuro-services-grid">

{services.map((item,index)=>(
<div key={index} className="neuro-service-card">

<div className="neuro-icon">
{item.icon}
</div>

<h4>{item.title}</h4>

</div>
))}

</div>

<div className="neuro-services-note">

<p>
If your child is experiencing neurological symptoms, donâ€™t waitâ€”
contact <strong>KG Nanda Hospital</strong> to schedule a consultation
with our expert pediatric neurologists.
</p>

</div>

</section>

)

}