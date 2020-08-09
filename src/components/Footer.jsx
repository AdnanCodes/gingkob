import React from "react";
import "./Footer.scss";
// Styles
import { Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="h6" align="center">
        <CopyrightIcon fontSize="inherit" /> Autumn || GingKo B.{" "}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
};
export default Footer;
