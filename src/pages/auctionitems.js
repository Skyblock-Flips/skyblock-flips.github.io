import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import theme from '../util/theme';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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
  search: {
    color: 'white',
    marginBottom: '1%',
  },
};

class AuctionItems extends Component {
  state = {
    items: {},
    search: '',
    page: 0,
  };

  splitToChunks = (l) => {
    let out = [];
    for (let i = 0; i < l.length; i += 50) {
      out.push(l.slice(i, i + 50));
    }
    return out;
  };

  componentDidMount() {
    axios
      .get('https://skyblockflips-api.asra.repl.co/auction/items')
      .then((res) => {
        this.setState({
          ...this.state,
          items: res.data,
        });
      });
  }

  interval = setInterval(() => {
    axios
      .get('https://skyblockflips-api.asra.repl.co/auction/items')
      .then((res) => {
        this.setState({
          ...this.state,
          items: res.data,
        });
      });
  }, 120000);

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className={classes.wrapper}>
            <div className={classes.cardHolder}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                className={classes.search}
                onChange={(s) => {
                  this.setState({
                    ...this.state,
                    search: s === null ? '' : s,
                  });
                }}
                fullWidth
              />
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
                        <b>Average Price</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Highest Price</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Lowest Price</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b># of Auctions</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.splitToChuncks(Object.keys(this.state.items))[
                      this.state.page
                    ].map((e, i) => {
                      return e.includes(this.state.search) ? (
                        <TableRow key={i + 1} hover>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.tableItem}
                          >
                            {e}
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {this.state.items[e].value
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {this.state.items[e].prices[0]
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {this.state.items[e].prices[
                              this.state.items[e].prices.length - 1
                            ]
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {this.state.items[e].prices.length
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </TableCell>
                        </TableRow>
                      ) : null;
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className={classes.notes}>
              <h1>Auction Items</h1>
              <p style={{ textAlign: 'left' }}>
                This just shows the auction data for items, the auction flips
                page is coming soon.
              </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(AuctionItems);
