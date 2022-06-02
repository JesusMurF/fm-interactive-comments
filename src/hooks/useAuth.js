import React, { useEffect } from 'react'

export const useAuth = ({ user }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  useEffect(() => {
    if (user.hasOwnProperty('username')) {
      setIsAuthenticated(true)
    }
  }, [user])

  return { isAuthenticated }
}
