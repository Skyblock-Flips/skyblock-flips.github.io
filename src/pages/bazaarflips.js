import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import theme from '../util/theme';

// Components
import BazaarHelper from '../components/bazaarhelper';
import BazaarItem from '../components/bazaaritem';

// axios
import axios from 'axios';

const styles = {
  ...theme.spreadIt,
  wrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  cardHolder: {
    float: 'left',
    width: '50%',
    fontSize: '20px',
    display: 'inline-block',
  },
  notes: {
    width: '49%',
    paddingLeft: '1%',
    fontSize: '20px',
    display: 'inline-block',
    overflow: 'hidden',
  },
};

class BazaarFlips extends Component {
  state = {
    order: [],
    items: {},
    names: {},
  };

  componentDidMount() {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/margins')
      .then((res) => {
        this.setState({
          ...this.state,
          order: res.data.sorted,
          items: res.data.items,
        });
      });

    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/names')
      .then((res) => {
        this.setState({
          ...this.state,
          names: res.data,
        });
      });
  }

  interval = setInterval(() => {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/margins')
      .then((res) => {
        this.setState({
          ...this.state,
          order: res.data.sorted,
          items: res.data.items,
        });
      });
  }, 5000);

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className={classes.wrapper}>
            <div className={classes.cardHolder}>
              <BazaarHelper />
              <div>
                {this.state.order.map((e, i) => {
                  return (
                    <BazaarItem
                      item={{
                        rank: i + 1,
                        name: this.state.names[e],
                        margin: this.state.items[e].margin,
                        buyOffer: this.state.items[e].buyOffer,
                        sellOffer: this.state.items[e].sellOffer,
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className={classes.notes}>
              <h1>Bazaar Flips</h1>
              <p style={{ textAlign: 'left' }}>
                Bazaar flipping is when you purchase an item from the bazaar
                using a buy order then sell it with a sell order to make a
                profit, this calculates and displays margins for all of the
                items in the bazaar and ranks them to make it easier to flip
                them. <br /> <br />
                Please note that the margins are adjusted to add 0.1 coins to
                the buy price and subtract 0.1 coins from the sell price before
                calculating as this is how most of the sell and buy offers are
                made. <br /> <br />
                This also only updates every 5 seconds to not max out the
                hypixel api.
              </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(BazaarFlips);
