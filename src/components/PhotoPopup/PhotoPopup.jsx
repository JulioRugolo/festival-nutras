// src/components/PhotoPopup/PhotoPopup.jsx
import React, { useState, useEffect } from 'react';
import './PhotoPopup.css';
import logo from '../../assets/img/festival.png'; // Importe o logo

const PhotoPopup = ({ photo, onClose, onNext, onPrev }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [photo]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='photo-popup'>
      <div className='photo-popup-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <div className='photo-container'>
          {isLoading && <div className='loader'></div>}
          <img
            src={photo}
            alt="Foto Ampliada"
            className='photo'
            style={{ display: isLoading ? 'none' : 'block' }}
            onLoad={handleImageLoad}
          />
          <img src={logo} alt="Logo" className='logo' />
        </div>
        <button onClick={onPrev} className='pop-up-button prev-button'>&#8249;</button>
        <button onClick={onNext} className='pop-up-button next-button'>&#8250;</button>
        <a href={photo} download className='download-button'>Download</a>
      </div>
    </div>
  );
};

export default PhotoPopup;
