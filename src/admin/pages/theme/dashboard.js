import React from "react";
import AdminHeader from "./adminheader";
import SideBar from "./sidebar";
import { Outlet, useLocation } from "react-router";
import TotalUsers from "../User Management/TotalUsers";
const Dashboard = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";
  return (
    <>
      <AdminHeader />
      <div className="row">
        <div className="side-bar">
          <SideBar />
        </div>

        <div className="main-body">{isRoot ? <TotalUsers /> : <Outlet />}</div>
      </div>
    </>
  );
};

export default Dashboard;
