import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
       
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
        
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
         
        />
        <button>Register</button>
        <p>error is here;</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
