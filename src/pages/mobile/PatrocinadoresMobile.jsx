// src/pages/mobile/PatrocinadoresMobile.jsx
import './CSS/PatrocinadoresMobile.css';
import bgImage from '../../assets/img/hist/bg.png';

// Importando os logos dos patrocinadores
import logo1 from '../../assets/img/patrocinio/logo-01.png';
import logo2 from '../../assets/img/patrocinio/logo-02.png';
import logo3 from '../../assets/img/patrocinio/logo-03.png';
import logo4 from '../../assets/img/patrocinio/logo-04.png';
import logo5 from '../../assets/img/patrocinio/logo-05.png';
import logo6 from '../../assets/img/patrocinio/logo-06.png';
import logo7 from '../../assets/img/patrocinio/logo-07.png';
import logo8 from '../../assets/img/patrocinio/logo-08.png';
import logo9 from '../../assets/img/patrocinio/logo-09.png';
import TitleMobile from './../../components/title/TitleMobile';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

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
    </div>
  );
};

export default PatrocinadoresMobile;
