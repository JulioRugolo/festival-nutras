import './CSS/HomePageMobile.css';
import bg from '../../assets/videos/vt_bg2.mp4';

const HomePageMobile = () => {
  return (
    <section id="section1" className="home-page-mobile">
      <div className="video-container">
        <video 
          src={bg}
          autoPlay 
          muted 
          loop 
          playsInline
          className="background-video-mobile"
        ></video>
      </div>
      <div className='overlay-home-mobile'></div>
    </section>
  );
};

export default HomePageMobile;
