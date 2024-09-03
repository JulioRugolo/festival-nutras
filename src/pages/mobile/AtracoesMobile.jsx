// src/pages/mobile/AtracoesMobile.jsx
import './CSS/AtracoesMobile.css';
import banda1 from '../../assets/img/atracoes/banda--01.png'; // Atualize o caminho das imagens das bandas
import banda2 from '../../assets/img/atracoes/banda--02.png'; 
import banda3 from '../../assets/img/atracoes/banda--03.png'; 
import kids from '../../assets/img/atracoes/espaco-kids.JPG';
import carro from '../../assets/img/atracoes/carros.jpg';
import TitleMobile from './../../components/title/TitleMobile';

const AtracoesMobile = () => {
  return (
    <section id='atracoes' className="section-container-mobile atracoes-mobile">
      <TitleMobile title='Atrações' color="white"/>
      <div className='atracoes-content-mobile'>
        <div className='atracao-item-mobile'>
          <h2>4 NO SERTÃO</h2>
          <p>Sertanejo</p>
          <img src={banda1} alt="Banda 1" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>RED FOX</h2>
          <p>Country</p>
          <img src={banda2} alt="Banda 2" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>LUCAS PRADO</h2>
          <p>Samba, Rock, Country e Sertanejo.</p>
          <img src={banda3} alt="Banda 3" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>ESPAÇO KIDS</h2>
          <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
          <img src={kids} alt="Espaço Kids" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>EXPOSIÇÃO DE CARROS ESPORTIVOS</h2>
          <p>Desfrute de uma exposição imperdível de carros esportivos, onde você poderá admirar de perto modelos icônicos e exclusivos que são verdadeiras obras de arte sobre rodas.</p>
          <img src={carro} alt="Exposição de Carros Esportivos" className='atv-img-mobile' />
        </div>
        <div className='atracao-item-mobile'>
          <h2>EXPOSIÇÃO DE UTV</h2>
          <p>Explore nossa exposição de UTVs, apresentando uma variedade de modelos robustos e preparados para qualquer aventura, perfeitos para os amantes de adrenalina.</p>
          <img src='https://can-am.brp.com/content/can-am-off-road/pt_br/isto-e-can-am/bananalama-2022/_jcr_content/root/heroblock_copy_copy_.coreimg.jpeg/1704810296411/brp-canam-bananalama-landing-page-hero-block-2-ptbr.jpeg?imwidth=2048' alt="ATV" className='atv-img-mobile' />
        </div>
      </div>
    </section>
  );
};

export default AtracoesMobile;
