import React from "react";
import "../../Result.css";

const Result = ({ location }) => {
  return (
    <div>
      <div className="inf-content">
        <div className="row">
          <div className="col-md-4">
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-asterisk text-primary"></span>
                        Name
                      </strong>
                    </td>
                    <td className="text-primary">{location.state.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-user  text-primary"></span>
                        Email
                      </strong>
                    </td>
                    <td className="text-primary">{location.state.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4">
            {/* <br /> */}
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Mobile No
                      </strong>
                    </td>
                    <td className="text-primary">{location.state.phoneNo}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Gender
                      </strong>
                    </td>
                    <td className="text-primary">{location.state.gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-4">
            {/* <br /> */}
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        UserId
                      </strong>
                    </td>
                    <td className="text-primary">{location.state.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Age
                      </strong>
                    </td>
                    <td className="text-primary">{location.state.age}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
