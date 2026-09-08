import React from 'react'
import OPDHero from '../../components/Facalities/OPD/OPDHero'
import OPDOverview from '../../components/Facalities/OPD/OPDOverview'
import OPDFacilities from '../../components/Facalities/OPD/OPDFacilities'
import OPDServices from '../../components/Facalities/OPD/OPDServices'
import HospitalCTA from '../../components/Home/HospitalCTA'
import WhyChooseOPD from '../../components/Facalities/OPD/WhyChooseOPD'

const OPD = () => {
    return (
        <div>
            <OPDHero />
            <OPDOverview />
            <OPDFacilities />
            <OPDServices />
            <WhyChooseOPD/>
            <HospitalCTA />
        </div>
    )
}

export default OPD
