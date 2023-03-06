import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({
  children,
  isLoggedIn
}: {
  children: ReactNode
  isLoggedIn: boolean
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/authority" />
  }

  return <>{children}</>
}

export default ProtectedRoute
