import React from "react";

const SearchBox = ({ setSearchData }) => {
  return (
    <div className="search-box">
      <div className="row">
        <div className="col-md-3">
          <h5>Search All Fields</h5>
        </div>
        <div className="col-md-9">
          <input
            type="text"
            onChange={(e) => setSearchData(e.target.value)}
            className="form-control"
            placeholder="Search here....."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
