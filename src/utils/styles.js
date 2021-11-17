import { makeStyles } from "@mui/styles";

const cards = {
  flex: 1,
  padding: "1em",
};

const styleLarge = {
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    height: 30,
  },
  mainContainer: {
    margin: "2em",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "minmax(100px, auto)",
    gridGap: "1em",
  },
  cardTitle: {
    paddingBottom: "1em",
  },
  inputCard: {
    ...cards,
    gridColumn: "1",
    gridRow: "1",
  },
  statusCard: {
    ...cards,
    gridColumn: "2",
    gridRow: "1 / 4",
  },
  resultsCard: {
    ...cards,
    gridColumn: "1",
    gridRow: "2",
  },

  // Generic Types
  spaceBetween: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxVertical: {
    display: "grid",
    gridAutoRows: "100%, auto",
    gridGap: "1em",
  },
  box2x1: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridGap: "1em",
  },
  scrollTable: {
    marginTop: "1em",
    maxHeight: "170px",
    overflowY: "auto",
    overflowX: "auto",
    padding: "1em",
    borderWeight: "0.5",
    borderStyle: "solid",
    borderColor: "#eeeeee",
    borderRadius: "5px",
  },
};

const styleSmall = {
  ...styleLarge,
  logo: {
    height: 15,
    width: 100,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  inputCard: { ...cards },
  statusCard: { ...cards },
  resultsCard: { ...cards },
  mainContainer: {
    ...styleLarge.mainContainer,
    margin: "1em",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr 1fr",
  },
};

export const useStyles = (isLarge) => {
  if (isLarge) {
    return makeStyles(styleLarge)();
  } else {
    return makeStyles(styleSmall)();
  }
};
