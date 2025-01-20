import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faUsers,
  faPeopleCarryBox,
  faPlus,
  faListCheck,
  faCalendar,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
// import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AddPost from "../User Management/AddPost";
import { icon } from "@fortawesome/fontawesome-svg-core";
const SideBar = () => {
  const Dashboard = [{ id: 1, name: "Dashboard", icon: faHouse }];

  const UserManagement = [
    {
      id: 2,
      icon: faUsers,
      name: "User-List",
    },
  ];
  const VolunteerManagement = [
    {
      id: 3,
      icon: faPeopleCarryBox,
      name: "Volunteer Management",
    },
  ];
  const AddBloodBank = [
    {
      id: 4,
      icon: faPlus,
      name: "Add Blood Bank",
    },
  ];
  const DonorManagement = [
    {
      id: 4,
      icon: faListCheck,
      name: "Donor Management",
    },
  ];
  const AddEvent = [
    {
      id: 5,
      icon: faCalendar,
      name: "Add Event",
    },
  ];
  const UpdateEvent = [
    {
      id: 6,
      icon: faFilePen,
      name: "Update Event",
    },
  ];
  const AddPost = [
    {
      id: 7,
      icon: faPlus,
      name: "Add Post",
    },
  ];
  const UpdatePost = [
    {
      id: 8,
      icon: faFilePen,
      name: "Update Post",
    },
  ];
  return (
    <div className="side-bar-wrapper">
      <Link to={"total-users"} className="dashboard">
        {Dashboard.map((user) => (
          <span key={user.id} className="dashboard">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p> {user.name}</p>
          </span>
        ))}
      </Link>
      {UserManagement.map((user) => (
        <Link to="/dashboard/user-management" className="user-management">
          {" "}
          <span key={user.id} className="user-management">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {VolunteerManagement.map((user) => (
        <Link to={"/dashboard/volunteermanagement"} className="volunteer">
          <span key={user.id} className="volunteer">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {AddBloodBank.map((user) => (
        <Link to="addbank" className="add-bank">
          <span key={user.id} className="add-bank">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {DonorManagement.map((user) => (
        <Link to={"donor-management"} className="donor-manage">
          {" "}
          <span key={user.id} className="donor-manage">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {AddEvent.map((user) => (
        <Link to={"addevent"} className="donor-manage">
          {" "}
          <span key={user.id} className="donor-manage">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {UpdateEvent.map((user) => (
        <Link to={"update-event"} className="donor-manage">
          {" "}
          <span key={user.id} className="donor-manage">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {AddPost.map((user) => (
        <Link to={"addpost"} className="donor-manage">
          {" "}
          <span key={user.id} className="donor-manage">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
      {UpdatePost.map((user) => (
        <Link to={"update-post"} className="donor-manage">
          {" "}
          <span key={user.id} className="donor-manage">
            <FontAwesomeIcon icon={user.icon} className="icon" />
            <p>{user.name}</p>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
