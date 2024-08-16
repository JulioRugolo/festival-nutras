import React, { useState, useEffect } from 'react';
import './Popup.css'; // Estilos para o popup
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faTimes  } from '@fortawesome/free-solid-svg-icons';

const PopupTicket = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Função para mostrar o popup a cada 30 segundos
      const interval = setInterval(() => {
        setIsVisible(true);
      }, 30000); // 30 segundos
  
      return () => clearInterval(interval);
    }, []);
  
    const handleClose = () => {
      setIsVisible(false);
    };
  
    const handleComprar = () => {
      window.open('https://www.guicheweb.com.br/3-festival-de-churrasco-do-nutras_34053', '_blank');
    }
  
    return (
      isVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="popup-content">
              <button onClick={handleComprar} className="popup-button">
                <FontAwesomeIcon icon={faTicketAlt} className="popup-icon" />
                Comprar ingresso
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

export default PopupTicket;
