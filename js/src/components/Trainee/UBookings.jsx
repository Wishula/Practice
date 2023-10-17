import React, { useState, useEffect } from 'react';

import TraineeProfile from './TraineeProfile';
import './UBookings.css'

const BookingsUpdated = () => {
   // Assuming you have a way to get the logged-in trainer's ID
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  

  return (
    <>
        <section className="bookings-container">
          <div>
            <TraineeProfile /></div>

            <div className='booking' >
              <div className="bookingsheader">
            <h2 style={{color:'white'}}>Accepted Appointments</h2></div>
            
          <table className="bookingtable">
            <thead className="bookingth">
              <tr>
                <th>Trainer Name</th>
                <th>Day</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              
                <tr >
                  <td cl>Geethma</td>
                  <td>Monday</td>
                  <td>18:25</td>
                  <td>20:27</td>
                  {/* You can replace the static values with actual appointment data */}
                </tr>
              
            </tbody>
          </table>
            </div>
        </section>
    </>
  );
};

export default BookingsUpdated;