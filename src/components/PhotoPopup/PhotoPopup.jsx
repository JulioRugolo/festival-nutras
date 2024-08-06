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

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Evitar problemas de CORS
    img.src = photo;

    img.onload = () => {
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      
      const logoImg = new Image();
      logoImg.src = logo;
      
      logoImg.onload = () => {
        const logoWidth = img.width * 0.2; // Ajustar o tamanho do logo relativo à imagem
        const logoHeight = logoImg.height * (logoWidth / logoImg.width);
        ctx.drawImage(logoImg, img.width - logoWidth - 10, img.height - logoHeight - 10, logoWidth, logoHeight);
        
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        link.download = 'photo_with_logo.jpg';
        link.click();
      };
    };
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
          <img src={logo} alt="Logo" className='logo' style={{ display: isLoading ? 'none' : 'block' }} />
        </div>
        <button onClick={onPrev} className='pop-up-button prev-button' style={{ display: isLoading ? 'none' : 'block' }}>&#8249;</button>
        <button onClick={onNext} className='pop-up-button next-button' style={{ display: isLoading ? 'none' : 'block' }}>&#8250;</button>
        <button onClick={handleDownload} className='download-button' style={{ display: isLoading ? 'none' : 'block' }}>Download</button>
      </div>
    </div>
  );
};

export default PhotoPopup;
