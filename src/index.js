import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.scss";

// Styles
import theme from "./mui/custom-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseLine />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
