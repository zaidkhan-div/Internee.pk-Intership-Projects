// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import useAuth from './useAuth'; 

// const ProtectedRoutes = () => {
//   const { user } = useAuth(); // Get the user state from the custom hook

//   return user ? <Outlet /> : <Navigate to='/' />;
// };

// export default ProtectedRoutes;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
