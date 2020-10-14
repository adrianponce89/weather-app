import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentWeather,
  getForecastWeather,
} from '../redux/slices/weatherSlice';
import WeatherCard from '../components/WeatherCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: '40px',
    width: '40px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const possibleCities = [
  { title: 'Ubicación Actual', value: '' },
  { title: 'Mar del Plata', value: 'Mar del Plata' },
  { title: 'Londres', value: 'Londres' },
  { title: 'Tokio', value: 'Tokio' },
  { title: 'California', value: 'California' },
];

const CurrentWeather = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [city, setCity] = useState(null);

  useEffect(() => {
    dispatch(getCurrentWeather(city));
    dispatch(getForecastWeather(city));
  }, []);

  const localWeather = useSelector((state) => state.weather.current[city]);
  const localForecast = useSelector((state) => state.weather.forecast[city]);

  const handleChange = (event) => {
    const newcity = event.target.value;
    setCity(newcity);
    dispatch(getCurrentWeather(newcity));
    dispatch(getForecastWeather(newcity));
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="cities-label">Ciudades</InputLabel>
        <Select
          labelId="cities-label"
          id="cities"
          value={city}
          onChange={handleChange}
        >
          {possibleCities.map((cityItem) => (
            <MenuItem value={cityItem.value}>{cityItem.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <WeatherCard weather={localWeather} forecast={localForecast} />
    </div>
  );
};

export default CurrentWeather;
