import axios from 'axios';
const serverURL = process.env.REACT_APP_SERVER_URL;

const getCurrentWeather = async (city) => {
  let query = `${serverURL}/current`;
  query = city ? `${query}/${city}` : query;
  const response = await axios.get(query);
  return response.data;
};

const getForecastWeather = async (city) => {
  let query = `${serverURL}/forecast`;
  query = city ? `${query}/${city}` : query;
  const response = await axios.get(query);
  return response.data;
};

export default {
  getCurrentWeather,
  getForecastWeather,
};
