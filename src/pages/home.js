import logo from "../logo.svg";
import "../App.css";

// React
import React, { Component } from "react";

// MUI
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import theme from "../util/theme";

const styles = {
  ...theme.spreadIt,
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button className={classes.button}>Learn React</Button>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
