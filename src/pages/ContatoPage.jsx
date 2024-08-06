// src/pages/ContatoPage.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './CSS/Contato.css';
import logo from '../assets/img/festival.png'; // Substitua pelo caminho correto do seu logo

const ContatoPage = () => {
  return (
    <section id='contato' className='contato-container'>
      <div className='contato-logo'>
        <img src={logo} alt='Festival de Churrasco do Nutras' />
      </div>
      <div className='contato-info'>
        <h2>MAIS INFORMAÇÕES:</h2>
        <p>Email: contato@festivalchurrasconutras.com.br</p>
        <p>Telefone: (14) 99689-7674</p>
      </div>
      <div className='contato-social'>
        <a href='https://www.facebook.com/profile.php?id=61551241681551' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='https://www.instagram.com/festivalchurrasconutras/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </section>
  );
};

export default ContatoPage;
