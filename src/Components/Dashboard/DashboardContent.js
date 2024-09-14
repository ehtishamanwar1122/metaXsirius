import React from 'react';

const DashboardContent = ({ title, content }) => (
  <div className="d-flex flex-column justify-content-center col-md-6 py-1 ps-2 ps-md-3 ps-lg-4">
    <h1 className="title_works col-md-8 mb-4">{title}</h1>
    {content.map((paragraph, index) => (
      <p key={index} className="lead text-justify mb-3 col-md-11">
        {paragraph}
      </p>
    ))}
  </div>
);

export default DashboardContent;
