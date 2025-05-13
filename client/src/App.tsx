import React from "react";
import "./index.css";
import Header from "./views/Header";
import Values from "./views/Values";
import Contact from "./views/Contact";
import Portfolio from "./views/Portolio";
import CarouselHeader from "./utils/Carousel-header";
import Overlay from "./utils/Overlay";
import { BrowserRouter as Router } from "react-router-dom";
import useOrientationLock from "./hooks/useOrientationLock";
import LandscapeBlocker from "./utils/LandscapeBlocker";

function App() {
  const isLandscape = useOrientationLock();

  return (
    <Router>
      <div className="App">
        <LandscapeBlocker isLandscape={isLandscape} />
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
