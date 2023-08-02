import '../style/grid.css'
import pic1 from '../images/portfolio/127399826_730160057939254_1434634398258380236_n.jpg'
import pic2 from '../images/portfolio/127468745_836310560532547_91350398798613597_n.jpg'
import pic3 from '../images/portfolio/128414387_135004088147300_7659237651471045112_n.jpg'
import pic4 from '../images/portfolio/133931721_427772245247695_8768601343619774433_n.jpg'
import pic5 from '../images/portfolio/158136335_871657340290592_5507931989184164208_n.jpg'
import pic6 from '../images/portfolio/161022076_863786830866178_525378282921711399_n.jpg'
import pic7 from '../images/portfolio/203667786_223933426228564_5360448458767544917_n.jpg'
import pic8 from '../images/portfolio/241405992_989973858241300_3058881105954711720_n.jpg'
import pic9 from '../images/portfolio/243520909_617449339253205_7689537637692716873_n.jpg'
import pic10 from '../images/portfolio/275913845_284237590453270_7799717156591417416_n.webp'
import pic11 from '../images/portfolio/279573559_1644864395885034_5672904606067822507_n.webp'
import pic12 from '../images/portfolio/28434406_1261893887276556_4640855692545097728_n.jpg'

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
        </div>
      </>
    );
};