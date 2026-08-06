import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";

import useMouseTracking from "./Hooks/useMouseTracking.js";
import CursorFollower from "./components/CursorFollower.jsx";
import Loader from "./components/Loader.jsx";
import Footer from "./pages/Footer.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const [enableCursor, setEnableCursor] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {enableCursor && <CursorFollower />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experience/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
