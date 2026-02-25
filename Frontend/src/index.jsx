import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import MoreInfo from "./Components/MoreInfo";
import Organizers from "./Components/Organizers";
import Conduct from "./Components/CodeOfConduct";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import "./index.css"
export default function index() {

  return  (
       <>
      <Hero />
      <About />
      <MoreInfo />
      <Organizers />
      <Team />
      <Conduct />
      <Contact />
      <Footer />
    </>
  );
}
