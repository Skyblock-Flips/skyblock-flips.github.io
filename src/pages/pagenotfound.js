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

class PageNotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>404</h1>
          <p>
            Page Not Found
          </p>
          <Button className={classes.button} href="/">Return Home</Button>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(PageNotFound);
