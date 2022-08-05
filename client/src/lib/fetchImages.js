import axios from "axios";

const fetchImages = async (setImages) => {
  try {
    const res = await axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`
      )
      .then((res) => res);
    setImages(res.data);
  } catch (err) {
    console.error(err.message);
  }
};

export default fetchImages;
