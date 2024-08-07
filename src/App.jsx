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

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  if (loading) {
    return (
      <div className="loader-homescreen">
        <div className="spinner-homescreen"></div>
      </div>
    );
  }

  return (
    <>
      {isMobile ? (
        <>
          <Header />
          <HomePageMobile />
          <EdicoesMobile />
          <AtracoesMobile />
          <BandaMobile />
          <HistoriaMobile />
          <ContatoMobile />
        </>
      ) : (
        <>
          <Header />
          <HomePage />
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
    </>
  );
}

export default App;
