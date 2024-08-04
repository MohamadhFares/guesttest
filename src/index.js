import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Registration from "./Registration";
import Settings from "./Settings";
import { BrowserRouter as Router, Route,Routes, Switch, Link, useHistory } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/" element={<Registration />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
      
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
