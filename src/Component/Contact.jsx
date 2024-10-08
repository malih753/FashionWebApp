import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi'; // Importing phone and email icons

const contactData = [
  { label: 'Call Us', value: '+1 (555) 123-4567' },
  { label: 'Address', value: '123 Main St, Anytown, USA' },
  { label: 'Email', value: 'info@example.com' }
];

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  ">
          <h3>Home / Contact</h3>
      <div className="flex flex-col md:flex-row bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8">
      
        {/* Left Section (Contact Details with Icons) */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          {contactData.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {item.label === 'Call Us' && <FiPhone className="text-2xl text-blue-600" />} 
              {item.label === 'Email' && <FiMail className="text-2xl text-green-600" />}
              <div>
                <span className="block font-semibold text-gray-700">{item.label}</span>
                <span className="text-lg text-gray-800">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-2/3">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
            <div className="text-right">
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
