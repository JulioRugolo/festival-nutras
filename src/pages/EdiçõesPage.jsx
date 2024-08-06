import './CSS/Edicoes.css'
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';
import edicao_2022 from '../assets/img/edicoes/FOTO_EDIÇÃO_2022.png';
import edicao_2023 from '../assets/img/edicoes/FOTO_EDIÇÃO_2023.png';



const EdicoesPage = () => {
  return (
    <section id='edicoes' className='section-container edicoes'>
      <div className='edicoes-content-title'>
          <img src={garfo} alt="Garfo" />
          <h1>EDIÇÕES ANTERIORES</h1>
          <img src={faca} alt="Faca" />
        </div>
      <div className='edicoes-content'>
        <img src={edicao_2022} alt="Faca" />
        <img src={edicao_2023} alt="Faca" />
      </div>
    </section>
  );
};

export default EdicoesPage;
