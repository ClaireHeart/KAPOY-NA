import React, { useState } from 'react';
import './admin.css';  // CSS styles for the admin page

function AdminSanctions() {
    // Sample data for table
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', idNumber: '20210001', reservationType: 'Room', violation: 'Late Return', sanction: 'Warning' },
        { id: 2, name: 'Jane Smith', idNumber: '20210002', reservationType: 'Equipment', violation: 'Damage', sanction: 'Repair Cost' }
    ]);

    // Remove an entry from the table
    const handleRemove = (id) => {
        const newData = data.filter((entry) => entry.id !== id);
        setData(newData);
    };

    return (
        <div className="admin-container">
            <h1>Sanctions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID Number</th>
                        <th>Reservation Type</th>
                        <th>Violation</th>
                        <th>Sanction</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.name}</td>
                                <td>{entry.idNumber}</td>
                                <td>{entry.reservationType}</td>
                                <td>{entry.violation}</td>
                                <td>{entry.sanction}</td>
                                <td>
                                    <button onClick={() => handleRemove(entry.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No sanctions available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminSanctions;