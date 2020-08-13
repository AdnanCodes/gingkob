import React from "react";
import "./Footer.scss";
// Styles
import { Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

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
    <div className="footer">
      <Typography variant="h6" align="center">
        <CopyrightIcon fontSize="inherit" /> Autumn || Gingko B.{" "}
        {new Date().getFullYear()}
        <br />
        <InstagramIcon
          className="icons"
          fontSize="small"
          onClick={() => goToMedialinks("instagram")}
        />
        <TwitterIcon
          className="icons"
          fontSize="small"
          onClick={() => goToMedialinks("twitter")}
        />
        <YouTubeIcon
          className="icons"
          fontSize="small"
          onClick={() => goToMedialinks("youtube")}
        />
        <EmailRoundedIcon
          className="icons"
          fontSize="small"
          onClick={() => goToMedialinks("email")}
        />
      </Typography>
    </div>
  );
};
export default Footer;
