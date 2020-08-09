import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { insert } from "../actions/transactionActions";


 const UserAdd = ({ setNewUserAction, insert }) => {
  const cancelNewUser = () => setNewUserAction(false);

  const [name, setName] = useState("");
  

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
     login: {uuid: uuid()},
     name: {first:name},
    };
     insert(newUser);
     setNewUserAction(false)
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" onClick={cancelNewUser} className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  users: state.transactionReducer.users,
});

export default connect(mapStateToProps, { insert})(UserAdd);

