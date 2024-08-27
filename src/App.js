import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage"; // Ensure this matches the actual file name
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import GamesPage from "./components/gamepage";
import LearnPage from "./components/learnpage";
import BadgesPage from "./components/badgespage";
import QuizPage from "./components/quizpage";
import Navbar from "./components/navbar"; // Import the Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar is placed here to be displayed on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/learn" element={<QuizPage />} />
          <Route path="/badges" element={<BadgesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
