import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserContext, ContextWrapper } from "./context/UserContext";

import PrivateRoutes from "./utils/PrivateRoutes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F76DB",
      light: "#2F76DB",
      dark: "#1F2D5A",
    },
    secondary: {
      main: "#FBFBFB",
    },
  },
});

function App() {
  const { user } = useContext(UserContext);
  // get current pathname
  let current_path = window.location.pathname;
  // If user not logged in redirect to login page

  return (
    <ContextWrapper>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes></PrivateRoutes>}>
                <Route
                  path="/"
                  exact
                  element={
                    user ? (
                      <Navigate to={"home"} replace></Navigate>
                    ) : (
                      <Navigate to={"/signin"} replace></Navigate>
                    )
                  }
                />
                <Route path="/home" element={<CardPage></CardPage>}></Route>
              </Route>
              <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </ContextWrapper>
  );
}

export default App;
