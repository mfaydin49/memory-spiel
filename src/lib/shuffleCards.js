const shuffleCards = (arrangedImages) => {
  return [...arrangedImages, ...arrangedImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffleCards;
