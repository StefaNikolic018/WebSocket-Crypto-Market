/* eslint-disable no-extra-boolean-cast */
import React, { useMemo } from 'react'
import useWebsocket from '../../hooks/useWebsocket'

import Body from '../Shared/Body'
import Item from '../Shared/Item'
import TableWrapper from '../Shared/TableWrapper'

type PairT = {
  id: number
  pair: string
  symbol: string
  data?: number[]
}

export default function index() {
  const { isReady, pairs } = useWebsocket()

  const items = useMemo(() => {
    const parsedPairs = isReady
      ? Object.values(pairs).map((pair, ind) => <Item key={ind} pair={pair} />)
      : []

    return parsedPairs
  }, [isReady, pairs])

  return (
    <TableWrapper>
      <Body pairs={items as unknown as PairT[]} />
    </TableWrapper>
  )
}
