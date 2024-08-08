import './CSS/Atracoes.css';
import foodStations from '../assets/img/atracoes/IMAGEM_ATRAÇÕES.png';
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';

const Atracoes = () => {
  return (
    <section id='atracoes' className="section-container atracoes">
      <div className='atracoes-content-title'>
        <div className='title'>
          <img src={garfo} alt="Garfo" />
          <h1>Atrações</h1>
          <img src={faca} alt="Faca" />
        </div>
        <div className='atracao-text'>
          <div className='atracao-item'>
            <h2>SHOWS DE MÚSICA</h2>
            <p>Samba, Rock, Country e Sertanejo.</p>
          </div>
          <div className='atracao-item'>
            <h2>ESPAÇO KIDS</h2>
            <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
          </div>
          <div className='atracao-item'>
            <h2>DIVERSAS ESTAÇÕES</h2>
            <p>Vários tipos de carnes e cortes especiais feitos pelos melhores churrasqueiros de Botucatu e região, além de hambúrgueres, sobremesas e muito mais!</p>
          </div>
          <div className='atracao-item'>
            <h2>SORTEIOS DE BRINDES</h2>
            <p>Muitos sorteios de brindes durante todo o evento.</p>
          </div>
        </div>
      </div>

      <div className='atracao-image-item'>
        <img src={foodStations} alt="Diversas Estações" />
      </div>
    </section>
  );
};

export default Atracoes;
