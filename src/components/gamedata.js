// src/components/gameData.js
import game1img from "../assets/images/track.png";
import game2img from "../assets/images/game1img.png";
import game3img from "../assets/images/game1img.png";
import game4img from "../assets/images/role.png";
import game5img from "../assets/images/puzzle.png";
import game6img from "../assets/images/clue.png";

const games = [
  {
    title: "Rights Quest",
    description:
      "Embark on an adventure where your decisions based on constitutional rights shape the journey.",
    image: game1img, // Use the imported image
  },
  {
    title: "Flashcards",
    description:
      "Flip through flashcards to match constitutional rights with their simplified descriptions.",
    image: game2img, // Use the imported image
  },
  {
    title: "Spin the Wheel",
    description:
      "Spin the wheel to learn about key constitutional articles in a fun and interactive way.",
    image: game3img, // Use the imported image
  },
  {
    title: "Role Playing Game",
    description:
      "Take on roles like lawyers and activists to defend constitutional principles in mission-driven gameplay.",
    image: game4img, // Use the imported image
  },
  {
    title: "Preamble Puzzle",
    description:
      "Piece together the Preamble in a drag-and-drop puzzle to understand its essence.",
    image: game5img, // Use the imported image
  },
  {
    title: "Constitutional Clue",
    description:
      "Solve mysteries by gathering clues about constitutional violations and explore legal remedies.",
    image: game6img, // Use the imported image
  },
];

export default games;
