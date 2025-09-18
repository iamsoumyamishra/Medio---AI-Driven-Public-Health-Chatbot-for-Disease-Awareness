import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import FetchUser from './functions/FetchUser'
import { Routes, Route } from 'react-router'
import Login from './components/Login'

const App =  () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect( ()=> {

    const fetchUser = async () => {
      
      const authToken = localStorage.getItem('auth-token');

      if (authToken){
        
        const user = await FetchUser(authToken);
        setUser(user)
        setLoading(false)
        console.log(user,loading)
      } else {
        setLoading(false)
      }
      
    }

    setTimeout(fetchUser,3000)

    

  }, [])
  


  return (
    <div className="main w-full">

    <Routes>

        <Route index element={

          
          loading ? (
          <div>Loading...</div>
          ) : user && user.success ? (<div className="flex justify-between max-h-screen w-full">
            <Sidebar />
            <Chat />
            </div>): (<Login />)

          } />

    </Routes>
    </div>
  )
}

export default App