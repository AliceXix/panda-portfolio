import React from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './views/Header';
import Values from './views/Values';
import Contact from './views/Contact';
import Portfolio from './views/Portolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Values/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
