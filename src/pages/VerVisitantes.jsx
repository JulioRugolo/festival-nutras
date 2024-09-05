import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/Visitantes.css';

const VerVisitantes = () => {
  const [visitantes, setVisitantes] = useState([]);

  useEffect(() => {
    // Fazer a requisição para buscar os visitantes
    axios.get('https://festival-nutras-production.up.railway.app:3001/ver-visitantes')
      .then((response) => {
        setVisitantes(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os visitantes:', error);
      });
  }, []);

  return (
    <div className="visitantes-container">
      <h1 className="visitantes-titulo">Lista de Visitantes</h1>
      <h2 className="visitantes-total">Total de visitantes: {visitantes.length}</h2>
      {visitantes.length > 0 ? (
        <table className="visitantes-tabela">
          <thead>
            <tr className="visitantes-tabela-header">
              <th className="visitantes-tabela-th">Id</th>
              <th className="visitantes-tabela-th">Nome</th>
              <th className="visitantes-tabela-th">Hora de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {visitantes.map((visitante, index) => (
              <tr key={index} className="visitantes-tabela-row">
                <td className="visitantes-tabela-td">{visitante.id}</td>
                <td className="visitantes-tabela-td">{visitante.nome}</td>
                <td className="visitantes-tabela-td">{new Date(visitante.dataHora).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="visitantes-vazio">Nenhum visitante encontrado.</p>
      )}
    </div>
  );
};

export default VerVisitantes;
