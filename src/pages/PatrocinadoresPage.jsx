import './CSS/Patrocinadores.css';
import bgImage from '../assets/img/hist/bg.png';
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';

const PatrocinadoresPage = () => {
  return (
    <div id='patrocinadores' className="patrocinadores-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='title'>
          <img src={garfo} alt="Garfo" />
          <h1>PATROCINADORES</h1>
          <img src={faca} alt="Faca" />
        </div>
      <div className="patrocinadores-container">
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
        <div className="patrocinador-box"></div>
      </div>
      <div className='title'>
          <img src={garfo} alt="Garfo" />
          <h1>APOIO</h1>
          <img src={faca} alt="Faca" />
        </div>
      <div className="apoio-container">
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
        <div className="apoio-box"></div>
      </div>
    </div>
  );
};

export default PatrocinadoresPage;
