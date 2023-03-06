import React, { ReactElement } from 'react'
import Router from './components/Router'
import Navigation from './components/Navigation'

function App(): ReactElement {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navigation />
      <Router />
    </div>
  )
}

export default App
