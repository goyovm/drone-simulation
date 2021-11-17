import { createStore } from "redux";
import Company from "../models/Company";
import { APP_SET_COMPANY } from "./actionTypes";

const initial = {
  company: new Company(),
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case APP_SET_COMPANY:
      return { ...state, company: action.company };
    default:
      return { ...state };
  }
};

export default createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
