import React, { createContext, useState, useEffect } from "react";
import { authenticate } from "../api/auth";

export const UserContext = createContext({
  user: {},
});

export default function ContextWrapper(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    authenticate()
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
}
