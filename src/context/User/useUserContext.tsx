import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function useUserContext() {
  const loggedState = useContext(UserContext)
  return { ...loggedState }
}
