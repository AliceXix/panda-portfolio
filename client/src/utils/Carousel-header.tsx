import React from "react";
import { Carousel } from "antd";

import imgI from "../images/portfolio/logo-panda.jpg";

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
        <FullScreenImage backgroundImgUrl={imgI} />
      </div>
    </Carousel>
  );
}
