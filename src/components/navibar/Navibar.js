import React from "react";
import "./Navibar.css";
import { Link, NavLink } from "react-router-dom";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";

function Navibar() {

  const  activeLink={
    color:'green',
    fontSize:'1.2rem',
    fontWeight:'bold'
  };
  const inactiveLink={
    color:'black',
    fontSize:'1.2rem',
  }





  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid users">
        <Link className="navbar-brand" to="/">
          <img src="https://www.goodfreephotos.com/albums/vector-images/group-of-members-users-icon.png" width="50px" alt=""/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
              className="nav-link " 
              style={({isActive})=>{
                return isActive?activeLink:inactiveLink;
              }
            }
               to="/users">
                <HiUsers className="user-icon" />
                users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"
              style={({isActive})=>{
                return isActive?activeLink:inactiveLink;
              }
            }
              to="/removedUsers">
                <HiOutlineUsers className="removed-users" />
                Removed Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navibar;
