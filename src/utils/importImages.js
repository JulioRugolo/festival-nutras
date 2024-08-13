export const importImages = async (year, size) => {
    const images = [];
    const imagesLarge = [];
    for (let i = 1; i <= 21; i++) { // Ajuste o limite conforme necessário
      try {
        const imageSMall = await import(`../assets/img/edicoes/${year}/small/${year} (${i}).JPG`);
        const imageLarge = await import(`../assets/img/edicoes/${year}/${year} (${i}).JPG`);
        images.push(imageSMall.default);
        imagesLarge.push(imageLarge.default);
      } catch (error) {
        console.error(`Error importing image ../assets/img/edicoes/${year}/${size}/${year} (${i}).JPG`, error);
      }
    }
    return size === 'small' ? images : imagesLarge;
  };
  