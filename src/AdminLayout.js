import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AdminLayout.css';  // Importing CSS

const AdminLayout = () => {
  return (
    <div>
      <header className="admin-header">
        <img src="ITS.png" alt="Admin Logo" className="admin-logo" />
        <nav className="admin-navbar">
          <Link to="/admin">Home</Link>
          <Link to="/admin/sanctions">Sanctions</Link>
          <Link to="/admin/logout">Logout</Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Renders the child component like AdminHome, AdminSanctions, etc. */}
      </main>
    </div>
  );
};

export default AdminLayout;
