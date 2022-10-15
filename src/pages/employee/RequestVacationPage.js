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

export default function RequestVacationPage() {
  const sidebarItems = ["requestVacation", "sendComplaint"];
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const sendRequest = () => {
    console.log("request");
  };
  const changeStartDate = (newValue) => {
    setStartDate(newValue);
  };
  const changeEndDate = (newValue) => {
    setEndDate(newValue);
  };

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
        <img
          src={require("../../assets//images/logo.png")}
          alt="Logo"
          className={styles.logo}
        />
        <Box component="form" onSubmit={sendRequest} noValidate sx={{ mt: 1 }}>
          <DesktopDatePicker
            label="Start Date"
            inputFormat="MM/DD/YYYY"
            value={startDate}
            onChange={changeStartDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="End Date"
            inputFormat="MM/DD/YYYY"
            value={endDate}
            onChange={changeEndDate}
            renderInput={(params) => <TextField {...params} />}
          />
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
      </Box>
    </Container>
  );
}
