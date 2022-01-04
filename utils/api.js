import axios from "axios";
import https from "https";

const BASE_API_URL = 'https://swapi.dev/api/';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const getPlanets = (page = 1,limit = 10) => 
  axios.get(`${BASE_API_URL}planets`, {
      httpsAgent: agent,
      params: {
          page: page,
          limit: limit
      }
  });

export const getPlanetById = (id) => 
  axios.get(`${BASE_API_URL}planets/${id}`, { httpsAgent: agent });
