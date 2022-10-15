import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/Title";

import styles from "../../styles/AttendancePage.module.css";

import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import axios from "axios";

export default function VacationRequestsPage() {
  const [data, setData] = useState({});
  const sidebarItems = [
    "adminHome",
    "complaints",
    "sendEmail",
    "adminVacations",
  ];
  const columns = [
    { field: "name", headerName: "Name", width: 100 },
    { field: "startdate", headerName: "Start Date", width: 100 },
    { field: "enddate", headerName: "End Date", width: 100 },
    { field: "duration", headerName: "Duration", width: 100 },
    { field: "type", headerName: "Type", width: 100 },
  ];

  axios.get("127.0.0.1/vacations/list").then((response) => {
    setData(response.data);
    console.log(data);
    console.log(response.data);
  });

  return (
    <div className="main">
      <NavBar /> <Sidebar sidebarItems={sidebarItems} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          title="Vacations Requests"
          caption="List of all incoming vacation requests from employees"
        ></Title>
      </div>
      <div className={styles.table_container}>
        <DataGrid rows={data} columns={columns} pageSize={10}></DataGrid>
      </div>
    </div>
  );
}
