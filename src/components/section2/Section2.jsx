import './style.css'; // Importa o CSS específico para a Seção 2

const Section2 = () => {
  return (
    <section id="section2" className="section-container section2">
      <div className="content-container">
        <h2 className="section-subtitle">Sobre o NUTRAS</h2>
        <h1 className="section-title">O NUTRAS – Núcleo de Transformação Social</h1>
        <p className="section-text">
          O NUTRAS atende atualmente 323 crianças e adolescentes na faixa etária de 04 a 14 anos no contra turno escolar. Graças à integração do NUTRAS e da Prefeitura de Botucatu por meio dos convênios com a Secretaria Municipal de Assistência Social (SMAS), Conselho Municipal da Criança e Adolescente (CMDCA), Secretaria da Educação, trabalho de voluntários, amigos do Nutras e parceiros celebramos o compromisso de oferecer às crianças e adolescentes a inclusão social.
        </p>
        <p className="section-text">
          Nossas crianças recebem alimentação e desenvolvem atividades socioeducativas enquanto estão conosco. O trabalho desenvolvido pelo Nutras nesta região é muito importante porque, além de ajudar na educação e desenvolvimento das crianças e adolescentes, proporcionamos aos pais e responsáveis a oportunidade de trabalhar tranquilos durante o dia, com a certeza de que os filhos estão bem cuidados e em segurança.
        </p>
      </div>
    </section>
  );
};

export default Section2;
