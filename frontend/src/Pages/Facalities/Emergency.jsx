import React from 'react'
import EmergencyHero from '../../components/Facalities/Emergency/EmergencyHero'
import EmergencyServiceCard from '../../components/Facalities/Emergency/EmergencyServiceCard'
import BestServices from '../../components/Facalities/Emergency/BestServices'
import HospitalCTA from '../../components/Home/HospitalCTA'


const Emergency = () => {
  return (
    <div>
      <EmergencyHero />
      <EmergencyServiceCard />
      <BestServices />
      <HospitalCTA />
    </div>
  )
}

export default Emergency
