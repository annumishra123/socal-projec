import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Moment from "moment";
import "react-calendar/dist/Calendar.css";

const Card = ({ name }) => {
  const [activity, setActivity] = useState("Not Activity Today");
  const [state, setState] = useState({
    date: new Date(),
  });
  const [oldData, setOlddata] = useState("Not Previous Activity");

  useEffect(() => {
    for (let i = 0; name && i < name.activity_periods.length; i++) {
      let startTime = Moment(name.activity_periods[i].start_time).format("L");
      let nowT = Moment().format("L");
      
      if (nowT === startTime) {
        setActivity(
          `${Moment(name.activity_periods[i].start_time).format("L")}
          ${Moment(name.activity_periods[i].start_time).format(
            "hh:mm"
          )} to ${Moment(name.activity_periods[i].end_time).format("hh:mm")}`
        );
        break;
      } else {
        setActivity("No Activity Today");
      }
    }
  }, [name]);

  const onChange = (date) => {
    for (let i = 0; name && i < name.activity_periods.length; i++) {
      let startTime = Moment(name.activity_periods[i].start_time).format("L");
      let endTime = Moment(name.activity_periods[i].end_time);
      let selectT = Moment(date).format("L");
      if (startTime === selectT) {
        setOlddata(
          `${Moment(name.activity_periods[i].start_time).format("L")}
            ${Moment(name.activity_periods[i].start_time).format(
              "hh:mm"
            )} to ${Moment(name.activity_periods[i].end_time).format("hh:mm")}`
        );
        break;
      } else {
        setOlddata("Not Previous Activity");
      }
    }
  };

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
              User Data
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
                            User Name
                          </strong>
                        </td>
                        <td className="text-primary">{name.real_name}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-user  text-primary"></span>
                            Time Zone
                          </strong>
                        </td>
                        <td className="text-primary">{name.tz}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-user  text-primary"></span>
                            Today Activity
                          </strong>
                        </td>
                        <td className="text-primary">{activity}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>
                            <span className="glyphicon glyphicon-user  text-primary"></span>
                            Previous Activity
                          </strong>
                        </td>
                        <td className="text-primary">{oldData}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-md-6">
                <Calendar onChange={onChange} value={state.date} />
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
