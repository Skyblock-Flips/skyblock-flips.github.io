import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import theme from '../util/theme';

// axios
import axios from 'axios';

const styles = {
  ...theme.spreadIt,
  wrapper: {
    width: '98%',
    overflow: 'hidden',
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingBottom: '2%',
  },
  cardHolder: {
    float: 'left',
    width: '49%',
    fontSize: '25px',
    display: 'inline-block',
  },
  notes: {
    width: '48%',
    paddingLeft: '1%',
    fontSize: '20px',
    display: 'inline-block',
    overflow: 'hidden',
  },
};

class BazaarFlips extends Component {
  state = {
    order: [[], [], [], []],
    items: {},
    names: {},
    prices: {},
    sortValue: 0,
  };

  componentDidMount() {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/margins')
      .then((res) => {
        this.setState({
          ...this.state,
          order: [
            res.data.sorted,
            res.data.sortedValue,
            res.data.sortedNPCBuy,
            res.data.sortedNPCSell,
          ],
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

    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/prices')
      .then((res) => {
        this.setState({
          ...this.state,
          prices: res.data,
        });
      });
  }

  interval = setInterval(() => {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/margins')
      .then((res) => {
        this.setState({
          ...this.state,
          order: [
            res.data.sorted,
            res.data.sortedValue,
            res.data.sortedNPCBuy,
            res.data.sortedNPCSell,
          ],
          items: res.data.items,
        });
      });
  }, 5000);

  handleChange = (event) => {
    this.setState({
      ...this.state,
      sortValue: event.target.value,
    });
  };

  getMarginForValue = (e) => {
    switch (this.state.sortValue) {
      case 1:
        return this.state.items[e].pureMargin;
      case 2:
        return this.state.items[e].buyNPCMargin;
      case 3:
        return this.state.items[e].sellNPCMargin;
      default:
        return this.state.items[e].margin;
    }
  };

  getBuyOfferForValue = (e) => {
    switch (this.state.sortValue) {
      case 1:
        return this.state.items[e].buyOffer;
      case 2:
        return (!this.state.prices[e] ? -1 : this.state.prices[e].buy);
      case 3:
        return this.state.items[e].buyOffer;
      default:
        return this.state.items[e].buyOffer;
    }
  };

  getSellOfferForValue = (e) => {
    switch (this.state.sortValue) {
      case 1:
        return this.state.items[e].sellOffer;
      case 2:
        return this.state.items[e].sellOffer;
      case 3:
        return (!this.state.prices[e] ? -1 : this.state.prices[e].sell);
      default:
        return this.state.items[e].sellOffer;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className={classes.wrapper}>
            <div className={classes.cardHolder}>
              Sort with:
              <Select
                value={this.state.sortValue}
                onChange={this.handleChange}
                inputProps={{
                  name: 'Sort with',
                  id: 'age-native-label-placeholder',
                }}
                fullWidth
                style={{ marginBottom: '5%', color: 'white' }}
              >
                <option value={0}>Margin as Percent</option>
                <option value={1}>Margin as Value</option>
                <option value={2}>Buy from NPC and sell on Bazaar</option>
                <option value={3}>Buy from Bazaar and sell to NPC</option>
              </Select>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableItem}>
                        <b>Item Name</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Margin</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Buy Price</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Sell Price</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.order[this.state.sortValue].map((e, i) => (
                      <TableRow
                        key={i + 1}
                        hover
                        onClick={(event) => {
                          window.location.replace('/#/itemview/' + e);
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          className={classes.tableItem}
                        >
                          {this.state.names[e] === undefined ? (
                            <span style={{ color: 'orange' }}>
                              {e
                                .replace(/_/g, ' ')
                                .replace(/\S*/g, function (word) {
                                  return (
                                    word.charAt(0) + word.slice(1).toLowerCase()
                                  );
                                })}
                            </span>
                          ) : (
                            this.state.names[e]
                          )}
                        </TableCell>
                        <TableCell align="right" className={classes.tableItem}>
                          {
                            <span
                              style={{
                                color:
                                  this.getMarginForValue(e) === null
                                    ? 'grey'
                                    : this.getMarginForValue(e) > 0
                                    ? '#00ff00'
                                    : this.getMarginForValue(e) === 0
                                    ? 'grey'
                                    : '#ff0000',
                              }}
                            >
                              {this.getMarginForValue(e) === null
                                ? 'Cannot Happen'
                                : (this.getMarginForValue(e) >= 0 ? '+' : '') +
                                  (this.state.sortValue === 1
                                    ? this.getMarginForValue(e)
                                    : Math.round(
                                        this.getMarginForValue(e) * 10000
                                      ) / 100
                                  )
                                    .toFixed(1)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                                  (this.state.sortValue === 1 ? '' : '%')}
                            </span>
                          }
                        </TableCell>
                        <TableCell align="right" className={classes.tableItem}>
                          {this.getBuyOfferForValue(e) === -1 ? (
                            <span style={{ color: 'red' }}>
                              Cannot buy item from NPC
                            </span>
                          ) : (
                            this.getBuyOfferForValue(e)
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          )}
                        </TableCell>
                        <TableCell align="right" className={classes.tableItem}>
                          {this.getSellOfferForValue(e) === -1 ? (
                            <span style={{ color: 'red' }}>
                              Cannot sell item to NPC
                            </span>
                          ) : (
                            this.getSellOfferForValue(e)
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
                hypixel api. <br /> <br />
                Click on a row to get more info on the item! <br /> <br />
                You can also click on the bar below "Sort with:" and choose how
                you want to sort based on what you want.
              </p>
              <a href="/#/" className={classes.link}>
                <Button className={classes.button}>Back to homepage</Button>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(BazaarFlips);
