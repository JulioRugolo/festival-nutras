import React, { useEffect } from 'react';
import './CSS/HomePage.css';

const HomePage = ({ onVideoLoaded }) => {
  const videoLink = 'https://www.youtube.com/embed/H2jtXhL7ZGo?autoplay=1&mute=1&rel=0';

  useEffect(() => {
    const iframe = document.getElementById('youtube-iframe');
    iframe.onload = () => {
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    };
  }, [onVideoLoaded]);

  return (
    <section id="section1" className="section1">
      <iframe
        id="youtube-iframe"
        className="background-video"
        src={videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className='overlay-home'></div>
    </section>
  );
};

export default HomePage;
