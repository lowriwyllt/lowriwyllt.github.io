import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main/Home";
import CV from "./components/Main/CV";
import Travel from "./components/Main/Travel";
import Games from "./components/Main/Games/Games";
import NACForm from "./components/Main/Games/NoughtsAndCrosses/NACForm";
import NACGame from "./components/Main/Games/NoughtsAndCrosses/NACGame";
import NACEnd from "./components/Main/Games/NoughtsAndCrosses/NACEnd";
import { Route, Routes } from "react-router";
import AnimalHatOMatic from "./components/Main/Games/Animal-Hat-O-Matic/AnimalHatOMatic";

function App() {
  const [activeNavbar, setActiveNavbar] = useState(false);
  let appClass = "App";
  if (activeNavbar) {
    appClass += " AppNav";
  }

  // Noughts and Crosses States
  const [symbol1, setSymbol1] = useState("🤯");
  const [symbol2, setSymbol2] = useState("🤪");
  const [name_1, setName_1] = useState("Player1");
  const [name_2, setName_2] = useState("Player2");
  const [firstSymbol, setFirstSymbol] = useState("");
  const [symbol, setSymbol] = useState("");
  // console.log(symbol1);
  // console.log(firstSymbol);
  // console.log(symbol);

  return (
    <div className={appClass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/games" element={<Games />} />
        <Route
          path="/games/naughtsandcrosses/form"
          element={
            <NACForm
              setName_1={setName_1}
              setName_2={setName_2}
              setSymbol1={setSymbol1}
              setSymbol2={setSymbol2}
              setFirstSymbol={setFirstSymbol}
              setSymbol={setSymbol}
              symbol1={symbol1}
              firstSymbol={firstSymbol}
            />
          }
        />
        <Route
          path="/games/naughtsandcrosses/game"
          element={
            <NACGame
              symbol1={symbol1}
              symbol2={symbol2}
              name_1={name_1}
              name_2={name_2}
              symbol={symbol}
            />
          }
        />
        <Route
          path="/games/naughtsandcrosses/endstatment"
          element={<NACEnd />}
        />
        <Route path="/games/animalhatomatic" element={<AnimalHatOMatic />} />
      </Routes>
      <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
      <Footer />
    </div>
  );
}

export default App;
