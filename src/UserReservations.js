import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import './UserReservations.css'; // Importing CSS

const UserReservation = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [step, setStep] = useState(1); // Track form step
  const [reservation, setReservation] = useState({
    type: '',
    date: '',
    checkInTime: '',
    checkOutTime: '',
    name: '',
    studentID: '',
    year: '',
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Submitted:', reservation);
    // Proceed with form submission logic
  };

  const handleCancel = () => {
    navigate('/user'); // Navigate to /user when Cancel is clicked
  };

  return (
    <div className="modal-background">
      <div className="reservation-modal">
        {step === 1 ? (
          <form onSubmit={handleNext} className="reservation-form">
            <img src={`${process.env.PUBLIC_URL}/ITS.png`} alt="ITS Logo" className="itslogo" />
            <h1>Reservation</h1>
            <label>
              Reservation Type:
              <select name="type" value={reservation.type} onChange={handleChange} required>
                <option value="">Select a reservation</option>
                <option value="conference">Manuscript</option>
                <option value="lab">Lab</option>
              </select>
            </label>
            <label>
              Date:
              <input type="date" name="date" value={reservation.date} onChange={handleChange} required />
            </label>
            <label>
              Check-In Time:
              <input type="time" name="checkInTime" value={reservation.checkInTime} onChange={handleChange} required />
            </label>
            <label>
              Check-Out Time:
              <input type="time" name="checkOutTime" value={reservation.checkOutTime} onChange={handleChange} required />
            </label>
            <div className="reservation-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="next-btn">Next</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="reservation-form">
            <img src={`${process.env.PUBLIC_URL}/ITS.png`} alt="ITS Logo" className="itslogo" />
            <h1>Information of Reservation</h1>
            <label>
              Name:
              <input type="text" name="name" value={reservation.name} onChange={handleChange} required />
            </label>
            <label>
              Student ID:
              <input type="text" name="studentID" value={reservation.studentID} onChange={handleChange} required />
            </label>
            <label>
              Year:
              <input type="text" name="year" value={reservation.year} onChange={handleChange} required />
            </label>
            <div className="reservation-actions">
              <button type="button" onClick={handleBack} className="back-btn">Back</button>
              <button type="submit" className="reserve-btn">Reserve</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserReservation;