import React from 'react'
import styles from "./Lobby.module.css"
import logo3 from '../assets/logo3.png';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  return (
    <div className={styles.mainPage}>

    <div className={styles.main}>
      <div className={styles.mainNav}>
      <div className={styles.logo2}>
            <img  src={logo3} alt="" />
      </div>
      <button >Add Cash</button>
      </div>

    <div className={styles.chooseGame}>
      <button className={styles.btn}>Cricket</button>
      <button className={styles.btn}>Kabbadi</button>
      <button className={styles.btn}>Football</button>
      <button className={styles.btn}>Basketball</button>

    </div>

    </div>

    <div className={styles.mainBg}>
        <div className={styles.bgImage}></div>
    </div>
    

    </div>
  )
}

export default Lobby
