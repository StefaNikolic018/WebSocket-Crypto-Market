import React, { ReactElement } from 'react'
import Router from './components/Router'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/User/UserContext'

function App(): ReactElement {
  return (
    <div className="flex h-screen w-screen flex-col">
      <BrowserRouter>
        <UserContextProvider>
          <Navigation />
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
