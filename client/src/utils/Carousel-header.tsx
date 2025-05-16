import React from "react";
import { Carousel } from "antd";

import img1 from "../images/portfolio/IMG_7869.jpeg";
import img2 from "../images/portfolio/IMG_8437.jpeg";
import img3 from "../images/portfolio/IMG_8513.jpeg";
import img4 from "../images/portfolio/IMG_7317.jpeg";

function FullScreenImage({ backgroundImgUrl }: { backgroundImgUrl: string }) {
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

export default function CarouselHeader() {
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
