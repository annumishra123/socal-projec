import React, { useState, useEffect } from "react";
import UserData from "../../data.json";
import Card from "./Card.js";
import SearchBox from "./SearchBox.js";

const Developers = () => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const [username, setUserName] = useState(false);

  useEffect(() => {
    function myFunct() {
      const res = UserData.members;
      setData(res);
    }
    myFunct();
  }, [setData]);

  const onClick = (data) => {
    setUserName(data);
  };

  return (
    <div className="container search-table">
      <SearchBox searchData={searchData} setSearchData={setSearchData} />
      <div className="search-list">
        <h3 style={{ textAlign: "center" }}>{data.length} Records Found</h3>
        <table className="table">
          <tbody>
            {data.map((name, index) => {
              if (searchData.length !== 0) {
                if (
                  name.real_name
                    .toLowerCase()
                    .startsWith(searchData.toLowerCase())
                ) {
                  return (
                    <tr
                      key={index}
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-whatever="@mdo"
                      onClick={() => onClick(name)}
                    >
                      <td style={{ cursor: "pointer" }}>{name.real_name}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              }
              return (
                <tr
                  key={index}
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                  onClick={() => onClick(name)}
                >
                  <td style={{ cursor: "pointer" }}>{name.real_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Card name={username} />
    </div>
  );
};

export default Developers;
