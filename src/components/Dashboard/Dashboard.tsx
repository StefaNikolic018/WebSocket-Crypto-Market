/* eslint-disable no-extra-boolean-cast */
import React from 'react'

import Body from './Body'
import useItems from './useItems'
import TableWrapper from './TableWrapper'

import PairI from './../../interfaces/pairs'

export default function Dashboard({ isFavorites = false }) {
  const items = useItems(isFavorites)

  return (
    <TableWrapper>
      <Body pairs={items as unknown as PairI[]} />
    </TableWrapper>
  )
}
