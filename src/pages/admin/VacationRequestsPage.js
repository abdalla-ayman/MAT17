import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/Title";

import styles from "../../styles/AttendancePage.module.css";

import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { listVacation } from "../../api/vacation";

import axios from "axios";

export default function VacationRequestsPage() {
  const [data, setData] = useState({});
  const sidebarItems = [
    "adminHome",
    "complaints",
    "sendEmail",
    "adminVacations",
  ];

  useEffect(() => {
    listVacation().then((res) => {
      let list = res.data.vacations.map((vic) => {
        vic.username = vic.userId.firstName;
        return vic;
      });

      setData(list);
    });
  }, []);

  console.log(data);

  const columns = [
    { field: "username", headerName: "Employee", width: 100 },
    { field: "str_date", headerName: "Start Date", width: 120 },
    { field: "days", headerName: "Duration", width: 100 },
    { field: "type", headerName: "Type", width: 100 },
  ];

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
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          pageSize={10}
        ></DataGrid>
      </div>
    </div>
  );
}
