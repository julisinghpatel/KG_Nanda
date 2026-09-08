import React from 'react';
import DentalHero from '../../components/Departments/Dental/DentalHero';
import DentalAbout from '../../components/Departments/Dental/DentalAbout';
import WhyChooseDental from '../../components/Departments/Dental/WhyChooseDental';
import DentalSpecialties from '../../components/Departments/Dental/DentalSpecialties';
import DentalSupport from '../../components/Departments/Dental/DentalSupport';

export default function Dental() {
  return (
    <div>
     <DentalHero/>
     <DentalAbout/>
     <WhyChooseDental/>
     <DentalSpecialties/>
     <DentalSupport/>
    </div>
  );
}
