// src/pages/mobile/BandaMobile.jsx
import './CSS/BandaMobile.css';
import banda1 from '../../assets/img/bandas/banda1.png';
import banda2 from '../../assets/img/bandas/banda2.png';
import banda3 from '../../assets/img/bandas/banda3.png';

const BandaMobile = () => {
  return (
    <section id='bandas' className="section-container-mobile banda-mobile">
      <h1 className="title-mobile">BANDAS</h1>
      <div className='banda-content-mobile'>
        <div className='banda-item-mobile'>
          <img src={banda1} alt="Banda 1" />
          <h2>RED FOX</h2>
        </div>
        <div className='banda-item-mobile'>
          <img src={banda2} alt="Banda 2" />
          <h2>LUCAS PRADO</h2>
        </div>
        <div className='banda-item-mobile'>
          <img src={banda3} alt="Banda 3" />
          <h2>4NS</h2>
        </div>
      </div>
    </section>
  );
};

export default BandaMobile;
