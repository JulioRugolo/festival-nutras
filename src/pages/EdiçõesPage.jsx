import { useState } from 'react';
import './CSS/Edicoes.css';
import garfo from '../assets/img/elementos/01-garfo.png';
import faca from '../assets/img/elementos/02-faca.png';
import Galeria from '../components/Galeria/Galeria';
import PhotoPopup from '../components/PhotoPopup/PhotoPopup';

// Importando fotos de 2022 (versões pequenas)
import photo2022_small_1 from '../assets/img/edicoes/2022/small/2022 (1).JPG';
import photo2022_small_2 from '../assets/img/edicoes/2022/small/2022 (2).JPG';
import photo2022_small_3 from '../assets/img/edicoes/2022/small/2022 (3).JPG';
import photo2022_small_4 from '../assets/img/edicoes/2022/small/2022 (4).JPG';
import photo2022_small_5 from '../assets/img/edicoes/2022/small/2022 (5).JPG';
import photo2022_small_6 from '../assets/img/edicoes/2022/small/2022 (6).JPG';
import photo2022_small_7 from '../assets/img/edicoes/2022/small/2022 (7).JPG';
import photo2022_small_8 from '../assets/img/edicoes/2022/small/2022 (8).JPG';
import photo2022_small_9 from '../assets/img/edicoes/2022/small/2022 (9).JPG';
import photo2022_small_10 from '../assets/img/edicoes/2022/small/2022 (10).JPG';

// Importando fotos de 2022 (versões grandes)
import photo2022_large_1 from '../assets/img/edicoes/2022/2022 (1).JPG';
import photo2022_large_2 from '../assets/img/edicoes/2022/2022 (2).JPG';
import photo2022_large_3 from '../assets/img/edicoes/2022/2022 (3).JPG';
import photo2022_large_4 from '../assets/img/edicoes/2022/2022 (4).JPG';
import photo2022_large_5 from '../assets/img/edicoes/2022/2022 (5).JPG';
import photo2022_large_6 from '../assets/img/edicoes/2022/2022 (6).JPG';
import photo2022_large_7 from '../assets/img/edicoes/2022/2022 (7).JPG';
import photo2022_large_8 from '../assets/img/edicoes/2022/2022 (8).JPG';
import photo2022_large_9 from '../assets/img/edicoes/2022/2022 (9).JPG';
import photo2022_large_10 from '../assets/img/edicoes/2022/2022 (10).JPG';

// Importando fotos de 2023 (versões pequenas)
import photo2023_small_1 from '../assets/img/edicoes/2023/small/2023 (1).JPG';
import photo2023_small_2 from '../assets/img/edicoes/2023/small/2023 (2).JPG';
import photo2023_small_3 from '../assets/img/edicoes/2023/small/2023 (3).JPG';
import photo2023_small_4 from '../assets/img/edicoes/2023/small/2023 (4).JPG';
import photo2023_small_5 from '../assets/img/edicoes/2023/small/2023 (5).JPG';
import photo2023_small_6 from '../assets/img/edicoes/2023/small/2023 (6).JPG';
import photo2023_small_7 from '../assets/img/edicoes/2023/small/2023 (7).JPG';
import photo2023_small_8 from '../assets/img/edicoes/2023/small/2023 (8).JPG';
import photo2023_small_9 from '../assets/img/edicoes/2023/small/2023 (9).JPG';
import photo2023_small_10 from '../assets/img/edicoes/2023/small/2023 (10).JPG';
import photo2023_small_11 from '../assets/img/edicoes/2023/small/2023 (11).JPG';
import photo2023_small_12 from '../assets/img/edicoes/2023/small/2023 (12).JPG';
import photo2023_small_13 from '../assets/img/edicoes/2023/small/2023 (13).JPG';
import photo2023_small_14 from '../assets/img/edicoes/2023/small/2023 (14).JPG';
import photo2023_small_15 from '../assets/img/edicoes/2023/small/2023 (15).JPG';
import photo2023_small_16 from '../assets/img/edicoes/2023/small/2023 (16).JPG';
import photo2023_small_17 from '../assets/img/edicoes/2023/small/2023 (17).JPG';
import photo2023_small_18 from '../assets/img/edicoes/2023/small/2023 (18).JPG';
import photo2023_small_19 from '../assets/img/edicoes/2023/small/2023 (19).JPG';
import photo2023_small_20 from '../assets/img/edicoes/2023/small/2023 (20).JPG';
import photo2023_small_21 from '../assets/img/edicoes/2023/small/2023 (21).JPG';

// Importando fotos de 2023 (versões grandes)
import photo2023_large_1 from '../assets/img/edicoes/2023/2023 (1).JPG';
import photo2023_large_2 from '../assets/img/edicoes/2023/2023 (2).JPG';
import photo2023_large_3 from '../assets/img/edicoes/2023/2023 (3).JPG';
import photo2023_large_4 from '../assets/img/edicoes/2023/2023 (4).JPG';
import photo2023_large_5 from '../assets/img/edicoes/2023/2023 (5).JPG';
import photo2023_large_6 from '../assets/img/edicoes/2023/2023 (6).JPG';
import photo2023_large_7 from '../assets/img/edicoes/2023/2023 (7).JPG';
import photo2023_large_8 from '../assets/img/edicoes/2023/2023 (8).JPG';
import photo2023_large_9 from '../assets/img/edicoes/2023/2023 (9).JPG';
import photo2023_large_10 from '../assets/img/edicoes/2023/2023 (10).JPG';
import photo2023_large_11 from '../assets/img/edicoes/2023/2023 (11).JPG';
import photo2023_large_12 from '../assets/img/edicoes/2023/2023 (12).JPG';
import photo2023_large_13 from '../assets/img/edicoes/2023/2023 (13).JPG';
import photo2023_large_14 from '../assets/img/edicoes/2023/2023 (14).JPG';
import photo2023_large_15 from '../assets/img/edicoes/2023/2023 (15).JPG';
import photo2023_large_16 from '../assets/img/edicoes/2023/2023 (16).JPG';
import photo2023_large_17 from '../assets/img/edicoes/2023/2023 (17).JPG';
import photo2023_large_18 from '../assets/img/edicoes/2023/2023 (18).JPG';
import photo2023_large_19 from '../assets/img/edicoes/2023/2023 (19).JPG';
import photo2023_large_20 from '../assets/img/edicoes/2023/2023 (20).JPG';
import photo2023_large_21 from '../assets/img/edicoes/2023/2023 (21).JPG';

const photos2022Small = [
  photo2022_small_1,
  photo2022_small_2,
  photo2022_small_3,
  photo2022_small_4,
  photo2022_small_5,
  photo2022_small_6,
  photo2022_small_7,
  photo2022_small_8,
  photo2022_small_9,
  photo2022_small_10,
];

const photos2022Large = [
  photo2022_large_1,
  photo2022_large_2,
  photo2022_large_3,
  photo2022_large_4,
  photo2022_large_5,
  photo2022_large_6,
  photo2022_large_7,
  photo2022_large_8,
  photo2022_large_9,
  photo2022_large_10,
];

const photos2023Small = [
  photo2023_small_1,
  photo2023_small_2,
  photo2023_small_3,
  photo2023_small_4,
  photo2023_small_5,
  photo2023_small_6,
  photo2023_small_7,
  photo2023_small_8,
  photo2023_small_9,
  photo2023_small_10,
  photo2023_small_11,
  photo2023_small_12,
  photo2023_small_13,
  photo2023_small_14,
  photo2023_small_15,
  photo2023_small_16,
  photo2023_small_17,
  photo2023_small_18,
  photo2023_small_19,
  photo2023_small_20,
  photo2023_small_21,
];

const photos2023Large = [
  photo2023_large_1,
  photo2023_large_2,
  photo2023_large_3,
  photo2023_large_4,
  photo2023_large_5,
  photo2023_large_6,
  photo2023_large_7,
  photo2023_large_8,
  photo2023_large_9,
  photo2023_large_10,
  photo2023_large_11,
  photo2023_large_12,
  photo2023_large_13,
  photo2023_large_14,
  photo2023_large_15,
  photo2023_large_16,
  photo2023_large_17,
  photo2023_large_18,
  photo2023_large_19,
  photo2023_large_20,
  photo2023_large_21,
];

const EdicoesPage = () => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photosSmall = {
    '2022': photos2022Small,
    '2023': photos2023Small,
  };

  const photosLarge = {
    '2022': photos2022Large,
    '2023': photos2023Large,
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closePopup = () => {
    setSelectedPhotoIndex(null);
  };

  const showNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photosLarge[selectedYear].length);
  };

  const showPrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photosLarge[selectedYear].length - 1 : prevIndex - 1
    );
  };

  return (
    <section id='edicoes' className='section-container edicoes'>
      <div className='edicoes-content-title'>
        <img src={garfo} alt="Garfo" />
        <h1>EDIÇÕES ANTERIORES</h1>
        <img src={faca} alt="Faca" />
      </div>
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
        <Galeria photos={photosSmall[selectedYear]} onPhotoClick={handlePhotoClick} />
      </div>
      {selectedPhotoIndex !== null && (
        <PhotoPopup
          photo={photosLarge[selectedYear][selectedPhotoIndex]}
          onClose={closePopup}
          onNext={showNextPhoto}
          onPrev={showPrevPhoto}
        />
      )}
    </section>
  );
};

export default EdicoesPage;
