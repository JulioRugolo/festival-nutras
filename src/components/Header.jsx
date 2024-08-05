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
        <a href="#" className='nav-button' onClick={() => onNavigate('home')}>HOME</a>
        <a href="#historia" className='nav-button' onClick={() => onNavigate('historia')}>HISTÓRIA</a>
        <a href="#edicoes" className='nav-button' onClick={() => onNavigate('edicoes')}>EDIÇÕES ANTERIORES</a>
        <a href="#atracoes" className='nav-button' onClick={() => onNavigate('atracoes')}>ATRAÇÕES</a>
        <a href="#bandas" className='nav-button' onClick={() => onNavigate('bandas')}>BANDAS</a>
        <a href="#patrocinadores" className='nav-button' onClick={() => onNavigate('patrocinadores')}>PATROCINADORES</a>
        <a href="#contato" className='nav-button' onClick={() => onNavigate('contato')}>Contato</a>
      </nav>
    </header>
  );
};

export default Header;
