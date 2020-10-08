import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CloudIcon from '@material-ui/icons/Cloud';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <CloudIcon className={classes.logo} />
            </IconButton>
          </Link>
          <Grid container direction="row" justify="space-between">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item
              xs={2}
            >
              <Typography variant="h6" className={classes.title}>
                {'Weather App'}
              </Typography>
            </Grid>
            <Grid container item xs={6} justify="space-evenly">
              <Button href="/" color="inherit">
                Home
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
