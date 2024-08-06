// src/pages/mobile/AtracoesMobile.jsx
import './CSS/AtracoesMobile.css';
import musicShow from '../../assets/img/atracoes/BANDA.JPG';
import prizeDraws from '../../assets/img/atracoes/IMAGEM_ATRAÇÕES.png';
import foodStations from '../../assets/img/atracoes/IMAGEM_ATRAÇÕES.png';
import kidsSpace from '../../assets/img/atracoes/kids.JPG';

const AtracoesMobile = () => {
  return (
    <section id='atracoes' className="section-container-mobile atracoes-mobile">
      <h1 className="title-mobile">ATRAÇÕES</h1>
      <div className='atracoes-content-mobile'>
        <div className='atracao-item-mobile'>
          <img src={musicShow} alt="Shows de Música" />
          <h2>SHOWS DE MÚSICA</h2>
          <p>Samba, Rock, Country e Sertanejo.</p>
        </div>
        <div className='atracao-item-mobile'>
          <img src={kidsSpace} alt="Espaço Kids" />
          <h2>ESPAÇO KIDS</h2>
          <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
        </div>
        <div className='atracao-item-mobile'>
          <img src={foodStations} alt="Diversas Estações" />
          <h2>DIVERSAS ESTAÇÕES</h2>
          <p>Vários tipos de carnes e cortes especiais feitos pelos melhores churrasqueiros de Botucatu e região, além de hambúrgueres, sobremesas e muito mais!</p>
        </div>
        <div className='atracao-item-mobile'>
          <img src={prizeDraws} alt="Sorteios de Brindes" />
          <h2>SORTEIOS DE BRINDES</h2>
          <p>Muitos sorteios de brindes durante todo o evento.</p>
        </div>
      </div>
    </section>
  );
};

export default AtracoesMobile;
