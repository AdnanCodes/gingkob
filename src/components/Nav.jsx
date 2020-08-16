import React from "react";
import IconButton from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

// Icon
import MenuIcon from "@material-ui/icons/Menu";
// import "./Nav.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  //   paper: {
  //     marginRight: theme.spacing(2),
  //   },
}));

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="secondary"
        // className="menu"
      >
        <MenuIcon fontSize="small" />
        {/* <Typography variant="h4">Menu</Typography> */}
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose} component={Link} to="/">
                    {" "}
                    <Typography variant="h4">Home</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/about">
                    <Typography variant="h4">About</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/products"
                  >
                    <Typography variant="h4">Products</Typography>
                  </MenuItem>
                  {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Navigation;
