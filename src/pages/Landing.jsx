'use client';
import './Landing.css';
import { useContext } from 'react';
import { MouseContext } from '../Context/MouseContext.jsx';
import MaskLayer from '../components/MaskLayer'; // adjust path if needed

function Landing() {
  const { setIsHovered } = useContext(MouseContext);

  return (
    <div className="container" style={{ height: "100vh", position: "relative" }}>
      <MaskLayer>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="maskTextWrapper"
        >
          <p className="maskheadLine">DIVYAM</p>
          <h1 className="maskmainHeading">
            HIDING <br />
            <span className="maskormid">BAD <br /> SHIT</span><br />
            SINCE<br />
            2006
          </h1>
        </div>
      </MaskLayer>

      <div className="center">
        <p className="headLine">DIVYAM</p>
        <h1 className="mainHeading">
          MAKING <br />
          <span className="ormid">GOOD <br /> SHIT</span><br />
          SINCE<br />
          2006
        </h1>
      </div>
    </div>
  );
}

export default Landing;
