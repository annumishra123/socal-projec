import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import MainRoute from "./routers/MainRoute";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <MainRoute />
      </section>
    </Fragment>
  );
};

export default App;
