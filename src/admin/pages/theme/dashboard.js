import React from "react";
import AdminHeader from "./adminheader";
import SideBar from "./sidebar";
import { Outlet } from "react-router";
const Dashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="row">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="main-body">
          <Outlet />
        </div>
       
      </div>
    </>
  );
};

export default Dashboard;
