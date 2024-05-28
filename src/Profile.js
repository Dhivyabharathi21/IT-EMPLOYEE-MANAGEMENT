import React, { useEffect, useState } from "react";
import "./Profile.css"
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Profile() {

  const [employ,setEmploy]=useState({})

 function profilelog(){ 
  const loginid=localStorage.getItem("loginid")

  axios.get(`http://localhost:4001/findid/`+loginid)
  
  .then((res) => {
    console.log(res.data.data,"kkk");
    setEmploy(res.data.data)
  })
  .catch((err) => {
    alert("invalid");
    console.log(err);
  });
 }
 const Navigate=useNavigate()

 useEffect(()=>{
  if(localStorage.getItem("loginid")==null){
    Navigate("/login")
  }else{
    Navigate("/profile")
  }
  profilelog() 
 },[])
  return (
    
    <div id='img7' className='text-center pt-5 '>
      <Navbar/>
       <div id='box' >
        <h2>PROFILE</h2>
  <div className="card-body ">
    <h4 id='detail'>{employ.name}</h4>
    <h5>{employ.email}</h5>
    <h5>{employ.password}</h5>
  </div>
</div>
    </div>
  )
}

export default Profile