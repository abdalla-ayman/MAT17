import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import Title from "../../components/Title";

export default function SendComplaintPage() {
  const sidebarItems = ["requestVacation", "sendComplaint"];
  const [message, setMessage] = useState("");
  const [userId, seUserId] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  let usersList = { id: 0, firstName: "Momen", lastName: "Abdelwadoud" };

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
        title="Send Emails to users"
        caption="Send important global updates only"
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
        onChange={(event) => setBody(event.target.value)}
        multiline
        required
        label="Email Body"
        variant="outlined"
        value={body}
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
      {ok ? (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            zIndex: "999999",
          }}
          onClose={() => {}}
          severity="success"
        >
          Email sent successfully
        </Alert>
      ) : null}
      {error ? (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            zIndex: "999999",
          }}
          onClose={() => {}}
          severity="error"
        >
          An error occurred
        </Alert>
      ) : null}
    </div>
  );
}
