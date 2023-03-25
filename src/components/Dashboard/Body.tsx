/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { memo } from 'react'

import PairI from '../../interfaces/pairs'
import TableLoader from './TableLoader'

const Body = ({ pairs }: { pairs: PairI[] }) => {
  return (
    <tbody className="bg-white text-sm font-light text-gray-600 shadow-md ">
      {!!pairs.length ? pairs : <TableLoader />}
    </tbody>
  )
}

export default memo(Body)
