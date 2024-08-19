import './CSS/Atracoes.css';
import banda1 from '../assets/img/bandas/bandas.png';
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';

const Atracoes = () => {
  return (
    <section id='atracoes' className="section-container atracoes">
      <div className='atracoes-content-title'>
        <div className='title'>
          <img className='elementos-title' src={garfo} alt="Garfo" />
          <h1>Atrações</h1>
          <img className='elementos-title' src={faca} alt="Faca" />
        </div>
        <div className='atracao-text'>
          <div className='atracao-item'>
            <h2>BANDAS</h2>
            <p>Samba, Rock, Country e Sertanejo.</p>
            <div className='banda-content'>
              <img src={banda1} alt="Banda 1" />
            </div>
          </div>

          <div className='atracao-item'>
            <h2>ESPAÇO KIDS</h2>
            <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
            <div className='banda-content atv-img'>
              <img className='atv-img' src='https://jumparound.com.br/wp-content/uploads/2024/04/IMG_2409-scaled.jpg' alt="Espaço Kids" />
            </div>
          </div>

          <div className='atracao-item'>
            <h2>SORTEIOS DE BRINDES</h2>
            <p>Muitos sorteios de brindes durante todo o evento.</p>
          </div>
          <div className='atracao-item'>
              <h2>EXPOSIÇÃO DE CARROS ESPORTIVOS</h2>
              <p>Desfrute de uma exposição imperdível de carros esportivos, onde você poderá admirar de perto modelos icônicos e exclusivos que são verdadeiras obras de arte sobre rodas.</p>
          </div>
          <div className='atracao-item'>
              <h2>EXPOSIÇÃO DE ATV</h2>
              <p>Explore nossa exposição de ATVs, apresentando uma variedade de modelos robustos e preparados para qualquer aventura, perfeitos para os amantes de adrenalina.</p>
              <img src='https://blog.dandaro4x4.com.br/wp-content/uploads/2020/12/Whats-the-Difference-ATV-vs-UTV-0-Hero-1087x725.jpg' alt="ATV" className='atv-img' />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Atracoes;
