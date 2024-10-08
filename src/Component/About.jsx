import React, { useState } from 'react';
import './About.css'; // Import the stylesheet

const About = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ firstName, lastName, email, message });
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <img src="https://images.pexels.com/photos/1267703/pexels-photo-1267703.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About Us" className="about-image" />
      
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <textarea
              placeholder="Your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="textarea-field"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default About;
