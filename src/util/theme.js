import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
    },
  },
  spreadIt: {
    button: {
      backgroundColor: "#4CAFFF",

      textAlign: "center",
      fontSize: "25px",
      padding: "10px 5px",
      color: "white",

      outlineStyle: "none",
      border: "none",
      cursor: "pointer",

      marginTop: "25px",

      /*position:fixed;*/
      minWidth: "10%",
    },
    error: {
      color: "red",
    },
    inputField: {
      backgroundColor: "white",
    },
    link: {
      textDecoration: "none",
    }
  },
});

export default theme;
