// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext } from 'react'
import { WebSocketContext } from './WebSocketContextProvider'

export default function useWebSocketContext() {
  // data = {isReady: boolean, pairs: PairsObject}
  const data = useContext(WebSocketContext)
  return data
}
