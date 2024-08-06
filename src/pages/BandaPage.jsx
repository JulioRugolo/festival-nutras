// src/pages/BandaPage.jsx
import './CSS/Banda.css';
import banda1 from '../assets/img/bandas/banda1.png';
import banda2 from '../assets/img/bandas/banda2.png';
import banda3 from '../assets/img/bandas/banda3.png';
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';

const BandaPage = () => {
  return (
    <section id='bandas' className="section-container banda">
      <div className='banda-content-title'>
        <img src={garfo} alt="Garfo" />
        <h1>BANDAS</h1>
        <img src={faca} alt="Faca" />
      </div>
      <div className='banda-content'>
        <div className='banda-item'>
          <div className='banda-image'>
            <img src={banda1} alt="Banda 1" />
          </div>
          <h2>RED FOX</h2>
        </div>
        <div className='banda-item'>
          <div className='banda-image'>
            <img src={banda2} alt="Banda 2" />
          </div>
          <h2>LUCAS PRADO</h2>
        </div>
        <div className='banda-item'>
          <div className='banda-image'>
            <img src={banda3} alt="Banda 3" />
          </div>
          <h2>4NS</h2>
        </div>
      </div>
    </section>
  );
};

export default BandaPage;
