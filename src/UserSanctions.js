import React from 'react';
import './UserSanctions.css'; // Import the CSS file

const UserSanctions = () => {
  return (
    <div className="sanction-container">
      <h1 className="sanction-title">Sanctions</h1>
      <table className="sanction-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Reservation Type</th>
            <th>Violation</th>
            <th>Sanction</th>
          </tr>
        </thead>
        <tbody>
          {/* No data to display */}
        </tbody>
      </table>
    </div>
  );
};

export default UserSanctions;
