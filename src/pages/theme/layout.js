import React from "react";
import { Outlet } from "react-router";
import Header from "./header";
import Outerbody from "./body";
import Footer from "./footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main-body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
