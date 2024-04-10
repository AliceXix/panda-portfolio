import React from "react";
import { Carousel } from "antd";

import img1 from '../images/portfolio/127399826_730160057939254_1434634398258380236_n.jpg';
import img2 from '../images/portfolio/127468745_836310560532547_91350398798613597_n.jpg';
import img3 from '../images/portfolio/128414387_135004088147300_7659237651471045112_n.jpg';
import img4 from '../images/portfolio/133931721_427772245247695_8768601343619774433_n.jpg';

const contentStyle: React.CSSProperties = {
  height: "100vh",
  color: "#fff",
  lineHeight: "850px",
  textAlign: "center",
  background: "#364d79",
  width: "100vw",
};


export default function CarouselHeader () {

    return (
      <Carousel autoplay className="carousel">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    );
}