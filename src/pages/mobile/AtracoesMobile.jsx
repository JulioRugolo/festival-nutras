// src/pages/mobile/AtracoesMobile.jsx
import './CSS/AtracoesMobile.css';
import banda1 from '../../assets/img/bandas/bandas.png';
import kids from '../../assets/img/atracoes/espaco-kids.JPG';
import carro from '../../assets/img/atracoes/carros.jpg';
import TitleMobile from './../../components/title/TitleMobile';

const AtracoesMobile = () => {
  return (
    <section id='atracoes' className="section-container-mobile atracoes-mobile">
      <TitleMobile title='Atrações' color="white"/>
      <div className='atracoes-content-mobile'>
        <div className='atracao-item-mobile'>
          <h2>SHOWS DE MÚSICA</h2>
          <p>Samba, Rock, Country e Sertanejo.</p>
          <img src={banda1} alt="Shows de Música" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>ESPAÇO KIDS</h2>
          <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
          <img src={kids} alt="Espaço Kids" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>SORTEIOS DE BRINDES</h2>
          <p>Muitos sorteios de brindes durante todo o evento.</p>
        </div>
        <div className='atracao-item-mobile'>
          <h2>EXPOSIÇÃO DE CARROS ESPORTIVOS</h2>
          <p>Desfrute de uma exposição imperdível de carros esportivos, onde você poderá admirar de perto modelos icônicos e exclusivos que são verdadeiras obras de arte sobre rodas.</p>
          <img src={carro} alt="Exposição de Carros Esportivos" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>EXPOSIÇÃO DE ATV</h2>
          <p>Explore nossa exposição de ATVs, apresentando uma variedade de modelos robustos e preparados para qualquer aventura, perfeitos para os amantes de adrenalina.</p>
          <img src='https://can-am.brp.com/content/can-am-off-road/pt_br/isto-e-can-am/bananalama-2022/_jcr_content/root/heroblock_copy_copy_.coreimg.jpeg/1704810296411/brp-canam-bananalama-landing-page-hero-block-2-ptbr.jpeg?imwidth=2048' alt="ATV" className='atv-img-mobile' />
        </div>
      </div>
    </section>
  );
};

export default AtracoesMobile;
