/* eslint-disable no-extra-boolean-cast */
import React, { useMemo } from 'react'
import useFavorites from '../../hooks/useFavorites'
import useWebsocket from '../../hooks/useWebsocket'

import Body from '../Shared/Body'
import Item from '../Shared/Item'
import TableWrapper from '../Shared/TableWrapper'

import PairI from '../../interfaces/pairs'

export default function index() {
  const { isReady, pairs } = useWebsocket()
  const { favorites } = useFavorites()

  const items = useMemo(() => {
    const parsedPairs = isReady
      ? Object.values(pairs).filter((pair) =>
          favorites.includes(pair.pair as never)
        )
      : []

    return parsedPairs.map((pair, ind) => <Item key={ind} pair={pair} />)
  }, [isReady, pairs])

  return (
    <TableWrapper>
      <Body pairs={items as unknown as PairI[]} />
    </TableWrapper>
  )
}
