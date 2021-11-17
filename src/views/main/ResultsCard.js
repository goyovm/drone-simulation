import { Button, Card, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfoTable from "../../components/InfoTable";
import { MIN_MEDIA_QUERY } from "../../utils/constants";
import { useStyles } from "../../utils/styles";

const ResultsCard = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);
  const company = useSelector((store) => store.company);
  const [data, setData] = useState([]);
  const [observations, setObservations] = useState("");

  const tripsToString = (trips) => {
    var res = "";
    for (let trip of trips) {
      res += trip.name + ", ";
    }
    return res.substring(0, res.length - 2);
  };

  const performCalculateTrips = () => {
    company.calculateTrips();
    var finalData = [];
    for (let trip of company.trips) {
      finalData.push([
        trip.tripNumber,
        trip.drone.name,
        tripsToString(trip.trips),
      ]);
    }
    setData(finalData);
    setObservations(company.observations);
  };

  return (
    <Card className={classes.resultsCard}>
      <Typography className={classes.cardTitle} variant="h6">
        3. Results
      </Typography>
      <div className={classes.spaceBetween}>
        <Typography variant="subtitle1">
          Press the button to calculate the necesary trips
        </Typography>
        <Button variant="contained" onClick={performCalculateTrips}>
          Calculate Trips
        </Button>
      </div>
      <div className={classes.scrollTable}>
        <InfoTable headers={["Drone", "Trip N#", "Locations"]} data={data} />
      </div>
      {observations !== "" && <Typography>{observations}</Typography>}
    </Card>
  );
};

export default ResultsCard;
