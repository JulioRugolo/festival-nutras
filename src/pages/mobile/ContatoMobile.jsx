// src/pages/mobile/ContatoMobile.jsx
import React from 'react';
import './CSS/ContatoMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/img/festival.png';

const ContatoMobile = () => {
  return (
    <footer className="contato-mobile">
      <div className="contato-logo-mobile">
        <img src={logo} alt="Festival de Churrasco do Nutras" />
      </div>
      <div className="contato-info-mobile">
        <p>Mais Informações:</p>
        <p>Email: contato@festivalchurrasconutras.com.br</p>
        <p>Telefone: (14) 99689-7674</p>
      </div>
      <div className="contato-social-mobile">
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
    </footer>
  );
};

export default ContatoMobile;
