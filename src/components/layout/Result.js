import React, { useState, useEffect } from "react";
import "../../Result.css";
import Chart from "./Chart";

const Result = ({ location }) => {
  const [res, setRes] = useState([...location.state.data2]);
  const [valueXaxis, setvalueXaxis] = useState([]);
  const [valueYaxis, setvalueYaxis] = useState([]);

  useEffect(() => {
    setvalueXaxis([...res.map((e) => e.date)]);
    setvalueYaxis([...res.map((e) => e.nav)]);
  }, []);

  return (
    <div>
      <div className="inf-content">
        <div className="row">
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-asterisk text-primary"></span>
                        Fund House
                      </strong>
                    </td>
                    <td className="text-primary">
                      {location.state.data.fund_house}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-user  text-primary"></span>
                        Scheme Category
                      </strong>
                    </td>
                    <td className="text-primary">
                      {location.state.data.scheme_category}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            {/* <br /> */}
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Scheme Name
                      </strong>
                    </td>
                    <td className="text-primary">
                      {location.state.data.scheme_name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Scheme Type
                      </strong>
                    </td>
                    <td className="text-primary">
                      {location.state.data.scheme_type}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Chart valueXaxis={valueXaxis} valueYaxis={valueYaxis} />
    </div>
  );
};

export default Result;
