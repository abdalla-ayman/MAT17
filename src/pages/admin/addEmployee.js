import { useState } from "react";
import { addEmployee, deleteEmployee } from "../../api/employee";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const AddEmployee = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  //boolean
  const [isEmployee, setIsEmployee] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    setIsEmployee(false);
    e.preventDefault();
    //set data to send it to database
    let data = { username, password, role, firstName, lastName, email, salary };
    console.log(data);
    addEmployee(data)
      .then((res) => {
        setIsEmployee(true);
        console.log(res);
      })
      .catch((err) => {
        setErr(err.data);
      });
  };

  return (
    <div>
      {" "}
      <Box
        sx={{
          marginTop: 7,
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>register new employee</h1>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          {err && <h1>{err}</h1>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="role"
            label="role"
            type="text"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="first Name"
            type="text"
            id="firstName"
            autoComplete="current-password"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="last Name"
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="email"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="salary"
            label="salary"
            type="number"
            id="salary"
            onChange={(e) => setSalary(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Employee
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2" color="secondary.light">
        Forgot password?
      </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default AddEmployee;
