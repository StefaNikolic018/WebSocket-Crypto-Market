/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { useState, useEffect, useRef } from 'react'
import useFetchSymbols from './useFetchSymbols'

import PairI from './../interfaces/pairs'

type PairsT = {
  [key: string]: PairI
}

export default function useWebsocket() {
  const [pairs, setPairs] = useState<PairsT>({} as PairsT)
  const [isReady, setIsReady] = useState(false)

  const websocket = useRef<null | WebSocket>(null)

  // Fetching first 5 symbols
  const symbols = useFetchSymbols()

  // Waiting for pairs object to be fully populated with data
  useEffect(() => {
    if (Object.entries(pairs).length === 5 && !isReady) {
      const values = Object.values(pairs)
      if (values.every((k: PairI) => !!k.data)) {
        setIsReady(true)
      }
    }
  }, [pairs])

  // Opening socket and fetching data
  useEffect(() => {
    if (!!symbols.length) {
      websocket.current = new WebSocket('wss://api-pub.bitfinex.com/ws/2')

      // Destructuring for new reference
      const pairsArr = { ...pairs }

      websocket.current.onopen = (ev) => {
        console.log('Socket opened: ', ev)
        // Subscribing to each symbol that we got from REST api
        symbols.forEach((symbol: string) => {
          const symbolUpperCase = symbol.toUpperCase()
          websocket.current!.send(
            JSON.stringify({
              event: 'subscribe',
              channel: 'ticker',
              symbol: `t${symbolUpperCase}`
            })
          )
        })
      }

      websocket.current.onmessage = (event) => {
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
        websocket.current!.close()
      }
    }
  }, [symbols.length])

  return { pairs, isReady }
}
