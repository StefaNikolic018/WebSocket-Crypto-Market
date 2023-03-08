/* eslint-disable no-extra-boolean-cast */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'

import axios from 'axios'

// API: https://api.bitfinex.com/v1/pubticker/symbol

type ItemT = {
  ask: string
  bid: string
  high: string
  last_price: string
  low: string
  mid: string
  timestamp: string
  volume: string
}

export default function useFetchSpecific(symbol: string | undefined) {
  const [item, setItem] = useState<ItemT | undefined>(undefined)

  const fetchSpecific = async () => {
    try {
      const res = await axios.request({
        method: 'GET',
        url: `/v1/pubticker/${symbol}`,
        headers: { accept: 'application/json' }
      })
      if (res.status === 200) {
        setItem(res.data)
      }
    } catch (error) {
      console.log('Error fetching item: ', error)
    }
  }

  useEffect(() => {
    if (!!symbol) {
      fetchSpecific()
    }
  }, [symbol])

  return item
}
