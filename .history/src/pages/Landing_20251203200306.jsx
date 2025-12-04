import CursorMask from "../components/CursorMask";
import CursorFollower from "../components/CursorFollower";

function Landing() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <CursorFollower />

      {/* Hidden layer */}
      <div className="hidden-layer">
        HIDING BAD CODE SINCE 2024
      </div>

      {/* Mask on visible layer */}
      <CursorMask size={280}>
        <div className="visible-layer">
          MAKING GOOD CODE SINCE 2024
        </div>
      </CursorMask>
    </div>
  );
}

export default Landing;
