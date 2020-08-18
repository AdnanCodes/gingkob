import React from "react";
import { Route, Switch, Link } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navigation from "./components/Nav.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer";
// Styles
import { Typography, Grid } from "@material-ui/core";
import "./App.scss";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   // root: {
//   // },
//   variant: {
//     fontSize: 3
//   },
// });

function App() {
  return (
    <div className="App">
      <Grid container display="flex" justify="space-between">
        <Grid
          container
          display="flex"
          alignContent="center"
          justify="space-between"
        >
          <Typography
            align="center"
            variant="h1"
            className="title"
            component={Link}
            to="/"
          >
            Gingko B.
          </Typography>
          <Navigation />
        </Grid>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
        </Switch>
        <Grid
          container
          display="flex"
          alignContent="center"
          justify="space-evenly"
        >
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
