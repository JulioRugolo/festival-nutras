import './CSS/Atracoes.css';
import banda1 from '../assets/img/bandas/bandas.png';
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';

const categorias = [
  {
    nome: 'Massas',
    descricao: 'Deliciosas massas artesanais com molhos variados.',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHrGNEEh853o51XlEsVicrCr78S4HgjsK2g&s'
  },
  {
    nome: 'Carnes',
    descricao: 'Cortes especiais preparados pelos melhores churrasqueiros.',
    foto: 'https://img.freepik.com/fotos-premium/costelinha-de-porco-com-molho-barbecue-batata-frita-e-arroz_538646-6541.jpg'
  },
  {
    nome: 'Lanches',
    descricao: 'Lanches variados para todos os gostos.',
    foto: 'https://img.freepik.com/fotos-premium/um-hamburguer-com-fundo-preto-e-fundo-preto_915607-21.jpg'
  }
];

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
            <div className='banda-content kids'>
              <img src='https://jumparound.com.br/wp-content/uploads/2024/04/IMG_2409-scaled.jpg' alt="Espaço Kids" />
            </div>
          </div>

          <div className='atracao-item'>
            <h2>DIVERSAS ESTAÇÕES</h2>
            <p>Vários tipos de carnes e cortes especiais feitos pelos melhores churrasqueiros de Botucatu e região, além de hambúrgueres, sobremesas e muito mais!</p>
            <div className="diversas-estacoes-grid">
              {categorias.map((categoria, index) => (
                <div key={index} className="diversas-estacoes-card">
                  {categoria.foto && <img src={categoria.foto} alt={categoria.nome} className="diversas-estacoes-foto" />}
                  <h3>{categoria.nome}</h3>
                  <p>{categoria.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='atracao-item'>
            <h2>SORTEIOS DE BRINDES</h2>
            <p>Muitos sorteios de brindes durante todo o evento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atracoes;
