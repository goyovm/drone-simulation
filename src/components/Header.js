import { AppBar, Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { MIN_MEDIA_QUERY } from "../utils/constants";
import { useStyles } from "../utils/styles";

const Header = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <div className={classes.title}>
            <img
              src="https://velozient.com/wp-content/uploads/2020/09/Logo-Options-e1601060934796.png"
              alt=""
              className={classes.logo}
            />
            <Typography
              variant="h5"
              style={{ marginLeft: 10, fontWeight: "bold" }}
            >
              Drone Coding Test
            </Typography>
          </div>
          {query && (
            <Typography variant="subtitle1">
              By Gregorio Vargas Miranda
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
