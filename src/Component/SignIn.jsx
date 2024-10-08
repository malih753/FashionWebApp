import React from 'react';
import './SignIn.css'; // Import the separate stylesheet

const signInData = {
  logoUrl: 'https://example.com/logo.png', // Replace with actual logo URL
  formFields: [
    { label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Password', type: 'password', placeholder: 'Enter your password' },
    { label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
  ],
  socialSignIn: [
    { name: 'Google', iconClass: 'fab fa-google', actionText: 'Continue with Google' },
    { name: 'Facebook', iconClass: 'fab fa-facebook', actionText: 'Continue with Facebook' },
  ],
  sideImageUrl: 'https://images.pexels.com/photos/26644868/pexels-photo-26644868/free-photo-of-bicycle-on-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image URL
};

const SignIn = () => {
  return (
    <div className="signin-container">
      {/* Left section (form and social login) */}
      <div className="signin-left">
       

        <div className="social-signin-container">
          {signInData.socialSignIn.map((social, index) => (
            <button key={index} className="social-button">
              <i className={social.iconClass}></i> {social.actionText}
            </button>
          ))}
        </div>


        <div className="form-container">
          {signInData.formFields.map((field, index) => (
            <div key={index} className="input-group">
              <label>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} required />
            </div>
          ))}
          <button className="signin-button">Sign In</button>
        </div>

       
      </div>

      {/* Right section (image) */}
      <div className="signin-right">
        <img src={signInData.sideImageUrl} alt="eCommerce Banner" className="side-image" />
      </div>
    </div>
  );
};

export default SignIn;
