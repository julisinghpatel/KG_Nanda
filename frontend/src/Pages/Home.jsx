import React from "react";
import HomeHero from "../components/Home/Homehero";
import HomeTicker from "../components/Home/HomeTicker";
import AboutSection from "../components/Home/AboutSection";
import DepartmentSection from "../components/Home/DepartmentSection";
import HospitalFeatures from "../components/Home/Specialities";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import SpecialTeam from "../components/Home/SpecialTeam";
import LatestNews from "../components/Home/LatestNews";
import HospitalCTA from "../components/Home/HospitalCTA";
import DoctorProfile from "../components/Home/DoctorProfile";
import ManagingDoctor from "../components/Home/ManagingDoctor";
import ReachSection from "../components/Home/ReachSection";
import GovernmentSchemes from "../components/Home/GovernmentSchemes";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeTicker />
      <AboutSection />
      <DepartmentSection />
      <DoctorProfile />
      <HospitalFeatures />
      <WhyChooseUs />
      <ManagingDoctor/>
      <GovernmentSchemes/>

      <SpecialTeam />
      <LatestNews />
      <ReachSection/>
      <HospitalCTA />
    </>
  );
};

export default Home;