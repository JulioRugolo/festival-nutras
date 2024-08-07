/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Header.css'; // Importa o CSS específico para o Header

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
        <a href="#" className='nav-button' onClick={() => onNavigate('home')}>HOME</a> {!isMobile && '|'}
        <a href="#edicoes" className='nav-button' onClick={() => onNavigate('edicoes')}>EDIÇÕES ANTERIORES</a>{!isMobile && '|'}
        <a href="#gastronomia" className='nav-button' onClick={() => onNavigate('gastronomia')}>GASTRONOMIA</a>{!isMobile && '|'}
        <a href="#atracoes" className='nav-button' onClick={() => onNavigate('atracoes')}>ATRAÇÕES</a>{!isMobile && '|'}
        <a href="#bandas" className='nav-button' onClick={() => onNavigate('bandas')}>BANDAS</a>{!isMobile && '|'}
        <a href="#patrocinadores" className='nav-button' onClick={() => onNavigate('patrocinadores')}>PATROCINADORES</a>{!isMobile && '|'}
        <a href="#historia" className='nav-button' onClick={() => onNavigate('historia')}>HISTÓRIA</a>{!isMobile && '|'}
        <a href="#contato" className='nav-button' onClick={() => onNavigate('contato')}>CONTATO</a>
      </nav>
    </header>
  );
};

export default Header;
