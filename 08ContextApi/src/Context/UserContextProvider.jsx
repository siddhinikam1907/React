import React, { Children } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [user, SetUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
