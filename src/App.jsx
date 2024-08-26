import { useState, useEffect } from 'react';
import './App.css';
import useDeviceDetect from './useDeviceDetect';
import festivalLogo from './assets/img/festival.png';
import Mobile from './AppMobile';
import Desktop from './AppDesktop';

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
  );
}

export default App;
