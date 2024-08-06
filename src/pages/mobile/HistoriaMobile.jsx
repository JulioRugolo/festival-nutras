// src/pages/mobile/HistoriaMobile.jsx
import '../../assets/img/hist/bg_section.png';
import '../../assets/img/hist/cta.png';
import '../../assets/img/hist/FUNDO-CONTAGEM.png';
import '../../assets/img/hist/Imagem_setor.png';
import '../../assets/img/hist/logo_nutras.png';
import '../../assets/img/elementos/01-garfo.png';
import '../../assets/img/elementos/02-faca.png';
import './CSS/HistoriaMobile.css';
import CountdownMobile from '../../components/Countdown/CountdownMobile';

const HistoriaMobile = () => {
  return (
    <section id="historia" className="section-container-mobile section2-mobile">
      <div className='hist-container-mobile'>
        <img className='hist-evento-mobile' src='../../assets/img/hist/Imagem_setor.png' alt="Setor" />
        <img className='logo-nutras-mobile' src='../../assets/img/hist/logo_nutras.png' alt="Logo Nutras" />
        <div className='hist-content-mobile'>
          <div className='hist-content-title-mobile'>
            <img src='../../assets/img/hist/01-garfo.png' alt="Garfo" />
            <h1>A História</h1>
            <img src='../../assets/img/hist/02-faca.png' alt="Faca" />
          </div>
          <p>
            O Festival de Churrasco do Nutras teve sua primeira edição realizada em 2022 com o objetivo de angariar fundos para a manutenção do projeto Nutras, que atende atualmente mais de 400 crianças e adolescentes na faixa etária de 04 a 14 anos no contraturno escolar. O Projeto visa promover a inclusão social das crianças e adolescentes através da disseminação do conhecimento e da informação, de modo a capacitá-las e conscientizá-las sobre sua responsabilidade como protagonistas capazes de intervir na sua realidade pessoal e social, permitindo enxergar oportunidades de transformação.
          </p>
        </div>
      </div>
      <CountdownMobile />
      <div className='hist-2-mobile'>
        <div className='hist-content-title2-mobile'>
          <h1>Lugar onde 
              o coração bate 
              mais forte e a 
              solidariedade 
              fala mais alto
          </h1>
        </div>
        <img className='' src='../../assets/img/hist/Imagem_setor.png' alt="Setor" />
        <div className='hist-2-content-mobile'>
          <p>
            Festival de Churrasco do Nutras, onde a solidariedade encontra um ambiente acolhedor, repleto de momentos e sabores inesquecíveis.
            É uma mistura de toda a gastronomia de um bom e delicioso churrasco.
            Um dia especial dedicado as nossas crianças.
            É mais do que churrasco, é uma celebração inesquecível ao lado de amigos e familiares.
            Em 2024 nosso encontro está marcado para o dia 20/10/2024 no Espaço Na Mata, em Botucatu/SP, 
            a partir das 11:30h.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoriaMobile;
