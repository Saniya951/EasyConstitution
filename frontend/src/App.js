import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/homepage"; // Ensure this matches the actual file name
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import GamesPage from "./components/gamepage";
import LearnPage from "./components/learnpage";
import BadgesPage from "./components/badgespage";
import QuizPage from "./components/quizpage";
import VideoPage from "./components/videopage";
import Navbar from "./components/navbar"; // Import the Navbar component
import ProtectedRoute from "./components/ProtectedRoute";

function Logout(){
  localStorage.clear()
  return <Navigate to ="/login" />
}
function RegisterAndLogout(){
  localStorage.clear()
  return <SignupPage />
}

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
          <Route path="/badges" element={<ProtectedRoute>
            <BadgesPage />
            </ProtectedRoute>} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/videopage" element={<VideoPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
