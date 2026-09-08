import React from 'react'
import OncologyHero from '../../components/Departments/Oncology/OncologyHero'
import AboutOncology from '../../components/Departments/Oncology/AboutOncology'
import OncoSpecialdoctor from '../../components/Departments/Oncology/OncoSpecialdoctor'
import HospitalCTA from "../../components/Home/HospitalCTA";

const Oncology = () => {
  return (
    <div>
        <OncologyHero/>
        <AboutOncology/>
        <OncoSpecialdoctor/>
        <HospitalCTA/>
      
        
    </div>
  )
}
export default Oncology