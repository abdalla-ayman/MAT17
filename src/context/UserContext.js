import React, { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({
  signedIn: true,
  userType: "",
  setSignedIn: (val) => {},
  setUserType: (val) => {},
  login: (e) => {},
  logout: () => {},
  user: {},
  signup: () => {},
});

export default function ContextWrapper(props) {
  const [tokens, setTokens] = useState(() =>
    localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("tokens")
      ? jwt_decode(localStorage.getItem("tokens"))
      : null
  );
  const [userType, setUserType] = useState("waiting");

  const login = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();
    if (response.status === 200) {
      setTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("tokens", JSON.stringify(data));
      window.location.replace("/");
    } else {
      console.log("something went wrong");
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        email: e.target.email.value,
      }),
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 201) {
      login(e);
    } else {
      console.log("something went wrong");
    }
  };
  const logout = () => {
    localStorage.removeItem("tokens");
    setTokens(null);
    setUser(null);
    // window.location.replace("/");
  };

  const setUserTypeFunc = (val) => {
    setUserType(val);
  };

  let context = {
    userType: userType,
    setUserType: setUserTypeFunc,
    user: user,
    login: login,
    logout: logout,
    signup: signup,
  };
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}
