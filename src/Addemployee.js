import React, { useEffect, useState } from "react";
import './Addemploy.css'
import Navbar from './Navbar'
import { Link,useNavigate} from 'react-router-dom'


function Addemployee() {

  let addemploy=useNavigate()


  function addemployonclick(){
     addemploy('/form')

     
  }
  useEffect(()=>{
    if(localStorage.getItem("loginid")==null){
      addemploy("/login")
    }else{
      addemploy("/addemploy")
    }
  
   },[])
  return (
    <div id='img4'>
<br></br>
      <Navbar/>
      <div className='add'>
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" fill="currentColor" className="bi bi-person-fill-add icon" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
      <button onClick={addemployonclick} type="button" className="btn btn-outline-primary addemploy"> ADD EMPLOYEE</button>
</div>

    </div>
  )
}

export default Addemployee