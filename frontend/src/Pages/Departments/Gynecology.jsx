import React from 'react';
import GyneHero from '../../components/Departments/Gynecology/GyneHero';
import GyneAbout from '../../components/Departments/Gynecology/GyneAbout';
import GyneServices from '../../components/Departments/Gynecology/GyneServices';
import GyneSpecialDoctor from '../../components/Departments/Gynecology/GyneSpecialDoctor';
import HospitalCTA from '../../components/Home/HospitalCTA';

const Gynecology = () => {
  return (
    <div>
     <GyneHero/>
     <GyneAbout/>
     <GyneServices/>
     <GyneSpecialDoctor/>
     <HospitalCTA/>
    </div>
  );
};

export default Gynecology;
