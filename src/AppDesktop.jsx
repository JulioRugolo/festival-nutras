/* eslint-disable react/prop-types */
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CTAContainer from './components/CTA/CTAContainer';
import Countdown from './components/Countdown/countdown';
import GastronomiaPage from './pages/GastronomiaPage';
import Atracoes from './pages/AtracoesPage';
import PatrocinadoresPage from './pages/PatrocinadoresPage';
import EdicoesPage from './pages/EdiçõesPage';
import Space from './components/space/space';
import Historia from './pages/Historia';
import ContatoPage from './pages/ContatoPage';
import BannerGallery from './components/banner/BannerGallery';

const Desktop = ({ onVideoLoaded }) => {
  return (
    <>
      <Header />
      <HomePage onVideoLoaded={onVideoLoaded} />
      <CTAContainer />
      <Countdown />
      <GastronomiaPage />
      <Atracoes />
      <PatrocinadoresPage />
      <EdicoesPage />
      <CTAContainer />
      <Space />
      <Historia />
      <ContatoPage />
    </>
  );
};

export default Desktop;
