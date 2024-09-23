import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const Sorteio = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState(null);


  const fetchVisitors = async () => {
    try {
      const response = await axios.get('https://festival-nutras-production.up.railway.app/ver-visitantes');
      const visitorsData = response.data;
      setVisitors(visitorsData);
    } catch (error) {
      console.error('Erro ao buscar os visitantes:', error);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);


  const handleSorteio = () => {
    if (visitors.length === 0) {
      Swal.fire('Erro', 'Nenhum visitante encontrado.', 'error');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * visitors.length);
      const selectedVisitor = visitors[randomIndex]; // Seleciona um visitante aleatório
      setWinner(selectedVisitor); // Define o vencedor
      setLoading(false); // Para a animação

      // Exibe o popup festivo com o nome do vencedor
      Swal.fire({
        title: 'Temos um vencedor!',
        text: `O vencedor é: ${selectedVisitor.nome}`, // Exibe o nome do vencedor
        icon: 'success',
        confirmButtonText: 'Parabéns!',
      });
    }, 3000); // Duração da animação
  };

  return (
    <div className="sorteio-container">
      <h1>Sorteio de Visitantes</h1>
      <button onClick={handleSorteio} className="sorteio-button">
        {loading ? 'Sorteando...' : 'Sortear'}
      </button>

      {/* Exibe uma animação ou o resultado */}
      {loading && <div className="loading-animation">🎉 Sorteando... 🎉</div>}
    </div>
  );
};

export default Sorteio;
