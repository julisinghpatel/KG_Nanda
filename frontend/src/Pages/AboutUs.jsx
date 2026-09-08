import React from 'react'
import AboutHero from '../components/About/AboutHero'
import WhoWeAre from '../components/About/WhoWeAre'
import VissionMission from '../components/About/VisionMission'
import AboutHospital from '../components/About/AboutHospital'
import HospitalCTA from '../components/Home/HospitalCTA'

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <VissionMission />
      <AboutHospital />
      <HospitalCTA />
    </div>
  )
}

export default AboutUs