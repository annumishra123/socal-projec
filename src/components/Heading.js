import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
  Button,
} from "reactstrap";

export const Heading = ({ setNewUserAction }) => {
  const addNewUser = () => {
    setNewUserAction(true);
  };

  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand>Navbar</NavbarBrand>
        <Nav>
          <NavItem>
            <Button
              type="submit"
              className="btn btn-danger"
              onClick={addNewUser}
            >
              Add User
            </Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
