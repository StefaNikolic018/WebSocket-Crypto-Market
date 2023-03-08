/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-boolean-cast */
import React, { useState, useEffect, createContext, ReactNode } from 'react'
import useFetchSymbols from '../../hooks/useFetchSymbols'

export const WebSocketContext = createContext<any>({
  isReady: false,
  pairs: undefined
})

export const WebSocketContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [pairs, setPairs] = useState<any>(undefined)
  const [isReady, setIsReady] = useState(false)

  const symbols = useFetchSymbols()

  useEffect(() => {
    if (!!symbols.length) {
      const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')

      const pairsArr = { ...pairs }

      socket.onopen = (ev) => {
        console.log('opened: ', ev)
        symbols.forEach((symbol: string) => {
          const symbolUpperCase = symbol.toUpperCase()
          socket.send(
            JSON.stringify({
              event: 'subscribe',
              channel: 'ticker',
              symbol: `t${symbolUpperCase}`
            })
          )
        })
      }

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        // console.log(data)

        // Subscribed event that is happening before the updates
        if (data.event && data.event === 'subscribed') {
          pairsArr[data.chanId] = {
            ...pairsArr[data.chanId],
            id: data.chanId,
            pair: data.pair,
            symbol: data.symbol
          }
        } else if (Array.isArray(data) && Array.isArray(data[1])) {
          // Updating events
          pairsArr[data[0]] = {
            ...pairsArr[data[0]],
            data: data[1]
          }
          setIsReady(true)
        }

        setPairs((pairs: any) => {
          return { ...pairs, ...pairsArr }
        })
      }

      return () => {
        socket.close()
      }
    }
  }, [symbols.length])

  return (
    <WebSocketContext.Provider
      value={{ isReady: isReady, pairs: JSON.stringify(pairs) }}
    >
      {children}
    </WebSocketContext.Provider>
  )
}
