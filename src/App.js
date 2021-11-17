import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "./utils/theme";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Main from "./views/Main";
import Documentation from "./views/Documentation";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/doc" element={<Documentation />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
