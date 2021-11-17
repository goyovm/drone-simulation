import { Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { MIN_MEDIA_QUERY } from "../../utils/constants";
import { useStyles } from "../../utils/styles";
import InfoTable from "../../components/InfoTable";

const StatusCard = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);
  const company = useSelector((store) => store.company);

  const getDroneData = () => {
    var res = [];
    for (let drone of company.drones) {
      res.push([drone.name, drone.maxWeight]);
    }
    return res;
  };

  const getLocationData = () => {
    var res = [];
    for (let location of company.locations) {
      res.push([location.name, location.packageWeight]);
    }
    return res;
  };

  return (
    <Card className={classes.statusCard}>
      <Typography className={classes.cardTitle} variant="h6">
        2. Model Status
      </Typography>
      <Typography style={{ marginTop: "1em" }}>Drones List</Typography>
      <div className={classes.scrollTable}>
        <InfoTable headers={["Name", "Max Weight"]} data={getDroneData()} />
      </div>
      <Typography style={{ marginTop: "1em" }}>Locations List</Typography>
      <div className={classes.scrollTable}>
        <InfoTable
          headers={["Location Name", "Package Weight"]}
          data={getLocationData()}
        />
      </div>
    </Card>
  );
};

export default StatusCard;
