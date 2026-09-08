import React from 'react'
import ICUHero from '../../components/Facalities/ICU/ICUHero'
import IcuOverview from '../../components/Facalities/ICU/IcuOverview'
import IcuFacilities from '../../components/Facalities/ICU/IcuFacilities'
import MedicalEquipments from '../../components/Facalities/ICU/MedicalEquipments'


const ICU = () => {
    return (
        <div>
           <ICUHero/>
           <IcuOverview/>
           <IcuFacilities/>
           <MedicalEquipments/>
        </div>
    )
}

export default ICU
