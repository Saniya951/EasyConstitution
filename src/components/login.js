import React from "react";
import "./css_files/login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import consti1 from "../assets/animations/consti1.json"; // Import the Lottie animation JSON file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="book-icon">
          <Lottie animationData={consti1} loop={true} />
        </div>
        <p>Empower yourself with knowledge!</p>
      </div>
      <div className="login-right">
        <form className="login-form">
          <h2>Login to know more</h2>
          <input type="email" placeholder="enter email" required />
          <input type="password" placeholder="enter password" required />
          <a href="#" className="forgot-password">
            forgot password?
          </a>
          <button type="submit">LOGIN</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
