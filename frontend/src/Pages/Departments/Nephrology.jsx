import React from 'react';
import NephrologyHero from '../../components/Departments/Nephrology/NephrologyHero';
import NephrologyCare from '../../components/Departments/Nephrology/NephrologyCare';
import WhyChooseNephrology from '../../components/Departments/Nephrology/WhyChooseNephrology';
import NephrologyDoctor from '../../components/Departments/Nephrology/NephrologyDoctor';


export default function Nephrology() {
  return (
    <div>
      <NephrologyHero />
      <NephrologyCare/>
      <WhyChooseNephrology/>
      <NephrologyDoctor/>
    </div>
  );
}
