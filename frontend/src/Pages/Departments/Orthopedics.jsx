import AboutOrtho from "../../components/Departments/Orthopedics/AboutOrtho";
import OrthopedicsHero from "../../components/Departments/Orthopedics/OrthopedicsHero";
import OrthopaedicConditions from "../../components/Departments/Orthopedics/OrthopaedicConditions";
import AccessService from "../../components/Departments/Orthopedics/AccessService";
import SpecialDoctors from "../../components/Departments/Orthopedics/SpecialDoctors";
import HospitalCTA from "../../components/Home/HospitalCTA";





const Orthopedics = () => {
  return (
    <div>
        <OrthopedicsHero/>
        <AboutOrtho/>
        <OrthopaedicConditions/>
        <AccessService/>
        <SpecialDoctors/>
        <HospitalCTA/>
        
       
    </div>
  )
}

export default Orthopedics;