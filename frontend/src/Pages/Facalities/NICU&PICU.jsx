import React from 'react'
import HeroNicuPicu from '../../components/Facalities/NICU&PICU/HeroNicuPicu'
import NicuPicuAbout from '../../components/Facalities/NICU&PICU/NicuPicuAbout'
import NicuPicuFacilities from '../../components/Facalities/NICU&PICU/NicuPicuFacilities'
import NicuPicuFAQ from '../../components/Facalities/NICU&PICU/NicuPicuFAQ'
const OPD = () => {
    return (
        <div>
           <HeroNicuPicu/>
           <NicuPicuAbout/>
           <NicuPicuFacilities/>
           <NicuPicuFAQ/>
        </div>
    )
}

export default OPD
