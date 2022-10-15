import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/Title";

import styles from "../../styles/AttendancePage.module.css";

import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";

import axios from "axios";

export default function ComplaintsPage() {
  const [data, setData] = useState({});
  const sidebarItems = [
    "adminHome",
    "complaints",
    "sendEmail",
    "payroll",
    "adminVacations",
  ];

  const columns = [
    { field: "name", headerName: "Name", width: 100 },
    { field: "message", headerName: "Message", width: 200 },
  ];

  axios.get("127.0.0.1/complaints/list").then((response) => {
    setData(response.data);
    console.log(data);
    console.log(response.data);
  });

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
          title="Complaints and Advices"
          caption="List of all incoming complaints/advice"
        ></Title>
      </div>
      <div className={styles.table_container}>
        <DataGrid rows={data} columns={columns} pageSize={10}></DataGrid>
      </div>
    </div>
  );
}
