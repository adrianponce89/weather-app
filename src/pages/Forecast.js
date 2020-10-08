import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

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

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h5">Tu clima:</Typography>
    </Container>
  );
};

export default Home;
