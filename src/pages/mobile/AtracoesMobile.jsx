// src/pages/mobile/AtracoesMobile.jsx
import './CSS/AtracoesMobile.css';
import banda1 from '../../assets/img/bandas/bandas.png';

const AtracoesMobile = () => {
  return (
    <section id='atracoes' className="section-container-mobile atracoes-mobile">
      <h1 className="title-mobile">ATRAÇÕES</h1>
      <div className='atracoes-content-mobile'>
        <div className='atracao-item-mobile'>
          <h2>SHOWS DE MÚSICA</h2>
          <p>Samba, Rock, Country e Sertanejo.</p>
          <img src={banda1} alt="Shows de Música" />
        </div>
        <div className='atracao-item-mobile'>
          <h2>ESPAÇO KIDS</h2>
          <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
        </div>
        <div className='atracao-item-mobile'>
          <h2>SORTEIOS DE BRINDES</h2>
          <p>Muitos sorteios de brindes durante todo o evento.</p>
        </div>
        <div className='atracao-item-mobile'>
          <h2>EXPOSIÇÃO DE CARROS ESPORTIVOS</h2>
          <p>Desfrute de uma exposição imperdível de carros esportivos, onde você poderá admirar de perto modelos icônicos e exclusivos que são verdadeiras obras de arte sobre rodas.</p>
        </div>
        <div className='atracao-item-mobile'>
          <h2>EXPOSIÇÃO DE ATV</h2>
          <p>Explore nossa exposição de ATVs, apresentando uma variedade de modelos robustos e preparados para qualquer aventura, perfeitos para os amantes de adrenalina.</p>
        </div>
      </div>
    </section>
  );
};

export default AtracoesMobile;
