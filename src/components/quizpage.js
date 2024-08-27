// src/components/QuizPage.js
import React from 'react';
import { quizData } from './quizdata'; // Import quiz data
import QuestionCard from './quizcard'; // Import the QuestionCard component
import './css_files/quizpage.css'; // Import the CSS for styling

const quizpage = () => {
    return (
        <div className="quiz-page">
            <header className="header">
                <h1>ARTICLE 19: Right to Freedom</h1>
                <p>Quiz</p>
            </header>
            {quizData.map((question) => (
                <QuestionCard key={question.id} question={question} />
            ))}
        </div>
    );
};

export default quizpage;
