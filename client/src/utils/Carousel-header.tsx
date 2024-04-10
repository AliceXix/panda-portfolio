import React from "react";
import { Carousel } from "antd";

import img1 from '../images/portfolio/127399826_730160057939254_1434634398258380236_n.jpg';
import img2 from '../images/portfolio/127468745_836310560532547_91350398798613597_n.jpg';
import img3 from '../images/portfolio/128414387_135004088147300_7659237651471045112_n.jpg';
import img4 from '../images/portfolio/133931721_427772245247695_8768601343619774433_n.jpg';


function FullScreenImage({backgroundImgUrl}: {backgroundImgUrl: string}) {
  const contentStyle: React.CSSProperties = {
    color: "#fff",
    lineHeight: "850px",
    textAlign: "center",
    backgroundImage: `url(${backgroundImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return <div className="full-screen-container" style={contentStyle}></div>;
}


export default function CarouselHeader () {

    return (
      <Carousel autoplay className="carousel">
        <div>
          <FullScreenImage backgroundImgUrl={img1} />
        </div>
        <div>
          <FullScreenImage backgroundImgUrl={img2} />
        </div>
        <div>
          <FullScreenImage backgroundImgUrl={img3} />
        </div>
        <div>
          <FullScreenImage backgroundImgUrl={img4} />
        </div>
      </Carousel>
    );
}