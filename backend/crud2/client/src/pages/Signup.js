import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [idnama, setIdnama] = useState({
    username:"",
    email:"",
    password:"",
    
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setIdnama(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8080/api/auth/signup", idnama)
      navigate("/")
    }catch(err){
      console.log(err)
    };
  };

  console.log(idnama);
  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <input type="text" placeholder='username' onChange={handleChange} name='username' />
      <input type="email" placeholder='email' onChange={handleChange} name='email' />
      <input type="password" placeholder='password' onChange={handleChange} name='password' />
      <button className='formButton' onClick={handleClick}>Signup</button>
    </div>
  );
};

// export default Add;
