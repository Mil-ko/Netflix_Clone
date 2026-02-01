import React from "react";
import './footer.css';

function Footer() {
  return (
    <>
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help centers</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-right">
          <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </div>
    </>
  );
}   
export default Footer;  