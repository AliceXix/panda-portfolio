import React from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './views/Header';
import Values from './views/Values';
import Contact from './views/Contact';
import Portfolio from './views/Portolio';
import CarouselHeader from './utils/Carousel-header';
import Overlay from './utils/Overlay';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <CarouselHeader />
        <Overlay>
          <Header />
        </Overlay>
          <Values />
          <Portfolio />
          <Contact />
      </div>
    </Router>
  );
}

export default App;
