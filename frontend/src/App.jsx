import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import FetchUser from './functions/FetchUser'
import { Routes, Route, Navigate } from 'react-router'
import Login from './components/Login'
import { MenuIcon, XIcon } from 'lucide-react'
import SignupPage from './components/Signup'
import Loading from './components/Loading'

const App = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchUser = async () => {

      const authToken = localStorage.getItem('auth-token');

      if (authToken) {

        const user = await FetchUser(authToken);
        setUser(user)
        setLoading(false)
        console.log(user, loading)
      } else {
        setLoading(false)
      }

    }

    setTimeout(fetchUser, 3000)



  }, [user])



  return (
    <div className="main w-full">
      <Routes>
        <Route index element={loading ? (<Loading />) : user && user.success ? (
            <Sidebar />
          ) : (
          <Navigate to={'/log-in'} />
        )

        } />
        
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/log-in' element={<Login />} />

      </Routes>
    </div>
  )
}

export default App