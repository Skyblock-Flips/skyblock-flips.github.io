import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import theme from '../util/theme';
import { Card } from '@material-ui/core';

const styles = {
  ...theme.spreadIt,
  card: {
    width: '100%',
    backgroundColor: '#282c34',
    color: '#ffffff',
  },
  outline: {
    border: 'medium solid grey',
    paddingBottom: '.5%',
  },
  itemRank: {
    width: '5%',
    display: 'inline-block',
    textAlign: 'left',
  },
  itemName: {
    width: '45%',
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

class BazaarItem extends Component {
  render() {
    const {
      classes,
      item: { rank, name, margin, buyOffer, sellOffer },
    } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.outline}>
          <span className={classes.itemRank}>{rank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          <span className={classes.itemName}>{name}</span>
          <span
            className={classes.itemMargin}
            style={{
              color: margin > 0 ? 'green' : margin === 0 ? 'grey' : 'red',
            }}
          >
            {(margin >= 0 ? '+' : '') + (Math.round(margin * 10000) / 100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%'}
          </span>
          <span className={classes.itemBuy}>{buyOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          <span className={classes.itemSell}>{sellOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(BazaarItem);
