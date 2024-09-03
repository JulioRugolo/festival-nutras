// src/pages/mobile/PatrocinadoresMobile.jsx
import './CSS/PatrocinadoresMobile.css';
import bgImage from '../../assets/img/hist/bg.png';

// Importando os logos dos patrocinadores
import logo1 from '../../assets/img/patrocinio/logo-01.jpg';
import logo2 from '../../assets/img/patrocinio/logo-02.png';
import logo3 from '../../assets/img/patrocinio/logo-03.jpg';
import logo4 from '../../assets/img/patrocinio/logo-04.jpg';
import logo5 from '../../assets/img/patrocinio/logo-05.jpg';
import logo6 from '../../assets/img/patrocinio/logo-06.jpg';
import logo7 from '../../assets/img/patrocinio/logo-07.jpg';
import logo8 from '../../assets/img/patrocinio/logo-08.jpg';
import logo9 from '../../assets/img/patrocinio/logo-09.jpg';
import logo10 from '../../assets/img/patrocinio/logo-10.jpg';
import logo11 from '../../assets/img/patrocinio/logo-11.jpg';
import logo12 from '../../assets/img/patrocinio/logo-12.jpg';
import logo13 from '../../assets/img/patrocinio/logo-13.jpg';
import logo14 from '../../assets/img/patrocinio/logo-14.jpg';
import logo15 from '../../assets/img/patrocinio/logo-15.jpg';
import logo16 from '../../assets/img/patrocinio/logo-16.jpg';
import logo17 from '../../assets/img/patrocinio/logo-17.jpg';
import logo18 from '../../assets/img/patrocinio/logo-18.jpg';
import logo19 from '../../assets/img/patrocinio/logo-19.jpg';
import logo20 from '../../assets/img/patrocinio/logo-20.jpg';
import logo21 from '../../assets/img/patrocinio/logo-21.jpg';
import logo22 from '../../assets/img/patrocinio/logo-22.jpg';
import logo23 from '../../assets/img/patrocinio/logo-23.jpg';
import logo24 from '../../assets/img/patrocinio/logo-24.jpg';
import logo25 from '../../assets/img/patrocinio/logo-25.jpg';
import logo26 from '../../assets/img/patrocinio/logo-26.jpg';
import logo27 from '../../assets/img/patrocinio/logo-27.jpg';
import logo28 from '../../assets/img/patrocinio/logo-28.jpg';
import logo29 from '../../assets/img/patrocinio/logo-29.jpg';
import logo30 from '../../assets/img/patrocinio/logo-30.jpg';  
import logo31 from '../../assets/img/patrocinio/logo-31.jpg';

import apoio01 from '../../assets/img/patrocinio/apoio01.png';
import apoio02 from '../../assets/img/patrocinio/apoio02.png';
import TitleMobile from './../../components/title/TitleMobile';
// Continue para todos os logos

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30, logo31];
const apoios = [apoio01, apoio02];

const PatrocinadoresMobile = () => {
  return (
    <div id='patrocinadores' className="patrocinadores-page-mobile" style={{ backgroundImage: `url(${bgImage})` }}>
      <TitleMobile title='Patrocinadores' color='white' className="title-mobile-patrocinadores" />

      <div className="patrocinadores-container-mobile">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="patrocinador-box-mobile"
          >
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>

      <TitleMobile title='Realização' color='white' className="title-mobile-patrocinadores" />

      <div className="patrocinadores-container-mobile">
        {apoios.map((logo, index) => (
          <div
            key={index}
            className="patrocinador-box-mobile apoio-mobile"
          >
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatrocinadoresMobile;
