// Importa todas as imagens do diretório com `{ eager: true }`
const logosPatrocionadores = import.meta.glob('../assets/img/patrocinio/*.{jpg,png}', { eager: true });
const LogosApoio = import.meta.glob('../assets/img/apoio/*.{jpg,png}', { eager: true });

// Cria um array com os caminhos das imagens
const logosPatrociono = Object.values(logosPatrocionadores).map((module) => module.default);
const apoioLogos = Object.values(LogosApoio).map((module) => module.default);

export { logosPatrociono, apoioLogos };
