import React from 'react';
import { IoMdPeople } from "react-icons/io";
import { GrPerformance } from "react-icons/gr";
import { AiTwotoneTrophy } from "react-icons/ai";
import './card.css';

const cardsData = [
  {
    id: 1,
    icon: IoMdPeople,
    title: "Community and Support",
    description: "Join a community of traders and get support from experts."
  },
  {
    id: 2,
    icon: GrPerformance,
    title: "Performance and Analytics",
    description: "Detailed analytics to help you improve your trading strategies."
  },
  {
    id: 3,
    icon: AiTwotoneTrophy,
    title: "Reward System",
    description: "Earn rewards as you progress and perform well."
  }
];

const Card = ({ Icon, title, description, className }) => (
  <div className={`card ${className}`}>
    <div className="icon">
      <Icon size={25} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const CardList = () => {
  const middleIndex = Math.floor(cardsData.length / 2);

  return (
    <>
      <div className="box card-top d-flex flex-column">
        <h1 className="text-center text-white">Features</h1>
        <div className="card-list d-flex flex-wrap justify-content-center container">
          {cardsData.map((card, index) => (
            <Card
              key={card.id}
              Icon={card.icon}
              title={card.title}
              description={card.description}
              className={
                index === 0 ? 'first-card' :
                index === cardsData.length - 1 ? 'last-card' :
                index === middleIndex ? 'central-card' : ''
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardList;
