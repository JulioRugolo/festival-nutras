// src/pages/mobile/PatrocinadoresMobile.jsx
import './CSS/PatrocinadoresMobile.css';
import bgImage from '../../assets/img/hist/bg.png';
import TitleMobile from './../../components/title/TitleMobile';
import {logosPatrociono, apoioLogos} from '../../utils/importPatrocinadores';


const PatrocinadoresMobile = () => {
  return (
    <div id='patrocinadores' className="patrocinadores-page-mobile" style={{ backgroundImage: `url(${bgImage})` }}>
      <TitleMobile title='Patrocinadores' color='white' className="title-mobile-patrocinadores" />

      <div className="patrocinadores-container-mobile">
        {logosPatrociono.map((logo, index) => (
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
        {apoioLogos.map((logo, index) => (
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
