import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navigation from "./components/Nav.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer";

// Styles
import { Typography, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid
        container
        display="flex"
        alignContent="center"
        justify="space-evenly"
      >
        <Typography align="center" variant="h1">
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
    </div>
  );
}

export default App;
