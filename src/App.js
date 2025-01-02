import "./css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/authentication/signup";
import FetchData from "./fletch-data";
import Login from "./pages/authentication/login";
import Layout from "./pages/theme/layout";
import Outerbody from "./pages/theme/body";
import PrivateRoute from "./routes/PrivateRoute";
import AdminHeader from "./admin/pages/theme/adminheader";
import SideBar from "./admin/pages/theme/sidebar";
import UserManagement from "./admin/pages/User Management/UserManagement";
import Dashboard from "./admin/pages/theme/dashboard";
import DonateBlood from "./pages/bloodbank/DonateBlood";
import DonorManagement from "./admin/pages/User Management/DonorManagement";
import RequestBlood from "./pages/bloodbank/RequestBlood";
import Volunteer from "./pages/bloodbank/Volunteer";
import BlogPost from "./pages/post/BlogPost";
import AddPost from "./admin/pages/User Management/AddPost";
import BlogListing from "./pages/post/BlogListing";
import AddBank from "./admin/pages/bloodbank/AddBank";
import ManageBloodBank from "./admin/pages/bloodbank/ManageBloodBank";
import AboutUser from "./pages/user/AboutUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Layout} />}>
            {/* <Route path="/body" element={<Outerbody />} /> */}
            {/* <Route path="/footer" element={<Footer />} /> */}
          </Route>
          <Route path="/admin-header" element={<AdminHeader />} />
          <Route path="/side-bar" element={<SideBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fetch-data" element={<FetchData />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donor" element={<DonateBlood />} />
          <Route path="/donor-management" element={<DonorManagement />} />
          <Route path="/request" element={<RequestBlood />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/post" element={<BlogPost />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/listingpage/:id" element={<BlogListing />} />
          <Route path="/addbank" element={<AddBank />} />
          <Route path="/manageblood" element={<ManageBloodBank />} />
          <Route path="/aboutuser" element={<AboutUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
