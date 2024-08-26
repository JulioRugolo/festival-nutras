import './CSS/Gastronomia.css';

// Continue importando as outras fotos
import Title from './../components/title/Title';

const pratos = [
  {
    nome: 'Costelinha Barbecue e Batata Frita',
    foto: 'https://img.freepik.com/fotos-premium/costelinha-de-porco-com-molho-barbecue-batata-frita-e-arroz_538646-6541.jpg'
  },
  {
    nome: 'Spaghetti com Porpeta',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHrGNEEh853o51XlEsVicrCr78S4HgjsK2g&s'
  },
  {
    nome: 'Lanche Pig Mac',
    foto: 'https://img.freepik.com/fotos-premium/um-hamburguer-com-fundo-preto-e-fundo-preto_915607-21.jpg'
  },
  {
    nome: 'X Catedral',
    foto: 'https://st4.depositphotos.com/1006753/20640/i/450/depositphotos_206408458-stock-photo-delicious-grilled-burgers.jpg'
  },
  {
    nome: 'Mandioca Frita, Linguiça Caipira e Leitoa a Passarinho',
    foto: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/50/df/dc/frango-a-passarinho-com.jpg'
  },
  {
    nome: 'Panceta, Porpeta e Frango a Passarinho',
    foto: 'https://media.istockphoto.com/id/1407015540/pt/foto/fried-pork-skin-pork-rinds-typical-brazilian-food-panceta-with-fried-manioc-lime-and-pepper.jpg?s=612x612&w=0&k=20&c=B_vjNfzlwIzS-a-SGHLNWQASjdIbD39UuJ1NbdHNnLQ='
  },
  {
    nome: 'Empanada Argentina (1.000un)',
    foto: 'https://st2.depositphotos.com/1692343/5665/i/450/depositphotos_56654091-stock-photo-homemade-stuffed-chicken-empanadas.jpg'
  },
  {
    nome: 'Pullod Pork',
    foto: 'https://img.freepik.com/fotos-premium/sanduiche-de-carne-de-porco-ao-estilo-avocadopunk-em-fundo-preto_899449-81236.jpg'
  },
  {
    nome: 'Fish and Chips',
    foto: 'https://img.freepik.com/fotos-premium/um-prato-de-peixe-a-milanesa-e-batatas-fritas-com-molho-tartaro-em-um-fundo-preto_850140-1193.jpg'
  },
  {
    nome: 'Espeto de Tilapia com Legumes, Bacon e Farofa',
    foto: 'https://img.freepik.com/fotos-premium/file-de-churrasco-com-bacon-no-espeto-sobre-fundo-preto-gastronomia-brasileira_491130-82.jpg'
  },
  {
    nome: 'Cupim com Molho de Gorgonzola',
    foto: 'https://somdepapo.com.br/portal/wp-content/uploads/2021/04/IMG-20210403-WA0007.jpg'
  },
  {
    nome: 'Chorizo com Shitake',
    foto: 'https://obagastronomia.com.br/wp-content/uploads/2015/05/Bife-de-chorizo-com-funghi-e-shitake.jpg'
  },
  {
    nome: 'Bife Ancho com Arroz Biro Biro',
    foto: 'https://www.nidelins.com.br/wp-content/uploads/2021/10/black-bull16-1024x498.jpg'
  },
  {
    nome: 'Fraldinha com Farofa de Ovo',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1flABb9eNu0FtsiCWoLUtPV0mOvLAkJ6OfQ&s'
  },
  {
    nome: 'Picanha com Chimichurri e Farofa',
    foto: 'https://receitasdepesos.com.br/wp-content/uploads/2023/10/picanha-grelhada-comfarofa-e-vinagrete-1-1062x720.jpg'
  },
  {
    nome: 'Cordeiro Fogo de Chão e Varal de Legumes (3 un)',
    foto: 'https://www.oassador.com.br/wp-content/uploads/2023/08/FOGO-DE-CHAO3-scaled.jpg'
  },
  {
    nome: 'Churrasco Caipira',
    foto: 'https://img.freepik.com/fotos-gratis/fotografia-cinematografica-de-bife-grelhado_1409-5680.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723680000&semt=ais_hybrid'
  },
  {
    nome: 'Costela Fogo de Chao, Banana Assada com Doce de Leite, Abacaxi com Canela (8 Costelas)',
    foto: 'https://static.itdg.com.br/images/1200-675/e28667271805a6f7499f7f2c943a41af/335515-original.jpg'
  },
  {
    nome: 'Cordeiro Desossado no Espeto (3 Cordeiros)',
    foto: 'https://i.ytimg.com/vi/eeVijJYxb-Y/maxresdefault.jpg'
  }
];

const GastronomiaPage = () => {
  return (
    <div id='gastronomia' className="gastronomia-page">
      <Title title="Gastronomia" color="white" />
      <div className="pratos-container">
        {pratos.map((prato, index) => (
          <div key={index} className="prato-box">
            <img src={prato.foto} alt={prato.nome} className="prato-foto" />
            <h2>{prato.nome}</h2>
            <span className='obs'>Imagens meramente ilustrativas</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GastronomiaPage;