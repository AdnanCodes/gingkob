import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Autumn from "./assets/autumn_sample.png";
import Carousel from "./Carousel";
//Material UI
import {
  Typography,
  Container,
  Grid,
  Card,
  // CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

/* TODO
  1. Carousel (display your top items)
	2. Mini Intro (Picture & 1-2 sentence welcome message)
	3. Bottom of screen more Contact Info and Copyright
  4. Navigation Bar (Could be breadcrumbs or others) Containing links to other pages (All for development)
  5. Clickable to products Requires Product Page and dedicated product component which creates Full UI for one product 
*/

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 20,
    padding: 10,
  },
  media: {
    height: 300,
    borderRadius: 10,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container display="flex" direction="column" alignItems="center">
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            image={Autumn}
            title="Autumn Smiling"
          />
          <CardContent>
            <Typography variant="h4" className="intro">
              Hi! I am Autumn and I work in Fiber Art, Knitwear Design, and
              Handmade Wardrobe
            </Typography>
          </CardContent>
          <Grid container display="flex" justify="center">
            <CardActions>
              <Button
                component={Link}
                to="/about"
                size="medium"
                color="secondary"
                variant="contained"
              >
                <Typography variant="h5" gutterBottom>
                  Learn More
                </Typography>
              </Button>
            </CardActions>
          </Grid>
        </Card>
        <Carousel />
      </Grid>
    </Container>
  );
};
export default Home;
