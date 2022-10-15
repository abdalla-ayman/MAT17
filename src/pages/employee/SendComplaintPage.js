import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import Title from "../../components/Title";

export default function SendComplaintPage() {
  const sidebarItems = ["requestVacation", "sendComplaint"];
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  let usersList = { id: 0, username: "momen" };

  const showOk = () => {
    setOk(true);
    setTimeout(() => {
      setOk(false);
    }, 2000);
  };
  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };
  const handleChange = (e) => {
    setUserId(e.target.value);
  };
  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "60%",
      }}
    >
      <NavBar /> <SideBar sidebarItems={sidebarItems} />
      <Title
        title="Send A Complaint"
        caption="Send Complaints/Advices anonymously to the HR manager"
      ></Title>
      <Typography
        variant="body2"
        fontFamily={"roboto"}
        letterSpacing={1.2}
        color="secondary"
        // style={{ marginBottom: "5px" }}
      >
        User:
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="select-user">User</InputLabel>
        <Select
          labelId="select-user"
          id="demo-simple-select"
          value={userId}
          label="User"
          onChange={handleChange}
        >
          <MenuItem value={1}>momenwadoud</MenuItem>
        </Select>
      </FormControl>
      <Typography
        variant="body2"
        fontFamily={"roboto"}
        letterSpacing={1.2}
        color="secondary"
        style={{ marginTop: "10px" }}
      >
        Complaint:
      </Typography>
      <TextField
        // onChange={(event) => setBody(event.target.value)}
        multiline
        required
        label="Message"
        variant="outlined"
        // value={body}
        fullWidth
        inputProps={{
          style: {
            height: "150px",
          },
        }}
      ></TextField>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          // onClick={onSend}
          endIcon={<SendIcon color="secondary"></SendIcon>}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
