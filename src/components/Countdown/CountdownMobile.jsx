// src/components/Countdown/CountdownMobile.jsx

import React, { useState, useEffect } from 'react';
import './CountdownMobile.css';

const CountdownMobile = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-20T12:00:00');
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-mobile">
      <div className='cta-container-mobile'>
        <h2>GARANTA AGORA O SEU INGRESSO PARA O MAIOR FESTIVAL DE CHURRASCO DE BOTUCATU E REGIÃO</h2>
        <button className='comprar-button-mobile'>COMPRAR INGRESSO</button>
      </div>
      <div className='counter-container-mobile'>
        <div className="countdown-item-mobile">
          <span className="number-mobile">{timeLeft.days || '0'}</span>
          <span className="label-mobile">DIAS</span>
        </div>
        <div className="countdown-item-mobile">
          <span className="number-mobile">{timeLeft.hours || '0'}</span>
          <span className="label-mobile">HORAS</span>
        </div>
        <div className="countdown-item-mobile">
          <span className="number-mobile">{timeLeft.minutes || '0'}</span>
          <span className="label-mobile">MINUTOS</span>
        </div>
        <div className="countdown-item-mobile">
          <span className="number-mobile">{timeLeft.seconds || '0'}</span>
          <span className="label-mobile">SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownMobile;
