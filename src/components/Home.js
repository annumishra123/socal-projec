import React, { useState } from "react";
import { Heading } from "./Heading";
import UserList from "./UserList";
import UserAdd from "./UserAdd";

export const Home = () => {
  const [newUserAction, setNewUserAction] = useState(false);
  const [newUsrEditAction, setNewEditUserAction] = useState(false);

  return (
    <>
      <Heading setNewUserAction={setNewUserAction} />
      {newUserAction && <UserAdd setNewUserAction={setNewUserAction} />}
      <UserList
        setNewEditUserAction={setNewEditUserAction}
        newUsrEditAction={newUsrEditAction}
      />
    </>
  );
};
