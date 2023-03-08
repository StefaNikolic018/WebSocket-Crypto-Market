/* eslint-disable no-extra-boolean-cast */
import React, {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useRef
} from 'react'
import useFetchSymbols from '../../hooks/useFetchSymbols'

type PairT = {
  id: number
  pair: string
  symbol: string
  data?: number[]
}

type PairsT = {
  [key: string]: PairT
}

type WebSocketContextT = {
  isReady: boolean
  pairs: undefined | string | PairsT
}

export const WebSocketContext = createContext<WebSocketContextT>({
  isReady: false,
  pairs: undefined
})

export const WebSocketContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [pairs, setPairs] = useState<PairsT>({} as PairsT)
  const [isReady, setIsReady] = useState(false)
  // Count that we use as a constraint for checking pairs readiness
  const checkCount = useRef(0)

  // Fetching first 5 symbols
  const symbols = useFetchSymbols()

  // Waiting for pairs object to be fully populated with data
  useEffect(() => {
    if (pairs && checkCount.current === 0) {
      const keys = Object.keys(pairs)
      if (keys.every((k) => !!pairs[k].data)) {
        checkCount.current = 1
        setIsReady(true)
      }
    }
  }, [pairs])

  // Opening socket and fetching data
  useEffect(() => {
    if (!!symbols.length) {
      const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')

      // Destructuring for new reference
      const pairsArr = { ...pairs }

      socket.onopen = (ev) => {
        console.log('Socket opened: ', ev)
        // Subscribing to each symbol that we got from REST api
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
        // Subscribed event that is happening before the updates
        if (data.event && data.event === 'subscribed') {
          // Creating and populating objects for each pair
          pairsArr[data.chanId] = {
            ...pairsArr[data.chanId],
            id: data.chanId,
            pair: data.pair,
            symbol: data.symbol
          }
          // Updating events
        } else if (Array.isArray(data) && Array.isArray(data[1])) {
          // Populating objects for each pair with new data
          pairsArr[data[0]] = {
            ...pairsArr[data[0]],
            data: data[1]
          }
        }

        setPairs((pairs: PairsT) => {
          return { ...pairs, ...pairsArr }
        })
      }

      return () => {
        socket.close()
      }
    }
  }, [symbols.length])

  return (
    // Parsing pairs object because of the dependency array
    <WebSocketContext.Provider
      value={{ isReady: isReady, pairs: JSON.stringify(pairs) }}
    >
      {children}
    </WebSocketContext.Provider>
  )
}
