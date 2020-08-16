import React from "react";

//SCSS
import "./About.scss";
//Assets
import Autumn from "./assets/autumn_sample_2.png";
//Material UI
import {
  Button,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Instagram, Twitter, YouTube, EmailRounded } from "@material-ui/icons";

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

const About = () => {
  const classes = useStyles();
  const goToMedialinks = (links) => {
    switch (links) {
      case "twitter":
        window.open("https://twitter.com/", "_blank");
        break;
      case "email":
        window.open("mailto:gingkobe@gmail.com", "_blank");
        break;
      case "youtube":
        window.open(
          "https://www.youtube.com/channel/UCh-m0FhmRBp4GbMD19YcB9w",
          "_blank"
        );
        break;
      case "instagram":
        window.open("https://www.instagram.com/gingko.be/", "_blank");
        break;
      case "etsy":
        window.open("https://www.etsy.com/shop/gingkob", "_blank");
        break;
      case "ravelry":
        window.open("https://www.ravelry.com/designers/gingko-b", "_blank");
        break;
      default:
        break;
    }
  };
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
            <Typography variant="h4" align="justify" className="intro">
              Hi, my name is Autumn! I've been designing and making clothes
              since I was 7 - although I'm not sure my dolls appreciated my
              artistic vision at the time.
              <br />
              <br />
              That vision has come a long way, and has developed into the
              knitwear designs that you will find here. This shop is a
              manifestation of my dreams, and I thank you for taking time to
              explore it! <br />
              <br />I like to believe that there is need to create in everyone,
              no matter where our inclinations lie.
              <br />
              <br />
              <Grid container display="flex" justify="center">
                Find me here:
                <Button
                  variant="contained"
                  color="secondary"
                  className="about-button"
                  startIcon={<EmailRounded />}
                  onClick={() => goToMedialinks("email")}
                >
                  <Typography variant="h4">gingkobe@gmail.com</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="about-button"
                  startIcon={<Twitter />}
                  onClick={() => goToMedialinks("twitter")}
                >
                  <Typography variant="h4">@not-real-handle</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="about-button"
                  startIcon={<Instagram />}
                  onClick={() => goToMedialinks("instagram")}
                >
                  <Typography variant="h4">@gingko.be</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="about-button"
                  startIcon={<YouTube />}
                  onClick={() => goToMedialinks("youtube")}
                >
                  <Typography variant="h4">Gingko B.</Typography>
                </Button>
                <br />
                Also, find me at my shops:
                <Button
                  variant="contained"
                  color="secondary"
                  className="about-button"
                  onClick={() => goToMedialinks("esty")}
                >
                  <Typography variant="h4">Etsy</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="about-button"
                  onClick={() => goToMedialinks("ravelry")}
                >
                  <Typography variant="h4">Ravelry</Typography>
                </Button>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};
export default About;
