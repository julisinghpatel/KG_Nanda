import React from 'react'
import PathologyHero from '../../components/Facalities/Pathology/PathologyHero'
import AboutPathology from '../../components/Facalities/Pathology/AboutPathology'
import FacilitiesPathology from '../../components/Facalities/Pathology/FacilitiesPathology'
import WhyChoosePathology from '../../components/Facalities/Pathology/WhyChoosePathology'
import PathologyFAQ from '../../components/Facalities/Pathology/PathologyFAQ'

const Pathology = () => {
    return (
        <div>
            <PathologyHero />
            <AboutPathology/>
            <FacilitiesPathology/>
            <WhyChoosePathology/>
            <PathologyFAQ/>
        </div>
    )
}

export default Pathology
