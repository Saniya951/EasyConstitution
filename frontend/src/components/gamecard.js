// src/components/GameCard.js
import React from "react";
import "./css_files/gamecard.css"; // Import the CSS for styling

const GameCard = ({ title, description, image }) => {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Play Now</button>
    </div>
  );
};

export default GameCard;
