import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Pagination = ({ showPerPage, onPaginationChange, users }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtions, setNumberOfButtions] = useState(Math.ceil(20 / showPerPage));


  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onBUttionClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtions === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" style={{marginTop: "10px", marginLeft: "5px"}} href="!#" onClick={() => onBUttionClick("prev")}>
              Prev
            </a>
          </li>
          
          { new Array(numberOfButtions).fill("").map((data, index) => (
              <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a className="page-link" style={{marginTop: "10px", marginLeft: "5px"}} href="!#" onClick={() => setCounter(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          
          <li className="page-item">
            <a className="page-link" style={{marginTop: "10px", marginLeft: "5px"}} href="!#" onClick={() => onBUttionClick("next")}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
});


export default connect(mapStateToProps, {})(Pagination);
