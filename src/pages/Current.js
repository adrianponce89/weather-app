import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../redux/slices/weatherSlice';

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
    console.log('doing distpach...');
  }, []);

  const currentLocal = useSelector((state) => state.weather.current.local);

  return (
    <Container className={classes.root}>
      <Typography variant="h5">Tu clima:</Typography>
      <Typography variant="h5">{JSON.stringify(currentLocal)}</Typography>
    </Container>
  );
};

export default CurrentWeather;
