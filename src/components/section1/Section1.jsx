import './style.css'; // Importa o CSS específico para a Seção 1

const Section1 = () => {
  return (
    <section id="section1" className="section-container section1">
      <div className="cta-container">
        <h2 className="cta-subtitle">Não Perca!</h2>
        <h1 className="cta-title">Festival Churrasco Nutras</h1>
        <p className="cta-text">
          Junte-se a nós para um dia incrível de diversão, comida deliciosa e ótima companhia! Nosso churrasco anual está chegando e você não vai querer ficar de fora.
        </p>
        <button className="cta-button">Comprar Agora</button>
      </div>
    </section>
  );
};

export default Section1;
