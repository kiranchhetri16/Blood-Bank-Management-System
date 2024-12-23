import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faUsers,
  faPeopleCarryBox,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
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
            <div key={user.id} className="user-management">
              <FontAwesomeIcon icon={user.icon} className="icon" />
              <p>{user.name}</p>
            </div>
          ))}
          {VolunteerManagement.map((user) => (
            <div key={user.id} className="volunteer">
              <FontAwesomeIcon icon={user.icon} className="icon" />
              <p>{user.name}</p>
            </div>
          ))}
          {AddBloodBank.map((user) => (
            <div key={user.id} className="add-bank">
              <FontAwesomeIcon icon={user.icon} className="icon" />
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
