import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import { MIN_MEDIA_QUERY } from "../utils/constants";
import { useStyles } from "../utils/styles";

const Documentation = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);

  return <Container className={classes.mainContainer}></Container>;
};

export default Documentation;
