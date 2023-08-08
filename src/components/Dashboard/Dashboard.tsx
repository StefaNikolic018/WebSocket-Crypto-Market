/* eslint-disable no-extra-boolean-cast */
import React from 'react'

import useItems from './Table/useItems'

import Body from './Table/Body'
import TableWrapper from './Table/TableWrapper'

import PairI from './../../interfaces/pairs'

export default function Dashboard({ isFavorites = false }) {
  const { items, isReady } = useItems(isFavorites)

  return (
    <TableWrapper>
      <Body pairs={items as unknown as PairI[]} isReady={isReady} />
    </TableWrapper>
  )
}
