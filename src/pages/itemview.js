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
    height: '50%',
  },
};

class ItemView extends Component {
  state = {
    items: {},
    names: {},
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
              {this.state.names === undefined
                ? 'Loading...'
                : this.state.names[item]}
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
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Margin</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Buy Price</b>
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        <b>Sell Price</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={1} hover>
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
                        {this.state.items.margins.items[item].buyOffer
                          .toFixed(1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </TableCell>
                      <TableCell align="center" className={classes.tableItem}>
                        {this.state.items.margins.items[item].sellOffer
                          .toFixed(1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Card>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(ItemView);
