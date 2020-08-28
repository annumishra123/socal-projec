import React, { useState, useEffect, Fragment } from "react";
import UserData from "../../data.json";
import "../../App.css";

const Developers = ({ history }) => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    function myFunct() {
      const res = UserData.data.user;
      setData(res);
    }
    myFunct();
  }, [setData]);

  const onClick = (data) => {
    history.push({
      pathname: "/result",
      state: data,
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
        <h3 style={{ textAlign: "center" }}>{data.length} Records Found</h3>
        <table className="table">
          <tbody>
            {data.map((name, index) => {
              if (filter.length !== 0) {
                if (name.email.toLowerCase().startsWith(filter.toLowerCase())) {
                  return (
                    <tr onClick={() => onClick(name)} key={index}>
                      <td style={{ cursor: "pointer" }}>{name.email}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              }
              return (
                <Fragment>
                  <tr onClick={() => onClick(name)}>
                    <td style={{ cursor: "pointer" }}>{name.email}</td>
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
