import { createTheme } from "@mui/material/styles";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "./constants";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_PRIMARY,
    },
    secondary: {
      main: COLOR_SECONDARY,
    },
  },
});
