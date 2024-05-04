import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./constants/path";
import Feed from "./pages/feed";
import Navbar from "./components/common/navbar";

const App = () => {
  useEffect(() => {
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={PATHS.FEED} element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
