import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const baseApi = 'http://127.0.0.1:8800/api/';
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [err, setErr] = useState('');

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseApi}auth/register`, inputs);
      console.log(res);
    } catch (err) {
      setErr(err.response.data);
      console.log(err);
    }
  };
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input
          required
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>This is an error;</p>}
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
