import React, { useState } from "react";
import "./css_files/signup.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import consti2 from "../assets/animations/consti2.json";
import api from "../api.js";
import LoadingIndicator from "./LoadingIndicator";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const res = await api.post("user/register/", { username, email, password });
            navigate("/");
            console.log('Signin successful:', res.data);
        } catch (error) {
            alert(error);
            console.error('Error siging in:', error); // This will print the full error object
            console.error('Response data:', error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2>Sign up to explore</h2>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter name"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        required
                    />
                    {loading && <LoadingIndicator />}
                    <button type="submit">Sign Up</button>
                    <p>
                        Already have an account? <Link to="/login">Login!</Link>
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

export default SignupPage;
