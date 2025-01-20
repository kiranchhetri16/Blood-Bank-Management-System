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
import UserEdit from "./admin/pages/User Management/EditUser";
import UserDelete from "./admin/pages/User Management/UserDelete";
import UserBarChat from "./admin/pages/components/UserBarChat";
import Chatbot from "./pages/chatbot/ChatBot";
import VolunteerManagement from "./admin/pages/User Management/VolunteerManagement";
import UserDetails from "./pages/user/UserDetails";
import AddEvents from "./admin/pages/User Management/AddEvents";
import EventBlog from "./pages/events/EventBlog";
import OurTeam from "./pages/our team/OurTeam";
import FooterSlider from "./pages/components/FooterSlider";
import EventDetails from "./pages/events/EventDetails";
import EventListing from "./admin/pages/User Management/EventListing";
import TotalUsers from "./admin/pages/User Management/TotalUsers";
import UpdateEvent from "./admin/pages/User Management/UpdateEvent";
import EditEvent from "./admin/pages/User Management/EditEvent";
import UpdatePost from "./admin/pages/User Management/UpdatePost";
import EditPost from "./admin/pages/User Management/EditPost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/body" element={<Outerbody />} /> */}
            {/* <Route path="/footer" element={<Footer />} /> */}

            <Route path="/admin-header" element={<AdminHeader />} />
            <Route path="/side-bar" element={<SideBar />} />

            <Route path="/fetch-data" element={<FetchData />} />

            <Route
              path="/donor"
              element={<PrivateRoute component={DonateBlood} />}
            />
            <Route path="/donor-management" element={<DonorManagement />} />
            <Route path="/request" element={<RequestBlood />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/post" element={<BlogPost />} />
            <Route path="/listingpage/:id" element={<BlogListing />} />
            <Route path="/manageblood" element={<ManageBloodBank />} />
            <Route path="/aboutuser" element={<AboutUser />} />
            {/* <Route path="/delete/:userId" element={<UserDelete />} /> */}
            {/* <Route path="/barchat" element={<UserBarChat />} />
            <Route path="/chat" element={<Chatbot />} /> */}
            <Route path="/details" element={<UserDetails />} />
            <Route path="/eventblog" element={<EventBlog />} />
            <Route path="/event-listing/:id" element={<EventDetails />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/slider" element={<FooterSlider />} />
          </Route>
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          >
            <Route path="total-users" element={<TotalUsers />} />
            <Route path="admin-event-listing/:id" element={<EventListing />} />
            <Route
              path="volunteermanagement"
              element={<VolunteerManagement />}
            />
            <Route path="addevent" element={<AddEvents />} />
            <Route path="addbank" element={<AddBank />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="user-management/edit/:userId" element={<UserEdit />} />
            <Route path="donor-management" element={<DonorManagement />} />
            <Route path="update-event" element={<UpdateEvent />} />
            <Route path="editevent/:id" element={<EditEvent />} />
            <Route path="update-post" element={<UpdatePost />} />
            <Route path="update-post/edit-post/:id" element={<EditPost />} />
          </Route>

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
