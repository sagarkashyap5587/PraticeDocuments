import React from 'react'
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='line1'></div>
    <div className='login-page'>
        <div>
            <div className='form-data'>Login</div>
            <div className='input-form'><input type='text' placeholder='Username or email address*'></input></div>
            <div className='password-form'><input type='password' placeholder='Password*'></input></div>
            <div className='checkbox-form'><input type='checkbox'/>
            <p>Remember me</p>
            </div>
            <button className='login-button'>LOG IN</button>
            <div className='forget-password'><a href='#'>Lost Your Password?</a></div>
            <button className='login-button' onClick={()=> navigate(-1)} style={{ marginTop: '20rem'}}>Back</button>
        </div>
    </div>


    </>
  )
}

export default LoginPage