import React, { useState } from 'react';
import styles from "./Lobby.module.css";
import logo3 from '../assets/logo3.png';
import Contest from './Contest';
import { CricketDetails } from './Match/CricketMatch';
import { FootBallDetails } from './Match/FootBallMatch';
import { KabbadiDetails } from './Match/KabbadiMatch';
import { BasketBallDetails } from './Match/BasketBall';

const Lobby = () => {
  const [currentType, setCurrentType] = useState(CricketDetails); // Default type
  const [currentStatus, setCurrentStatus] = useState('upcoming'); // Default status
  

  // Function to handle button clicks
  const handleTypeChange = (type) => {
    setCurrentType(type);
  };

  const handleStatusChange = (status) => {
    setCurrentStatus(status);
  };

  // Determine match details based on selected game and status
  const getMatchDetails = () => {
    switch (currentStatus) {
      case 'live':
        return currentType.live; // Replace with dynamic game details if needed
      case 'completed':
        return currentType.completed; // Replace with dynamic game details if needed
      default:
        return currentType.upcoming; // Default to 'upcoming'
    }
  };

  const matchDetails = getMatchDetails();

  return (
    <div className={styles.mainPage}>
      <div className={styles.main}>
        <div className={styles.mainNav}>
          <div className={styles.logo2}>
            <img src={logo3} alt="Logo" />
          </div>
          <button>Add Cash</button>
        </div>

        <div className={styles.chooseGame}>
          <button className={`${styles.btn} ${currentType === CricketDetails ? styles.active : ''}`} 
            onClick={() => handleTypeChange(CricketDetails)}>Cricket</button>
          <button className={`${styles.btn} ${currentType === KabbadiDetails ? styles.active : ''}`} 
            onClick={() => handleTypeChange(KabbadiDetails)}>Kabbadi</button>
          <button className={`${styles.btn} ${currentType === FootBallDetails ? styles.active : ''}`} 
            onClick={() => handleTypeChange(FootBallDetails)}>Football</button>
          <button className={`${styles.btn} ${currentType === BasketBallDetails ? styles.active : ''}`} 
            onClick={() => handleTypeChange(BasketBallDetails)}>Basketball</button>
        </div>

        <div className={styles.matchStatus}>
          <button 
            className={`${styles.btnRound} ${currentStatus === 'upcoming' ? styles.active : ''}`} 
            onClick={() => handleStatusChange('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`${styles.btnRound} ${currentStatus === 'live' ? styles.active : ''}`} 
            onClick={() => handleStatusChange('live')}
          >
            Live
          </button>
          <button 
            className={`${styles.btnRound} ${currentStatus === 'completed' ? styles.active : ''}`} 
            onClick={() => handleStatusChange('completed')}
          >
            Completed
          </button>
        </div>

        <div className="contests">
          {matchDetails.map((match, index) => (
            <Contest
              key={`${currentStatus}-${index}`}
              teams={match.teams}
              startTime={match.startTime}
              matchType={match.matchType}
            />
          ))}
        </div>
      </div>

      <div className={styles.mainBg}>
        <div className={styles.bgImage}></div>
      </div>
    </div>
  );
}

export default Lobby;