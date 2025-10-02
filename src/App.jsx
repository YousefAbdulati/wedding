import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DateSection from './components/DateSection';
import PhotoSlider from './components/PhotoSlider';
import MusicPrompt from './components/MusicPrompt';
import IntroOverlay from "./components/IntroOverlay";
import React, { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && <IntroOverlay onStart={() => setStarted(true)} />}
      
      <MusicPrompt play={started} />

      {started && (
    <>
      <Navbar/>
      <MusicPrompt />
      <HeroSection/>
      <DateSection/>
      <PhotoSlider/>
    </>
 )}
    </>
  );
}

export default App;
