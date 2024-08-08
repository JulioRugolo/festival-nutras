import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Historia from './pages/Historia';
import HomePageMobile from './pages/mobile/HomePageMobile';
import HistoriaMobile from './pages/mobile/HistoriaMobile';
import useDeviceDetect from './useDeviceDetect';
import Space from './components/space/space';
import EdicoesPage from './pages/EdiçõesPage';
import Atracoes from './pages/AtracoesPage';
import BandaPage from './pages/BandaPage';
import ContatoPage from './pages/ContatoPage';
import AtracoesMobile from './pages/mobile/AtracoesMobile';
import ContatoMobile from './pages/mobile/ContatoMobile';
import BandaMobile from './pages/mobile/BandaMobile';
import EdicoesMobile from './pages/mobile/EdicoesMobile';
import festivalLogo from './assets/img/festival.png';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isMobile } = useDeviceDetect();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoLoaded = () => {
    setLoading(false);
  };

  return (
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
          <>
            <Header />
            <HomePageMobile onVideoLoaded={handleVideoLoaded} />
            <EdicoesMobile />
            <AtracoesMobile />
            <BandaMobile />
            <HistoriaMobile />
            <ContatoMobile />
          </>
        ) : (
          <>
            <Header />
            <HomePage onVideoLoaded={handleVideoLoaded} />
            <Space />
            <Space />
            <EdicoesPage />
            <Space />
            <Atracoes />
            <Space />
            <BandaPage />
            <Historia />
            <ContatoPage />
          </>
        )}
      </div>
    </>
  );
}

export default App;
