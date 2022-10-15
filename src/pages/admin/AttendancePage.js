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

import styles from "../styles/AttendancePage.module.css";

import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

export default function AttendancePage() {
  const [resultAlert, setResultAlert] = useState(false);
  const [id, setId] = useState("");
  const [idField, setIdField] = useState("");
  const [attendance, setAttendance] = useState([
    {
      lecture1: "",
      lecture2: "",
      lecture3: "",
      lecture4: "",
      lecture5: "",
      lecture6: "",
      lecture7: "",
      lecture8: "",
      lecture9: "",
      lecture10: "",
    },
    {
      lecture1: "",
      lecture2: "",
      lecture3: "",
      lecture4: "",
      lecture5: "",
      lecture6: "",
      lecture7: "",
      lecture8: "",
      lecture9: "",
      lecture10: "",
    },
    {
      lecture1: "",
      lecture2: "",
      lecture3: "",
      lecture4: "",
      lecture5: "",
      lecture6: "",
      lecture7: "",
      lecture8: "",
      lecture9: "",
      lecture10: "",
    },
    {
      lecture1: "",
      lecture2: "",
      lecture3: "",
      lecture4: "",
      lecture5: "",
      lecture6: "",
      lecture7: "",
      lecture8: "",
      lecture9: "",
      lecture10: "",
    },
    {
      lecture1: "",
      lecture2: "",
      lecture3: "",
      lecture4: "",
      lecture5: "",
      lecture6: "",
      lecture7: "",
      lecture8: "",
      lecture9: "",
      lecture10: "",
    },
  ]);

  const participants = [
    { id: 1, name: "Momen", ...attendance[0] },
    { id: 2, name: "Hamdi", ...attendance[1] },
    { id: 3, name: "Nihal", ...attendance[2] },
    { id: 4, name: "Setay", ...attendance[3] },
    { id: 5, name: "Sara", ...attendance[4] },
  ];
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "lecture1", headerName: "Lecture 1", width: 140 },
    { field: "lecture2", headerName: "Lecture 2", width: 140 },
    { field: "lecture3", headerName: "Lecture 3", width: 140 },
    { field: "lecture4", headerName: "Lecture 4", width: 140 },
    { field: "lecture5", headerName: "Lecture 5", width: 140 },
    { field: "lecture6", headerName: "Lecture 6", width: 140 },
    { field: "lecture7", headerName: "Lecture 7", width: 140 },
    { field: "lecture8", headerName: "Lecture 8", width: 140 },
    { field: "lecture9", headerName: "Lecture 9", width: 140 },
    { field: "lecture10", headerName: "Presentation", width: 140 },
  ];
  const dates = {
    lecture1: "5/22/2022",
    lecture2: "5/22/2022",
    lecture3: "5/22/2022",
    lecture4: "5/22/2022",
    lecture5: "5/22/2022",
    lecture6: "5/22/2022",
    lecture7: "5/22/2022",
    lecture8: "5/22/2022",
    lecture9: "6/4/2022",
    lecture10: "6/5/2022",
  };
  const showResult = (result) => {
    add(result);
    setResultAlert(true);
    setTimeout(() => {
      setResultAlert(false);
    }, 3000);
  };
  const onSubmit = () => {
    showResult(idField);
    setIdField("");
  };
  const add = (id) => {
    setId(id);
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    // console.log(time);
    // console.log(date);
    participants.forEach((participant) => {
      if (participant.id == id) {
        console.log(id);
        Object.keys(dates).forEach((key) => {
          if (dates[key] == date) {
            console.log(dates[key], date);
            setAttendance((attendance) => [
              ...attendance.slice(0, id - 1),
              {
                ...attendance[id],
                [key]: time,
              },
              ...attendance.slice(id),
            ]);
          }
        });
      }
    });
  };
  const openAddWindow = () => {
    setOpen(true);
  };
  const closeAddWindow = () => {
    setOpen(false);
    // window.location.reload();
  };
  const handleChange = (event) => {
    setShowAll(event.target.checked);
  };

  // TODO: Apply colors to the rows
  // const attended = <span className={styles.yes}></span>;
  // const didnt_attend = <span className={styles.no}></span>;

  return (
    <div className="main">
      <NavBar /> <SideBar />
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
        <Button
          variant="contained"
          onClick={openAddWindow}
          endIcon={<Add></Add>}
        >
          Add
        </Button>
      </div>
      <FormControlLabel
        control={
          <Switch color="primary" checked={showAll} onChange={handleChange} />
        }
        label="Show all lectures"
      />
      <div className={styles.table_container}>
        <DataGrid
          rows={participants}
          columns={
            showAll ? columns : columns.slice(0, 1).concat(columns.slice(-5))
          }
          pageSize={10}
        ></DataGrid>
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
