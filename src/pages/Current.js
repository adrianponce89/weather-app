import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentWeather,
  getForecastWeather,
} from '../redux/slices/weatherSlice';
import WeatherCard from '../components/WeatherCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1em',
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
}));

const CurrentWeather = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather());
    dispatch(getForecastWeather());
  }, []);

  const localWeather = useSelector((state) => state.weather.current.local);

  return (
    <Container className={classes.root}>
      <Typography variant="h5">Tu clima:</Typography>
      <WeatherCard weather={localWeather} />
    </Container>
  );
};

export default CurrentWeather;
