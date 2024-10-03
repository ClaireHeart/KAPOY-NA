import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './UserLayout.css';

const UserLayout = () => {
  console.log("UserLayout rendered"); // This will log every time the component renders
  return (
    <>
      <header className="navbar">
        <div className="logo">
        <img className="logo-image" src='/ITS.png' alt="logo" />
        <img className="text-logo" src='/txt.png' alt="Text Logo" />

        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/reservations" className={({ isActive }) => (isActive ? "active" : "")}>
                Reservations
              </NavLink>
              <ul className="dropdown">
                <li><NavLink to="/user/reservations/pending" className={({ isActive }) => (isActive ? "active" : "")}>Pending</NavLink></li>
                <li><NavLink to="/user/reservations/approved" className={({ isActive }) => (isActive ? "active" : "")}>Approved</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/user/sanctions" className={({ isActive }) => (isActive ? "active" : "")}>
                Sanctions
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/logout" className={({ isActive }) => (isActive ? "active" : "")}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      
      <div className="main-content">
        {/* Placeholder or dynamic content */}
        <div className="no-reservations">No Reservations Yet</div>
        
        {/* The Outlet component will render the nested routes */}
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
