import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel'; // ajuste o caminho conforme necessário
import './style.css'; // ajuste o caminho conforme necessário

const imagens = {
  2022: [
    'https://wallpapers.com/images/hd/slices-of-churrasco-pma8higzderd9ud3.jpg',
    'https://img.freepik.com/fotos-premium/churrasco-brasileiro-hd-8k-papel-de-parede-banco-de-imagem-fotografica_890746-35048.jpg',
    // mais imagens de 2022
  ],
  2023: [
    'https://wallpapers.com/images/hd/churrasco-1920-x-1080-n3peudew4zehchk4.jpg',
    'https://wallpapers.com/images/featured/churrasco-wu28ko950tcs8cd1.jpg',
    // mais imagens de 2023
  ]
};

const Section3 = () => {
  const [anoSelecionado, setAnoSelecionado] = useState('2022');

  const handleAnoChange = (ano) => {
    setAnoSelecionado(ano);
  };

  return (
    <div id='fotos' className="section3">
      <h2>Últimos Festivais</h2>
      <div className="year-selector">
        <button onClick={() => handleAnoChange('2022')}>2022</button>
        <button onClick={() => handleAnoChange('2023')}>2023</button>
      </div>
      <div className="carousel-container">
        <Carousel imagens={imagens[anoSelecionado]} />
      </div>
    </div>
  );
};

export default Section3;
