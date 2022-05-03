import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = async () => {
  if (!API_URL) return;
  const { data } = await axios.get(API_URL);
  return data;
};