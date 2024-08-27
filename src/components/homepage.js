// src/components/Homepage.js
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import home from "../assets/animations/home.json"; 
import "./css_files/homepage.css"; // Import the CSS for styling

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Explore the Constitution in a Fun and Interactive Way!</h1>
        <p>
          “Dive into the Preamble, Fundamental Rights, and more through
          easy-to-understand content, engaging games, and interactive tools.
          Learn about the principles that guide our nation, all while enjoying a
          seamless and fun learning experience.”
        </p>
        <div className="buttons">
          <Link to="/learn">
            <button className="learn-now">Learn Now</button>
          </Link>
          <Link to="/games">
            <button className="play-the-game">Play The Game</button>
          </Link>
        </div>
      </div>
      <div className="illustration">
      <Lottie className='homeanim'
      animationData={home} loop={true} />
      </div>
    </div>
  );
};

export default Homepage;
