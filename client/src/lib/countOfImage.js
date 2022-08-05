const countOfImage = (images, count = 6) => {
  const arrangedImages = [];

  images.slice(0, count).forEach((image) => {
    const {
      alt_description: alt,
      urls: { small: src },
    } = image;
    arrangedImages.push({ src, alt, matched: false });
  });

  return arrangedImages;
};

export default countOfImage;
