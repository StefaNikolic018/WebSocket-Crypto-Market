/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router-dom'

type DataT = {
  symbol: string
  last: string
  daily: string | undefined
  dailyPercent: string | undefined
  high: string
  low: string
}
// NEEDED DATA
// Symbol, Last price, Daily Change, Daily Change Percent, Daily high, Daily low

// EXAMPLE DATA PASSED
// {id: 150727, pair: 'BTCUSD', symbol: 'tBTCUSD', data: Array(10)}
// data array
// [ 0 BID,
//   1 BID_SIZE,
//   2 ASK,
//   3 ASK_SIZE,
//   4 DAILY_CHANGE,
//   5 DAILY_CHANGE_RELATIVE,
//   6 LAST_PRICE,
//   7 VOLUME,
//   8 HIGH,
//   9 LOW
// ]

export default function Item({ pair }: { pair: DataT | undefined | any }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 text-md">
      <td className="py-3 px-6 text-left font-bold ">
        <Link
          to={`/details/${pair.pair}`}
          className="text-sky-700 hover:text-sky-900 transition-all duration-200"
        >
          {pair.symbol}
        </Link>
      </td>
      <td className="py-3 font-semibold px-6 text-left">{pair.data[6]}</td>
      <td
        className={`py-3 font-semibold px-6 text-center ${
          String(pair.data[4]).includes('-') ? 'text-red-400' : 'text-green-400'
        }`}
      >
        {pair.data[4]}
      </td>
      <td
        className={`py-3 font-semibold px-6 text-center ${
          String(pair.data[5]).includes('-') ? 'text-red-400' : 'text-green-400'
        }`}
      >
        {pair.data[5]}
      </td>
      <td className="py-3 font-semibold px-6 text-center">{pair.data[8]}</td>
      <td className="py-3 font-semibold px-6 text-center">{pair.data[9]}</td>
    </tr>
  )
}
