import './App.css';

// React
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Home from './pages/home';
import BazaarFlips from './pages/bazaarflips';
import ItemView from './pages/itemview';
import AuctionItems from './pages/auctionitems';
import PageNotFound from './pages/pagenotfound';

// Styling
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

class App extends Component {
  render() {
    return (
      <div className="main-background" style={{ backgroundColor: '#282c34' }}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/bazaar" component={BazaarFlips} />
              <Route exact path="/itemview/:item" component={ItemView} />
              <Route path="/*" component={PageNotFound} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
