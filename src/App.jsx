import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando as rotas do React Router
import './App.css';
import useDeviceDetect from './useDeviceDetect';
import festivalLogo from './assets/img/festival.png';
import Mobile from './AppMobile';
import Desktop from './AppDesktop';
import Cadastro from './pages/Cadastro';
import VerVisitantes from './pages/VerVisitantes';
import Sorteio from './pages/Sorteio';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isMobile } = useDeviceDetect();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoLoaded = () => {
    setLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        {/* Rota principal com carregamento */}
        <Route
          path="/"
          element={
            <>
              {loading && (
                <div className="loader-homescreen">
                  <img src={festivalLogo} alt="Festival Logo" className="loader-logo" />
                  <div className="spinner-homescreen"></div>
                  <div className="loading-text">Carregando...</div>
                </div>
              )}
              <div className={loading ? 'hidden' : ''}>
                {isMobile ? (
                  <Mobile onVideoLoaded={handleVideoLoaded} />
                ) : (
                  <Desktop onVideoLoaded={handleVideoLoaded} />
                )}
                {showBackToTop && (
                  <button className="back-to-top" onClick={scrollToTop}>
                    ↑
                  </button>
                )}
              </div>
            </>
          }
        />
        {/* Rota para a página de cadastro de visitantes */}
        <Route path="/cadastro-visitantes" element={<Cadastro />} />
        <Route path="/ver-visitantes" element={<VerVisitantes />} />
        <Route path="/sorteio" element={<Sorteio />} />
      </Routes>
    </Router>
  );
}

export default App;
