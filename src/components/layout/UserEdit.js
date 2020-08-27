import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { updateUser } from "../../actions/auth";
import PropTypes from "prop-types";

const UserEdit = ({ updateUser, user, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({ ...user });
  }, []);

  const { name, email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  const updateHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <p className="lead">
        <i className="fas fa-user" /> Update Your Details
      </p>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={(e) => updateHandler(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={(e) => updateHandler(e)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={formData.password}
            onChange={(e) => updateHandler(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Edit" />
      </form>
    </Fragment>
  );
};

UserEdit.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { updateUser })(UserEdit);
