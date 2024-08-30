import React from 'react';

const DashboardImage = ({ src, alt }) => (
  <div className="col-md-6 text-center dash_img">
    <img src={src} alt={alt} className='img-fluid rounded' />
  </div>
);

export default DashboardImage;
