import { Button, Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import InfoTable from "../../components/InfoTable";
import { MIN_MEDIA_QUERY } from "../../utils/constants";
import { useStyles } from "../../utils/styles";

const ResultsCard = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);

  return (
    <Card className={classes.resultsCard}>
      <Typography className={classes.cardTitle} variant="h6">
        3. Results
      </Typography>
      <div className={classes.spaceBetween}>
        <Typography variant="subtitle1">
          Press the button to calculate the necesary trips
        </Typography>
        <Button variant="contained">Calculate Trips</Button>
      </div>
      <div className={classes.scrollTable}>
        <InfoTable headers={[]} data={[]} />
      </div>
    </Card>
  );
};

export default ResultsCard;
