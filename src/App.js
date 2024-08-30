import React from 'react';
import './App.css';
import { Navbar,Hero,Card,Dashboard,Criteria,RecieveAndTrade,Record,PhasesList,About, Footer } from './Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <Card />
      <Criteria />
      <Record />
      <RecieveAndTrade />
      <PhasesList />
      <About />
      <Footer />
    </>
  );
}

export default App;
