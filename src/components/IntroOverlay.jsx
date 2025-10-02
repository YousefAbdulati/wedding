import React, { useState } from "react";
import "../App.css";

export default function IntroOverlay({ onStart }) {
  const [fade, setFade] = useState(false);

  const handleOpen = () => {
    setFade(true);
    setTimeout(() => {
      onStart();
    }, 2500);
  };

  return (
    <div className="intro-overlay" onClick={handleOpen}>
      <img
        src="../../img/back.png"
        alt="Wedding Invitation"
        className={`intro-image ${fade ? "fade-out" : ""}`}
      />
    </div>
  );
}
