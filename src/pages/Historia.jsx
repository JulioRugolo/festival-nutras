import './CSS/Historia.css';

// Importando as imagens
import bgSection from '../assets/img/hist/bg_section.png';
import imgSetor from '../assets/img/hist/Imagem_setor.png';
import logoNutras from '../assets/img/hist/logo_nutras.png';
import Title from '../components/title/Title';

const Historia = () => {
  return (
    <section id="historia" className="section-container section2" >
      <div className='hist-container' style={{ backgroundImage: `url(${bgSection})` }}>
        <img className='hist-evento' src={imgSetor} alt="Setor" />
        <img className='logo-nutras' src={logoNutras} alt="Logo Nutras" />
        <div className='hist-content'>
        <Title title="Atrações" color="#d84f1d" />
          <p>
            O Festival de Churrasco do Nutras teve sua primeira edição realizada em 2022 com o objetivo de angariar fundos para a manutenção do projeto Nutras, que atende atualmente mais de 400 crianças e adolescentes na faixa etária de 04 a 14 anos no contraturno escolar. O Projeto visa promover a inclusão social das crianças e adolescentes através da disseminação do conhecimento e da informação, de modo a capacitá-las e conscientizá-las sobre sua responsabilidade como protagonistas capazes de intervir na sua realidade pessoal e social, permitindo enxergar oportunidades de transformação.
          </p>
        </div>
      </div>
      <div className='hist-2'>
        <div className='hist-content-title2'>
          <h1>Lugar onde 
            o coração bate 
            mais forte e a 
            solidariedade 
            fala mais alto
          </h1>
        </div>
        <img src={imgSetor} alt="Setor" />
        <div className='hist-2-content'>
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

export default Historia;
