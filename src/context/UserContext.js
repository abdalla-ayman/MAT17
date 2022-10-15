import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  signedIn: true,
  userType: "",
  setSignedIn: (val) => {},
  setUserType: (val) => {},
  login: (e) => {},
  logout: () => {},
  user: {},
});

export default function ContextWrapper(props) {
  const [user, setUser] = useState();


    let data = await response.json();
    if (response.status === 200) {
      let token = data.token;
      let user = data.user;
      setToken(token);
      setUser(user);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      window.location.replace("/");
    } else {
      alert(`Error: ${data}`);
    }
  };

  // const signup = async (e) => {
  //   e.preventDefault();
  //   let response = await fetch("http://127.0.0.1:8000/api/users/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //       first_name: e.target.firstName.value,
  //       last_name: e.target.lastName.value,
  //       email: e.target.email.value,
  //     }),
  //   });
  //   let data = await response.json();
  //   console.log(data);
  //   if (response.status === 201) {
  //     login(e);
  //   } else {
  //     console.log("something went wrong");
  //   }
  // };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
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
  };
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}
