import React, { createContext, useState, useEffect } from "react";
import { authenticate } from "../api/auth";

export const UserContext = createContext({
  user: {},
});

export default function ContextWrapper(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    authenticate().then((user) => setUser(user));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
