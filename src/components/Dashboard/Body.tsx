/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { memo } from 'react'
import Loader from '../Loader'

import PairI from '../../interfaces/pairs'

const Body = ({ pairs }: { pairs: PairI[] }) => {
  return (
    <tbody className="bg-white text-sm font-light text-gray-600 shadow-md ">
      {!!pairs.length ? (
        pairs
      ) : (
        <tr>
          <td
            className="animate-pulse py-3 text-center text-xl font-bold"
            colSpan={6}
          >
            <Loader />
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default memo(Body)
