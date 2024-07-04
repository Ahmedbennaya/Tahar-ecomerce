// components/Main.jsx
import React from 'react';
import './Hero.css'; // Import your updated CSS file for styling
import img from '../assets/hero section img/bargaoui.jpg';

const Main = () => {
  return (
    <div className="hero-container">
      <img src={img} alt="Hero Image" className="hero-image" />
      <div className="button-container">
        <button className="cta-button">Explore Now</button>
        <button className="secondary-button">Learn More</button>
      </div>
    </div>
  );
};

export default Main;
