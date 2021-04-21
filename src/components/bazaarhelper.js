import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import theme from '../util/theme';
import Card from '@material-ui/core/Card'

const styles = {
  ...theme.spreadIt,
  card: {
    width: '100%',
    backgroundColor: '#282c34',
    color: '#ffffff',
    paddingBottom: '1%',
  },
  outline: {
    border: 'medium solid grey',
    paddingBottom: '.5%',
  },
  itemName: {
    width: '50%',
    display: 'inline-block',
    textAlign: 'left',
  },
  itemMargin: {
    width: '20%',
    display: 'inline-block',
    textAlign: 'left',
  },
  itemBuy: {
    width: '15%',
    display: 'inline-block',
    textAlign: 'left',
  },
  itemSell: {
    width: '15%',
    display: 'inline-block',
    textAlign: 'left',
  },
};

class BazaarHelper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.outline}>
          <span className={classes.itemName}>Item Name</span>
          <span className={classes.itemMargin}>Margin</span>
          <span className={classes.itemBuy}>Buy Price</span>
          <span className={classes.itemSell}>Sell Price</span>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(BazaarHelper);
