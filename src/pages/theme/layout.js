import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./header";
import Outerbody from "./body";
import Footer from "./footer";
const Layout = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <div>
      <Header />
      <div className="main-body">{isRoot ? <Outerbody /> : <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
