import Landing from "./components/Landing"
import Footer from "./components/Footer";
import TopProjects from "./components/topProjects";
import Socials from "./components/Socials";
import Navigations from "./components/Navigations";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Socials/>
      <Navigations/>
      <div style={{ flex: 1 }}>
        <Landing />
      </div>
      <div className="h-[10vh]"></div>
      <TopProjects/>
      <div className="h-[20vh]"></div>
      <Footer />
    </div>
  );
}


export default App;
