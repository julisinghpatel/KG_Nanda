import React from 'react';
import AboutGeneralSurgery from '../../components/Departments/GeneralSurgery/AboutGeneralSurgery';
import GeneralSurgeryServices from '../../components/Departments/GeneralSurgery/CoreServicesGeneralSurgery';
import DoctorGSurgery from '../../components/Departments/GeneralSurgery/DoctorGSurgery';

export default function GeneralSurgery() {
  return <div>
    <AboutGeneralSurgery/>
    <GeneralSurgeryServices/>
    <DoctorGSurgery/>
  </div>;
}
