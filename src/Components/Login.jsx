import React from 'react'
import styles from "./Login.module.css"
import logo2 from '../assets/logo2.png';
import loginbg from '../assets/loginbg.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const handleLogoClick = ()=> {
        navigate('/');
    };

    const handleLogin = ()=> {
        navigate('/lobby');
    };
  return (
    <div className={styles.loginPage}>
    <div className={styles.login}>
        <h4>Welcome to</h4>
      <div className={styles.logo2}>
            <img onClick={handleLogoClick} src={logo2} alt="" />
      </div>
      <h1>Login Form</h1>
      <input className={styles.username} placeholder='Username/Email' type='text' />
      <input className={styles.password} placeholder='Password' type='password' />
      <button onClick={handleLogin}>Login</button>
    </div>
    <div className={styles.loginBg}>
        <div className={styles.bgImage}></div>
    </div>
    

    </div>
  )
}

export default Login
