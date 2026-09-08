import React from 'react';
import HeroUrology from '../../components/Departments/Urology/UrologyHero';
import AboutUrology from '../../components/Departments/Urology/AboutUrology';
import UrologyBestServices from '../../components/Departments/Urology/UrologyBestServices';
import HospitalCTA from '../../components/Home/HospitalCTA';
import UrologyDoctor from '../../components/Departments/Urology/UrologyDoctor';

export default function Urology() {
  return <div>
    <HeroUrology/>
    <AboutUrology/>
    <UrologyBestServices/>
    <UrologyDoctor/>
    <HospitalCTA/>
    
  </div>;
}
