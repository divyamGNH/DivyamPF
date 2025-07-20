import Socials from "./Socials";
import Navigations from "./Navigations";
import AboutLanding from "./AboutLanding";
import MaskLayer from "../components/MaskLayer";
import TechStack from "./TechStack";
import Footer from "./Footer";
import TimeLine from "./TimeLine.jsx";

const About = () => {
  return (
    <div>
      <Socials />
      <Navigations />
      <AboutLanding/>
      <TechStack/>
      <div className="h-[10vh]"></div>
      <TimeLine/>
      <div className="h-[20vh]"></div>
      <Footer/>
    </div>
  );
};

export default About;
