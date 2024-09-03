/* eslint-disable react/prop-types */
// src/Mobile.jsx
import Header from './components/Header';
import HomePageMobile from './pages/mobile/HomePageMobile';
import GastronomiaPageMobile from './pages/mobile/GastronomiaMobile';
import AtracoesMobile from './pages/mobile/AtracoesMobile';
import PatrocinadoresMobile from './pages/mobile/PatrocinadoresMobile';
import EdicoesMobile from './pages/mobile/EdicoesMobile';
import HistoriaMobile from './pages/mobile/HistoriaMobile';
import ContatoMobile from './pages/mobile/ContatoMobile';
import BannerGallery from './components/banner/BannerGallery';

const Mobile = ({ onVideoLoaded }) => {
  return (
    <>
      <Header />
      <HomePageMobile onVideoLoaded={onVideoLoaded} />
      <BannerGallery />
      <GastronomiaPageMobile />
      <AtracoesMobile />
      <PatrocinadoresMobile />
      <EdicoesMobile />
      <HistoriaMobile />
      <ContatoMobile />
    </>
  );
};

export default Mobile;
