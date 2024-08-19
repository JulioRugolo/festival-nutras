import React, { useRef, useEffect } from 'react';
import './CSS/HomePageMobile.css';
import bg from '../../assets/videos/vt_bg2.mp4';

const HomePageMobile = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);

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
    <section id="section1" className="home-page-mobile">
      <div className="video-container">
        <video
          ref={videoRef}
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