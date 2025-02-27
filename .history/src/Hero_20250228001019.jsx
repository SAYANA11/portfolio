
import React from 'react';
import myPhoto from './sayana.jpg'; 
import './Hero.css';
const Hero = () => {
  return (
<div className="container">
    <div className="name">
        <h1>Aiyub, muhammad Husayn</h1>
        <p>Bachelor of science in Information Technology</p>
        <div className="photo">
        <img src="/sayana.jpg" alt="My Photo" />
        </div>
    </div>
</div>
  );
};

export default Hero;