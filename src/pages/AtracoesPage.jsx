import './CSS/Atracoes.css';
import banda1 from '../assets/img/bandas/bandas.png';
import carro from '../assets/img/atracoes/carros.jpg';
import kids from '../assets/img/atracoes/espaco-kids.JPG';
import Title from '../components/title/Title';


const Atracoes = () => {
  return (
    <section id='atracoes' className="section-container atracoes">
      <Title title="Atrações" />

        {/* ATRAÇOES */}
        <div className='atracao-text'>
          <div className='atracao-item'> {/* BANDAS */}
            <h2>BANDAS</h2>
            <p>Samba, Rock, Country e Sertanejo.</p>
            <div className='banda-content'>
              <img src={banda1} alt="Banda 1" />
            </div>
          </div>
          <div className='atracao-item'>  {/* ESPAÇO KIDS */}
            <h2>ESPAÇO KIDS</h2>
            <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
            <img src={kids} alt="Espaço Kids" className='atv-img' />
          </div>
          <div className='atracao-item'> {/* SORTEIO DE BRINDES */}
            <h2>SORTEIOS DE BRINDES</h2>
            <p>Muitos sorteios de brindes durante todo o evento.</p>
          </div>
          <div className='atracao-item'> {/* EXPOSIÇÃO CARROS ESPORTIVOS */}
              <h2>EXPOSIÇÃO DE CARROS ESPORTIVOS</h2>
              <p>Desfrute de uma exposição imperdível de carros esportivos, onde você poderá admirar de perto modelos icônicos e exclusivos que são verdadeiras obras de arte sobre rodas.</p>
              <img src={carro} alt="Exposição de Carros Antigos" className='atv-img' />
          </div>
          <div className='atracao-item'> {/* EXPOSIÇÃO UTV */}
              <h2>EXPOSIÇÃO DE ATV</h2>
              <p>Explore nossa exposição de UTVs, apresentando uma variedade de modelos robustos e preparados para qualquer aventura, perfeitos para os amantes de adrenalina.</p>
              <img src='https://can-am.brp.com/content/can-am-off-road/pt_br/isto-e-can-am/bananalama-2022/_jcr_content/root/heroblock_copy_copy_.coreimg.jpeg/1704810296411/brp-canam-bananalama-landing-page-hero-block-2-ptbr.jpeg?imwidth=2048' alt="ATV" className='atv-img' />
          </div>
      </div>
    </section>
  );
};

export default Atracoes;
