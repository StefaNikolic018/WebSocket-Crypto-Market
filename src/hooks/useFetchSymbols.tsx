// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// API: https://api.bitfinex.com/v1/symbols
const options = {
  method: 'GET',
  url: '/v1/symbols',
  headers: { accept: 'application/json' }
}

export default function useFetchSymbols() {
  const [symbols, setSymbols] = useState([])

  const fetchSymbols = async () => {
    try {
      const res = await axios.request(options)
      if (res.status === 200) {
        setSymbols(res.data.slice(0, 5))
      }
    } catch (error) {
      console.log('Error fetching symbols: ', error)
    }
  }

  useEffect(() => {
    fetchSymbols()
  }, [])

  return symbols
}
