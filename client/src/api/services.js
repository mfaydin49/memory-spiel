import axios from "axios";

export const getWinnerData = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/winners`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addName = async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/winners`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
