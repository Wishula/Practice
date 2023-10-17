import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TraineeProfile from './TraineeProfile';

import './ViewTrainers.css';

const ViewTrainers = () => {
  
  const [appointmentRequests, setAppointmentRequests] = useState({});
  const [requestedAppointments, setRequestedAppointments] = useState({});




  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Geethma",
      timeSlots: [
        {id: 1, slot:'Monday - 18:25 to 20:27' },
        {id: 2, slot:'Wednesday - 12:11 to 14:15'},
      ],
    },
    {
      id: 2,
      name: "Thiloshana",
      timeSlots: [
        {id: 1, slot:'Sunday - 15:40 to 17:40' },
        {id: 2, slot:'wednesday - 12.11 to 14.15'},
      ],
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

   // Handle search input change
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If search term is empty, display the full list
      setFilteredUsers([]);
    } else {
      // Filter the list based on the search term
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  // Assuming you have retrieved the trainee's ID and stored it in a variable
//const traineeId = getTraineeIdFromAuthentication(); // Replace this with your actual implementation

const handleAppointmentRequest = (trainerId, timeSlotId) => {

  // Check if the request has already been sent for this trainer
  const existingRequests = requestedAppointments[trainerId] || [];

  if (!existingRequests.includes(timeSlotId)) {
    // Create a new appointment request object
    const appointmentRequest = {
      trainerId, // The ID of the selected trainer
       // The actual trainee's ID
      timeSlotId, // The ID of the selected time slot
      // Add any other required data for the appointment request
    };

    // Add the requested appointment to the list for the specific trainer
    setRequestedAppointments((prevRequests) => ({
      ...prevRequests,
      [trainerId]: [...existingRequests, timeSlotId],
    }));


  // Send a POST request to your backend API
  axios.post('/api/appointment-requests', appointmentRequest)
    .then((response) => {
      // Handle success, e.g., show a success message
      console.log('Appointment request sent successfully');
      console.log('Response data:', response.data);
    })
    .catch((error) => {
      // Handle error, e.g., show an error message
      console.error('Error sending appointment request:', error);
    });
}};

  

  return (
    <>
    <section className='view'>
      <div><TraineeProfile /></div>
      <div>
      <div className='search-container' >
        <h1 className='heading' style={{color:'white'}}>Find a Trainer</h1>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <input type="searchin" style={{backgroundColor: 'rgb(188, 88, 88)', width:'20rem', height:'2.1rem', borderRadius:'0.375rem', cursor:'pointer'}} placeholder='search Trainer' value={searchTerm} onChange={handleSearchChange}/>
          <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
      </div>
      </div>
    <div>
    <ul className="trainerul1">
            {searchTerm === '' ? (
              // Display full list when search term is empty
              users.map((user) => (
                <li className="trainerli" key={user.id}>
                  {user.name}
                  
                  <ul className="trainerul">
                    {user.timeSlots.map((timeSlot) => (
                      <li className="trainerts" key={timeSlot.id}>{timeSlot.slot} {' '}
                      {requestedAppointments[user.id] &&
                      requestedAppointments[user.id].includes(timeSlot.id) ? (
                        <span className="tick-icon">&#10003;</span>
                      ) : (
                        <button
                          className="requesttime"
                          onClick={() => handleAppointmentRequest(user.id, timeSlot.id)}
                          style={{ marginLeft: '1rem' }}
                        >
                          Request Appointment
                        </button>
                      )}</li>
                    ))}
                  </ul>
                </li>
              ))
            ) : filteredUsers.length === 0 ? (
              <p className='msg'>No trainers found.</p>
            ) : (
              // Display filtered list when search term is not empty
              filteredUsers.map((user) => (
                <li className="trainerli" key={user.id}>
                  {user.name}
                  
                  <ul className="trainerul">
                    {user.timeSlots.map((timeSlot) => (
                      <li className="trainerts" key={timeSlot.id}>{timeSlot.slot}{' '}
                      {requestedAppointments[user.id] &&
                      requestedAppointments[user.id].includes(timeSlot.id) ? (
                        <span className="tick-icon">&#10003;</span>
                      ) : (
                        <button
                          className="requesttime"
                          onClick={() => handleAppointmentRequest(user.id, timeSlot.id)}
                          style={{ marginLeft: '1rem' }}
                        >
                          Request Appointment
                        </button>
                      )}</li>
                    ))}
                  </ul>
                </li>
              ))
            )}
          </ul>
      
    </div>
    </section>
    </>
  );
        }

export default ViewTrainers;