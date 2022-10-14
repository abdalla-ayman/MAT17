import React from "react";
// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";
// import SendIcon from "@mui/icons-material/Send";
// import Alert from "@mui/material/Alert";

// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";

export default function SendEmailsPage() {
  // const [recipients, setRecipients] = useState("students");
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  return (
    <div>Email</div>
    // <div
    //   className="main"
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "10px",
    //     width: "60%",
    //   }}
    // >
    //   <NavBar /> <SideBar />
    //   <Title
    //     title="Send Emails to users"
    //     caption="Send to Students, Mentors or all"
    //   ></Title>
    //   <Typography
    //     variant="body2"
    //     fontFamily={"roboto"}
    //     letterSpacing={1.2}
    //     color="secondary"
    //     // style={{ marginBottom: "5px" }}
    //   >
    //     Title:
    //   </Typography>
    //   <TextField
    //     onChange={(event) => setTitle(event.target.value)}
    //     required
    //     label="Email Title"
    //     variant="outlined"
    //     value={title}
    //   ></TextField>
    //   <Typography
    //     variant="body2"
    //     fontFamily={"roboto"}
    //     letterSpacing={1.2}
    //     color="secondary"
    //     style={{ marginTop: "10px" }}
    //   >
    //     Body:
    //   </Typography>
    //   <TextField
    //     onChange={(event) => setBody(event.target.value)}
    //     multiline
    //     required
    //     label="Email Body"
    //     variant="outlined"
    //     value={body}
    //     fullWidth
    //     inputProps={{
    //       style: {
    //         height: "150px",
    //       },
    //     }}
    //   ></TextField>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       marginTop: "10px",
    //     }}
    //   >
    //     <Select
    //       id="select-recipients"
    //       value={recipients}
    //       label="Select recipients"
    //       onChange={handleChange}
    //       variant="standard"
    //     >
    //       <MenuItem value={"all"}>All</MenuItem>
    //       <MenuItem value={"students"}>Students only</MenuItem>
    //       <MenuItem value={"mentors"}>Mentors only</MenuItem>
    //     </Select>
    //     <Button
    //       variant="contained"
    //       onClick={onSend}
    //       endIcon={<SendIcon color="secondary"></SendIcon>}
    //     >
    //       Send
    //     </Button>
    //   </div>
    //   {ok ? (
    //     <Alert
    //       style={{
    //         position: "fixed",
    //         bottom: "10px",
    //         left: "10px",
    //         zIndex: "999999",
    //       }}
    //       onClose={() => {}}
    //       severity="success"
    //     >
    //       Email sent successfully
    //     </Alert>
    //   ) : null}
    //   {error ? (
    //     <Alert
    //       style={{
    //         position: "fixed",
    //         bottom: "10px",
    //         left: "10px",
    //         zIndex: "999999",
    //       }}
    //       onClose={() => {}}
    //       severity="error"
    //     >
    //       An error occurred
    //     </Alert>
    //   ) : null}
    // </div>
  );
}
