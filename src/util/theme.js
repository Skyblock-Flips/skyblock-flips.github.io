import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#aaaaaa',
      light: '#dddddd',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
    },
  },
  spreadIt: {
    button: {
      backgroundColor: '#4CAFFF',

      textAlign: 'center',
      fontSize: '25px',
      padding: '10px 5px',
      color: 'white',

      outlineStyle: 'none',
      border: 'none',
      cursor: 'pointer',

      marginTop: '25px',

      /*position:fixed;*/
      minWidth: '10%',
    },
    error: {
      color: 'red',
    },
    inputField: {
      backgroundColor: 'white',
    },
    link: {
      textDecoration: 'none',
      color: "white",
      textAlign: "none",
    },
    table: {
      backgroundColor: '#424242',
      border: "thin solid #515151",
    },
    tableItem: {
      color: 'white',
      borderBottom: "thin solid #515151",
    },
  },
});

export default theme;
