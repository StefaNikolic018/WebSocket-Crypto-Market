/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { memo } from 'react'

import PairI from './../../interfaces/pairs'

import ItemLink from './ItemLink'

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

const Item = ({ pair }: { pair: PairI }) => {
  return pair.data ? (
    <tr className="text-md border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-2 text-left font-bold md:px-6 ">
        <ItemLink pair={pair.pair} symbol={pair.symbol} />
      </td>
      <td className="py-3 px-2 text-left font-semibold md:px-6">
        {/* LAST PRICE */}
        {pair.data![6]}
      </td>
      <td
        className={`py-3 px-2 text-center font-semibold md:px-6 ${
          String(pair.data![4]).includes('-')
            ? 'text-red-400'
            : 'text-green-400'
        }`}
      >
        {/* DAILY CHANGE */}
        {pair.data![4]}
      </td>
      <td
        className={`py-3 px-2 text-center font-semibold md:px-6 ${
          String(pair.data![5]).includes('-')
            ? 'text-red-400'
            : 'text-green-400'
        }`}
      >
        {/* DAILY CHANGE PERCENT*/}
        {pair.data![5]}
      </td>
      <td className="py-3 px-2 text-center font-semibold md:px-6">
        {/* DAILY HIGH*/}
        {pair.data![8]}
      </td>
      <td className="py-3 px-2 text-center font-semibold md:px-6">
        {/* DAILY LOW*/}
        {pair.data![9]}
      </td>
    </tr>
  ) : (
    <></>
  )
}

export default memo(Item)
