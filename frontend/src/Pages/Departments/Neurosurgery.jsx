import React from 'react'
import NeurosurgeryHero from '../../components/Departments/Neurosurgery/NeurosurgeryHero'
import AboutNeurosurgery from '../../components/Departments/Neurosurgery/AboutNeurosurgery'
import NeurosurgeryDoctors from '../../components/Departments/Neurosurgery/NeurosurgeryDoctors'
import NeurosurgeryConditionWeTreat from '../../components/Departments/Neurosurgery/NeurosurgeryConditionWeTreat'
import HospitalCTA from '../../components/Home/HospitalCTA'



const Neurosurgery = () => {
  return (
    <div>
        <NeurosurgeryHero/>    
        <AboutNeurosurgery/>
        <NeurosurgeryConditionWeTreat/>
        <NeurosurgeryDoctors/>
        <HospitalCTA/>
    </div>
  )
}
export default Neurosurgery