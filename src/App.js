import React, { useEffect } from "react";
import "./App.css";
import { loadData } from './actions/auth'
import { connect } from "react-redux";

import Dev from "./components/layout/Developers";

const App = ({loadData}) => {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="app">
      <Dev />
    </div>
  );
};
const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {loadData})(App);
