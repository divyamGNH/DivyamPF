'use client';
import './Landing.css';
import useMousePosition from "../controllers/useMousePosition";
import {useState} from "react";
import { motion } from "framer-motion";

function Landing() {

  const [isHovered, setHoverState] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered? 400 : 40;

  return (
    <div className="container">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x -size/2}px ${y-size/2}px`,
          maskPosition: `${x-size/2}px ${y-size/2}px`,
          WebkitMaskSize:`${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut"}}
      >
        <div 
        onMouseEnter={()=>{setHoverState(true)}}
        onMouseLeave={()=>{setHoverState(false)}}
        className="maskTextWrapper">
          <p className="maskheadLine">DIVYAM</p>
          <h1 className="maskmainHeading">
            HIDING <br />
            <span className="maskormid">BAD <br /> SHIT</span><br />
            SINCE<br />
            2006
          </h1>
        </div>
      </motion.div>

      <div className="center">
        <p className="headLine">DIVYAM</p>
        <h1 className="mainHeading">
          MAKING <br />
          <span className="ormid">GOOD <br /> SHIT</span><br />
          SINCE<br />
          2006
        </h1>
      </div>

      <div className="navigation">
        <a href="#" className="about">ABOUT</a><br />
        <a href="#" className="works">WORKS</a><br />
        <a href="#" className="contact">CONTACT</a><br />
      </div>

      <div className="socials">
        <img src="/instagram.png" alt="Instagram" />
        <img src="/linked in.png" alt="Instagram" />
        <img src="/git.png" alt="Instagram" />
      </div>
    </div>
  );
}

export default Landing;
 