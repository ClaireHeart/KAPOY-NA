import React, { useState } from 'react';
import './AdminLogin.css'; // Make sure this file includes the CSS styles

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (email === 'admin@example.com' && password === 'admin123') {
      // Redirect to the admin dashboard or perform further logic
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/itslogo.png" alt="Logo" className="logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-link">
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
