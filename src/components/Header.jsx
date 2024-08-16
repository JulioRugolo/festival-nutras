/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Header.css'; // Importa o CSS específico para o Header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

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
        <a href="#section1" className='nav-button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</a> {!isMobile && '|'}
        <a href="#edicoes" className='nav-button' onClick={() => onNavigate('edicoes')}>EDIÇÕES ANTERIORES</a>{!isMobile && '|'}
        <a href="#gastronomia" className='nav-button' onClick={() => onNavigate('gastronomia')}>GASTRONOMIA</a>{!isMobile && '|'}
        <a href="#atracoes" className='nav-button' onClick={() => onNavigate('atracoes')}>ATRAÇÕES</a>{!isMobile && '|'}
        <a href="#patrocinadores" className='nav-button' onClick={() => onNavigate('patrocinadores')}>PATROCINADORES</a>{!isMobile && '|'}
        <a href="#historia" className='nav-button' onClick={() => onNavigate('historia')}>HISTÓRIA</a>{!isMobile && '|'}
        <a href="#contato" className='nav-button' onClick={() => onNavigate('contato')}>CONTATO</a>
      </nav>
      <button onClick={handleComprar} className='cta-header'>
        <FontAwesomeIcon icon={faTicketAlt} className="ticket-icon" />
        Comprar ingresso
      </button>
    </header>
  );
};

export default Header;
