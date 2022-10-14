import React, { useContext } from "react";
// import styles from "../styles/LoginPage.module.css";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

export default function LoginPage() {
  //   const { login } = useContext(UserContext);
  //   const onLogin = (e) => {
  //     login(e);
  //   };

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
    <div>Sign in</div>
    // <Container component="main" maxWidth="xs">
    //   <Box
    //     sx={{
    //       marginTop: 3,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <img
    //       src={require("../assets/TechWorks final design.png")}
    //       alt="Techworks Logo"
    //       className={styles.logo}
    //     />
    //     <Box component="form" onSubmit={onLogin} noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="username"
    //         label="User Name"
    //         name="username"
    //         autoComplete="username"
    //         autoFocus
    //       />
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //       />
    //       {/* <FormControlLabel
    //         control={<Checkbox value="remember" color="primary" />}
    //         label={<Typography color="secondary.">Remember me</Typography>}
    //       /> */}
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //       >
    //         Sign In
    //       </Button>
    //       <Grid container>
    //         <Grid item xs>
    //           {/* <Link href="#" variant="body2" color="secondary.light">
    //             Forgot password?
    //           </Link> */}
    //         </Grid>
    //         <Grid item>
    //           <Link href="/signup" variant="body2" color="secondary.light">
    //             {"Don't have an account? Sign Up"}
    //           </Link>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Container>
  );
}
