import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext } from "react";
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
import AdminHome from "./pages/admin/AdminHome";
import EmployeeHome from "./pages/employee/EmployeeHome";
import AdminRoutes from "./utils/AdminRoutes";
import AttendancePage from "./pages/admin/AttendancePage";
import ComplaintPage from "./pages/admin/ComplaintsPage";
import PayrollPage from "./pages/admin/PayrollPage";
import SendEmailsPage from "./pages/admin/SendEmailsPage";
import VacationRequestsPage from "./pages/admin/VacationRequestsPage";
import RequestVacationPage from "./pages/employee/RequestVacationPage";
import SendComplaintPage from "./pages/employee/SendComplaintPage";
import Error404 from "./pages/Error404";
import EmployeeRoutes from "./utils/EmployeeRoutes";
import Policies from "./pages/Policies";

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
  const { user } = useContext(UserContext);
  console.log(user);
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
                    user.role == "employee" ? (
                      <Navigate to={"/employeeHome"} replace></Navigate>
                    ) : user.role == "admin" ? (
                      <Navigate to={"/adminHome"} replace></Navigate>
                    ) : (
                      <Navigate to={"/signin"} replace></Navigate>
                    )
                  }
                />
                <Route element={<EmployeeRoutes></EmployeeRoutes>}>
                  <Route
                    path="/employeeHome"
                    element={<EmployeeHome></EmployeeHome>}
                  ></Route>
                  <Route
                    path="/requestVacation"
                    element={<RequestVacationPage></RequestVacationPage>}
                  ></Route>
                  <Route
                    path="/sendCompliant"
                    element={<SendComplaintPage></SendComplaintPage>}
                  ></Route>
                </Route>
                <Route element={<AdminRoutes></AdminRoutes>}>
                  <Route
                    path="/adminHome"
                    element={<AdminHome></AdminHome>}
                  ></Route>
                  <Route
                    path="/attendance"
                    element={<AttendancePage></AttendancePage>}
                  ></Route>
                  <Route
                    path="/complaints"
                    element={<ComplaintPage></ComplaintPage>}
                  ></Route>
                  <Route
                    path="/payroll"
                    element={<PayrollPage></PayrollPage>}
                  ></Route>
                  <Route
                    path="/sendEmail"
                    element={<SendEmailsPage></SendEmailsPage>}
                  ></Route>
                  <Route
                    path="/adminVacations"
                    element={<VacationRequestsPage></VacationRequestsPage>}
                  ></Route>
                  <Route
                    path="/policies"
                    element={<Policies></Policies>}
                  ></Route>
                </Route>
              </Route>
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
