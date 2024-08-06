// src/components/PhotoPopup/PhotoPopup.jsx
import React from 'react';
import './PhotoPopup.css';
import logo from '../../assets/img/festival.png'; // Importe o logo

const PhotoPopup = ({ photo, onClose, onNext, onPrev }) => {
  return (
    <div className='photo-popup'>
      <div className='photo-popup-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <div className='photo-container'>
          <img src={photo} alt="Foto Ampliada" className='photo' />
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
