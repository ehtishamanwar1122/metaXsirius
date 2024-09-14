import React from 'react';
import DashboardContent from '../DashboardContent'
import DashboardImage from '../DashboardImage';
import { RecieveAndTradeImage } from '../../../assets/Images/Index';
import '../Dashboard.css';

const RecieveAndTrade = () => {
  const content = [
    "We strongly recommend beginning with a demo to solidify your skills, but 'Receive and Trade' unlocks the market's full potential. Available to qualified Phase 1, Phase 2, and Phase 3 users, this feature allows you to leverage additional capital to amplify your trades. Remember, receiving involves risk, so use this feature strategically after perfecting your plans in the demo environment. Trade with confidence and explore new opportunities with 'Receive and Trade.' Note: Availability and requirements are subject to approval",
    "'Receive and Trade' empowers qualified users to access extra capital, enhancing the potential returns on your strategies. Use this feature to capitalize on lucrative opportunities that may have been beyond reach with limited capital."
  ];

  return (
    <div>

      <div className="dashboard_body container-fluid pb-md-5 pb-0 pt-3 pt-md-5 px-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
            <DashboardImage src={RecieveAndTradeImage} alt="Track your trades with our demo" />
            <DashboardContent title="Receive Funds and Trade Live" content={content} />
        </div>
      </div>
    </div>
  );
}

export default RecieveAndTrade;
