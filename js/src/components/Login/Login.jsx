import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/Hero2.jpg';
import './Login.css';
import Header from '../Header/Header';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Login = () => {
  const userRef = useRef();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'e19166@eng.pdn.ac.lk' && pwd === 'hi@Wishula1') {
      window.location.href = '/bookings';
    }else if ((email === 'geethma@gmail.com' && pwd === 'hi@Geethma1')) {
      window.location.href = '/appointments';
    }
    
    else {
      setShowError(true);

    }
  };

  const closeModal = () => {
    setShowError(false);
  };

  return (
    <>
      <section className="login-section">
        {/* {showError && (
          <div className="error-message" style={{ color: 'white' }}>
            Wrong email or password. Please try again.
          </div>
        )} */}
        <section>
          <div className="login">
            <div className='leftlog'>
              <div className="headersection"><Header /></div>
              <div className='login-text'>
                <div><span className='stroke-text'>WELCOME BACK</span></div>
              </div>
            </div>
            <div className="style" style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
            ></div>

            <form className="loginform" onSubmit={handleSubmit}>
              <label htmlFor="email" className="loginlable">Email:</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                ref={userRef}
                autoComplete="off"
                value={email}
                required
                className='logininput'
              />

              <label htmlFor="password" className="loginlable">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className='logininput'
              />
              <button className="signinbutton" type='submit'>Sign In</button>

              <p style={{ color: 'white' }}>
                Need an Account?<br /><br />
                <Link to='/register' className="no-underlinelogin" style={{ textDecoration: 'none', color: 'white' }}>
                  SIGN UP
                </Link>
              </p>
            </form>
            <div >
            <Modal 
              
              isOpen={showError}
              onRequestClose={closeModal}
              contentLabel="Error Modal"
            >
              <h2>Error</h2>
              <p>Wrong email or password. Please try again.</p>
              <button onClick={closeModal} className='close-button'>Close</button>
            </Modal>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
