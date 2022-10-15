import React, { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { login } from "../api/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onLogin = async (e) => {
    try {
      e.preventDefault();
      if (username == "admin1") {
        navigate("/adminHome");
      } else {
        navigate("/requestVacation");
      }
      let user = await login(username, password);
      setUser(user);
    } catch (error) {
      setErr(error.data);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   let signin_data = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };
  //   console.log(signin_data);
  //   navigate("/participants", { replace: false });
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <img
          src={require("../assets/TechWorks final design.png")}
          alt="Techworks Logo"
          className={styles.logo}
        /> */}
        <Box component="form" onSubmit={onLogin} noValidate sx={{ mt: 1 }}>
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
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<Typography color="secondary.">Remember me</Typography>}
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
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
    </Container>
  );
}
