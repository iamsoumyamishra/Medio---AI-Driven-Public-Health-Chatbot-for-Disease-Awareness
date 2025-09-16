import React from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

const App = () => {
  return (
    <div className="main">
      
      <div className="flex justify-between max-h-screen">
      <Sidebar />
      <Chat />
      </div>
    </div>
  )
}

export default App