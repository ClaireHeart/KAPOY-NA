import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle user logout logic
    navigate('/user');
  };

  return (
    <div>
      <h1>User Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserLogout;