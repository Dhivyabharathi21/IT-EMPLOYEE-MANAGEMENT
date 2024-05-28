import React, { useState } from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let lognavigate = useNavigate();

 

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const Change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function login() {

    console.log(data);
    axios
      .post("http://localhost:4001/emplogin", data)
      .then((res) => {
        console.log(res.data.message);
// console.log(res,"yy");
        localStorage.setItem("loginid",res.data.emp._id)

        alert(res.data.message)
        // alert("LOGIN SUCCESSFUL")
        lognavigate("/addemploy");
      })
      .catch((err) => {
       alert(err.response.data.message)
        console.log(err.response.data.message);
      });


  }
  return (
    <div id="img3">
      <br></br>
      <div className="loginpage">
        <h3>Email</h3>
        <input 
        type="email" 
        placeholder="Email"
         className="loginemail"
         onChange={Change}
         name="email"
         value={data.email}

         >

         </input>
        <br></br>
        <br></br>
        <h3>Password</h3>
        <input
          type="password"
          placeholder="Password"
          className="loginpassword"
          onChange={Change}
          name="password"
          value={data.password}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <h7 className="h7">
          Already Register?{" "}
          <Link to={"/register"} className="here">
            Register here
          </Link>
        </h7>
        <br></br><br></br>
        <button
          type="button"
          onClick={login}
          className="btn btn-outline-primary loginbutton">
          LOGIN
        </button>
        <br></br>
        <br></br>

      </div>
    </div>
  );
}

export default Login;
