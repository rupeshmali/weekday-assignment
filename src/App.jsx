import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./constants/path";
import Feed from "./pages/feed";
import Navbar from "./components/common/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppWrapper from "./components/common/app-wrapper";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(85, 239, 196)",
      light: "rgb(209, 255, 242)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#000",
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={PATHS.FEED} element={<Feed />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
