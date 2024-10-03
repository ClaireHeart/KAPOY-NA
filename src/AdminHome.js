import React from 'react';
import './AdminHome.css'; // Importing CSS for admin home page

const AdminHome = () => {
  return (
    <div className="admin-home">
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Student ID</th>
              <th>Reservation Type</th>
              <th>Date and Time</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows dynamically if you have data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
