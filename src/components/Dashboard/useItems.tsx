/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { useMemo } from 'react'

import Item from './Item'
import useWebsocket from '../../hooks/useWebsocket'
import { storageSelect } from '../../utils/storage'

import PairI from './../../interfaces/pairs'

export default function useItems(isFavorites = false) {
  const { isReady, pairs } = useWebsocket()
  let favorites: string[] | null = []

  if (isFavorites) {
    favorites = !!storageSelect('favorites')
      ? JSON.parse(storageSelect('favorites')!)
      : []
  }

  const items = useMemo(() => {
    let formattedPairs: PairI[] | JSX.Element[] = []

    if (isReady) {
      formattedPairs = isFavorites
        ? Object.values(pairs).filter((pair) =>
            favorites!.includes(pair.pair as never)
          )
        : Object.values(pairs).map((pair, ind) => (
            <Item key={ind} pair={pair} />
          ))
    }

    return isFavorites
      ? formattedPairs.map((pair, ind) => (
          <Item key={ind} pair={pair as PairI} />
        ))
      : formattedPairs
  }, [isReady, pairs])

  return items
}
