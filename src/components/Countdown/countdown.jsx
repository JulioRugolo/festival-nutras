// src/components/Countdown.jsx

import React, { useState, useEffect } from 'react';
import './Countdown.css';
import fundoContagem from '../../assets/img/hist/FUNDO-CONTAGEM.png';

const Countdown = () => {
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
    <div
      className='counter-container'
      style={{ backgroundImage: `url(${fundoContagem})` }}
    >
      <div className="countdown-item">
        <span className="number">{timeLeft.days || '0'}</span>
        <span className="label">DIAS</span>
      </div>
      <div className="countdown-item">
        <span className="number">{timeLeft.hours || '0'}</span>
        <span className="label">HORAS</span>
      </div>
      <div className="countdown-item">
        <span className="number">{timeLeft.minutes || '0'}</span>
        <span className="label">MINUTOS</span>
      </div>
      <div className="countdown-item">
        <span className="number">{timeLeft.seconds || '0'}</span>
        <span className="label">SEGUNDOS</span>
      </div>
    </div>
  );
};

export default Countdown;
