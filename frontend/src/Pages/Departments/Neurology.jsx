import React from 'react';
import NeurologyHero from '../../components/Departments/Neurology/NeurologyHero';
import NeurologyCare from '../../components/Departments/Neurology/NeurologyCare';
import NeurologyBestServices from '../../components/Departments/Neurology/NeurologyBestServices';
import NeurologyDoctor from '../../components/Departments/Neurology/NeurologyDoctor';

export default function Neurology() {
  return <div>
    <NeurologyHero/>
    <NeurologyCare/>
    <NeurologyBestServices/>
    <NeurologyDoctor/>
  </div>;
}
