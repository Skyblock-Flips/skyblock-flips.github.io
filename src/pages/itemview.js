import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import theme from '../util/theme';

// axios
import axios from 'axios';

const styles = {
  ...theme.spreadIt,
  card: {
    width: '75%',
    backgroundColor: '#424242',
    color: '#ffffff',
    margin: '12.5%',
    display: 'inline-block',
  },
  image: {
    width: 25,
    height: 25,
    display: 'inline-block',
  },
};

class ItemView extends Component {
  state = {
    items: {},
    names: {},
    prices: {},
  };

  componentDidMount() {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/data')
      .then((res) => {
        this.setState({
          ...this.state,
          items: res.data,
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
      .get('https://skyblockflips-api.asra.repl.co/bazaar/data')
      .then((res) => {
        this.setState({
          ...this.state,
          items: res.data,
        });
      });
  }, 5000);

  render() {
    const { classes } = this.props;
    const item = this.props.match.params.item;
    return (
      <div className="App">
        <header className="App-header">
          <Card className={classes.card}>
            <h1>
              {this.state.items.margins === undefined ? (
                'Loading...'
              ) : this.state.names[item] === undefined ? (
                <span style={{ color: 'orange' }}>
                  {item.replace(/_/g, ' ').replace(/\S*/g, function (word) {
                    return word.charAt(0) + word.slice(1).toLowerCase();
                  })}
                </span>
              ) : (
                this.state.names[item]
              )}
            </h1>
            {this.state.items.margins === undefined ? null : (
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" className={classes.tableItem}>
                        <b>Item Image</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Margin</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Pure Margin</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Buy Price</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b># of Buy Orders</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Sell Price</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b># of Sell Orders</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>NPC Buy Price</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>NPC Sell Price</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Product ID</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={1} hover>
                      <TableCell align="left" className={classes.tableItem}>
                        <img
                          src={'https://sky.lea.moe/item/' + item}
                          alt={
                            this.state.names[item] === undefined
                              ? item
                                  .replace(/_/g, ' ')
                                  .replace(/\S*/g, function (word) {
                                    return (
                                      word.charAt(0) +
                                      word.slice(1).toLowerCase()
                                    );
                                  })
                              : this.state.names[item]
                          }
                          className={classes.image}
                        />
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {
                          <span
                            style={{
                              color:
                                this.state.items.margins.items[item].margin > 0
                                  ? '#00ff00'
                                  : this.state.items.margins.items[item]
                                      .margin === 0
                                  ? 'grey'
                                  : '#ff0000',
                            }}
                          >
                            {(this.state.items.margins.items[item].margin >= 0
                              ? '+'
                              : '') +
                              (
                                Math.round(
                                  this.state.items.margins.items[item].margin *
                                    10000
                                ) / 100
                              )
                                .toFixed(1)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                              '%'}
                          </span>
                        }
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {
                          <span
                            style={{
                              color:
                                this.state.items.margins.items[item]
                                  .pureMargin > 0
                                  ? '#00ff00'
                                  : this.state.items.margins.items[item]
                                      .pureMargin === 0
                                  ? 'grey'
                                  : '#ff0000',
                            }}
                          >
                            {(this.state.items.margins.items[item].pureMargin >=
                            0
                              ? '+'
                              : '') +
                              this.state.items.margins.items[item].pureMargin

                                .toFixed(1)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                        }
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.items.margins.items[item].buyOffer
                          .toFixed(1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.items.data[item].quick_status.buyOrders
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.items.margins.items[item].sellOffer
                          .toFixed(1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.items.data[item].quick_status.sellOrders
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.prices[item] === undefined ? (
                          <span style={{ color: 'red' }}>Unknown</span>
                        ) : this.state.prices[item].buy === -1 ? (
                          <span style={{ color: 'red' }}>
                            Cannot Buy from NPC
                          </span>
                        ) : (
                          this.state.prices[item].buy
                            .toFixed(1)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        )}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.prices[item] === undefined ? (
                          <span style={{ color: 'red' }}>Unknown</span>
                        ) : this.state.prices[item].sell === -1 ? (
                          <span style={{ color: 'red' }}>
                            Cannot Sell to NPC
                          </span>
                        ) : (
                          this.state.prices[item].sell
                            .toFixed(1)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        )}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.items.data[item].product_id}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Card>
          <a href="/#/bazaar" className={classes.link}>
            <Button className={classes.button}>Back to Bazaar page</Button>
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(ItemView);
