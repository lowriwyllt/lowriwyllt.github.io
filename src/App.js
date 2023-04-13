import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main/Home";
import CV from "./components/Main/CV";
import Travel from "./components/Main/Travel";
import { Route, Routes } from "react-router";

function App() {
  const [activeNavbar, setActiveNavbar] = useState(false);
  let appClass = "App";
  if (activeNavbar) {
    appClass += " AppNav";
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/travel" element={<Travel />} />
        {/* <Route path="/games" element={<Games />} /> */}
      </Routes>
      <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
      <Footer />
    </div>
  );
}

export default App;
