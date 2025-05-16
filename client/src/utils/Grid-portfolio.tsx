import "../style/grid.css";
import pic1 from "../images/portfolio/IMG_5030.jpeg";
import pic2 from "../images/portfolio/IMG_5269.jpeg";
import pic3 from "../images/portfolio/IMG_5601.jpeg";
import pic4 from "../images/portfolio/IMG_5602.jpeg";
import pic5 from "../images/portfolio/IMG_5603.jpeg";
import pic6 from "../images/portfolio/IMG_5604.jpeg";
import pic7 from "../images/portfolio/IMG_5607.jpeg";
import pic8 from "../images/portfolio/IMG_5810.jpeg";
import pic9 from "../images/portfolio/IMG_5972.jpeg";
import pic10 from "../images/portfolio/IMG_7270.jpeg";
import pic11 from "../images/portfolio/IMG_7317.jpeg";
import pic12 from "../images/portfolio/IMG_7538.jpeg";
import pic13 from "../images/portfolio/IMG_7869.jpeg";
import pic14 from "../images/portfolio/IMG_8368.jpeg";
import pic15 from "../images/portfolio/IMG_8437.jpeg";
import pic16 from "../images/portfolio/IMG_8513.jpeg";

export default function Grid() {
  return (
    <>
      <div className="grid">
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic4} alt="pic4" />
        <img src={pic5} alt="pic5" />
        <img src={pic6} alt="pic6" />
        <img src={pic7} alt="pic7" />
        <img src={pic8} alt="pic8" />
        <img src={pic9} alt="pic9" />
        <img src={pic10} alt="pic10" />
        <img src={pic11} alt="pic11" />
        <img src={pic12} alt="pic12" />
        <img src={pic13} alt="pic13" />
        <img src={pic14} alt="pic14" />
        <img src={pic15} alt="pic15" />
        <img src={pic16} alt="pic16" />
      </div>
    </>
  );
}
