import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', formData);
      console.log('User logged in:', response.data);
      localStorage.setItem('token', response.data.token);
      if(response.data.token){
        navigate('/pages')
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-parent'>
        <h1>Login</h1>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
