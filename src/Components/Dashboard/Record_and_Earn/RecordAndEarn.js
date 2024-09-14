import React from 'react';
import DashboardContent from '../DashboardContent';
import DashboardImage from '../DashboardImage';
import { RecordImage } from '../../../assets/Images/Index';
const Record = () => {
  const content = [
    "Become a thought leader and get rewarded! 'Record & Earn' empowers you to share your trading knowledge and insights with the community. Whether you're recording educational videos, writing detailed trade analyses, or hosting live Q&A sessions, the possibilities are endless.",
    "The more valuable and engaging your content, the more you earn. Our platform rewards creators based on user engagement with their content. This innovative feature allows you to monetize your passion for trading while helping others navigate the markets. Sharpen your skills, build a following, and get rewarded for your expertise—all within one platform.",
    "Not only can you refine your own trading skills, but you can also become a valuable resource for others and earn rewards in the process. With 'Record & Earn,' our innovative platform empowers you to share your trading knowledge and insights with the broader community."
    
  ];

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020e26" fill-opacity="1" d="M0,192L26.7,186.7C53.3,181,107,171,160,154.7C213.3,139,267,117,320,133.3C373.3,149,427,203,480,197.3C533.3,192,587,128,640,106.7C693.3,85,747,107,800,149.3C853.3,192,907,256,960,256C1013.3,256,1067,192,1120,144C1173.3,96,1227,64,1280,90.7C1333.3,117,1387,203,1413,245.3L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            <div
            className="dashboard_body container-fluid pb-md-5 pb-0 pt-3 pt-md-5 px-5" 
            style={{
                background: "#020e25",
                color:"#fff",
                padding:'100px'
            }}
            >
        <div className="row align-items-center">
        <DashboardContent 
            title="Record and Earn" 
            content={content} 
            style={{ color: '#F6F5FA' }} 
          />
          <DashboardImage src={RecordImage} alt="Track your trades with our demo" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020e26" fill-opacity="1" d="M0,0L26.7,32C53.3,64,107,128,160,170.7C213.3,213,267,235,320,224C373.3,213,427,171,480,154.7C533.3,139,587,149,640,154.7C693.3,160,747,160,800,133.3C853.3,107,907,53,960,58.7C1013.3,64,1067,128,1120,138.7C1173.3,149,1227,107,1280,96C1333.3,85,1387,107,1413,117.3L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
    </div>
  );
}

export default Record;