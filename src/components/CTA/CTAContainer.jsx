// src/components/CTAContainer.jsx

import React from 'react';
import './CTAContainer.css';
import ctaImage from '../../assets/img/hist/cta.png';

const CTAContainer = () => {
  const handleComprar = () => {
    window.open('https://www.guicheweb.com.br/3-festival-de-churrasco-do-nutras_34053', '_blank');
  }

  return (
    <div
      className='cta-container'
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <h2>GARANTA AGORA O SEU INGRESSO PARA O MAIOR FESTIVAL DE CHURRASCO DE BOTUCATU E REGIÃO</h2>
      <button onClick={handleComprar} className='comprar-button'>COMPRAR INGRESSO</button>
    </div>
  );
};

export default CTAContainer;
