import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import get from 'lodash/get';
import LoadingWrapper from './LoadingWrapper';
import { celsiusFormat, getWeekDay } from '../utils';

const useStyles = makeStyles({
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemRoot: {
    minHeight: 210,
    background: '#BBE',
    display: 'flex',
    borderLeft: '2px solid gray',
    textAlign: 'center',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTemp: {
    fontSize: 24,
    margin: 0,
  },
  title: {
    fontSize: 14,
  },
});

const ForecastItem = ({ weather }) => {
  const classes = useStyles();
  const iconCode = get(weather, 'weather[0].icon');
  const { temp } = weather.main || {};
  const { dt_txt } = weather || {};
  return (
    <Grid container className={classes.itemRoot}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        {getWeekDay(dt_txt)}
      </Typography>

      <Grid item className={classes.main}>
        <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} />

        <Typography
          className={classes.mainTemp}
          color="textPrimary"
          gutterBottom
        >
          {celsiusFormat(temp)}
        </Typography>
      </Grid>
    </Grid>
  );
};

const ForecastList = ({ forecast }) => {
  const classes = useStyles();
  const loading = !forecast || forecast.loading;
  const list = get(forecast, 'data.forecast.list') || [];
  console.log('list:', list);
  return (
    <LoadingWrapper loading={loading} className={classes.content}>
      {list.map((weather) => (
        <ForecastItem weather={weather} />
      ))}
    </LoadingWrapper>
  );
};

export default ForecastList;
