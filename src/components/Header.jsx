/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Header.css'; // Importa o CSS específico para o Header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faTicket } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assume que a largura máxima para mobile é 768px

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleComprar = () => {
    window.open('https://www.guicheweb.com.br/3-festival-de-churrasco-do-nutras_34053', '_blank');
  }

  const handleNavbarClick = (section) => {
    if (section === 'home') {
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setIsMenuOpen(false);
      onNavigate(section);
    }
  }

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <img 
        src="./festival.png" 
        alt="Logo" 
        className="header-logo"
      />
      <nav className={`nav ${isMobile && isMenuOpen ? 'open' : ''}`}>
        <a href="#section1" className='nav-button' onClick={() => handleNavbarClick('home')}>HOME</a> {!isMobile && '|'}
        <a href="#edicoes" className='nav-button' onClick={() => handleNavbarClick('edicoes')}>EDIÇÕES ANTERIORES</a>{!isMobile && '|'}
        <a href="#gastronomia" className='nav-button' onClick={() => handleNavbarClick('gastronomia')}>GASTRONOMIA</a>{!isMobile && '|'}
        <a href="#atracoes" className='nav-button' onClick={() => handleNavbarClick('atracoes')}>ATRAÇÕES</a>{!isMobile && '|'}
        <a href="#patrocinadores" className='nav-button' onClick={() => handleNavbarClick('patrocinadores')}>PATROCINADORES</a>{!isMobile && '|'}
        <a href="#historia" className='nav-button' onClick={() => handleNavbarClick('historia')}>HISTÓRIA</a>{!isMobile && '|'}
        <a href="#contato" className='nav-button' onClick={() => handleNavbarClick('contato')}>CONTATO</a>
      </nav>
      <button onClick={handleComprar} className='cta-header'>
        <FontAwesomeIcon icon={faTicket} className="ticket-icon" />
        Comprar ingresso
      </button>
    </header>
  );
};

export default Header;
