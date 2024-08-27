// 
import React, { useState } from 'react';
import LockImg from '../assets/images/lock.png';
import BronzeImg from  '../assets/images/bronze.png';
import SilverImg from  '../assets/images/silver.png';
import GoldImg from  '../assets/images/gold.png';
import CreditsImg from '../assets/images/credits.png';

import './css_files/badges.css'; // Assume you have styles defined here

const BadgesPage = () => {
    const [credits, setCredits] = useState(1000); // Starting with 1000 credits

    // Define the badges data
    const badges = [
        { level: 'Easy Level', requiredCredits: 1000, unlocked: credits >= 1000, badgeType: 'Bronze', image: BronzeImg },
        { level: 'Medium Level', requiredCredits: 3000, unlocked: credits >= 3000, badgeType: 'Silver', image: SilverImg },
        { level: 'Hard Level', requiredCredits: 5000, unlocked: credits >= 5000, badgeType: 'Gold', image: GoldImg },
    ];

    return (
        <div className="badge-collection-container">
            <header className="header">
                <h1>Badge Collection: Your Rights Journey</h1>
                <div className="credits-container">
                    <span className="civic-credits-label">Civic Credits</span>
                    <span className="civic-credits-value">{credits}</span>
                    <img src={CreditsImg} alt="Credits Icon" className="credits-icon" />
                </div>
            </header>
            <div className="badges-grid">
                {badges.map((badge, index) => (
                    <div className='outer-badge-card-container'>
                    <h2>{badge.level}</h2>
                    <div className="badge-card" key={index}>
                        
                        <img src={badge.image} alt={`${badge.badgeType} Badge`} />
                        <span><span className="credits-value">{badge.requiredCredits}</span>
<img src={CreditsImg} alt="Credits Icon" className="credits-icon" />
</span>
                        {!badge.unlocked && (
                            <div className="overlay">
                                <img src={LockImg} alt="Locked" className="lock-icon" />
                            </div>
                        )}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BadgesPage;
