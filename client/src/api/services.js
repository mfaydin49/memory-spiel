import axios from "axios";

export const getName = async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/winners`);
  return res.data;
};

export const addName = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/winners`,
    data
  );
  return res.data;
};
