import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

const stuff = [
  {
    label: "Knitting Pattern 1",
    imgPath: "https://source.unsplash.com/BmrPEgNoVRY/640x426",
  },
  {
    label: "Knitting Pattern 2",
    imgPath: "https://source.unsplash.com/y7NBxZuL-_w/640x426",
  },
  {
    label: "Knitting Pattern 3",
    imgPath: "https://source.unsplash.com/ujaxQq0tB5A/640x426",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "10px",
  },
});

const Products = () => {
  return (
    <div>
      Show Stuff
      {stuff.map((item, index) => (
        <div key={index}>
          <h1>{item.label}</h1>
          <img alt="ignore" src={item.imgPath} />
        </div>
      ))}
    </div>
  );
};
export default Products;
