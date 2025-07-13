import Landing from "./components/Landing"
import Footer from "./components/Footer";
import TopProjects from "./components/topProjects";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1 }}>
        <Landing />
      </div>
      <div className="h-[10vh]"></div>
      <TopProjects/>
      <div className="h-[10vh]"></div>
      <Footer />
    </div>
  );
}


export default App;
