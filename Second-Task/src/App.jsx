import React, { useEffect, useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './Components/Firebase';
import Error from './Components/Pages/Error'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Navigate to='/home' /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
