
// // src/components/QuestionCard.js
// import React from 'react';
// import './css_files/quizpage.css';
// import CreditsImg from '../assets/images/credits.png'; // Assuming styles are shared, or move to a more specific CSS

// const quizcard = ({ question }) => {
//     return (
//         <div className="question-card">
//             <div className="question-header">
//                 <span className="question-number">{question.id}.</span>
//                 <span className="question-text">{question.question}</span>
//                 <span className="credits">
//                     {question.credits}
//                     <img src={CreditsImg} alt="Credits Icon" className="credits-icon" />
//                 </span>
//             </div>
//             <div className="options-container">
//                 {question.options.map((option, index) => (
//                     <button key={index} className="option-button">{option.label}</button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default quizcard;
// src/components/QuestionCard.js
import React, { useState } from 'react';
import './css_files/quizpage.css';
import CreditsImg from '../assets/images/credits.png';

const Quizcard = ({ question }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleOptionClick = (optionValue) => {
        setSelectedOption(optionValue);
        if (optionValue === question.correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="question-card">
            <div className="question-header">
                <span className="question-number">{question.id}.</span>
                <span className="question-text">{question.question}</span>
                <span className="credits">
                    {question.credits}
                    <img src={CreditsImg} alt="Credits Icon" className="credits-icon" />
                </span>
            </div>
            <div className="options-container">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-button ${
                            selectedOption === option.value
                                ? isCorrect
                                    ? 'correct'
                                    : 'incorrect'
                                : ''
                        }`}
                        onClick={() => handleOptionClick(option.value)}
                        disabled={selectedOption !== null} // Disable options once an answer is selected
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quizcard;
