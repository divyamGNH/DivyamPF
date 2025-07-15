import Landing from "./Landing.jsx";
import Footer from "./Footer.jsx";
import TopProjects from "./TopProjects.jsx";
import Socials from "./Socials.jsx";
import Navigations from "./Navigations.jsx";
import { MouseProvider } from "../Context/MouseContext.jsx";
import CursorFollower from "../components/CursorFollower.jsx";

// import "./App.css";

function Home() {
  return (
    // {/* CursorFollower is now global and rendered ONCE */}
    //   {/* <CursorFollower /> */}
    <div>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
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
    </div>
  );
}

export default Home;
