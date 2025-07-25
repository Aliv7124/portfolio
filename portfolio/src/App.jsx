import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import About from "../components/About";
import Education from "../components/Education"
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
function App() {


  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills/>} />
         <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
