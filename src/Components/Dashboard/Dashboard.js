import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import DashboardImage from './DashboardImage';
import {TrackImage}  from '../../assets/Images/Index';
import './Dashboard.css';

const Dashboard = () => {
  const content = [
    "Enhance your trading skills without risking actual capital. Our Demo Trader feature allows you to simulate trades using real-time market data, enabling you to place orders and closely monitor your performance. Analyze your trades to identify areas for improvement and build confidence before stepping into the live market.",
    "Experience advanced practice with thorough trade tracking. Demo Trader offers more than just trade simulations—it provides robust analysis tools. Review historical performance data, assess your win/loss ratio, and visualize trade effectiveness through detailed reports. This in-depth insight allows you to refine your strategies and spot profitable trends, ensuring you are well-prepared before committing real capital."
  ];

  return (
    <div>
      <DashboardHeader title="How it Works" subtitle="Step by Step Guide" />

      <div className="dashboard_body container-fluid pb-md-5 pb-0 pt-5 pt-md-0 pt-md-5 px-5" >
        <div className="row align-items-center">
          <DashboardContent title="Track your Demo Trades" content={content} />
          <DashboardImage src={TrackImage} alt="Track your trades with our demo" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
