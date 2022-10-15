import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import ContextWrapper from "./context/UserContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import SigninPage from "./pages/SigninPage";
import AdminRoutes from "./utils/AdminRoutes";
import AttendancePage from "./pages/admin/AttendancePage";
import ComplaintPage from "./pages/admin/ComplaintsPage";
import SendEmailsPage from "./pages/admin/SendEmailsPage";
import VacationRequestsPage from "./pages/admin/VacationRequestsPage";
import RequestVacationPage from "./pages/employee/RequestVacationPage";
import SendComplaintPage from "./pages/employee/SendComplaintPage";
import Error404 from "./pages/Error404";
import EmployeeRoutes from "./utils/EmployeeRoutes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F76DB",
      light: "#2F76DB",
      veryLight: "#73abfa",
      dark: "#1F2D5A",
      veryDark: "#0f1a40",
    },
    secondary: {
      main: "#FBFBFB",
      light: "#606060",
      black: "#000000",
      white: "#ffffff",
    },
  },
});

function App() {
  // const { user } = useContext(UserContext);
  // console.log(user);
  const user = { role: "employee" };
  // const user = {role:'admin'}

  // get current pathname
  let current_path = window.location.pathname;
  // If user not logged in redirect to login page

  //function to get user info with token when page refresh
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      fetch("/auth/refresh", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          authToken: token,
        },
      })
        .then((res) => {
          //sign in user here
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <ContextWrapper>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  user.role == "employee" ? (
                    <Navigate to={"/requestVacation"} replace></Navigate>
                  ) : user.role == "admin" ? (
                    <Navigate to={"/adminHome"} replace></Navigate>
                  ) : (
                    <Navigate to={"/signin"} replace></Navigate>
                  )
                }
              />
              <Route
                path="/employeeHome"
                element={<RequestVacationPage></RequestVacationPage>}
              ></Route>
              <Route
                path="/requestVacation"
                element={<RequestVacationPage></RequestVacationPage>}
              ></Route>
              <Route
                path="/sendComplaint"
                element={<SendComplaintPage></SendComplaintPage>}
              ></Route>

              <Route
                path="/adminHome"
                element={<AttendancePage></AttendancePage>}
              ></Route>
              <Route
                path="/complaints"
                element={<ComplaintPage></ComplaintPage>}
              ></Route>
              <Route
                path="/sendEmail"
                element={<SendEmailsPage></SendEmailsPage>}
              ></Route>
              <Route
                path="/adminVacations"
                element={<VacationRequestsPage></VacationRequestsPage>}
              ></Route>
              <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
              <Route path="/404" element={<Error404></Error404>}></Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </ContextWrapper>
  );
}

export default App;
