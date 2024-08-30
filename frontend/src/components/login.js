import React, { useState } from "react";
import "./css_files/login.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import consti1 from "../assets/animations/consti1.json"; // Import the Lottie animation JSON file
import api from "../api.js";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Ensure you import useNavigate

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            console.log('Data being sent:', { username, password });
            const res = await api.post("token/", { username, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch (error) {
            alert(error);
            console.error('Error logging in:', error); // This will print the full error object
            console.error('Response data:', error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="book-icon">
                    <Lottie animationData={consti1} loop={true} />
                </div>
                <p>Empower yourself with knowledge!</p>
            </div>
            <div className="login-right">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Login to know more</h2>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <a href="#" className="forgot-password">
                        Forgot password?
                    </a>
                    {loading && <LoadingIndicator />}
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
