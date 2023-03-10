/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction
} from 'react'
import { storageInsert, storageSelect } from '../../utils/storage'

export const UserContext = createContext<{
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}>({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
})

export default function UserContextProvider({
  children
}: {
  children: ReactNode
}) {
  // Logged in status from local storage
  const status = useMemo(
    () => !!storageSelect('status'),
    [storageSelect('status')]
  )

  const [isLoggedIn, setIsLoggedIn] = useState(status)

  useEffect(() => {
    // Saving login status in local storage
    if (isLoggedIn) storageInsert('status', '1')
  }, [isLoggedIn])

  return (
    <UserContext.Provider
      value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  )
}
