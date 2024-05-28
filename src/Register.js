import React, { useState } from "react";
import "./Register.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  let regnavigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const Regchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function register() {
    console.log(data);
    axios
      .post("http://localhost:4001/empldetail", data)
      .then((res) => {
        alert(res.data.msg);
        regnavigate("/login");
      })
      .catch((err) => {
        alert("invalid")
        console.log(err);
      });
  }
  return (
    <div id="img2">
      <div>
        <br></br>
      </div>
      <div className="page">
        <h3>Employee Name</h3>
        <input
          type="text"
          placeholder="Employee Name"
          className="name"
          onChange={Regchange}
          name="name"
          value={data.name}
        ></input>
        <br></br>
        <br></br>
        <h3>Email</h3>
        <input
          type="email"
          placeholder="Email"
          className="email"
          onChange={Regchange}
          name="email"
          value={data.email}
        ></input>
        <br></br>
        <br></br>
        <h3>Password</h3>
        <input
          type="password"
          placeholder="Password"
          className="password"
          onChange={Regchange}
          name="password"
          value={data.password}
        ></input>
        <br></br>
        <br></br>
        
        
        <h7 id="h7">
          Already Login?{" "}
          <Link to={"/login"} className="here">
            Login here
          </Link>
        </h7>
        <br></br><br></br>
        <button
          onClick={register}
          type="button"
          className="btn btn-outline-primary registerbutton"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Register;
