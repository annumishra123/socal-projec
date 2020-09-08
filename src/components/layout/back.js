import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Moment from "moment";
import "react-calendar/dist/Calendar.css";

const Card = ({ name, setModelView }) => {
  const [activity, setActivity] = useState("Not active now");
  const [state, setState] = useState({
    date: new Date(),
  });
  const [isCalenderActive, setIsCalenderActive] = useState(false);

  useEffect(() => {
    for (let i = 0; name && i < name.activity_periods.length; i++) {
      let startTime = Moment(name.activity_periods[i].start_time);
      let endTime = Moment(name.activity_periods[i].end_time);
      let nowT = Moment.now();
      let startDiff = startTime.diff(nowT);
      let endDiff = endTime.diff(nowT);
      if (endDiff > 0) {
        setActivity(
          `${Moment(name.activity_periods[i].start_time).format("L")}
          ${Moment(name.activity_periods[i].start_time).format(
            "hh:mm"
          )} to  ${Moment(name.activity_periods[i].end_time).format("hh:mm")}`
        );
        break;
      }
    }
  }, [name]);

  const onClose = () => {
    setModelView(false);
  };

  const onChange = (date) => setState({ date });

  return (
    <div className="custom_modal">
      <div className="modal_content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            User Data
          </h5>

          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsCalenderActive(!isCalenderActive)}
          >
            <span aria-hidden="true">Cal</span>
          </button>
        </div>
        {isCalenderActive ? (
          <Calendar onChange={onChange} value={state.date} />
        ) : (
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label className="col-form-label">User Name:</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={name.real_name}
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="col-form-label">Time Zone:</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={name.tz}
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="col-form-label">Today Active:</label>
                <input
                  type="text"
                  className="form-control"
                  value={`${activity}`}
                  disabled
                />
              </div>
            </form>
          </div>
        )}
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
