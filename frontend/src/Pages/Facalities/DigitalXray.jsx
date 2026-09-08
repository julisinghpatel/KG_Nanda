import React from 'react'
import DigitalXrayHero from '../../components/Facalities/DigitalX-Ray/DigitalXrayHero'
import AboutDigitalXray from '../../components/Facalities/DigitalX-Ray/AboutDigitalXray'
import DigitalXrayFacilities from '../../components/Facalities/DigitalX-Ray/DigitalXrayFacilities'
import WhyChooseDigitalXray from '../../components/Facalities/DigitalX-Ray/WhyChooseDigitalXRay'
import DigitalXrayFAQ from '../../components/Facalities/DigitalX-Ray/DigitalXrayFAQ'

const DigitalXray = () => {
  return (
    <div>
      <DigitalXrayHero/>
      <AboutDigitalXray/>
      <DigitalXrayFacilities/>
      <WhyChooseDigitalXray/>
      <DigitalXrayFAQ/>
    </div>
  )
}

export default DigitalXray
