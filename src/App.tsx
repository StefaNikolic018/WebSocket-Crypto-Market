import React, { ReactElement } from 'react'
import Router from './components/Router'
import Navigation from './components/Navigation'

function App(): ReactElement {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navigation />
      <Router />
    </div>
  )
}

export default App
