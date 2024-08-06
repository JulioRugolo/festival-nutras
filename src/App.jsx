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

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isMobile } = useDeviceDetect();

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

  return (
    <>
      
      {isMobile ? (
        <>
          {/* <Header /> */}
          <HomePageMobile />
          {/* <HistoriaMobile /> */}
        </>
      ) : (
        <>
          <Header />
          <HomePage />
          <Space />
          <Historia />
          <Space />
          <EdicoesPage />

        </>
      )}
    </>
  );
}

export default App;
