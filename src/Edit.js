import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Edit.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  let editnav = useNavigate();

  function submitonclick() {
    alert("SUBMIT SUCCESSFUL");
    editnav("/list");
  }

  const [data, setData] = useState({
    name: "",
    id: "",
    salary: "",
    designation: "",
  });

  const Editchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const params=useParams()

  console.log(params.empid);
  const id=params.empid

  function geteditfind() {
    axios
      .get(`http://localhost:4001/editfind/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }
  useEffect(()=>{

    if(localStorage.getItem("loginid")==null){
      editnav("/login")
    }
    geteditfind() 
  },[])

  function submitonclick(){
    axios
    .post(`http://localhost:4001/update/${id}`,data)
    .then((res)=>{
      console.log(res);
      setData(res.data.data)
      editnav('/list')
    })
  }
  return (
    <div id="img5">
      <br></br>
      <Navbar />
      <h2 className="head"> EDIT FORM </h2>
      <div className="edit">
        <h4>Employee Name</h4>
        <input
          type="text"
          placeholder={data.name}
          className="emname"
          onChange={Editchange}
          name="name"
          required
        ></input>
        <br></br>
        <br></br>
        <h4>Employee Id</h4>
        <input type="email"
         placeholder= {data.empid}
         className="emid"
         onChange={Editchange}
         name="id"
         ></input>
        <br></br>
        <br></br>
        <h4>Salary</h4>
        <input
          type="text"
          placeholder={data.salary}
          className="salary"
          onChange={Editchange}
          name="salary"
        ></input>
        <br></br>
        <br></br>
        <h4>Designation</h4>
        <select
          className="des"
          onChange={Editchange}
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
        <br></br>
        <br></br>

        {/* <button
          onClick={submitonclick}
          type="button"
          className="btn btn-outline-primary editsubmit"
        >
          SUBMIT
        </button> */}

        <button
          onClick={submitonclick}
          type="button"
          className="btn btn-outline-primary submitbutton "
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Edit;
