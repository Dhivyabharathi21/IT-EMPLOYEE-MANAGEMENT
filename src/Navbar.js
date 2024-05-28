import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let logoutnavigate = useNavigate();

  function logout() {
    alert("LOGOUT SUCCESFUL");
    logoutnavigate("/register");
    localStorage.removeItem("loginid");
  }
  return (
    <div className="nav">
      {/* <Link to={'/'}>
  <button type="button" className="btn btn-outline-primary loginbutton navbutton">HOME</button>
  </Link> */}

      <Link to={"/addemploy"}>
        <button
          type="button"
          className="btn btn-outline-primary loginbutton navbutton"
        >
          ADD EMP
        </button>
      </Link>
      <Link to={"/list"}>
        <button
          type="button"
          className="btn btn-outline-primary loginbutton navbutton"
        >
          EMPLIST
        </button>
      </Link>

      <Link to={"/profile"}>
        <button
          type="button"
          className="btn btn-outline-primary loginbutton navbutton"
        >
          PROFILE
        </button>
      </Link>

      <button
        type="button"
        onClick={logout}
        className="btn btn-outline-primary loginbutton navbutton"
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Navbar;
