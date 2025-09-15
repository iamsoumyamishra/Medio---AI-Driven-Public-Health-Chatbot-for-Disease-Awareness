import React from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

const App = () => {
  return (
    <div className="main">
      <div className="flex">
      <Sidebar />
      <Chat />
      </div>
    </div>
  )
}

export default App