import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/Title";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import styles from "../../styles/AttendancePage.module.css";

import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";

export default function AttendancePage() {
  const sidebarItems = [
    "adminHome",
    "complaints",
    "sendEmail",
    "payroll",
    "adminVacations",
  ];
  // const [resultAlert, setResultAlert] = useState(false);
  const [id, setId] = useState("");
  // const [idField, setIdField] = useState("");

  const absentButton = <Button size={"small"} type={"warning"}></Button>;

  const employees = [
    { id: 1, name: "Momen", absence: "absent", num: 2 },
    { id: 2, name: "Hamdi", absence: "absent", num: 2 },
    { id: 3, name: "Nihal", absence: "absent", num: 2 },
    { id: 4, name: "Setay", absence: "absent", num: 2 },
    { id: 5, name: "Sara", absence: "absent", num: 2 },
  ];
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "absence", headerName: "Absence", width: 150 },
    { field: "num", headerName: "Number of Absences", width: 150 },
    { field: "clarification", headerName: "Send clarification", width: 150 },
  ];

  // const showResult = (result) => {
  //   add(result);
  //   setResultAlert(true);
  //   setTimeout(() => {
  //     setResultAlert(false);
  //   }, 3000);
  // };
  // const onSubmit = () => {
  //   showResult(idField);
  //   setIdField("");
  // };
  // const add = (id) => {
  //   setId(id);
  //   let time = new Date().toLocaleTimeString();
  //   let date = new Date().toLocaleDateString();
  //   // console.log(time);
  //   // console.log(date);
  //   employees.forEach((participant) => {
  //     if (participant.id == id) {
  //       console.log(id);
  //       Object.keys(dates).forEach((key) => {
  //         if (dates[key] == date) {
  //           console.log(dates[key], date);
  //           setAttendance((attendance) => [
  //             ...attendance.slice(0, id - 1),
  //             {
  //               ...attendance[id],
  //               [key]: time,
  //             },
  //             ...attendance.slice(id),
  //           ]);
  //         }
  //       });
  //     }
  //   });
  // };
  // const openAddWindow = () => {
  //   setOpen(true);
  // };
  // const closeAddWindow = () => {
  //   setOpen(false);
  // window.location.reload();
  // };
  // const handleChange = (event) => {
  //   setShowAll(event.target.checked);
  // };

  // TODO: Apply colors to the rows
  // const attended = <span className={styles.yes}></span>;
  // const didnt_attend = <span className={styles.no}></span>;

  return (
    <div className="main">
      <NavBar /> <SideBar sidebarItems={sidebarItems} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          title="Take Attendance"
          caption="Taking attendance is an easier process now ;)"
        ></Title>
        {/* <Button 
          variant="contained"
          onClick={openAddWindow}
          endIcon={<Add></Add>}
          Add
        </Button>
      > */}
      </div>
      <div className={styles.table_container}>
        <DataGrid rows={employees} columns={columns} pageSize={10}></DataGrid>
        {/* <Modal
          open={open}
          onClose={closeAddWindow}
          aria-labelledby="modal-modal-scan"
          aria-describedby="modal-modal-scan"
        >
          <Box className={styles.modal}>
            <Typography variant="h6">Scan QR Code</Typography>
            <Qrcode showResult={showResult}></Qrcode>
            <div className={styles.manual}>
              <Typography variant="caption" color="secondary.light">
                Or add manually by ID
              </Typography>
              <TextField
                id="standard-basic"
                label="ID"
                variant="standard"
                value={idField}
                onChange={(e) => setIdField(e.target.value)}
              />
              <Button size="small" variant="contained" onClick={onSubmit}>
                Add
              </Button>
            </div>
          </Box>
        </Modal>
        {resultAlert ? (
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
            Added {id} to the list
          </Alert>
        ) : null} */}
      </div>
    </div>
  );
}
