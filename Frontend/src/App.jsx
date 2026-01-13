import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import IndexPage from "./index.jsx";
import CodeArena from "./Components/EventSection/CodeArena.jsx";
import "./app.css"
import CodeArena4 from "./Components/CodeArena4/CodeArena4.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route path="/events" element={<Event />} /> */}

        <Route path="/events" element={<CodeArena4 />} />
      </Routes>
    </Router>
  ) 
 }
 
  
  export default App