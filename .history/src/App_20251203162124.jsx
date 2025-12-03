import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import { MouseProvider } from "./Context/MouseContext.jsx";
import About from "./pages/About.jsx";

import useMouseTracking from "./Hooks/useMouseTracking.js";
import CursorFollower from "./components/CursorFollower.jsx";


function App() {

  useMouseTracking();
  
  return (
    // <MouseProvider>
      <Router>
        {/* <CursorFollower/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    // </MouseProvider>
  );
}

export default App;
