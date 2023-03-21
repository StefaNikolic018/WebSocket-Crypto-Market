/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { memo } from 'react'
import Loader from '../Loader'

type PairT = {
  id: number
  pair: string
  symbol: string
  data?: number[]
}

const Body = ({ isReady, pairs }: { isReady: boolean; pairs: PairT[] }) => {
  return (
    <tbody className="bg-white text-sm font-light text-gray-600 shadow-md ">
      {!isReady ? (
        <tr>
          <td
            className="animate-pulse py-3 text-center text-xl font-bold"
            colSpan={6}
          >
            <Loader />
          </td>
        </tr>
      ) : (
        pairs
      )}
    </tbody>
  )
}

export default memo(Body)
