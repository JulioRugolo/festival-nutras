import React from 'react';
import './PhotoPopup.css';

const PhotoPopup = ({ photo, onClose }) => {
  return (
    <div className='photo-popup'>
      <div className='photo-popup-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <img src={photo} alt="Foto Ampliada" />
      </div>
    </div>
  );
};

export default PhotoPopup;
