import React from 'react';
import ENTHero from '../../components/Departments/ENT/ENTHero';
import AboutENT from '../../components/Departments/ENT/AboutENT';
import ENTServices from '../../components/Departments/ENT/ENTServices';
import ENTDoctors from '../../components/Departments/ENT/ENTDoctors';

export default function ENT() {
  return (
    <div>
      <ENTHero />
      <AboutENT/>
      <ENTServices/>
      <ENTDoctors/>
    </div>
  );
}
