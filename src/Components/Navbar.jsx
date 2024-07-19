import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import logo from '../assets/logo.png';
import background from '../assets/my11.jpeg'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = ()=> {
        navigate('/login');
    };
  return (
    <>
    <nav className="navbar">
        <div className={styles.logo}>
            <img src={logo} alt="" />
      </div>
        <p className={styles.rightContent}>Not a Member Yet? <span>Register Now</span></p>
        <button onClick={handleLoginClick}>login</button>
    </nav>
    <div style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>

    </div>
    </> 
  )
}

export default Navbar
