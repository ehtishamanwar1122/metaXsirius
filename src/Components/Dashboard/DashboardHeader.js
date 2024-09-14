import React from 'react';

const DashboardHeader = ({ title, subtitle }) => (
  <div className='dashboard_head d-flex flex-column align-items-center text-center'>
    <h1 className='fw-bold'>{title}</h1>
    <p className='lead'>{subtitle}</p>
  </div>
);

export default DashboardHeader;
