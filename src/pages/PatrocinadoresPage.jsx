import './CSS/Patrocinadores.css';
import bgImage from '../assets/img/hist/bg.png';
import {logosPatrociono, apoioLogos} from '../utils/importPatrocinadores';
import Title from './../components/title/Title';

const PatrocinadoresPage = () => {
  return (
    <div id='patrocinadores' className="patrocinadores-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <Title title='Patrocinadores' color='white' />
      <div className="patrocinadores-container">
        {logosPatrociono.map((logo, index) => (
          <div
            key={index}
            className="patrocinador-box"
          >
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      <Title title='Realização' color='white' />
      <div className="patrocinadores-container">
        {apoioLogos.map((logo, index) => (
          <div
            key={index}
            className="patrocinador-box apoio"
          >
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatrocinadoresPage;
