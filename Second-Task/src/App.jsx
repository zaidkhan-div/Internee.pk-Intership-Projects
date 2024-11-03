// import React, { useEffect, useState } from 'react';
// import { Navigate, Routes, Route } from 'react-router-dom';
// import Register from './Components/Pages/Register';
// import Login from './Components/Pages/Login';
// import Home from './Components/Pages/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { auth } from './Components/Firebase';
// import Error from './Components/Pages/Error'
// import Protected from './Components/Pages/ProtectedRoutes';

// const App = () => {
//   // const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   auth.onAuthStateChanged(user => {
//   //     setUser(user);
//   //   });
//   // }, []); user ? <Navigate to='/home' /> :

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route element={<Protected />}>
//           <Route path="/home" element={<Home />} />
//         </Route>
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Register from './Components/Pages/Register';
// import Login from './Components/Pages/Login';
// import Home from './Components/Pages/Home';
// import Error from './Components/Pages/Error';
// import Protected from './Components/Pages/ProtectedRoutes';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={<Protected><Home /></Protected>} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import ProtectedRoutes from './Components/Pages/ProtectedRoutes';
import { auth } from './Components/Firebase';
import Error from './Components/Pages/Error';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Error Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;

