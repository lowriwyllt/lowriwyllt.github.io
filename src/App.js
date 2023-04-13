import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} /> */}
      <Footer />
    </div>
  );
}

export default App;
