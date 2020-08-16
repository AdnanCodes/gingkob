import React from "react";
import "./Footer.scss";
// Styles
import { Typography, Grid, Divider } from "@material-ui/core";

//Icons
import {
  Copyright,
  Instagram,
  Twitter,
  YouTube,
  EmailRounded,
} from "@material-ui/icons";

const Footer = () => {
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
      default:
        break;
    }
  };
  return (
    <section>
      <div className="footer">
        <Typography variant="h6" align="center">
          <Copyright fontSize="inherit" /> Autumn || Gingko B.{" "}
          {new Date().getFullYear()}
          <br />
          <Grid container display="flex" justify="space-between">
            <Instagram
              className="icons"
              fontSize="small"
              onClick={() => goToMedialinks("instagram")}
            />
            <Twitter
              className="icons"
              fontSize="small"
              onClick={() => goToMedialinks("twitter")}
            />
            <YouTube
              className="icons"
              fontSize="small"
              onClick={() => goToMedialinks("youtube")}
            />
            <EmailRounded
              className="icons"
              fontSize="small"
              onClick={() => goToMedialinks("email")}
            />
          </Grid>
        </Typography>
      </div>
    </section>
  );
};
export default Footer;
