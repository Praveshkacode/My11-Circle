import React from 'react';
import styles from './Contest.module.css';

const Contest = ({ teams, startTime, matchType }) => {
  const formattedTime = new Date(startTime).toLocaleString(); // Format the time as needed

  return (
    <div className={styles.contest}>
      <div className={styles.teamLeft}>
        <h2>{teams[0]}</h2>
      </div>
      <div className={styles.matchDetails}>
        <p>{matchType}</p>
        <p>vs</p>
        <p>{formattedTime}</p>
      </div>
      <div className={styles.teamRight}>
        <h2>{teams[1]}</h2>
      </div>
    </div>
  );
}

export default Contest;
