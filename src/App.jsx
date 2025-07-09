import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DateSection from './components/DateSection';
import PhotoSlider from './components/PhotoSlider';
import CommentSection from './components/CommentSection';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <BackgroundMusic />
      <HeroSection/>
      <DateSection/>
      <PhotoSlider/>
      <CommentSection/>
    </>
  );
}

export default App;
