import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
    },
  });

  return data;
};
