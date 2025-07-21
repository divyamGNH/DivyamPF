import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About"; // Example additional page
// import Contact from "./pages/Contact"; // Another example
import "./App.css";
import { MouseProvider } from "./Context/MouseContext.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <MouseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </MouseProvider>
  );
}

export default App;
