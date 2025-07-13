import Landing from "./pages/Landing.jsx";
import Footer from "./pages/Footer.jsx";
import TopProjects from "./pages/TopProjects.jsx";
import Socials from "./pages/Socials.jsx";
import Navigations from "./pages/Navigations.jsx";
import { MouseProvider } from "./Context/MouseContext.jsx";
// import CursorFollower from "./components/CursorFollower.jsx";

function App() {
  return (
    <MouseProvider>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Socials />
        <Navigations />
        <div style={{ flex: 1 }}>
          <Landing />
        </div>
        <div className="h-[10vh]"></div>
        <TopProjects />
        <div className="h-[20vh]"></div>
        <Footer />
      </div>
    </MouseProvider>
  );
}

export default App;
