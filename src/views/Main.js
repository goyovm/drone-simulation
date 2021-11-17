import { useMediaQuery } from "@mui/material";
import React from "react";
import { MIN_MEDIA_QUERY } from "../utils/constants";
import { useStyles } from "../utils/styles";
import InputCard from "./main/InputCard";
import ResultsCard from "./main/ResultsCard";
import StatusCard from "./main/StatusCard";

const Main = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);

  return (
    <div className={classes.mainContainer}>
      <InputCard />
      <StatusCard />
      <ResultsCard />
    </div>
  );
};

export default Main;
