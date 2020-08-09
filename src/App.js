import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { loadData } from "./actions/transactionActions";

import { connect } from "react-redux";

const App = ({ loadData }) => {
  useEffect(() => {
    console.log("LOAD DATA ....");

    loadData();
  }, []);

  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Switch>
        <Route exact path="/" component={Home} />
       
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, { loadData })(App);
