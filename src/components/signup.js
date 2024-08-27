// src/SignupPage.js

import React from "react";
import "./css_files/signup.css";
import { Link } from "react-router-dom";
// import '../signup.css'; // Import the CSS file for styling
import Lottie from "lottie-react";
import consti2 from "../assets/animations/consti2.json";

const signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <form className="signup-form">
          <h2>Sign up to explore</h2>
          <input type="text" placeholder="enter name" required />
          <input type="email" placeholder="enter email" required />
          <input type="password" placeholder="enter password" required />
          <input
            type="password"
            placeholder="enter confirmed password"
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to ="/login">Login!</Link>
          </p>
        </form>
      </div>
      <div className="signup-right">
        <div className="illustration">
          <Lottie animationData={consti2} loop={true} />
        </div>

        <p>Join Us in Exploring the Constitution!</p>
      </div>
    </div>
  );
};

export default signup;
