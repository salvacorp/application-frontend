import axios from "axios";
import { Candidate } from "../types/Candidate";

const API_URL = process.env.REACT_APP_API_URL;

export const getCandidates = async () => {
  if (!API_URL) return;
  const { data } = await axios.get(API_URL);
  return data;
};

export const createCandidate = async (candidate: Candidate) => {
  if (!API_URL) return;
  const { data } = await axios.post(API_URL, candidate);
  return data;
};