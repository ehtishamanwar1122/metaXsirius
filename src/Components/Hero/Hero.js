import React from 'react';
import hero_img from '../../assets/Images/hero.png';
import './Hero_styling.css'
const Hero = () => {
  return (
    <div className=" hero container-fluid p-5 py-0">
        <div className="row align-items-center">
              <div className="d-flex flex-column justify-content-center col-md-6 content ps-2 ps-md-3 ps-lg-4">
                 <h4 className=" fw-semibold col-md-6 col-sm-6">Become a Master Trader with</h4>
                 <h1 className="display-3 fw-bolder">MeTa 5 x SIRIUS</h1>
                  <p className="lead">Track, Learn, and Master Your Trading Journey</p>
                  <button className="btn btn-lg col-md-4 col-sm-4 " id='apply'>Apply Now</button>
              </div>

    <div className="col-md-6 text-center">
      <img src={hero_img} className="img-fluid hero_images" alt="Hero" />
    </div>
  </div>
</div>

  );
}

export default Hero;
