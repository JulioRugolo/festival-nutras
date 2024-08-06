// src/pages/mobile/HomePageMobile.jsx
import './CSS/HomePageMobile.css';
import Festival from '../../assets/img/festival.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const HomePageMobile = () => {
  return (
    <section className="home-page-mobile">
      <img src={Festival} alt="Logo Nutras" className="logo" />
      <h1>Em Desenvolvimento</h1>
      <p>A versão mobile do site está em desenvolvimento.</p>
      
      <div className='contato-info-mobile'>
        <h2>MAIS INFORMAÇÕES:</h2>
        <p>Email: contato@festivalchurrasconutras.com.br</p>
        <p>Telefone: (14) 99689-7674</p>
      </div>
      <div className='contato-social-mobile'>
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

export default HomePageMobile;
