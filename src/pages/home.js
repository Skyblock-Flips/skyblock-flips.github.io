import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import theme from '../util/theme';

const styles = {
  ...theme.spreadIt,
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Skyblock Flips</h1>
          <p>Check the best items to flip at the click of a button.</p>
          <a href="./#/bazaar" className={classes.link}>
            <Button className={classes.button}>Bazaar Flips</Button>
          </a>
          <a href="." className={classes.link}>
            <Button className={classes.button}>Auction Items (Coming Soon™)</Button>
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
