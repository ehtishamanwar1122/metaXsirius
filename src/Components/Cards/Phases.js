import React from 'react';
import './card.css';

const cardsData = [
  {
    id: 1,
    number: '01',
    title: "Rules of Phase 1",
    description: "This is an INVITE-ONLY group and you have to be in line for this group AND approved by an existing member who is voted on by our NEW member committee and only 1 NEW member is approved per DA"
  },
  {
    id: 2,
    number: '02',
    title: "Rules of Phase 2",
    description: "Meet the criteria for each stage and advance to the next level."
  },
  {
    id: 3,
    number: '03',
    title: "Rules of Phase 3",
    description: "Includes all Pro features plus access to borrowing funds and additional rewards."
  }
];

const Card = ({ number, title, description }) => (
    <div className="card text-white " style={{ backgroundColor: '#0A152D' }}>
      <div className="icon number-box">
        {number}
      </div>
      <h3 className="card-title" style={{textAlign:'center'}}>{title}</h3>
      <p className="card-description" style={{fontFamily:'General Sans',fontSize:'12px',textAlign:'center',fontWeight:'400'}}>{description}</p>
    </div>
  );

const PhasesList = () => (
  <div className="box card-top2 d-flex flex-column" >
    <h1 className="text-center text-white">Phases</h1>
    <div className="card-list d-flex flex-wrap justify-content-between container" >
      {cardsData.map((card) => (
        <Card 
          key={card.id} 
          number={card.number} 
          title={card.title} 
          description={card.description} 
          
        />
      ))}
    </div>
  </div>
);

export default PhasesList;
