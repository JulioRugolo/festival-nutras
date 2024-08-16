// src/pages/mobile/AtracoesMobile.jsx
import './CSS/AtracoesMobile.css';
import banda1 from '../../assets/img/bandas/bandas.png';

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

const AtracoesMobile = () => {
  return (
    <section id='atracoes' className="section-container-mobile atracoes-mobile">
      <h1 className="title-mobile">ATRAÇÕES</h1>
      <div className='atracoes-content-mobile'>
        <div className='atracao-item-mobile'>
          <h2>SHOWS DE MÚSICA</h2>
          <p>Samba, Rock, Country e Sertanejo.</p>
          <img src={banda1} alt="Shows de Música" />
        </div>
        <div className='atracao-item-mobile'>
          <h2>ESPAÇO KIDS</h2>
          <p>Um espaço dedicado às crianças, com brinquedos e muita diversão.</p>
        </div>
        <div className='atracao-item-mobile'>
          <h2>DIVERSAS ESTAÇÕES</h2>
          <p>Vários tipos de carnes e cortes especiais feitos pelos melhores churrasqueiros de Botucatu e região, além de hambúrgueres, sobremesas e muito mais!</p>
          <div className="diversas-estacoes-grid-mobile">
            {categorias.map((categoria, index) => (
              <div key={index} className="diversas-estacoes-card-mobile">
                {categoria.foto && <img src={categoria.foto} alt={categoria.nome} className="diversas-estacoes-foto-mobile" />}
                <h3>{categoria.nome}</h3>
                <p>{categoria.descricao}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='atracao-item-mobile'>
          <h2>SORTEIOS DE BRINDES</h2>
          <p>Muitos sorteios de brindes durante todo o evento.</p>
        </div>
      </div>
    </section>
  );
};

export default AtracoesMobile;
