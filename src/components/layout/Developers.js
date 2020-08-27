import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import "../../App.css";

const Developers = ({ history }) => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function myFunct() {
      const res1 = axios.get("https://api.mfapi.in/mf/100121");
      const res2 = axios.get("https://api.mfapi.in/mf/100350");
      const res3 = axios.get("https://api.mfapi.in/mf/142330");
      const res4 = axios.get("https://api.mfapi.in/mf/105405");
      const res5 = axios.get("https://api.mfapi.in/mf/117593");

      Promise.all([res1, res2, res3, res4, res5]).then((values) => {
        setData(values);
      });
    }
    myFunct();
  }, [setData]);

  const onClick = (data, data2) => {
    history.push({
      pathname: "/result",
      state: {data, data2}
    });
  };

  return (
    <div className="search-table">
      <div className="search-box">
        <div className="row">
          <div className="col-md-3">
            <h5>Search All Fields</h5>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control"
              placeholder="Search here....."
            />
          </div>
        </div>
      </div>
      <div className="search-list">
        <h3 style={{ textAlign: "center" }}>{data.length}  Records Found</h3>
        <table className="table">
          <tbody>
            {data.map((name, index) => {
              if (filter.length !== 0) {
                if (
                  name.data.meta.scheme_name
                    .toLowerCase()
                    .startsWith(filter.toLowerCase())
                ) {
                  return (
                    <tr onClick={() => onClick(name.data.meta, name.data.data)} key={index}>
                      <td style={{cursor:"pointer"}}>{name.data.meta.scheme_name}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              }
              return (
                <Fragment>
                  <tr onClick={() => onClick(name.data.meta, name.data.data)}>
                    <td style={{cursor:"pointer"}}>{name.data.meta.scheme_name}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Developers;
