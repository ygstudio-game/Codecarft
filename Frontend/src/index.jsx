import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Tooltip } from "bootstrap";
import Navbar from "./Components/Navbar";
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
  useEffect(() => {
    // Initialize Bootstrap tooltips (if any exist)
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => new Tooltip(el));
  }, []);

  const redirectToContact = () => {
    const el = document.getElementById("contact_us");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return  (
       <>
      <Navbar />
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
