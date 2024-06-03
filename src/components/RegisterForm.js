import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', formData);
      console.log('User registered:', response.data);
      if (response.data){
        navigate('/login')
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}className='form-parent' >
        <h1>Registration</h1>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
