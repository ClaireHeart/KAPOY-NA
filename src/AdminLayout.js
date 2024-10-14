import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AdminLayout.css';  // Importing CSS for styling

const AdminLayout = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="admin-navbar">
        <div className="logo">
          {/* Logo Image */}
          <img src="ITS.png" alt="Admin Logo" className="logo-image" />
          {/* Logo Text */}
          <div className="text-logo">
            <img src="txt.png" alt="Text Logo" />
          </div>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/admin" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin/sanctions" className="nav-link" activeClassName="active">
                Sanctions
              </Link>
            </li>
            <li>
              <Link to="/admin/logout" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet /> {/* Renders child components like AdminHome, AdminSanctions */}
      </main>
    </div>
  );
};

export default AdminLayout;
