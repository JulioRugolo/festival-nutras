// src/pages/mobile/HomePageMobile.jsx
import './CSS/HomePageMobile.css';
import Festival from '../../assets/img/festival.png';

const HomePageMobile = () => {
  return (
    <section className="home-page-mobile">
      <img src={Festival} alt="Logo Nutras" className="logo" />
      <h1>Em Desenvolvimento</h1>
      <p>A versão mobile do site está em desenvolvimento.</p>
    </section>
  );
};

export default HomePageMobile;
