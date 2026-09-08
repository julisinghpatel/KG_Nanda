import React from 'react';
import HeroMedicin from "../../components/Departments/GeneralMedicin/HeroMedicin";
import MedicineServices from "../../components/Departments/GeneralMedicin/MedicineServices";
import MedicineCareProcess from '../../components/Departments/GeneralMedicin/MedicineCareProcess';
import WhyChooseMedicine from '../../components/Departments/GeneralMedicin/WhyChooseMedicine';
const GeneralMedicin = () => {
  return (
    <div>
        <HeroMedicin />
        <MedicineServices />
        <MedicineCareProcess />
        <WhyChooseMedicine />
    </div>
  )
}

export default GeneralMedicin;