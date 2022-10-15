import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import styles from "../../styles/SigninPage.module.css";

export default function RequestVacationPage() {
  const sidebarItems = ["requestVacation", "sendComplaint"];
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");

  const sendRequest = () => {
    console.log("request");
  };
  const changeStartDate = (newValue) => {
    setStartDate(newValue);
  };
  const changeDuration = (newValue) => {
    setDuration(newValue);
  };

  return (
    <div className="main">
      <Navbar></Navbar> <Sidebar sidebarItems={sidebarItems} />
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              component="form"
              onSubmit={sendRequest}
              noValidate
              sx={{ mt: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <DesktopDatePicker
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={startDate}
                  onChange={changeStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TextField
                  margin="normal"
                  required
                  id="duration"
                  label="Number of days"
                  name="duration"
                  type={"number"}
                ></TextField>
              </Box>
              <FormControlLabel
                control={<Checkbox value="paid" color="primary" />}
                label={<Typography color="secondary.">Paid</Typography>}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2" color="secondary.light">
                Forgot password?
              </Link> */}
                </Grid>
              </Grid>
            </Box>
          </LocalizationProvider>
        </Box>
      </Container>
    </div>
  );
}
