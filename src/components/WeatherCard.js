import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import get from 'lodash/get';
import { celsiusFormat } from '../utils';
import LoadingWrapper from './LoadingWrapper';

import ForecastList from '../components/ForecastList';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  current: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  forecast: {},
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

const WeatherCard = ({ weather, forecast }) => {
  const classes = useStyles();

  const loading = !weather || weather.loading;

  const city = get(weather, 'data.city');
  const iconCode = get(weather, 'data.current.weather[0].icon');
  const { temp, feels_like, temp_min, temp_max } =
    get(weather, 'data.current.main') || {};

  return (
    <Card className={classes.root} elevation={4}>
      <LoadingWrapper
        component={CardContent}
        loading={loading}
        className={classes.content}
      >
        <Grid container sm={12}>
          <Grid item sm={4} className={classes.current}>
            <Typography
              className={classes.city}
              color="textSecondary"
              gutterBottom
            >
              {city}
            </Typography>

            <Grid className={classes.main}>
              <img
                src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
              />

              <Typography
                className={classes.mainTemp}
                color="textPrimary"
                gutterBottom
              >
                {celsiusFormat(temp)}
              </Typography>
            </Grid>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {celsiusFormat(temp_min)} / {celsiusFormat(temp_max)} | Sensación
              Termica {celsiusFormat(feels_like)}
            </Typography>
          </Grid>
          <Grid item sm={8} className={classes.forecast}>
            <ForecastList forecast={forecast} />
          </Grid>
        </Grid>
      </LoadingWrapper>
    </Card>
  );
};

export default WeatherCard;
