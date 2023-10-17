import React, { useState, useEffect } from 'react';
import './Appointments.css'
import Table from './Table'
import TrainerProfile from './TrainerProfile';



const Appointments = () => {

     // Retrieve the logged-in user's ID from the AuthContext
    // State to manage appointments
    //const [appointments, setAppointments] = useState([ ... ]); // Initialize with your appointments data
    
    const [pendingAppointments, setPendingAppointments] = useState([]);
    const [acceptedAppointments, setAcceptedAppointments] = useState([]);

    
    


    // Function to accept an appointment
    const handleAccept = (appointmentId) => {
        // Make an API request to mark the appointment as accepted in the database
        fetch(`/api/appointments/${appointmentId}/accept`, {
            method: 'PUT', // Assuming we use a PUT request to update the appointment status
        })
        .then((response) => {
            if (response.ok) {
                // If the update was successful, update the appointments state
                setPendingAppointments((prevAppointments) =>
                prevAppointments.map((appointment) =>
                    appointment.id === appointmentId
                    ? { ...appointment, status: 'accepted' }
                    : appointment
                )
                );
            } else {
                console.log("Hi");
            }
        })
        .catch((error) => {
            console.error('Error accepting appointment: ', error);
        });
    };

    // Step 2: Define the onDecline callback function
  const handleDecline = (appointmentId) => {
    // Find the index of the appointment to be declined
    const appointmentIndex = pendingAppointments.findIndex(appointment => appointment.id === appointmentId);

    if (appointmentIndex !== -1) {
      // Create a copy of the pendingAppointments array and remove the declined appointment
      const updatedPendingAppointments = [...pendingAppointments];
      updatedPendingAppointments.splice(appointmentIndex, 1);

      // Update the state to reflect the removed appointment
      setPendingAppointments(updatedPendingAppointments);
    }
  };

    /* // Function to decline an appointment
    const handleDecline = (appointmentId) => {
        // Make an API request to delete the appointment from the database
    fetch(`/api/appointments/${appointmentId}`, {
        method: 'DELETE', // Assuming we use a DELETE request to delete the appointment
      })
      .then((response) => {
        if (response.ok) {
             // If the deletion was successful, update the appointments state
             setPendingAppointments((prevAppointments) => 
                prevAppointments.filter((appointment) => appointment.id !== appointmentId)
             );
        } else {
            console.log("hi");
        }
      })
      .catch((error) => {
        console.error('Error declining appointment: ', error)
      });
    }; */

  return (
    <>
    <div>
        <TrainerProfile/></div>

        

            <div className="rcont">
                
        
            <Table className="tcont"
            appointments={pendingAppointments}
            onAccept={handleAccept}
            onDecline={handleDecline}/>
        </div>
    </>
  )
}

export default Appointments;