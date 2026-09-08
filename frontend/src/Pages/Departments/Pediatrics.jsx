import React from 'react'
import PediatricHero from '../../components/Departments/Pediatric/PediatricHero'
import PediatricAbout from '../../components/Departments/Pediatric/PediatricAbout'
import PediatricNeuroServices from '../../components/Departments/Pediatric/PediatricNeuroServices'
import HospitalCTA from '../../components/Home/HospitalCTA'
import PediatricDoctor from "../../components/Departments/Pediatric/PediatricDoctor"
const Pediatric = () => {
  return (
    <div>
      <PediatricHero/>
      <PediatricAbout/>
      <PediatricNeuroServices/>
      <PediatricDoctor/>
       <HospitalCTA/>
    </div>
  )
}

export default Pediatric