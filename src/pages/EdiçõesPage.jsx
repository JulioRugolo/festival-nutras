import { useState, useEffect } from 'react';
import './CSS/Edicoes.css';
import Galeria from '../components/Galeria/Galeria';
import PhotoPopup from '../components/PhotoPopup/PhotoPopup';
import { importImages } from '../utils/importImages';
import Title from '../components/title/Title';

const EdicoesPage = () => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [photosSmall, setPhotosSmall] = useState([]);
  const [photosLarge, setPhotosLarge] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadImages = async (year) => {
      setIsLoading(true);
      const smallImages = await importImages(year, 'small');
      const largeImages = await importImages(year, ''); // Passa uma string vazia para carregar as imagens grandes
      setPhotosSmall(smallImages);
      setPhotosLarge(largeImages);
      setIsLoading(false);
      console.log('Fotos carregadas:', smallImages, largeImages);
      
    };

    loadImages('2022'); // Carrega inicialmente as fotos de 2022
  }, []);

  const handleYearClick = (year) => {
    if (year !== selectedYear) {
      setIsLoading(true);
      setSelectedYear(year);
      const loadImages = async () => {
        const smallImages = await importImages(year, 'small');
        const largeImages = await importImages(year, ''); // Passa uma string vazia para carregar as imagens grandes
        setPhotosSmall(smallImages);
        setPhotosLarge(largeImages);
        setIsLoading(false);
      };
      loadImages();
    }
  };

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
    console.log(photosLarge);
    
  };

  const closePopup = () => {
    setSelectedPhotoIndex(null);
  };

  const showNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photosLarge.length);
  };

  const showPrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photosLarge.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id='edicoes' className='section-container edicoes'>
      <Title title='EdiçÕes Anteriores' color='white' />
      <div className='edicoes-anos'>
        <h2
          onClick={() => handleYearClick('2022')}
          className={selectedYear === '2022' ? 'active' : ''}
        >
          2022
        </h2>
        <h2
          onClick={() => handleYearClick('2023')}
          className={selectedYear === '2023' ? 'active' : ''}
        >
          2023
        </h2>
      </div>
      <div className='edicoes-content'>
        {isLoading ? (
          <p>Carregando fotos...</p>
        ) : (
          <Galeria photos={photosSmall} onPhotoClick={handlePhotoClick} />
        )}
      </div>
      {selectedPhotoIndex !== null && (
        <PhotoPopup
          photo={photosLarge[selectedPhotoIndex]}
          onClose={closePopup}
          onNext={showNextPhoto}
          onPrev={showPrevPhoto}
        />
      )}
    </section>
  );
};

export default EdicoesPage;
