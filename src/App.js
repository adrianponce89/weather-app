import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Current from './pages/Current';
import Forecast from './pages/Forecast';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#000000',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5131',
      main: '#ff0400',
      dark: '#9b0000',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Current} />
          <Route exact path="/forecast" component={Forecast} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
