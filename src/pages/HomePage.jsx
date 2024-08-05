import './CSS/HomePage.css';

const HomePage = () => {
  return (
    <section id="section1" className="section1">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="./videos/vt_bg.mp4" type="video/mp4" />
        Seu navegador não suporta o formato de vídeo.
      </video>
      <div className='overlay-home'></div>
    </section>
  );
};

export default HomePage;
