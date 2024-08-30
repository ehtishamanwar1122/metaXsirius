import React from 'react';
import DashboardContent from '../DashboardContent'
import DashboardImage from '../DashboardImage';
import { CriteriaImage } from '../../../assets/Images/Index';
import '../Dashboard.css';

const Criteria = () => {
  const content = [
    "Enhance your trading skills without risking actual capital. Our Demo Trader feature allows you to simulate trades using real-time market data, enabling you to place orders and closely monitor your performance. Analyze your trades to identify areas for improvement and build confidence before stepping into the live market.",
    "Experience advanced practice with thorough trade tracking. Demo Trader offers more than just trade simulations—it provides robust analysis tools. Review historical performance data, assess your win/loss ratio, and visualize trade effectiveness through detailed reports. This in-depth insight allows you to refine your strategies and spot profitable trends, ensuring you are well-prepared before committing real capital."
  ];

  return (
    <div>

      <div className="dashboard_body container-fluid p-5 py-0">
        <div className="row align-items-center">
            <DashboardImage src={CriteriaImage} alt="Track your trades with our demo" />
            <DashboardContent title="Meet Criteria and Advance" content={content} />
        </div>
      </div>
    </div>
  );
}

export default Criteria;
