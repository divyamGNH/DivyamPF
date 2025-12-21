import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

import useMouseTracking from "./Hooks/useMouseTracking.js";
import CursorFollower from "./components/CursorFollower.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 768;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      setEnableCursor(isLargeScreen && hasFinePointer);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // only track mouse if cursor is enabled
  useMouseTracking();

  return (
    <Router>
      {enableCursor && <CursorFollower />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
