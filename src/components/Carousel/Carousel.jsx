import React, { useState } from 'react';
import './carousel.css'; // Importe o CSS do Carousel

const Carousel = ({ imagens }) => {
  const [imagemAtual, setImagemAtual] = useState(0);

  const handleNext = () => {
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  };

  const handlePrevious = () => {
    setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-controls">
        <button onClick={handlePrevious}>❮</button>
        <img src={imagens[imagemAtual]} alt={`Imagem ${imagemAtual + 1}`} />
        <button onClick={handleNext}>❯</button>
      </div>
      <div className="carousel-indicators">
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === imagemAtual ? 'active' : ''}`}
            onClick={() => setImagemAtual(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
