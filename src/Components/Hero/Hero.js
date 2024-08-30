import React from 'react';
import { HeroImage } from '../../assets/Images/Index';
import './Hero_styling.css'
const Hero = () => {
  return (
    <div className=" hero container-fluid p-5 py-0">
        <div className="row align-items-center">
              <div className="d-flex flex-column justify-content-center col-md-6 py-1 content ps-2 ps-md-3 ps-lg-4">
                 <h4 className=" fw-semibold col-md-6 col-sm-6">Become a Master Trader with</h4>
                 <h1 className="fw-bolder  p-0">MeTa 5 x SIRIUS</h1>

                  <p className="lead">Track, Learn, and Master Your Trading Journey</p>
                  <button className="btn btn-lg col-md-4 col-sm-4 apply">Apply Now</button>
              </div>

    <div className="col-md-6 text-center py-4">
      <img src={HeroImage} className="img-fluid hero_images" alt="Hero" />
    </div>
  </div>
</div>

  );
}

export default Hero;
