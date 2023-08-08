/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { memo, useMemo } from 'react'

import NoData from './NoData'

import PairI from '../../../interfaces/pairs'
import TableLoader from './TableLoader'

const Body = ({ pairs, isReady }: { pairs: PairI[]; isReady: boolean }) => {
  const body = useMemo(() => {
    return !isReady ? <TableLoader /> : !!pairs.length ? pairs : <NoData />
  }, [pairs.length, isReady])

  return (
    <tbody className="bg-white text-sm font-light text-gray-600 shadow-md ">
      {body}
    </tbody>
  )
}

export default memo(Body)
