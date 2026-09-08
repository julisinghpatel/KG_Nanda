import React from 'react'
import CardiologyHero from '../../components/Departments/Cardiologist/CardiologyHero'
import AboutCardiology from '../../components/Departments/Cardiologist/AboutCardiology'
import CardioCondition from '../../components/Departments/Cardiologist/CardioCondition'
import CardioDoctors from '../../components/Departments/Cardiologist/CardioDoctors'
import HospitalCTA from '../../components/Home/HospitalCTA'

const Cardiologist = () => {
  return (
    <div>
        <CardiologyHero/>
        <AboutCardiology/>
        <CardioCondition/>
        <CardioDoctors/>
        <HospitalCTA/>
    </div>
  )
}

export default Cardiologist