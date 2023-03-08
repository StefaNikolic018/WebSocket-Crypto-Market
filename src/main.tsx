/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/User/UserContext'
import { WebSocketContextProvider } from './context/WebSocket/WebSocketContextProvider'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <WebSocketContextProvider>
        <App />
      </WebSocketContextProvider>
    </UserContextProvider>
  </BrowserRouter>
)
