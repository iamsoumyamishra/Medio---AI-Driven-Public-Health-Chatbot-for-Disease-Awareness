import React, { useState, useEffect, useContext } from 'react'
import Sidebar from './components/Sidebar'
import FetchUser from './functions/FetchUser'
import { Routes, Route, Navigate } from 'react-router'
import Login from './components/Login'
import SignupPage from './components/Signup'
import Loading from './components/Loading'
import {LoginContext} from './context/Logincontext'

const App = () => {

  const {user, setUser} = useContext(LoginContext);
  const [loading, setLoading] = useState(true);



useEffect(() => {
  const token = localStorage.getItem('auth-token');
  const fetchUser = async (token) => {

    const data = await FetchUser(token);

    setUser(data);
    setLoading(false); 

  }
  if (token) {

    setLoading(true);
    fetchUser(token);

  } else {

    setLoading(false);
    
  }
}, []);



  return (
    <div className="main w-full">
      <Routes>
        <Route index element={loading ? (<Loading />) : user && user.success ? (<Sidebar />) : (<Navigate to={'/log-in'} />)} />
        
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/log-in' element={<Login />} />

      </Routes>
    </div>
  )
}

export default App