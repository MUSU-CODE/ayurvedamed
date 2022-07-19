import React, { useState } from 'react'
import AuthContext from './AuthContext'
function AuthProvider(props) {
    const [auth,setAuth]=useState({});
  return (
    <AuthContext.Provider value={{auth,setAuth}}>
        {props.children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;
