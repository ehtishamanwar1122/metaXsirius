import React from 'react';
import { AboutImage1, AboutImage2 } from '../../assets/Images/Index';
import './about.css'

const About = () => {
  return (
    <div className=" m-5">
      <div className="row align-items-center mb-4">
  <div className="col-md-5 col-12  about-head  ">
    <h1 className='ps-5' >About Us</h1>
  </div>
  <div className="col-md-7 col-12 about-body">
  <p className="text-md-start  text-justify">
    At META 5 SIRIUS, we view the financial markets as a dynamic
    landscape brimming with opportunity. Our passionate team is
    dedicated to empowering individuals to navigate the world of
    trading with confidence. We provide the tools, education, and
    support to help you unlock your trading potential, whether you're
    a seasoned investor or just starting your journey.
  </p>
</div>
</div>


      <div className="row">
        <div className="col-md-8 col-12 d-flex justify-content-center mb-3">
          <img
            src={AboutImage1}
            alt="About Us Image 1"
            className="col-md-12 img-fluid rounded-start image-about"
          />
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center">
          <img
            src={AboutImage2}
            alt="About Us Image 2"
            className="col-md-12 col-12 img-fluid rounded-start image-about image2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
