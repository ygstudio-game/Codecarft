import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndexPage from "./index.jsx";
import Navbar from "./Components/Navbar.jsx";
import Events from "./Components/Events.jsx";
import Loader from "./Components/Systems/Loader.jsx";
import CustomCursor from "./Components/Systems/CustomCursor.jsx";
import ScrollIndicator from "./Components/Systems/ScrollIndicator.jsx";
import TeamPage from "./Components/TeamPage.jsx";

// Event Pages
import CodeArena3 from "./Components/CodeArena3.jsx";
import CollegeRivals from "./Components/CollegeRivals.jsx";
import CodeArena4Event from "./Components/CodeArena4Event.jsx";
import CodeWithUs from "./Components/CodeWithUs.jsx";

const App = () => {
  const [loading, setLoading] = useState(() => {
    // Check if the site was already loaded in this session
    const hasLoaded = sessionStorage.getItem("siteLoaded");
    return !hasLoaded;
  });

  const handleLoaderComplete = () => {
    sessionStorage.setItem("siteLoaded", "true");
    setLoading(false);
  };

  return (
    <>
      <CustomCursor />
      <ScrollIndicator />
      {loading && <Loader onComplete={handleLoaderComplete} />}
      
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.8s ease-in-out" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/codearena-3" element={<CodeArena3 />} />
            <Route path="/events/college-rivals" element={<CollegeRivals />} />
            <Route path="/events/codearena-4" element={<CodeArena4Event />} />
            <Route path="/events/code-with-us" element={<CodeWithUs />} />
          </Routes>
        </Router>
      </div>
    </>
  ) 
}
  
export default App;