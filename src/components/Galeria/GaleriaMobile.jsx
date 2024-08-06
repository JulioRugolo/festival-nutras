/* eslint-disable react/prop-types */
// src/components/Galeria/GaleriaMobile.jsx
import './GaleriaMobile.css';

const GaleriaMobile = ({ photos, onPhotoClick }) => {
  return (
    <div className='galeria-mobile'>
      {photos.map((photo, index) => (
        <div key={index} className='galeria-item-mobile' onClick={() => onPhotoClick(index)}>
          <div className='galeria-item-inner-mobile'>
            <img src={photo} alt={`Foto ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleriaMobile;
