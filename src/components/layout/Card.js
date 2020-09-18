import React from "react";

const Card = ({ name }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              All Data
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-asterisk text-primary"></span>
                            Title
                          </strong>
                        </td>
                        <td className="text-primary">{name.title}</td>
                      </tr>
                      
                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-user  text-primary"></span>
                            Flight Number
                          </strong>
                        </td>
                        <td className="text-primary">{name.flight_number}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-md-6">
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-asterisk text-primary"></span>
                            Event Date

                          </strong>
                        </td>
                        <td className="text-primary">{name.event_date_utc}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-user  text-primary"></span>
                            Details
                          </strong>
                        </td>
                        <td className="text-primary">{name.details}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
