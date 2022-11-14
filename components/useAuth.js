import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector(state => state.user)
  const [isAuthenticate, setIsAuthenticate] = useState(null)

    useEffect(() => {
      if(user !== null && user.accessToken !== "" && user.expiresIn > new Date().getTime()){
        setIsAuthenticate(true)
      } else {
        setIsAuthenticate(false)
      }
    },[user])

    return isAuthenticate
}

export default useAuth
