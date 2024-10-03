import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Handle admin logout logic
    navigate('/admin');
  };

  return (
    <div>
      <h1>Admin Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminLogout;
