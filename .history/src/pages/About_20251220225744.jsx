import Socials from "./Socials";
import Navigations from "./Navigations";
import AboutLanding from "./AboutLanding";
import TechStack from "./TechStack";
import Footer from "./Footer";
import ScrolltoAnimate from "../animations/ScrolltoAnimate.jsx";
import TimeLine from "./TimeLine.jsx";

const About = () => {
  return (
    <div>
      <Socials />
      <Navigations />
      <AboutLanding/>
      <ScrolltoAnimate>
        <TechStack/>
      </ScrolltoAnimate>
      
      {/* <div className="h-[10vh]"></div> */}
      {/* <TimeLine/> */}
      <div className="h-[10vh]"></div>
    </div>
  );
};

export default About;
