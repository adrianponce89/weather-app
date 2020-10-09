import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import get from 'lodash/get';
import { celsiusFormat } from '../utils';
import LoadingWrapper from './LoadingWrapper';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 210,
    background: '#BBE',
    display: 'flex',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTemp: {
    fontSize: 46,
    margin: 0,
  },
  city: {
    fontSize: 24,
  },
  title: {
    fontSize: 14,
  },
});

const WeatherCard = ({ weather }) => {
  const classes = useStyles();

  const loading = !weather || weather.loading;

  const city = get(weather, 'data.city');
  const iconCode = get(weather, 'data.current.weather[0].icon');
  const { temp, feels_like, temp_min, temp_max } =
    get(weather, 'data.current.main') || {};

  const fTemp = celsiusFormat(temp);
  const fFeelsLike = celsiusFormat(feels_like);
  const fTempMin = celsiusFormat(temp_min);
  const fTempMax = celsiusFormat(temp_max);

  return (
    <Card className={classes.root} elevation={4}>
      <LoadingWrapper
        component={CardContent}
        loading={loading}
        className={classes.content}
      >
        <Typography className={classes.city} color="textSecondary" gutterBottom>
          {city}
        </Typography>

        <Grid className={classes.main}>
          <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} />

          <Typography
            className={classes.mainTemp}
            color="textPrimary"
            gutterBottom
          >
            {fTemp}
          </Typography>
        </Grid>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {fTempMin} / {fTempMax} | Sensación Termica {fFeelsLike}
        </Typography>
      </LoadingWrapper>
    </Card>
  );
};

export default WeatherCard;
