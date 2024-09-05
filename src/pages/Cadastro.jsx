import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './CSS/Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    diaNascimento: '',
    mesNascimento: '',
    anoNascimento: '',
    telefone: '',
    dataHora: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataNascimento = `${formData.diaNascimento}/${formData.mesNascimento}/${formData.anoNascimento}`;

    console.log('Enviando cadastro:', { ...formData, dataNascimento });
    

    try {
      const response = await axios.post('http://192.168.0.188:3001/cadastro', {
        ...formData,
        dataNascimento,
      });

      // Exibir mensagem de sucesso usando SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado!',
        text: 'Os dados foram salvos com sucesso.',
        confirmButtonText: 'OK',
      });

      console.log(response.data);
    } catch (error) {
      // Exibir mensagem de erro usando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Ocorreu um erro ao salvar o cadastro.',
        confirmButtonText: 'OK',
      });

      console.error('Erro ao enviar o cadastro:', error);
    }
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-titulo">Cadastro de Visitantes</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="cadastro-input-group">
          <label className="cadastro-label" htmlFor="nome">Nome Completo</label>
          <input
            className="cadastro-input"
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="cadastro-input-group">
          <label className="cadastro-label">Data de Nascimento</label>
          <div className="cadastro-date-inputs">
            <input
              className="cadastro-input dia"
              type="text"
              id="diaNascimento"
              name="diaNascimento"
              placeholder="Dia"
              value={formData.diaNascimento}
              onChange={handleChange}
              required
            />

            <select
              className="cadastro-input mes"
              id="mesNascimento"
              name="mesNascimento"
              value={formData.mesNascimento}
              onChange={handleChange}
              required
            >
              <option value="">Mês</option>
              <option value="01">Janeiro</option>
              <option value="02">Fevereiro</option>
              <option value="03">Março</option>
              <option value="04">Abril</option>
              <option value="05">Maio</option>
              <option value="06">Junho</option>
              <option value="07">Julho</option>
              <option value="08">Agosto</option>
              <option value="09">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>

            <input
              className="cadastro-input ano"
              type="text"
              id="anoNascimento"
              name="anoNascimento"
              placeholder="Ano"
              value={formData.anoNascimento}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="cadastro-input-group">
          <label className="cadastro-label" htmlFor="telefone">Telefone</label>
          <input
            className="cadastro-input"
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="cadastro-input-group hora">
          <label className="cadastro-label">Data e Hora de Cadastro</label>
          <input className="cadastro-input" type="text" value={formData.dataHora} readOnly />
        </div>

        <button className="cadastro-button" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
