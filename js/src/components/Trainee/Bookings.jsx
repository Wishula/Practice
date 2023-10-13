import React, { useState, useEffect } from 'react';

import TraineeProfile from './TraineeProfile';
import './Bookings.css'

const Bookings = () => {
 
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  const Appointments = [
    {
      id: 1,
      date: 'Saturday',
      starttime: '09:00 AM',
      endtime: '10:00 AM',
      trainer: 'Thiloshana',
    },
    {
      id: 2,
      date: 'Sunday',
      starttime: '03:30 PM',
      endtime: '04:30 PM',
      trainer: 'Thilaksha',
    },
    {
      id: 3,
      date: 'Tuesday',
      starttime: '03:30 PM',
      endtime: '04:30 PM',
      trainer: 'Thilaksha',
    }
    // Add more random appointments as needed
  ];


 

  return (
    <>
        <section className="bookings-container">
          <div>
            <TraineeProfile /></div>

            <div className='booking' >
              <div className="bookingsheader">
            <h2 style={{color:'white'}}>Accepted Appointments</h2></div>
      <ul className="accepted">
        {Appointments.map((appointment) => (
          <li key={appointment.id} className="aa">
            {/* Display appointment details */}
            <p>Date: {appointment.date}</p>
            <p>Start Time: {appointment.starttime}</p>
            <p>End Time: {appointment.endtime}</p>
            <p>Trainer: {appointment.trainer}</p>
            {/* Add more appointment details here */}
          </li>
        ))}
      </ul>
            </div>
        </section>
    </>
  );
};

export default Bookings;