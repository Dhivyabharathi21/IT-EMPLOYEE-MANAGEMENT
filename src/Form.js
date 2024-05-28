import React, { useState, useEffect } from "react";
import "./Form.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  let listnav = useNavigate();

  const [data, setData] = useState({
    name: "",
    id: "",
    salary: "",
    designation: "",
  });
  const Formchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function listonclick() {
    console.log(data);
    if(data.name== "" &&data.id== ""&&data.salary== ""&&data.designation== ""){
      alert("please enter all feilds")
    }
    else{
      axios
      .post("http://localhost:4001/empform", data)
      .then((res) => {
        alert(res.data.msg);
        listnav("/list");
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });

    }
  }
  useEffect(() => {
    if (localStorage.getItem("loginid") == null) {
      listnav("/login");
    }
    // listonclick()
  }, []);

  return (
    <div id="img5">
      <br></br>
      <Navbar />
      <h2 id="head"> EMPLOYEE DETAIL </h2>
      <div className="form">
        <h4>Employee Name</h4>
        <input
          type="text"
          placeholder="Employee Name"
          className="name"
          onChange={Formchange}
          name="name"
          value={data.name}
          required
        ></input>
        <br></br>
        <br></br>
        <h4>Employee Id</h4>
        <input
          type="email"
          placeholder="Employee Id "
          className="id"
          onChange={Formchange}
          name="id"
          value={data.id}
        ></input>
        <br></br>
        <br></br>
        <h4>Salary</h4>
        <input
          type="text"
          placeholder="Employee Salary"
          className="salary"
          onChange={Formchange}
          name="salary"
          value={data.salary}
        ></input>
        <br></br>
        <br></br>
        <h4>Designation</h4>
        <select
          className="desi"
          onChange={Formchange}
          name="designation"
          value={data.designation}
        >
          <option>Back end</option>
          <option>Front end</option>
          <option>Full stack</option>
          <option>HR</option>
          <option>Manager</option>
          <option>Receptionist</option>
          <option>Team coordinater</option>
          <option>Testing</option>
          <option>Trainer</option>
          <option>Web Designer</option>
          <option>Web developer</option>
        </select>
        {/* <input
          type="text"
          placeholder="Employee Designal"
         
        ></input> */}
        <br></br>
        <br></br>
        <button
          onClick={listonclick}
          type="button"
          className="btn btn-outline-primary submit"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Form;
