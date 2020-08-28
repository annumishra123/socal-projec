import React from "react";
import { Link } from "react-router-dom";

const Landing = ({isAuthenticated}) => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Appiness Company</h1>
          <p className="lead">
          Appiness Company
          </p>
          <div className="buttons">
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Landing;
