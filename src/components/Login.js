import React, { useState } from 'react';
import axios from 'axios';

import './style/login.css';

const Login = ({ updateUserList = () => { } }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting data:', { name, email, password });
      const response = await axios.post('http://localhost:8000/api/users/login', {
        name,
        email,
        password
      });
      console.log('Form submitted:', response.data);
      if (typeof updateUserList === 'function') {
        updateUserList(response.data.user);
      }
      setSuccess('Login successful!');

      
    } catch (error) {
      console.error('Error logging in user:', error);
      setError("Something Wrong");
    } finally {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
 

    <div className="login-card">
  <div className="login-form">
    <form onSubmit={handleSubmit}>
      <h2 className="login-title">Login</h2>
      <hr className="login-divider"></hr>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <div className="input-group">
        <label htmlFor="username">Name:</label>
        <input type="text" className="form-input" id="username" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-input" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-input" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn-submit">Login</button>

      <div className="remember-me">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <a href="#!" className="forgot-password">Forgot password?</a>
      </div>
    </form>
  </div>
</div>



  );
};

export default Login;