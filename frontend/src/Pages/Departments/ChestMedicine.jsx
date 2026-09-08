import React from 'react';
import PulmonologyHero from '../../components/Departments/ChestMedicine/PulmonologyHero';
import AboutPulmonology from '../../components/Departments/ChestMedicine/AboutPulmonology';
import PulmonologyServices from '../../components/Departments/ChestMedicine/PulmonologyServices';
import PulmonologyDoctors from '../../components/Departments/ChestMedicine/PulmonologyDoctors';

export default function ChestMedicine() {
  return <div>
    <PulmonologyHero/>
    <AboutPulmonology/>
    <PulmonologyServices/>
    <PulmonologyDoctors/>
  </div>;
}
