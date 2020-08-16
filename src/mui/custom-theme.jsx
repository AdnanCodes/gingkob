import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "Comfortaa",
    h1: {
      fontSize: "3rem",
      fontWeight: "400",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.2rem",
    },
    h4: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: "0.8rem",
    },
    h6: {
      fontSize: "0.8rem",
    },
  },
});

export default theme;
