import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
function Homepage() {
  return (
      <div id="empimg1">
        <br></br><br></br>
       
        <h4 className="heading">EMPLOYEE MANAGEMENT</h4>
        <div className="backround">
          <Link to={"./register"}>
            <button type="button" className="btn btn-outline-primary register">
              REGISTER
            </button>
          </Link>
          <br></br>
          <br></br>
          <br></br>
          <Link to={"./login"}>
            <button type="button" className="btn btn-outline-primary login">
              LOGIN
            </button>
          </Link>
        </div>
        </div>
      
  );
}

export default Homepage;
