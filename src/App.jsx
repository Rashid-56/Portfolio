import "./App.css";
import Hero from "./Components/Hero";

import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { Home, Layout } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />

        <Route path="/project" element={<Projects />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
