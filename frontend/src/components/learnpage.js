// src/components/Learn.js
import React from "react";
import { Link } from "react-router-dom";
import "./css_files/learnpage.css"; // Import the CSS for styling

const articles = [
  {
    number: 13,
    topic: "Laws Inconsistent with or in Derogation of Fundamental Rights",
  },
  { number: 14, topic: "Right to Equality" },
  { number: 19, topic: "Right to Freedom" },
  { number: 20, topic: "Protection in Respect of Conviction for offenses" },
  { number: 21, topic: "Protection of Life and Personal Liberty" },
  { number: 22, topic: "Preventive Detention" },
  {
    number: 39,
    topic: "Certain principles of policy to be followed by the State",
  },
  { number: "39A", topic: "Equal justice and free legal aid" },
  { number: 40, topic: "Organization of village panchayats" },
  {
    number: 41,
    topic:
      "Right to work, to education, and to public assistance in certain cases",
  },
];

const Learn = () => {
  return (
    <div className="learn-container">
      <h1>Learn with Ease!</h1>
      <table className="articles-table">
        <thead>
          <tr>
            <th>ARTICLES</th>
            <th>TOPICS</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td> <Link to="/videopage">Article {article.number}</Link></td>
              <td>{article.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Learn;
