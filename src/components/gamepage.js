// src/components/GamePage.js
import React from "react";
import "./css_files/gamepage.css"; // Import the CSS for styling
import GameCard from "./gamecard"; // Import the GameCard component
import games from "./gamedata"; // Import the game data

const GamePage = () => {
  return (
    <div className="games-container">
      <h1>Test Your Knowledge!</h1>
      <div className="games-grid">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            description={game.description}
            image={game.image}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
