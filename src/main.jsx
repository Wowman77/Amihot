import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Leaderboards from "./Leaderboards.jsx";
import YourRatings from "./YourRatings.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" Component={App} />
      <Route exact path="/leaderboards" Component={Leaderboards} />
      <Route exact path="/your-ratings" Component={YourRatings} />
      {/* <App /> */}
    </Routes>
  </Router>
);
