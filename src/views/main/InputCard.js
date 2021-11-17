import {
  Button,
  Card,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Company from "../../models/Company";
import { appSetCompany } from "../../store/actions";
import { MIN_MEDIA_QUERY } from "../../utils/constants";
import { loadTextFromFile } from "../../utils/functions";
import { useStyles } from "../../utils/styles";

const InputCard = () => {
  const query = useMediaQuery(`(min-width: ${MIN_MEDIA_QUERY}px)`);
  const classes = useStyles(query);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const loadToModel = (txt) => {
    if (txt === "") {
      return;
    }
    var company = new Company();
    var first = true;
    for (let line of txt.split(/\n/)) {
      if (first) {
        let data = line.split(/,/);
        for (let i = 0; i < data.length; i = i + 2) {
          company.addDrone(
            data[i],
            Number(data[i + 1].trim().replace(/\n/, ""))
          );
        }
        first = false;
      } else {
        let data = line.split(/,/);
        for (let i = 0; i < data.length; i = i + 2) {
          company.addLocation(data[i], data[i + 1].trim().replace(/\n/, ""));
        }
      }
    }
    dispatch(appSetCompany(company));
  };

  const performLoadFromFile = () => {
    loadTextFromFile().then((txt) => {
      loadToModel(txt);
    });
  };

  const performLoadFromInput = () => {
    loadToModel(inputText);
  };

  return (
    <Card className={classes.inputCard}>
      <Typography variant="h6" className={classes.cardTitle}>
        1. Input Data
      </Typography>
      <div className={query ? classes.spaceBetween : classes.boxVertical}>
        <div className={classes.boxVertical}>
          <span>Load information from a formated file</span>
          <Button variant="contained" onClick={performLoadFromFile}>
            Load from File
          </Button>
        </div>
        <div className={classes.boxVertical}>
          <span>Load from input text</span>
          <div className={classes.box2x1}>
            <TextField
              placeholder="Input text"
              multiline
              value={inputText}
              onChange={(evt) => setInputText(evt.target.value)}
            />
            <Button variant="contained" onClick={performLoadFromInput}>
              Load
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InputCard;
