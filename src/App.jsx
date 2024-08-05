import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Historia from './pages/Historia';
import Countdown from './components/Countdown/countdown';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

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
      <Header />
      <HomePage />
      <Historia />
    </>
  );
}

export default App;
