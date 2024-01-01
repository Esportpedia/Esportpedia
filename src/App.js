import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Pagenotfound from "./pages/Pagenotfound.js";
import Testing from "./pages/Testing";
import Nft from "./pages/Nft";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;