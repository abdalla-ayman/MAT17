import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: {},
});

export default function ContextWrapper(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    //send request to back to get user 
    //set user
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
}
