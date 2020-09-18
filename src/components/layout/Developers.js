import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import Pagination from "./Pagination";


const Developers = ({users}) => {
  const [searchData, setSearchData] = useState("");
  const [username, setUserName] = useState(false);
  const [showPerPage, setShowPrPage] = useState(4)

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  });


  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end})
  }
  
  const onClick = (data) => {
    setUserName(data);
  };

  return (
    <div className="container search-table">
      <SearchBox searchData={searchData} setSearchData={setSearchData} />
      <div className="search-list">
        <h3 style={{ textAlign: "center" }}>{users.length} Records Found</h3>
        <table className="table">
          <tbody>
            {users.slice(pagination.start, pagination.end).map((name, index) => {
              if (searchData.length !== 0) {
                if (
                  name.title
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
                      <td style={{ cursor: "pointer" }}>{name.title}</td>
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
                  <td style={{ cursor: "pointer" }}>{name.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Card name={username} />  
      <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

export default connect(mapStateToProps, {})(Developers);
