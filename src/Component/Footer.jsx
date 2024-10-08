import React from 'react';
import './Footer.css'; // Import your separate stylesheet

const footerData = {
  columns: [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press Releases', 'Blog'],
    },
    {
      title: 'Help',
      links: ['Contact Us', 'FAQs', 'Shipping & Returns', 'Order Tracking'],
    },
    {
      title: 'Services',
      links: ['Gift Cards', 'Affiliate Program', 'Special Offers', 'Store Locator'],
    },
  ],
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' },
    { name: 'Facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook' },
    { name: 'YouTube', url: 'https://youtube.com', iconClass: 'fab fa-youtube' },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {footerData.columns.map((column, index) => (
          <div key={index} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-social">
        {footerData.socialLinks.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className={social.iconClass}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
