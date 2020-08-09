import React from "react";
import Navigation from "./Nav.jsx";
// import { Link } from "react-router-dom";
import "./Home.scss";
//Material UI
import { Typography, Container, Grid } from "@material-ui/core";
/* TODO
  1. Carousel (display your top items)
	2. Mini Intro (Picture & 1-2 sentence welcome message)
	3. Bottom of screen more Contact Info and Copyright
  4. Navigation Bar (Could be breadcrumbs or others) Containing links to other pages (All for development)
  5. Clickable to products Requires Product Page and dedicated product component which creates Full UI for one product 
*/

const Home = () => {
  return (
    <Container>
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
      <section className="intro">
        Welcome to my site! <br />
        Hi! I am Autumn and I work in Fiber Art, Knitwear Design, and Handmade
        Wardrobe
      </section>
    </Container>
  );
};
export default Home;
