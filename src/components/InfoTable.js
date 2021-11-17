import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const InfoTable = ({ headers, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((item, key) => (
              <TableCell key={key}>{item}</TableCell>
            ))}
          </TableRow>
          <TableBody>
            {data.map((row, keyRow) => (
              <TableRow key={keyRow} style={{ width: "100%" }}>
                {row.map((item, keyCell) => (
                  <TableCell key={keyCell} style={{ width: "100%" }}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default InfoTable;
