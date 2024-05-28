import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './Homepage';
import Register from './Register';
import Login from './Login';
import Addemployee from './Addemployee';
import Form from './Form';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

function App() {
  return (
    <div>
        
       <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/addemploy' element={<Addemployee/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/edit/:empid' element={<Edit/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/profile' element={<Profile/>}/>



    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App