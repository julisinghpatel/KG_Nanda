import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
//Facilities

import Emergency from "./Pages/Facalities/Emergency";
import OPD from "./Pages/Facalities/OPD";
import Diagnostic from "./Pages/Facalities/Diagnostic";
import ICU from "./Pages/Facalities/ICU";
import NICUPICU from "./Pages/Facalities/NICU&PICU";
import DigitalXray from "./Pages/Facalities/DigitalXray";
import Pathology from "./Pages/Facalities/Pathology";
import OTSurgery from "./Pages/Facalities/OT&Surgery";
import GeneralSurgery from "./Pages/Departments/GeneralSurgery";
import GeneralMedicin from "./Pages/Departments/GeneralMedicin";
import Cardiologist from "./Pages/Departments/Cardiologist";
import ChestMedicine from "./Pages/Departments/ChestMedicine";
import ENT from "./Pages/Departments/ENT";
import Gynecology from "./Pages/Departments/Gynecology";
import Nephrology from "./Pages/Departments/Nephrology";
import Neurology from "./Pages/Departments/Neurology";
import Neurosurgery from "./Pages/Departments/Neurosurgery";
import Oncology from "./Pages/Departments/Oncology";
import Orthopedics from "./Pages/Departments/Orthopedics";
import Urology from "./Pages/Departments/Urology";
import Pediatric from "./Pages/Departments/Pediatrics";
import Dental from "./Pages/Departments/Dental";
import News from "./Pages/Media/News";
import Blog from "./Pages/Media/Blog";
import Team from "./Pages/Team";
import Location from "./Pages/Location";
import BookAppointment from "./components/Map/BookAppointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/opd" element={<OPD />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/icu" element={<ICU />} />
          <Route path="/nicupicu" element={<NICUPICU />} />
          <Route path="/xray" element={<DigitalXray />} />
          <Route path="/pathology" element={<Pathology />} />
          <Route path="/ot-surgery" element={<OTSurgery />} />

          <Route path="/general-medicine" element={<GeneralMedicin />} />
          <Route path="/general-surgery" element={<GeneralSurgery />} />
          <Route path="/cardiology" element={<Cardiologist />} />
          <Route path="/chest-medicine" element={<ChestMedicine />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/gynecology-obstetrics" element={<Gynecology />} />
          <Route path="/nephrology" element={<Nephrology />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/neurosurgery" element={<Neurosurgery />} />
          <Route path="/oncology" element={<Oncology />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/pediatrics" element={<Pediatric />} />
          <Route path="/dental-care" element={<Dental />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/location" element={<Location />} />
          <Route path="/book-appointment" element={<BookAppointment />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;