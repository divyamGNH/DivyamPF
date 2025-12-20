import Landing from "./Landing.jsx";
import Footer from "./Footer.jsx";
import TopProjects from "./TopProjects.jsx";
import Socials from "./Socials.jsx";
import Navigations from "./Navigations.jsx";
import ScrolltoAnimate from "../animations/ScrolltoAnimate.jsx";

function Home() {
  return (
    <div>
      <div
        style={{
          maxHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Socials /> */}
        {/* <Navigations /> */}
        <div style={{ flex: 1 }}>
          <Landing />
        </div>

        {/* <div className="h-[10vh]" /> */}

        {/* <ScrolltoAnimate>
          <TopProjects />
        </ScrolltoAnimate> */}

        {/* <div className="h-[20vh]" /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
