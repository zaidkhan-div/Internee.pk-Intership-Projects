import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
