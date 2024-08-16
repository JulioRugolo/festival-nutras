import React, { useEffect } from 'react';
import './CSS/HomePageMobile.css';

const HomePageMobile = ({ onVideoLoaded }) => {
  const videoLink = 'https://www.youtube.com/embed/H2jtXhL7ZGo?autoplay=1&mute=1';

  useEffect(() => {
    const iframe = document.getElementById('youtube-iframe-mobile');
    iframe.onload = () => {
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    };
  }, [onVideoLoaded]);

  return (
    <section id="section1" className="home-page-mobile">
      <iframe
        id="youtube-iframe-mobile"
        className="background-video-mobile"
        src={videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className='overlay-home-mobile'></div>
    </section>
  );
};

export default HomePageMobile;
