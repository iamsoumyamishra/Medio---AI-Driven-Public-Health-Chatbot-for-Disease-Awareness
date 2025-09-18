import React, { useState, createContext } from 'react'


export const LoginContext = createContext();


const LoginProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null)

  return (
    <LoginContext.Provider value={{user, isLoggedIn}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;