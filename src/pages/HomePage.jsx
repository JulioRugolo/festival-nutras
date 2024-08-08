import React, { useRef, useEffect } from 'react';
import './CSS/HomePage.css';

const HomePage = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);
  const videoLink = 'https://www.youtube.com/watch?v=H2jtXhL7ZGo';


  useEffect(() => {
    const handleLoadedData = () => {
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('loadeddata', handleLoadedData);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [onVideoLoaded]);

  return (
    <section id="section1" className="section1">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="./videos/vt_bg.mp4" type="video/mp4" />
        Seu navegador não suporta o formato de vídeo.
      </video>
      <div className='overlay-home'></div>
    </section>
  );
};

export default HomePage;
