import './CSS/Patrocinadores.css';
import bgImage from '../assets/img/hist/bg.png';

// Importando os logos dos patrocinadores
import logo1 from '../assets/img/patrocinio/logo-01.png';
import logo2 from '../assets/img/patrocinio/logo-02.png';
import logo3 from '../assets/img/patrocinio/logo-03.png';
import logo4 from '../assets/img/patrocinio/logo-04.png';
import logo5 from '../assets/img/patrocinio/logo-05.png';
import logo6 from '../assets/img/patrocinio/logo-06.png';
import logo7 from '../assets/img/patrocinio/logo-07.png';
import logo8 from '../assets/img/patrocinio/logo-08.png';
import logo9 from '../assets/img/patrocinio/logo-09.png';
import apoio01 from '../assets/img/patrocinio/apoio01.png';
import apoio02 from '../assets/img/patrocinio/apoio02.png';
import Title from './../components/title/Title';
// Continue para todos os logos

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
const apoios = [apoio01, apoio02];

const PatrocinadoresPage = () => {
  return (
    <div id='patrocinadores' className="patrocinadores-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <Title title='Patrocinadores' color='white' />
      <div className="patrocinadores-container">
        {logos.map((logo, index) => (
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
        {apoios.map((logo, index) => (
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
