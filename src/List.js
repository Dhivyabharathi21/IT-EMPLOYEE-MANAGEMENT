import React, { useEffect, useState } from "react";
import "./List.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function List() {
  const [data, setData] = useState([]);

  function getdata() {
    axios
      .get("http://localhost:4001/viewform")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }
  // console.log(data,"data");
  let navigate = useNavigate();

  function editonclick(empid) {
    console.log(empid, "ooooooooooooooo");
    navigate(`/edit/${empid}`);
  }

  function Deleteonclick(deleteid) {
    // alert("DELETED");
    console.log(deleteid);
    axios
      .post(`http://localhost:4001/delete/${deleteid}`)
      .then((res) => {
        alert(res.data.msg);
        getdata();
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("loginid") == null) {
      navigate("/login");
    } else {
      navigate("/list");
    }
    getdata();
  }, []);

  return (
    <div id="img6">
      <br></br>
      <Navbar />

      <h2 className="list">EMPLOYEE LIST</h2>
      <div className="container row ">
        {data.map((item, index) => (
          <div key={index} className="col-md-3 mb-3 ms-2 me-5 mt-5">
            <div className="card " style={{ width: "18rem", height: "300px" }}>
              <div className="card-body">
                <h6>Employee Name : {item.name}</h6>
                <br></br>
                <h7>Employee Id :{item.empid}</h7>
                <br></br>
                <br></br>
                <h7>Employee Salary :{item.salary}</h7>
                <br></br>
                <br></br>
                <h7>Employee Designation :{item.designation}</h7>
                <br></br>
                <br></br>
                <button
                  onClick={() => editonclick(item._id)}
                  type="button"
                  className="btn btn-outline-success edit1 "
                >
                  Edit
                </button>
                <button
                  onClick={() => Deleteonclick(item._id)}
                  type="button"
                  className="btn btn-outline-danger delete1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
