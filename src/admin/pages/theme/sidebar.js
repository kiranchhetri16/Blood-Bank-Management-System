import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faUsers,
  faPeopleCarryBox,
  faPlus,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
  return (
    <div>
      <section className="side-bar">
        <div className="side-bar-wrapper">
          {Dashboard.map((user) => (
            <div key={user.id} className="dashboard">
              <FontAwesomeIcon icon={user.icon} className="icon" />
              <p> {user.name}</p>
            </div>
          ))}
          {UserManagement.map((user) => (
            <Link to="/user-management">
              {" "}
              <div key={user.id} className="user-management">
                <FontAwesomeIcon icon={user.icon} className="icon" />
                <p>{user.name}</p>
              </div>
            </Link>
          ))}
          {VolunteerManagement.map((user) => (
            <div key={user.id} className="volunteer">
              <FontAwesomeIcon icon={user.icon} className="icon" />
              <p>{user.name}</p>
            </div>
          ))}
          {AddBloodBank.map((user) => (
            <Link to="/addbank">
              <div key={user.id} className="add-bank">
                <FontAwesomeIcon icon={user.icon} className="icon" />
                <p>{user.name}</p>
              </div>
            </Link>
          ))}
          {DonorManagement.map((user) => (
            <Link to={"/donor-management"}>
              {" "}
              <div key={user.id} className="donor-manage">
                <FontAwesomeIcon icon={user.faListCheck} className="icon" />
                <p>{user.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
