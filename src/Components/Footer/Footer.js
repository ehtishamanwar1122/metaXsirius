import React from 'react';
import { FooterLogo } from '../../assets/Images/Index';
import './footer.css'; 

const Footer = () => {
  return (
    <div className='footer-container 'style={{background:"#020e26"}}>
      <div className='foot d-flex flex-column flex-md-row align-items-center justify-content-between mb-4'>
      <div className=' mb-md-0 col-2 col-md-3 d-flex justify-content-center'>
        <img src={FooterLogo} alt='logo' className='img-fluid footer-logo' />
      </div>

        <div className='hyper-links '>
          <h5 className='text-white'>Quick links</h5>
          <ul className="list-unstyled d-flex flex-column flex-md-column mb-0 me-auto">
            <li className="me-md-4 mb-2 mb-md-0">
              <a href="#home" className="text-decoration-none text-white">Home</a>
            </li>
            <li className="me-md-4 mb-2 mb-md-0">
              <a href="#how-it-works" className="text-decoration-none text-white">How it Works</a>
            </li>
            <li className="me-md-4 mb-2 mb-md-0">
              <a href="#features" className="text-decoration-none text-white">Features</a>
            </li>
            <li className="me-md-4 mb-2 mb-md-0">
              <a href="#phases" className="text-decoration-none text-white">Phases</a>
            </li>
            <li>
              <a href="#about-us" className="text-decoration-none text-white">About Us</a>
            </li>
          </ul>
        </div>

      </div>

      <div className='d-flex align-items-center justify-content-center' >
        <p className='mb-0'>© Sirius 2024. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
