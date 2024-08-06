// src/components/Galeria/Galeria.jsx
import React from 'react';
import './Galeria.css';

const Galeria = ({ photos, onPhotoClick }) => {
  return (
    <div className='galeria'>
      {photos.map((photo, index) => (
        <div key={index} className='galeria-item' onClick={() => onPhotoClick(index)}>
          <div className='galeria-item-inner'>
            <img src={photo} alt={`Foto ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Galeria;
